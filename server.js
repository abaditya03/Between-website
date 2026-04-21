import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Store active 3D objects and bot state
const activeUsers = new Map();
const botState = {
  isActive: true,
  position: { x: 0, y: 2, z: 0 },
  message: 'Welcome to 3D Between'
};

// REST API Endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.get('/api/bot-state', (req, res) => {
  res.json(botState);
});

app.post('/api/bot-message', express.json(), (req, res) => {
  const { message } = req.body;
  botState.message = message || 'Default message';
  io.emit('bot-update', botState);
  res.json({ success: true, botState });
});

app.get('/api/users', (req, res) => {
  const users = Array.from(activeUsers.values());
  res.json({ count: users.length, users });
});

// Socket.io Events
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Store user with their 3D position
  socket.on('user-join', (userData) => {
    const userObj = {
      id: socket.id,
      name: userData.name || `User-${socket.id.slice(0, 5)}`,
      position: userData.position || { x: 0, y: 0, z: 0 },
      rotation: userData.rotation || { x: 0, y: 0, z: 0 },
      color: userData.color || Math.random().toString(16).slice(2, 8)
    };
    activeUsers.set(socket.id, userObj);
    
    // Broadcast to all users
    io.emit('user-joined', userObj);
    socket.emit('active-users', Array.from(activeUsers.values()));
    
    console.log(`${userObj.name} joined. Total users: ${activeUsers.size}`);
  });

  // Handle real-time 3D position updates
  socket.on('position-update', (data) => {
    const user = activeUsers.get(socket.id);
    if (user) {
      user.position = data.position;
      user.rotation = data.rotation;
      socket.broadcast.emit('user-position', {
        id: socket.id,
        position: data.position,
        rotation: data.rotation
      });
    }
  });

  // Handle user animations
  socket.on('animation', (data) => {
    socket.broadcast.emit('user-animation', {
      id: socket.id,
      animation: data.animation,
      duration: data.duration
    });
  });

  // Handle chat messages
  socket.on('chat-message', (data) => {
    io.emit('chat-broadcast', {
      userId: socket.id,
      userName: activeUsers.get(socket.id)?.name || 'Unknown',
      message: data.message,
      timestamp: new Date().toISOString()
    });
  });

  // Handle bot interaction
  socket.on('bot-interact', (data) => {
    botState.position = data.targetPosition || botState.position;
    botState.message = data.message || botState.message;
    io.emit('bot-moved', botState);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    const user = activeUsers.get(socket.id);
    if (user) {
      activeUsers.delete(socket.id);
      io.emit('user-disconnected', { id: socket.id, name: user.name });
      console.log(`${user.name} disconnected. Remaining users: ${activeUsers.size}`);
    }
  });

  // Error handling
  socket.on('error', (error) => {
    console.error(`Socket error for ${socket.id}:`, error);
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 3D Website Server running on http://localhost:${PORT}`);
  console.log(`📊 Active users: ${activeUsers.size}`);
});

# Between - Feel Each Other | Website

A stunning, modern website for the Between emotional presence platform built with Next.js, React, Tailwind CSS, and Framer Motion.

## 🎨 Design Features

- **Dark Glassmorphism Theme**: Beautiful glass-effect cards with frosted glass borders
- **Color Palette**:
  - Vibrant Deep Magenta: `#D81B60` (Primary)
  - Soft Rose Pink: `#F48FB1` (Secondary)
  - Glowing Indigo-Purple: `#8C77F5` (Accent)
  - Deepest Navy: `#0A0E1A` (Background)
  - Solid White: `#FFFFFF` (Text)

- **Typography**:
  - Headings: Sora (emotional, modern)
  - Body: DM Sans (clean, professional)

- **Animations**:
  - Smooth page transitions with Framer Motion
  - Hover effects on interactive elements
  - Parallax scrolling effects
  - Floating animations
  - Gradient shifts
  - Pulse and glow animations

## 📱 Sections

1. **Navigation**: Sticky header with mobile-responsive menu
2. **Hero**: Animated heartbeat, CTA buttons, and floating stat cards
3. **Features**: 6 feature cards with hover animations
4. **Safety**: Emergency SOS system showcase with benefits
5. **How It Works**: 4-step onboarding flow
6. **Pricing**: 3-tier subscription model
7. **Footer**: Links, social media, contact info

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd between-website

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## 📦 Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 10
- **Icons**: React Icons
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 🎯 Features Implemented

✅ Fully responsive design (mobile, tablet, desktop)
✅ Dark theme with glassmorphism
✅ Smooth animations and transitions
✅ SEO optimized
✅ Fast performance (Core Web Vitals optimized)
✅ Accessibility compliant
✅ Mobile-first approach
✅ Interactive components
✅ Pricing calculator ready
✅ Newsletter signup ready

## 📐 Component Structure

```
app/
├── layout.tsx           # Root layout
├── page.tsx            # Homepage
├── globals.css         # Global styles
components/
├── Navigation.tsx      # Top navigation
├── Hero.tsx           # Hero section
├── Features.tsx       # Features showcase
├── Safety.tsx         # Safety features
├── HowItWorks.tsx    # Onboarding steps
├── Pricing.tsx       # Pricing tiers
└── Footer.tsx        # Footer
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color palette:

```js
colors: {
  'between': {
    'magenta': '#D81B60',
    'pink': '#F48FB1',
    'indigo': '#8C77F5',
    // ... more colors
  }
}
```

### Fonts
Fonts are loaded from Google Fonts in `app/globals.css` and configured in `tailwind.config.js`

### Animations
Customize animations in `tailwind.config.js` under `keyframes` and `animation` sections.

## 📊 Performance

- Optimized images and assets
- Code splitting with Next.js
- CSS-in-JS with Tailwind (no extra CSS files)
- Lazy loading for components below the fold
- Next.js Image optimization ready

## 🔐 Security

- No sensitive data stored on frontend
- Ready for API integration
- CSRF protection ready
- Content Security Policy compatible

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy with one click

```bash
vercel deploy
```

### Other Platforms

- **Netlify**: Drag and drop or connect GitHub
- **AWS Amplify**: CLI deployment
- **Docker**: Create Dockerfile for containerization

## 📱 Mobile Optimization

- Touch-friendly buttons (min 48px)
- Optimized for small screens
- Fast loading on 4G/5G
- Mobile-first CSS approach
- Swipe-friendly navigation

## 🔗 API Integration Points

Ready to integrate with:
- **Download App**: Connect to app stores
- **Newsletter**: Connect to email service
- **Pricing**: Stripe/Razorpay integration
- **Contact Form**: Send to backend
- **Analytics**: Google Analytics, Mixpanel

## 📈 Analytics

Add tracking to:
- Page views
- Button clicks
- Form submissions
- User scroll depth
- Time on page

## 🛠️ Development

### Code Style
- ESLint configured
- Prettier ready
- TypeScript strict mode

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## 📝 License

Licensed for Between - Feel Each Other

## 🤝 Contributing

1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

## 📞 Support

- Email: hello@between.app
- Website: between.app
- Phone: +91 98765 43210

## 🚀 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Blog section
- [ ] User testimonials carousel
- [ ] Live chat support
- [ ] Dashboard preview
- [ ] Video demo embed
- [ ] Community section

---

Made with ♡ for Between - Feel Each Other

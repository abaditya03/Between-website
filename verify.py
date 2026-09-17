import os
import glob
from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Using file protocol since it's a static HTML file
    page.goto('file:///app/index.html')

    # Wait for initial load and pure source to be visible
    page.wait_for_timeout(2000)

    # Scroll to demonstrate the app
    page.mouse.wheel(0, 500)
    page.wait_for_timeout(1000)

    # Take screenshot
    page.screenshot(path="/app/screenshot.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    os.makedirs("/app/videos", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir="/app/videos")
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()

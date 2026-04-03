#!/usr/bin/env python3
"""
Script to capture full-page screenshots with extended wait time and element waiting
"""

from playwright.sync_api import sync_playwright
import time
import os

# Pages to capture with their unique selectors to wait for
PAGES_TO_CAPTURE = [
    {"path": "/charity-programs", "filename": "original_charity.png", "selector": "h3"},
    {"path": "/contact", "filename": "original_contact.png", "selector": "form"},
    {"path": "/global-initiatives", "filename": "original_global_initiatives.png", "selector": "h3"},
    {"path": "/global-presence", "filename": "original_global_presence.png", "selector": "h3"},
    {"path": "/leadership", "filename": "original_leadership.png", "selector": "h3"},
]

BASE_URL = "https://preview-chat-3d427b62-baf3-4aa8-8f01-6327f01b8c26.space.z.ai"
OUTPUT_DIR = "/home/z/my-project/download"

def capture_screenshots():
    # Ensure output directory exists
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 1920, 'height': 1080}
        )
        page = context.new_page()
        
        for i, page_info in enumerate(PAGES_TO_CAPTURE):
            url = f"{BASE_URL}{page_info['path']}"
            output_path = f"{OUTPUT_DIR}/{page_info['filename']}"
            
            print(f"[{i+1}/{len(PAGES_TO_CAPTURE)}] Capturing: {page_info['path']}")
            
            try:
                # Navigate to the page
                page.goto(url, wait_until="domcontentloaded", timeout=90000)
                
                # Wait for the specific selector to appear
                try:
                    page.wait_for_selector(page_info['selector'], timeout=15000)
                except:
                    print(f"    ! Selector not found, waiting for content...")
                    time.sleep(3)
                
                # Extra wait for any animations
                time.sleep(2)
                
                # Scroll to trigger lazy-loaded content
                for _ in range(3):
                    page.evaluate("window.scrollBy(0, window.innerHeight)")
                    time.sleep(0.5)
                
                # Scroll back to top
                page.evaluate("window.scrollTo(0, 0)")
                time.sleep(1)
                
                # Capture full-page screenshot
                page.screenshot(path=output_path, full_page=True)
                
                # Get file size
                file_size = os.path.getsize(output_path)
                print(f"    ✓ Saved: {page_info['filename']} ({file_size} bytes)")
            except Exception as e:
                print(f"    ✗ Error capturing {page_info['path']}: {e}")
        
        browser.close()
        print(f"\nAll screenshots saved to: {OUTPUT_DIR}")

if __name__ == "__main__":
    capture_screenshots()

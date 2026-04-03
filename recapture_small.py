#!/usr/bin/env python3
"""
Script to capture full-page screenshots with extended wait time for slow-loading pages
"""

from playwright.sync_api import sync_playwright
import time
import os

# Pages that might need extra time to load
PAGES_TO_RECAPTURE = [
    {"path": "/charity-programs", "filename": "original_charity.png"},
    {"path": "/contact", "filename": "original_contact.png"},
    {"path": "/global-initiatives", "filename": "original_global_initiatives.png"},
    {"path": "/global-presence", "filename": "original_global_presence.png"},
    {"path": "/leadership", "filename": "original_leadership.png"},
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
        
        for i, page_info in enumerate(PAGES_TO_RECAPTURE):
            url = f"{BASE_URL}{page_info['path']}"
            output_path = f"{OUTPUT_DIR}/{page_info['filename']}"
            
            print(f"[{i+1}/{len(PAGES_TO_RECAPTURE)}] Capturing: {page_info['path']}")
            
            try:
                # Navigate to the page with extended timeout
                page.goto(url, wait_until="networkidle", timeout=90000)
                # Extended wait for animations and lazy-loaded content
                time.sleep(5)
                
                # Capture full-page screenshot
                page.screenshot(path=output_path, full_page=True)
                print(f"    ✓ Saved: {page_info['filename']}")
            except Exception as e:
                print(f"    ✗ Error capturing {page_info['path']}: {e}")
        
        browser.close()
        print(f"\nAll screenshots saved to: {OUTPUT_DIR}")

if __name__ == "__main__":
    capture_screenshots()

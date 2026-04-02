#!/usr/bin/env python3
"""
Script to capture full-page screenshots of all 12 inner pages from the Illuminati website
"""

from playwright.sync_api import sync_playwright
import time
import os

# Define all pages to capture
PAGES = [
    {"path": "/who-we-are", "filename": "original_who_we_are.png"},
    {"path": "/our-mission", "filename": "original_our_mission.png"},
    {"path": "/tenets-and-purpose", "filename": "original_tenets.png"},
    {"path": "/our-history", "filename": "original_history.png"},
    {"path": "/membership-rewards", "filename": "original_membership_rewards.png"},
    {"path": "/testimonials", "filename": "original_testimonials.png"},
    {"path": "/global-initiatives", "filename": "original_global_initiatives.png"},
    {"path": "/charity-programs", "filename": "original_charity.png"},
    {"path": "/faqs", "filename": "original_faqs.png"},
    {"path": "/contact", "filename": "original_contact.png"},
    {"path": "/leadership", "filename": "original_leadership.png"},
    {"path": "/global-presence", "filename": "original_global_presence.png"},
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
        
        for i, page_info in enumerate(PAGES):
            url = f"{BASE_URL}{page_info['path']}"
            output_path = f"{OUTPUT_DIR}/{page_info['filename']}"
            
            print(f"[{i+1}/{len(PAGES)}] Capturing: {page_info['path']}")
            
            try:
                # Navigate to the page
                page.goto(url, wait_until="networkidle", timeout=60000)
                # Wait for animations and lazy-loaded content
                time.sleep(3)
                
                # Capture full-page screenshot
                page.screenshot(path=output_path, full_page=True)
                print(f"    ✓ Saved: {page_info['filename']}")
            except Exception as e:
                print(f"    ✗ Error capturing {page_info['path']}: {e}")
        
        browser.close()
        print(f"\nAll screenshots saved to: {OUTPUT_DIR}")

if __name__ == "__main__":
    capture_screenshots()

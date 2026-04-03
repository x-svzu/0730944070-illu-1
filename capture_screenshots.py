#!/usr/bin/env python3
"""
Script to capture screenshots from the Illuminati website
"""

from playwright.sync_api import sync_playwright
import time

def capture_screenshots():
    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 1920, 'height': 1080}
        )
        page = context.new_page()
        
        base_url = "https://preview-chat-3d427b62-baf3-4aa8-8f01-6327f01b8c26.space.z.ai"
        
        # 1. Navigate to Who We Are page
        print("Navigating to Who We Are page...")
        page.goto(f"{base_url}/who-we-are", wait_until="networkidle")
        time.sleep(2)
        page.screenshot(path="/home/z/my-project/download/original_who_we_are.png", full_page=True)
        print("Screenshot saved: original_who_we_are.png")
        
        # 2. Navigate to Our Mission page
        print("Navigating to Our Mission page...")
        page.goto(f"{base_url}/our-mission", wait_until="networkidle")
        time.sleep(2)
        page.screenshot(path="/home/z/my-project/download/original_our_mission.png", full_page=True)
        print("Screenshot saved: original_our_mission.png")
        
        # 3. Navigate to Membership page
        print("Navigating to Membership page...")
        page.goto(f"{base_url}/membership", wait_until="networkidle")
        time.sleep(2)
        page.screenshot(path="/home/z/my-project/download/original_membership.png", full_page=True)
        print("Screenshot saved: original_membership.png")
        
        browser.close()
        print("All screenshots captured successfully!")

if __name__ == "__main__":
    capture_screenshots()

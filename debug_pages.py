#!/usr/bin/env python3
"""
Debug script to check what's on the pages
"""

from playwright.sync_api import sync_playwright
import time

BASE_URL = "https://preview-chat-3d427b62-baf3-4aa8-8f01-6327f01b8c26.space.z.ai"

def debug_pages():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1920, 'height': 1080})
        page = context.new_page()
        
        test_pages = [
            "/charity-programs",
            "/contact",
            "/global-initiatives",
            "/who-we-are",  # This one works
        ]
        
        for path in test_pages:
            url = f"{BASE_URL}{path}"
            print(f"\n{'='*60}")
            print(f"Debugging: {path}")
            print(f"{'='*60}")
            
            try:
                page.goto(url, wait_until="networkidle", timeout=60000)
                time.sleep(3)
                
                # Get page title
                title = page.title()
                print(f"Page title: {title}")
                
                # Get page content length
                content = page.content()
                print(f"Content length: {len(content)} characters")
                
                # Check for error indicators
                body_text = page.locator("body").inner_text()
                print(f"Body text preview: {body_text[:500]}...")
                
                # Check for specific elements
                h1_count = page.locator("h1").count()
                h2_count = page.locator("h2").count()
                h3_count = page.locator("h3").count()
                print(f"H1: {h1_count}, H2: {h2_count}, H3: {h3_count}")
                
            except Exception as e:
                print(f"Error: {e}")
        
        browser.close()

if __name__ == "__main__":
    debug_pages()

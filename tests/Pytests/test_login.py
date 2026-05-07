from playwright.sync_api import sync_playwright
from pages.Pytest_Pages.LoginPage import LoginPage


def test_valid_login() -> None:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        page = browser.new_page()

        login_page = LoginPage(page)
        login_page.navigate()
        login_page.verify_login_visible()
        login_page.login("bg@gmail.com", "testbg")
        login_page.verify_login_success()

        browser.close()

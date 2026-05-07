from playwright.sync_api import Page, expect


class LoginPage:
    def __init__(self, page: Page):
        self.page = page
        self.email_input = page.locator('[data-qa="login-email"]')
        self.password_input = page.locator('[data-qa="login-password"]')
        self.login_button = page.locator('[data-qa="login-button"]')
        self.logout_link = page.get_by_role('link', name='Logout')

    def navigate(self) -> None:
        self.page.goto("https://automationexercise.com/login")

    def verify_login_visible(self) -> None:
        expect(self.page.locator('text=Login to your account')).to_be_visible()

    def enter_email(self, email: str) -> None:
        self.email_input.fill(email)

    def enter_password(self, password: str) -> None:
        self.password_input.fill(password)

    def click_login(self) -> None:
        self.login_button.click()

    def login(self, email: str, password: str) -> None:
        self.enter_email(email)
        self.enter_password(password)
        self.click_login()

    def verify_login_success(self) -> None:
        expect(self.logout_link).to_be_visible()

    def logout(self) -> None:
        self.logout_link.click()
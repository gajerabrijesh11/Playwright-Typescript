import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignupPage } from '../pages/SignupPage';
import { AccountInfoPage } from '../pages/AccountInfoPage';
import { AccountCreatedPage } from '../pages/AccountCreatedPage';
import { userData } from '../test-data/user';

test('Register User Test', async ({ page }) => {

  const home = new HomePage(page);
  const signup = new SignupPage(page);
  const accountInfo = new AccountInfoPage(page);
  const accountCreated = new AccountCreatedPage(page);

  
  await home.navigate();
  await home.verifyHomePageVisible();

  await home.clickSignupLogin();

  await signup.verifySignupVisible();
  await signup.enterNameEmail(userData.name, userData.email);
  await signup.clickSignup();

  await accountInfo.verifyAccountInfoVisible();
  await accountInfo.fillAccountDetails(userData.password);
  await accountInfo.selectCheckboxes();
  await accountInfo.fillAddressDetails();
  await accountInfo.clickCreateAccount();

  await accountCreated.verifyAccountCreated();
  await accountCreated.clickContinue();

  await home.verifyLoggedIn('test');

  await home.clickDeleteAccount();

  await accountCreated.verifyAccountDeleted();
  await accountCreated.clickContinue();
});
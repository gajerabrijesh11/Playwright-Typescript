// correct login details email: bg@gmail.com password: testbg *DO NOT DELETE*


import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignupPage } from '../pages/SignupPage';
import { LoginInfoPage } from '../pages/LoginPage';
import { userData } from '../test-data/user';

test('Login Fail Test', async ({ page }) => {

  const home = new HomePage(page);
  const signup = new SignupPage(page);
  const loginfail = new LoginInfoPage(page);


  await home.navigate();
  await home.verifyHomePageVisible();
  await home.clickSignupLogin();
  await signup.verifyLoginVisible();
  await signup.emailpassword(userData.Invalidemail, userData.Invalidpassword);
  await signup.clickLogin();
  await loginfail.verifyErrorMsgVisible();
});

test('Logout Test', async ({ page }) => {
  const home = new HomePage(page);
  const signup = new SignupPage(page);
  const loginvalidate = new LoginInfoPage(page);
  
  await home.navigate();
  await home.verifyHomePageVisible();
  await home.clickSignupLogin();
  await signup.verifyLoginVisible();
  await signup.emailpassword(userData.Validemail, userData.Validpassword);
  await signup.clickLogin();
  await loginvalidate.verifyLoggedIn();
  await loginvalidate.logout();
});
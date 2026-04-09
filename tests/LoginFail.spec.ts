import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignupPage } from '../pages/SignupPage';
import { LoginInfoPage } from '../pages/LoginFailPage';
import { userData } from '../test-data/user';
 
test('Login Fail Test', async ({ page }) => {

  const home = new HomePage(page);
  const signup = new SignupPage(page);
  const loginfail = new LoginInfoPage(page);
  
  await home.navigate();
  await home.verifyHomePageVisible();
  await home.clickSignupLogin();
  await signup.verifyLoginVisible();
  await signup.Invalidemailpassword(userData.Invalidemail, userData.Invalidpassword);
  await signup.clickLogin();
  await loginfail.verifyErrorMsgVisible();
});
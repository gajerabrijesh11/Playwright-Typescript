import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ContactUsPage } from '../pages/ContactUsPage';
import { userData } from '../test-data/user'

test('Contact Us Test', async ({ page }) => {

  const home = new HomePage(page);
  const contactus = new ContactUsPage(page);

  
  await home.navigate();
  await home.verifyHomePageVisible();
  await contactus.Contactusclick();
  await contactus.Validatecontactus();
  await contactus.AddcontactusDetails(userData.Contactusname, userData.Contactusemail, userData.Contactussubject, userData.ContactusMsg);
  await page.pause();
  await contactus.UploadFile(userData.uploadFile);
  await contactus.ClickSubmit();
  await contactus.VarifySubmitMSG();
});
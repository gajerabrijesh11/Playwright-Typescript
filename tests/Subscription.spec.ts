import { test, expect } from '../Base/baseTest';
import { HomePage } from '../pages/HomePage';
import { SubscriptionPage } from '../pages/SubscriptionPage';

test('Footer subscription is successful', async ({ page }) => {
  const home = new HomePage(page);
  const subscription = new SubscriptionPage(page);

  await home.navigate();
  await home.verifyHomePageVisible();

  await subscription.scrollToFooter();
  await subscription.verifySubscriptionTextVisible();

  await subscription.enterEmailAndSubscribe('test@example.com');
  await subscription.verifySubscriptionSuccessMessageVisible();
});

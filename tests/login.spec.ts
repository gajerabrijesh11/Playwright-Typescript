import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
});
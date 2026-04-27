import { test, expect } from '@playwright/test';

test('Get all products list', async ({ request }) => {
  // 1. Send the GET request
  const response = await request.get('https://automationexercise.com/api/productsList');

  // 2. Validate the Response Code
  expect(response.status()).toBe(200);

  // 3. Parse the JSON body
  const responseBody = await response.json();
  
  // 4. Validate the content
  console.log(responseBody);
});
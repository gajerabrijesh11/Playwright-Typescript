import { test, expect } from '@playwright/test';

test('Post to all products list', async ({ request }) => {
  // 1. Send the POST request
  const response = await request.post('https://automationexercise.com/api/productsList');

  // 2. Validate the Response Code (HTTP status is 200, but check internal responseCode)
  expect(response.status()).toBe(200);

  // 3. Parse the JSON body
  const responseBody = await response.json();
  
  // 4. Validate the content
  expect(responseBody.responseCode).toBe(405);
  expect(responseBody.message).toBe('This request method is not supported.');
  
  console.log('Response Body:', responseBody);
});
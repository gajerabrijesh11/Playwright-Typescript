import { test, expect } from '@playwright/test';

test('Search Product', async ({ request }) => {
  
  const response = await request.post('https://automationexercise.com/api/searchProduct', {
    form: {
      search_product: 'Blue Top'
    }
  });

  expect(response.status()).toBe(200);

  
  const responseBody = await response.json();
  
  
  console.log(responseBody);
});
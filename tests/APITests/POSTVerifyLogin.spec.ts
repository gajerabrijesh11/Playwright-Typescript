import { test, expect } from '@playwright/test';

test('Verify login', async ({ request }) => {
  
  const response = await request.post('https://automationexercise.com/api/verifyLogin', {
    form: {
      email: 'bg@gmail.com',
      password: 'testbg'
    }
  });
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});

test('without email', async ({ request }) => {
  
  const response = await request.post('https://automationexercise.com/api/verifyLogin', {
    form: {
      // email: 'bg@gmail.com',
      password: 'testbg'
    }
  });
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.responseCode).toBe(400);
  expect(responseBody.message).toBe('Bad request, email or password parameter is missing in POST request.');
  console.log('Response Body:', responseBody);
});

test('delete account', async ({ request }) => {
  
  const response = await request.delete('https://automationexercise.com/api/verifyLogin');
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.responseCode).toBe(405);
  expect(responseBody.message).toBe('This request method is not supported.');
  console.log('Response Body:', responseBody);
});

test('Invalid details', async ({ request }) => {
  
  const response = await request.post('https://automationexercise.com/api/verifyLogin', {
    form: {
      email: 'g@gmail.com',
      password: 'test'
    }
  });
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.responseCode).toBe(404);
  expect(responseBody.message).toBe('User not found!');
  console.log('Response Body:', responseBody);
});
import { test, expect } from '@playwright/test';

test('Register new user', async ({ request }) => {
  
  const response = await request.post('https://automationexercise.com/api/createAccount', {
    form: {
        name: 'test user',
      email: 'bgsolid@gmail.com',
      password: 'testbg',
        title: 'Mr',
        birth_date: '11',
        birth_month: '11',
        birth_year: '1990',
        firstname: 'test user',
        lastname: 'test user',
        company: 'test',
        address1: 'test',
        address2: 'test',
        country: 'United States',
        zipcode: '12345',
        state: 'test',
        city: 'test',
        mobile_number: '1234567890'
    }
  });
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.responseCode).toBe(201);
  expect(responseBody.message).toBe('User created!');
  console.log('Response Body:', responseBody);
});

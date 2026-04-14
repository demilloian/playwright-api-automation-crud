import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  retries: 1,
  reporter: [
    ['html'],
    ['allure-playwright']
  ],
  use: {
    baseURL: 'https://restful-booker.herokuapp.com',
    extraHTTPHeaders: {
      Accept: 'application/json'
    }
  }
});
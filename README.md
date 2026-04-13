# Playwright API Automation – Booking CRUD

## Overview

API automation project using Playwright and TypeScript.  
Covers full CRUD (Create, Read, Update, Delete) flow using:

https://restful-booker.herokuapp.com

---

## Tech Stack

- Playwright
- TypeScript
- Allure Report

---

## Project Structure

playwright-booking-api/
├── data/
├── utils/
├── tests/
├── playwright.config.ts

---

## Setup

npm install
npx playwright install
npm install -D allure-playwright allure-commandline

---

## Run Tests

npx playwright test

---

## Reports

npx playwright show-report
<img width="1111" height="387" alt="image" src="https://github.com/user-attachments/assets/f83c763d-556b-4b9a-8a18-5cc8c5479c53" />

npx allure serve allure-results
<img width="1583" height="854" alt="image" src="https://github.com/user-attachments/assets/6eefbdfb-3211-4a2e-9ff9-f6629aae91d4" />
<img width="1590" height="857" alt="image" src="https://github.com/user-attachments/assets/7d5448bb-f9e1-4570-96cf-bb6567322f32" />
<img width="1592" height="857" alt="image" src="https://github.com/user-attachments/assets/bd9ad65e-4029-47a3-adcf-a5b89f4c2249" />

---

## Test Flow

1. Create Booking (POST)
2. Get Booking (GET)
3. Generate Token
4. Update Booking (PUT)
5. Patch Booking (PATCH)
6. Delete Booking (DELETE)
7. Verify Deletion (404)

---

## Negative Test

Update without token → 403 Forbidden

---

## Author

Ian Demillo

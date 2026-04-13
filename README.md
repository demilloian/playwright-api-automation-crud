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
npx allure serve allure-results

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

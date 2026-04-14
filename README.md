# Playwright API Automation – Booking CRUD
![CI](https://github.com/demilloian/playwright-api-automation-crud/actions/workflows/playwright.yml/badge.svg)

End-to-end API automation framework using Playwright with CI integration and Allure reporting

## Overview

API automation project using Playwright and TypeScript.
Implements a full CRUD (Create, Read, Update, Delete) workflow using:

https://restful-booker.herokuapp.com

This project demonstrates API testing, reusable helper functions, and proper validation practices.

---

## Why This Project Matters

This project demonstrates my hands-on skills in:

- API automation using Playwright
- TypeScript-based test design
- reusable helper functions
- positive and negative test coverage
- report generation with Allure
- CI execution using GitHub Actions

It simulates a real-world API CRUD workflow with validation at each step.

---

## Tech Stack

* Playwright
* TypeScript
* Allure Report
* GitHub Actions (CI)

---

## Project Structure

```
playwright-booking-api/
├── test-data/
│   ├── auth.json
│   ├── booking.json
│   ├── putBooking.json
│   └── patchBookingData.json
│
├── utils/
│   ├── apiHelpers.ts
│   └── allureHelpers.ts
│
├── tests/
│   └── booking/
│       ├── booking-crud-e2e.spec.ts
│       └── booking-negative.spec.ts
│
├── playwright.config.ts
├── package.json
```

---

## Setup

```bash
npm install
npx playwright install
npm install -D allure-playwright allure-commandline
```

---

## Run Tests

```bash
npx playwright test
```

---

## Reports

```bash
npx playwright show-report
npx allure serve allure-results
```

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

## Validation Covered

* Status code validation
* Response body validation
* Nested JSON validation
* Updated vs unchanged fields (PATCH)
* Delete verification using GET (404)

---

## Negative Test

Update booking without token

Expected:

* 403 Forbidden

---

## Framework Design

This framework is designed to be scalable, maintainable, and reusable for real-world API testing scenarios.

- Uses reusable API helper functions to avoid duplication
- Separates test data, test logic, and API logic
- Keeps test cases clean and focused on validation
- Makes it easy to extend for additional endpoints

---

## CI Pipeline

This project uses GitHub Actions to automatically run Playwright tests on every push.

Pipeline steps:
- Install dependencies
- Install Playwright browsers
- Execute tests
- Upload HTML report

This ensures that all test cases are validated automatically and continuously.

---

## Screenshots


```
screenshots/
├── allure-overview.png
├── allure-steps.png
├── playwright-report.png
├── terminal-run.png
```

---

## Author

Ian Demillo

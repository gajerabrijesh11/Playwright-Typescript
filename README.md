A Playwright + TypeScript demo using Page Object Model (POM) to demonstrate E2E and API test patterns, local reporting, and a sample CI workflow.
Status: Learning / Demo project — basic demo tests for core flows (still expanding coverage); actively improving coverage and CI artifacts.

I created this repo while practicing Playwright; it’s my first attempt at combining UI and API tests with CI.”

Maintainer: Brijesh Gajera — I built this repo while learning Playwright and TypeScript. Feedback and PRs welcome.

Quick links
Repo: github.com/gajerabrijesh11/Playwright-Typescript

Portfolio: github.com/gajerabrijesh11

Contact: linkedin.com/in/gajera-brijesh-a3438198

## 🎬 Demo
![Demo](./demo.gif)

*Above: Running tests locally and viewing the Playwright HTML report.*


Quick start (run in 3–5 commands)

# 1. Clone
git clone https://github.com/gajerabrijesh11/Playwright-Typescript.git
cd Playwright-Typescript

# 2. Install dependencies
npm ci

# 3. Install Playwright browsers
npx playwright install --with-deps

# 4. Run tests (headless)
npm test

# 5. View HTML report (after tests finish)
npm run show-report
Note: This repository is a demo. Tests are intended to be runnable locally with the commands above. CI workflow is included as an example; artifact upload may be experimental.

What this repo contains (short)
POM structure: pages/ contains page objects (Home, Login, Signup, ProductDetails, etc.).

Tests: tests/ contains UI specs and tests/APITests/ contains API specs.

Test data: centralized in test-data/.

Reports: Playwright HTML reports generated locally in playwright-report/.

Sample CI: .github/workflows/ci.yml (example workflow to run tests on push/PR).

Python experiments: small experimental Python pages/tests are present under Pytest_Pages/ and Pytests/ (marked experimental).

Purpose and my role
Purpose: Learn and demonstrate common automation patterns (POM, fixtures, API + UI integration, basic CI).

My role: I designed page objects, wrote demo tests for core flows, and configured an example GitHub Actions workflow.

Current focus: Stabilize tests, add more API coverage, and improve CI artifact handling.

How tests are organized (folder overview)
Code
Playwright-Typescript/
├── Base/                 # baseTest.ts (common setup/teardown)
├── pages/                # Page Object Model classes
├── tests/                # UI test specs (Login, Register, Search, etc.)
│   └── APITests/         # API test specs
├── test-data/            # centralized test data
├── playwright-report/    # HTML reports (local)
├── playwright.config.ts  # Playwright config
├── package.json
└── .github/workflows/ci.yml
Example Page Object (pattern)
ts
// pages/LoginPage.ts (example)
import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) { this.page = page; }

  async goto() { await this.page.goto('/login'); }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('button[type="submit"]');
  }
}
Test naming and intent (examples)
File	Purpose
tests/Login.spec.ts	Verify login success and failure scenarios
tests/RegisterNewUser.spec.ts	End‑to‑end user registration flow
tests/SearchProduct.spec.ts	Product search and filtering checks
tests/ProductDetails.spec.ts	Product details rendering and interactions
tests/APITests/POSTRegisterUser.spec.ts	API: register user (happy path)
tests/APITests/POSTVerifyLogin.spec.ts	API: verify login endpoint


Guideline: Each test file contains short, descriptive test names and a one‑line comment explaining the test purpose.

Reporting & debugging
Local HTML report: Playwright HTML reporter is configured. After a run, open the report with:

bash
npm run show-report
# or
npx playwright show-report
Traces: Traces are enabled for debugging failed tests (configured to capture on first retry). Use npx playwright show-trace <trace.zip> to inspect a trace.

CI (example)
A sample GitHub Actions workflow is included at .github/workflows/ci.yml. It demonstrates:

Checkout, Node setup, dependency install

Playwright browser install

Running tests

Uploading the HTML report as an artifact (example)

Note: CI is provided as an example. If you enable the workflow, check the Actions tab to confirm artifact upload and badge status.

How to run specific tests
Run a single test file:

bash
npx playwright test tests/Login.spec.ts
Run tests by name (grep):

bash
npx playwright test --grep "Login"
Run tests in a specific browser:

bash
npx playwright test --project=chromium
Test data
All test data is centralized in test-data/user.ts. Keep test data minimal and avoid hardcoding secrets. Example:

ts
export const userData = {
  name: 'Demo User',
  email: 'demo@example.com',
  password: 'Password123'
};
What I intentionally marked as experimental
Python tests and pages under Pytest_Pages/ and Pytests/ are experimental and included to show cross‑language exploration. They are not required to run the main TypeScript tests.

Some API tests are basic smoke/functional checks; I plan to expand them into more thorough contract tests.

Known limitations (be honest)
This is a learning/demo repository, not a production test framework.

Some tests are intentionally small to keep the demo runnable on a typical laptop.

CI artifact handling and parallelization are example configurations and may need tuning for large suites.
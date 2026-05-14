Playwright Automation Framework (TypeScript + Python)
📌 Overview
This repository demonstrates a modern QA automation framework built with Playwright using TypeScript and experimental Python tests. It showcases Page Object Model (POM) design, UI + API test integration, reporting, and a sample CI/CD workflow with GitHub Actions.

Status: Active learning project — expanding coverage and CI artifacts. Designed to highlight automation skills for recruiters and hiring managers.

👨‍💻 My Role
Designed and implemented Page Object Models for core flows (Login, Registration, Search, Product Details).

Developed UI and API test suites with Playwright.

Configured Playwright reporters (HTML, trace viewer) for debugging and reporting.

Set up a sample GitHub Actions workflow to run tests automatically on push/PR.

Experimented with Playwright Python to demonstrate cross‑language automation skills.

🛠 Skills & Tools Demonstrated
Playwright (TypeScript + Python)

Page Object Model (POM)

UI + API test automation

CI/CD with GitHub Actions

Reporting (HTML, traces; Allure planned)

Test data management

Cross‑browser testing

🗂 Project Structure
Code
Playwright-Typescript/
├── Base/                 # Common setup/teardown
├── pages/                # Page Object Model classes
├── tests/                # UI test specs
│   └── APITests/         # API test specs
├── test-data/            # Centralized test data
├── playwright-report/    # Local HTML reports
├── playwright.config.ts  # Playwright config
├── package.json
├── .github/workflows/ci.yml  # Sample CI workflow
└── python/ (experimental)    # Playwright Python tests
🚀 Quick Start
bash
# 1. Clone
git clone https://github.com/gajerabrijesh11/Playwright-Typescript.git
cd Playwright-Typescript

# 2. Install dependencies
npm ci

# 3. Install Playwright browsers
npx playwright install --with-deps

# 4. Run tests (headless)
npm test

# 5. View HTML report
npm run show-report
🧪 Example Tests
UI Tests

Login.spec.ts → Verify login success & failure

RegisterNewUser.spec.ts → End‑to‑end user registration

SearchProduct.spec.ts → Product search & filtering

ProductDetails.spec.ts → Product details rendering & interactions

API Tests

POSTRegisterUser.spec.ts → Register user (happy path)

POSTVerifyLogin.spec.ts → Verify login endpoint

📊 Reporting & Debugging
HTML Reports: Generated locally (playwright-report/).

Traces: Captured on first retry for failed tests.

Allure (planned): Future integration for advanced reporting.

⚙️ CI/CD
Sample GitHub Actions workflow (.github/workflows/ci.yml) includes:

Node setup & dependency install

Playwright browser install

Test execution

Uploading HTML report as artifact

👉 CI badge will be added once workflow is enabled.

🐍 Python (Experimental)
Pytest_Pages/ and Pytests/ contain initial Playwright Python experiments.

Run with:

bash
cd Pytests
pip install -r requirements.txt
pytest
📌 Purpose
This project is part of my transition from Manual QA to Automation QA/SDET. It highlights:

Strong manual QA background

Hands‑on Playwright automation (TS + Python)

CI/CD awareness

Modern QA practices (POM, fixtures, API + UI integration)

🔮 Roadmap
Expand API contract tests

Integrate Allure reporting

Add Docker support

Improve CI artifact handling & parallelization

🔗 Links
Repo: Playwright-Typescript

Portfolio: GitHub Profile

LinkedIn: Brijesh Gajera

✅ Recruiter Note
This repository is intentionally designed as a learning showcase. It demonstrates my ability to:

Build automation frameworks from scratch

Apply QA best practices

Learn and adapt new tools (Playwright TS/Python)

Contribute to CI/CD pipelines

👉 This version makes your README recruiter‑friendly: it highlights skills, structure, CI/CD, reporting, Python experiments, and roadmap.
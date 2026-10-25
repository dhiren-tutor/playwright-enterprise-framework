# Run tests targeted at the QA sandbox environment
NODE_ENV=qa npx playwright test

# Run tests targeted at the Staging environment
NODE_ENV=staging npx playwright test
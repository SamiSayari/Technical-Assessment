const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 60000,
  fixturesFolder: "cypress/fixtures",
  video: false,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // No need for Allure writer here
      return config;
    },
    baseUrl: "http://localhost:8080", // Adjust the base URL as needed
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/index.ts" // Ensure this path is correct
  }
});
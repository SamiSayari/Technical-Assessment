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
      
      return config;
    },
    baseUrl: "http://localhost:8080", 
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/index.ts" 
  }
});
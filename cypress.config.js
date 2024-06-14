const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.trymima.com/',
    defaultCommandTimeout:10000,
    viewportHeight: 938,
    viewportWidth: 1520,
    chromeWebSecurity: false,
    watchForFileChanges: false,
    specPattern: 'cypress/e2e/testCases/*.js',
    projectId: "awkxd6",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

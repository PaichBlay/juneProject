const { defineConfig } = require("cypress");
const preprocessor = require ('@badeball/cypress-cucumber-preprocessor'); //badeball to enable cypress recognize gherkin syntax which is in .feature extension
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify'); // browserify to bundle the gherkin syntax 

async function setupNodeEvents(on, config) { // to listen to node events and compile feature files
  await preprocessor.addCucumberPreprocessorPlugin(on, config)

  on('file:preprocessor', browserify.default(config))
  return config

}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.trymima.com/',
    defaultCommandTimeout:10000,
    viewportHeight: 938,
    viewportWidth: 1520,
    chromeWebSecurity: false,
    watchForFileChanges: false,
    specPattern: ['cypress/e2e/testCases/**/*.{js,ts,feature}'],
    projectId: "awkxd6",
    setupNodeEvents,
  },
});

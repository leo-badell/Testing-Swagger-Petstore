const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      useBaseUrl: 'https://petstore.swagger.io/v2/pet',
      useBaseUrl2: 'https://petstore.swagger.io/v2/pet/findByStatus?status=pending',
      useBaseUrl3: 'https://petstore.swagger.io/v2/pet/8979789078978969',
      useBaseUrl4:'https://petstore.swagger.io/v2/user/',
    },
    retries: 1,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs: true,
    viewportHeight: 900,
    viewportWidth: 1600,
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output.xml',
    toConsole: true,
  },
});

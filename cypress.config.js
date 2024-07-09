// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     watchForFileChanges:false,
//     defaultCommandTimeout:3000,
    
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'Cypress Test Report',
    embeddedScreenshots: true,
    inlineAssets: true
  },
  e2e: {
    watchForFileChanges:false,
    defaultCommandTimeout:4000,
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});


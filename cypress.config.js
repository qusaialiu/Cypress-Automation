const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
    baseUrl: "https://magento.softwaretestingboard.com/",
    video: false,
    videosFolder: "MyVedioFolder",
    trashAssetsBeforeRuns: false,
    videoCompression: 0,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/myReport", // where to save in directory
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    }



  },
});

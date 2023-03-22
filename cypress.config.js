const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://cypress.vivifyscrum-stage.com",
    env: {
      testUserEmail: "Miroslav023@gmail.com",
      testUserPassword: "Miroslav023",
      apiUrl: "https://cypress-api.vivifyscrum-stage.com/api",
    },
  },
});

export default {
  e2e: {
    baseUrl: "http://localhost:5173",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    viewportWidth: 1280,
    viewportHeight: 800,
    setupNodeEvents(on, config) {
    },
  },
};

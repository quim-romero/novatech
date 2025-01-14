describe("Homepage", () => {
  it("should load the homepage and show key sections", () => {
    cy.visit("/");
    cy.contains("NovaTech");
    cy.contains("Tech Demos");
    cy.get("a[href='/contact']").should("exist");
  });
});

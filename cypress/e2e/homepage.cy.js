describe("Homepage", () => {
  it("should load the homepage and show key sections", () => {
    cy.visit("/");
    cy.contains("NovaTech");
    cy.get("a[href='/contact']").should("exist");
  });
});

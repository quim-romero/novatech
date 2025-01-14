describe("Contact form", () => {
  it("should fill and submit the form successfully", () => {
    cy.visit("/contact");

    cy.get("input[name='name']").type("John Doe");
    cy.get("input[name='email']").type("john@example.com");
    cy.get("textarea[name='message']").type("Hi, I love your platform.");

    cy.get("form").find("button[type='submit']").click();

    cy.contains("Message sent successfully!", { timeout: 5000 }).should("exist");
  });
});

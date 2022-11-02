/// <reference types="cypress" />

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    // cy.visit("http://localhost:8081");
    cy.contains("h1", "Welcome to Your Vue.js App");
  });

  it("Navigate between home and about", () => {
    cy.visit("/");
    // cy.visit("http://localhost:8081");
    cy.contains("h1", "Welcome to Your Vue.js App");
    cy.contains("About").click();
    cy.contains("h1", "This is an about page");
    cy.contains("Home").click();
    cy.contains("h3", "Installed CLI Plugins");
  });
});

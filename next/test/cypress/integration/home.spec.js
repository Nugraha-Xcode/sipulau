/// <reference types="cypress" />

describe("SIPULAU - home page dekstop", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show top navigation", () => {
    cy.get("[data-cy='top-nav']").should("be.visible");
  });

  // it("should change top navbar opacity when scrolling down", () => {
  //   cy.get("[data-cy='layout-children']").scrollTo(0, 500);
  // });

  it("should show Sistem Informasi SIPULAU text", () => {
    cy.contains("Sistem Informasi SIPULAU").should("be.visible");
  });

  it("should change locale to 'en' when click toggle language button", () => {
    cy.get("[data-cy='top-nav']")
      .find("[data-cy='btn-toggle-lang']")
      .click()
      .url()
      .should("include", "/en");
  });
});

describe("SIPULAU - home page mobile", () => {
  beforeEach(() => {
    cy.visit("/").viewport("iphone-6");
  });

  it("should hide top navigation when in mobile view", () => {
    cy.get("[data-cy='top-nav']").should("not.be.visible");
  });

  it("should show side nav drawer when click toggle button", () => {
    cy.get("[data-cy='btn-toggle-sidenav']").should("be.visible");
  });

  it("should show side nav drawer when click menu icon on top navbar", () => {
    cy.get("[data-cy='btn-toggle-sidenav']").click();
  });

  it("should change locale to 'en' when click toggle language button", () => {
    cy.get("[data-cy='btn-toggle-sidenav']")
      .click()
      .get("[data-cy='side-nav']")
      .find("[data-cy='btn-toggle-lang']")
      .click()
      .url()
      .should("include", "/en");
  });
});

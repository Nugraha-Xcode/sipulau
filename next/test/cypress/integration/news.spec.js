/// <reference types="cypress" />

describe("news desktop - id", () => {
  beforeEach(() => {
    cy.visit("/news").as("newsPage");
  });

  it("should contain header", () => {
    cy.get("[data-cy='news-page-header']").should(
      "have.text",
      "Berita Sistem Informasi Pulau"
    );
  });

  it("should contain subheader", () => {
    cy.get("[data-cy='news-page-subheader']").should(
      "have.text",
      "Berikut ini semua berita dan informasi-informasi seputar Sistem Informasi SIPULAU"
    );
  });

  it("show news title from the __NEXT_DATA__", () => {
    cy.get("@newsPage")
      .its("__NEXT_DATA__.props.pageProps.news")
      .each(($el, index) => {
        cy.get(`[data-cy=news-title-${index}]`).should("have.text", $el.title);
      });
  });

  it("show news abstract from the __NEXT_DATA__", () => {
    cy.get("@newsPage")
      .its("__NEXT_DATA__.props.pageProps.news")
      .each(($el, index) => {
        cy.get(`[data-cy=news-abstract-${index}]`).should(
          "have.text",
          $el.abstract
        );
      });
  });

  it("show news link from the __NEXT_DATA__", () => {
    cy.get("@newsPage")
      .its("__NEXT_DATA__.props.pageProps.news")
      .each(($el, index) => {
        cy.get(`[data-cy=news-link-${index}]`).should(
          "have.attr",
          "href",
          "/news/" + $el.newsId
        );
      });
  });
});

describe("news desktop - en", () => {
  beforeEach(() => {
    cy.visit("/en/news").as("newsPage");
  });

  it("should contain header", () => {
    cy.get("[data-cy='news-page-header']").should("have.text", "SI Pulau News");
  });

  it("should contain subheader", () => {
    cy.get("[data-cy='news-page-subheader']").should(
      "have.text",
      "Here is all the news and information about the SIPULAU Information System"
    );
  });

  it("show news title from the __NEXT_DATA__", () => {
    cy.get("@newsPage")
      .its("__NEXT_DATA__.props.pageProps.news")
      .each(($el, index) => {
        cy.get(`[data-cy=news-title-${index}]`).should("have.text", $el.title);
      });
  });

  it("show news abstract from the __NEXT_DATA__", () => {
    cy.get("@newsPage")
      .its("__NEXT_DATA__.props.pageProps.news")
      .each(($el, index) => {
        cy.get(`[data-cy=news-abstract-${index}]`).should(
          "have.text",
          $el.abstract
        );
      });
  });

  it("show news link from the __NEXT_DATA__", () => {
    cy.get("@newsPage")
      .its("__NEXT_DATA__.props.pageProps.news")
      .each(($el, index) => {
        cy.get(`[data-cy=news-link-${index}]`).should(
          "have.attr",
          "href",
          "/en/news/" + $el.newsId
        );
      });
  });
});

describe("footer", () => {
  before(() => {
    cy.visit("/news");
  });
  it("should show page menu", () => {
    cy.get("[data-cy='footer-page-menu']")
      .scrollIntoView()
      .should("be.visible");
  });
  it("should hide homepage menu", () => {
    cy.get("[data-cy='footer-homepage-menu']").should("not.exist");
  });
  it("should contain social media link", () => {
    cy.fixture("footer").then((item) => {
      item.socmedItems.forEach((el, index) => {
        cy.get(`[data-cy='footer-socmed-${index}']`).should(
          "have.attr",
          "href",
          el
        );
      });
    });
  });
});

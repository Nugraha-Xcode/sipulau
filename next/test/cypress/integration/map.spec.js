/// <reference types="cypress" />

describe("network data card", () => {
  before(() => {
    cy.visit("/map");
  });
  it("should contain card title", () => {
    cy.get("[data-cy='network-card-title']").should(
      "have.text",
      "Kategori Simpul Jaringan"
    );
  });

  it("should have network data button", () => {
    cy.get("[data-cy='network-card-title']").should(
      "have.text",
      "Kategori Simpul Jaringan"
    );
  });

  it("should show network category button after skeleton load", () => {
    cy.get("[data-cy='network-button-skeleton']").should("be.visible");
    cy.get("[data-cy='network-button-category']", { timeout: 10000 }).should(
      "be.visible"
    );
    cy.fixture("mapNetworkData").then((item) => {
      item.buttonList.forEach((el, index) => {
        cy.get(`[data-cy='network-button-category-${el.value}']`).should(
          "have.text",
          el.value
        );
      });
    });
  });

  it("should change button color when clicked", () => {
    cy.get("[data-cy='network-button-category']", { timeout: 10000 }).should(
      "be.visible"
    );
    cy.get("[data-cy='network-button-category-Kementerian/Lembaga']")
      .click()
      .should(
        "have.class",
        "bg-blue-2 bg-opacity-20 border-blue-3 text-main-blue"
      )
      .click()
      .should("have.class", "bg-white border-gray-4 text-main-gray");
    cy.get("[data-cy='network-button-category-Provinsi']")
      .click()
      .should(
        "have.class",
        "bg-blue-2 bg-opacity-20 border-blue-3 text-main-blue"
      )
      .click()
      .should("have.class", "bg-white border-gray-4 text-main-gray");
    cy.get("[data-cy='network-button-category-Kabupaten/Kota']")
      .click()
      .should(
        "have.class",
        "bg-blue-2 bg-opacity-20 border-blue-3 text-main-blue"
      )
      .click()
      .should("have.class", "bg-white border-gray-4 text-main-gray");
  });

  it("should expand card when one of network button active", () => {
    cy.get("[data-cy='network-button-category']", { timeout: 10000 }).should(
      "be.visible"
    );

    cy.get("[data-cy='network-button-category-Kementerian/Lembaga']")
      .click()
      .get("[data-cy='network-card-select-section']")
      .should("be.visible");
    cy.get("[data-cy='network-button-category-Kementerian/Lembaga']")
      .click()
      .get("[data-cy='network-card-select-section']")
      .should("not.be.visible");

    cy.get("[data-cy='network-button-category-Provinsi']")
      .click()
      .get("[data-cy='network-card-select-section']")
      .should("be.visible");
    cy.get("[data-cy='network-button-category-Provinsi']")
      .click()
      .get("[data-cy='network-card-select-section']")
      .should("not.be.visible");

    cy.get("[data-cy='network-button-category-Kabupaten/Kota']")
      .click()
      .get("[data-cy='network-card-select-section']")
      .should("be.visible");
    cy.get("[data-cy='network-button-category-Kabupaten/Kota']")
      .click()
      .get("[data-cy='network-card-select-section']")
      .should("not.be.visible");
  });

  it("should open network data card when select category", () => {
    cy.get("[data-cy='network-button-category']", { timeout: 10000 }).should(
      "be.visible"
    );

    cy.get("[data-cy='network-button-category-Kementerian/Lembaga']")
      .click()
      .get("[data-cy='network-card-select-section']")
      .should("be.visible");
    //   .get("[data-cy='network-card-select-section']")
    //   .should("be.visible");

    cy.get("[data-cy='network-card-selector']").select(
      "Badan Informasi Geospasial"
    );

    cy.get("[data-cy='network-card-process-button']").click();

    cy.get("[data-cy='choose-network-card']").should("be.visible");
    cy.get("[data-cy='network-list']").should("be.visible");
    cy.get("[data-cy='add-layer-button-0']").should("be.visible");
    cy.get("[data-cy='detail-link']").should("be.visible");
  });
});

describe("layer feature tab", () => {
  before(() => {
    cy.visit("/map");

    cy.get("[data-cy='network-button-category']", { timeout: 10000 }).should(
      "be.visible"
    );

    cy.get("[data-cy='network-button-category-Kementerian/Lembaga']")
      .click()
      .get("[data-cy='network-card-select-section']")
      .should("be.visible");

    cy.get("[data-cy='network-card-selector']").select(
      "Badan Informasi Geospasial"
    );

    cy.get("[data-cy='network-card-process-button']").click();

    cy.get("[data-cy='choose-network-card']").should("be.visible");
    cy.get("[data-cy='network-list']").should("be.visible");
    cy.get("[data-cy='add-layer-button-0']").click();
  });

  it("should open layer feature tab when layer added by click add layer button", () => {
    cy.get("[data-cy='feature-tab-card']").should("be.visible");
  });

  it("should show toponim pulau layer control", () => {
    cy.get("[data-cy='toponim-layer-control']").should("be.visible");
  });

  it("should expand layer group list", () => {
    cy.get("[data-cy='expand-layer-list-button']")
      .click()
      .get("[data-cy='simpul-layer-list-0']")
      .should("be.visible");
  });

  it("should expand layer group control", () => {
    cy.get("[data-cy='expand-layer-group-control-button-0']")
      .click()
      .get("[data-cy='expand-layer-control-0']")
      .should("be.visible");
  });

  it("should expand simpul layer control", () => {
    cy.get("[data-cy='expand-layer-list-button']").click();
    cy.get("[data-cy='expand-layer-control-button-0']").click();
    cy.get("[data-cy='simpul-layer-control-0']").should("be.visible");
  });

  it("should add another group layer in the same category", () => {
    cy.get("[data-cy='network-card-selector']").select("Kementerian Pertanian");
    cy.get("[data-cy='network-card-process-button']").click();
    cy.wait(5000).get("[data-cy='add-layer-button-0']").click();
    cy.get(".layer-group-list").should("have.length", 2);
  });

  it("should add another layer in the same category", () => {
    cy.get("[data-cy='add-layer-button-1']").click();
    cy.get("[data-cy='expand-layer-list-button']").click();
    cy.get(".simpul-layer-list-item").should("have.length", 2);
  });
});

describe("find island feature tab", () => {
  before(() => {
    cy.visit("/map");
  });

  it("should activate button, button color changed", () => {
    cy.wait(5000)
      .get("[data-cy='map-feature-item-search']")
      .click()
      .should("have.class", "bg-blue-2 border-blue-3 border");
  });

  it("should open find island filter modal", () => {
    cy.get("[data-cy='find-island-filter-modal']").should("be.visible");
  });
});

describe("basemap feature tab", () => {
  before(() => {
    cy.visit("/map");
  });

  it("should activate button, button color changed", () => {
    cy.wait(5000)
      .get("[data-cy='map-feature-item-basemap']")
      .click()
      .should("have.class", "bg-blue-2 border-blue-3 border");
  });
  it("should show skeleton load", () => {
    cy.get("[data-cy='basemap-feature-load']").should("be.visible");
  });
  it("should show basemap list", () => {
    cy.get("[data-cy='basemap-feature-list']").should("be.visible");
  });
});

describe("download feature tab", () => {
  before(() => {
    cy.visit("/map");
  });

  it("should activate button, button color changed", () => {
    cy.wait(5000)
      .get("[data-cy='map-feature-item-download']")
      .click()
      .should("have.class", "bg-blue-2 border-blue-3 border");
  });

  it("should display add aoi button", () => {
    cy.get("[data-cy='download-feature-add-aoi-button']").should("be.visible");
  });

  it("should display selected aoi list", () => {
    cy.get("[data-cy='download-feature-aoi-list']").should("be.visible");
  });

  it("should display format selector", () => {
    cy.get("[data-cy='download-feature-format-selector']").should("be.visible");
  });

  it("should display download button", () => {
    cy.get("[data-cy='download-feature-download-button']").should("be.visible");
  });
});

describe("comment feature tab", () => {
  before(() => {
    cy.visit("/map")
      .wait(5000)
      .get("[data-cy='map-feature-item-comment']")
      .click();
  });

  it("should activate button, button color changed", () => {
    cy.get("[data-cy='map-feature-item-comment']").should(
      "have.class",
      "bg-blue-2 border-blue-3 border"
    );
  });

  it("should display add comment tab", () => {
    cy.get("[data-cy='comment-feature-add-comment-tab']").should("be.visible");
  });

  it("should display add comment by map point button", () => {
    cy.get("[data-cy='comment-feature-point-comment-button']").should(
      "be.visible"
    );
  });

  it("should display add comment by select island button", () => {
    cy.get("[data-cy='comment-feature-island-comment-button']").should(
      "be.visible"
    );
  });

  it("should display login modal when change tab to comment history and display comment history after login", () => {
    cy.get("[data-cy='comment-feature-change-tab-2']")
      .click()
      .get("[data-cy='login-input-username']")
      .type("hilmiyura")
      .get("[data-cy='login-input-password']")
      .type("Mhilmiyura96")
      .get("[data-cy='login-submit-button']")
      .click()
      .get("[data-cy='comment-feature-change-tab-2']")
      .click()
      .get("[data-cy='comment-feature-comment-history-tab']")
      .should("be.visible");
  });

  it("should activate comment with add point feature", () => {
    cy.get("[data-cy='comment-feature-change-tab-1']")
      .click()
      .get("[data-cy='comment-feature-point-comment-button']")
      .click()
      .get("[data-cy='comment-feature-add-comment']")
      .should("be.visible");
    cy.get("[data-cy='comment-feature-cancel-comment']").click();
  });

  it("should activate comment island feature", () => {
    cy.get("[data-cy='comment-feature-island-comment-button']")
      .click()
      .get("[data-cy='comment-feature-add-comment']")
      .should("be.visible");
    cy.get("[data-cy='comment-feature-cancel-comment']").click();
  });
});

describe("table drawer", () => {
  before(() => {
    cy.visit("/map").wait(10000);
  });

  it("should show attribute table button", () => {
    cy.get("[data-cy='attribute-table-drawer-button']").should("be.visible");
  });

  it("should open attribute table drawer", () => {
    cy.get("[data-cy='attribute-table-drawer-button']")
      .click()
      .get("[data-cy='resizeable-bottom-drawer']")
      .should("be.visible");
  });

  it("should display option button", () => {
    cy.get("[data-cy='map-table-option-button']").should("be.visible");
  });

  it("should display filter by map extend button", () => {
    cy.get("[data-cy='map-table-filter-by-map-extend-button']").should(
      "be.visible"
    );
  });

  it("should display zoom to button", () => {
    cy.get("[data-cy='map-table-zoom-to-button']").should("be.visible");
  });

  it("should display filter button", () => {
    cy.get("[data-cy='map-table-filter-button']").should("be.visible");
  });

  it("should display reset filter button", () => {
    cy.get("[data-cy='map-table-reset-filter-button']").should("be.visible");
  });

  it("should display download button", () => {
    cy.get("[data-cy='map-table-download-button']").should("be.visible");
  });

  it("should display table column setting button", () => {
    cy.get("[data-cy='map-table-column-setting-button']").should("be.visible");
  });

  it("should display table column setting option modal", () => {
    cy.get("[data-cy='map-table-column-setting-button']")
      .click()
      .get("[data-cy='map-table-column-setting-option']")
      .should("be.visible");

    cy.get("[data-cy='map-table-column-setting-button']").click();
  });

  it("should display main table", () => {
    cy.get("[data-cy='map-main-table']").should("be.visible");
  });
});

describe("legend", () => {
  before(() => {
    cy.visit("/map").wait(10000);
  });
  it("should show legend button", () => {
    cy.get("[data-cy='map-legend-button']").should("be.visible");
  });
  it("should open legend detail tab", () => {
    cy.get("[data-cy='map-legend-button']")
      .click()
      .get("[data-cy='map-legend-tab']")
      .should("be.visible");
  });
});

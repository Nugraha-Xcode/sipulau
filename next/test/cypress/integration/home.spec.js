/// <reference types="cypress" />

describe("home desktop - navigation bar - language toggle button", () => {
  before(() => {
    cy.visit("/");
  });

  it("should change url when language toggle button clicked", () => {
    cy.get("[data-cy='btn-change-lang']").click().url().should("include", "en");
  });

  it("should change text when language toggle button clicked", () => {
    cy.get("[data-cy='btn-change-lang']").click();
    cy.get("[data-cy='btn-change-lang-text']").should("have.text", "EN");
  });
});

describe("home desktop - navigation bar - id", () => {
  before(() => {
    cy.visit("/");
  });
  it("should contain bold style home menu", () => {
    cy.get("[data-cy='navbar-menu-0']")
      .should("have.text", "Beranda")
      .should("have.class", "font-bold");
  });
});

describe("home desktop - navigation bar - en", () => {
  before(() => {
    cy.visit("/en");
  });
  it("should contain bold style home menu", () => {
    cy.get("[data-cy='navbar-menu-0']")
      .should("have.text", "Home")
      .should("have.class", "font-bold");
  });
});

describe("home desktop - description - id", () => {
  before(() => {
    cy.visit("/");
  });

  it("should contain header", () => {
    cy.get("[data-cy='home-section2-header']").should(
      "have.text",
      "Aplikasi SI Pulau"
    );
  });

  it("should contain description", () => {
    cy.get("[data-cy='home-section2-desc']").should(
      "have.text",
      "SIPULAU adalah sistem informasi berbasis WebGIS yang menyajikan & menyebarluaskan informasi pulau serta berbagi pakai data pulau dengan Kementerian atau Lembaga & Pemerintah Daerah serta masyarakat luas."
    );
  });

  it("should contain image", () => {
    cy.get("[data-cy='home-section2-desc-img']").should("have.attr", "src");
  });

  it("should contain sub header 1", () => {
    cy.get("[data-cy='home-section2-subheader1']").should(
      "have.text",
      "Penyediaan Data Pulau"
    );
  });

  it("should contain sub content 1", () => {
    cy.get("[data-cy='home-section2-subcontent1']").should(
      "have.text",
      "Penyediaan data informasi pulau-pulau di Indonesia yang dapat diunduh oleh pemerintah maupun masyarakat umum."
    );
  });

  it("should contain sub header 2", () => {
    cy.get("[data-cy='home-section2-subheader2']").should(
      "have.text",
      "Berbagai Informasi"
    );
  });

  it("should contain sub content 2", () => {
    cy.get("[data-cy='home-section2-subcontent2']").should(
      "have.text",
      "Menampilkan berbagai informasi penunjang dari Kementerian atau Lembaga & Pemerintah Daerah terkait yang tergabung dalam simpul jaringan yang akan memperkaya informasi pulau."
    );
  });

  // it("should show top navigation", () => {
  //   cy.get("[data-cy='top-nav']").should("be.visible");
  // });

  // it("should change top navbar opacity when scrolling down", () => {
  //   cy.get("[data-cy='layout-children']").scrollTo(0, 500);
  // });

  // it("should show Sistem Informasi SIPULAU text", () => {
  //   cy.contains("Sistem Informasi SIPULAU").should("be.visible");
  // });

  // it("should change locale to 'en' when click toggle language button", () => {
  //   cy.get("[data-cy='top-nav']")
  //     .find("[data-cy='btn-toggle-lang']")
  //     .click()
  //     .url()
  //     .should("include", "/en");
  // });
});

describe("home desktop - description - en", () => {
  before(() => {
    cy.visit("/en");
  });

  it("should contain header", () => {
    cy.get("[data-cy='home-section2-header']").should(
      "have.text",
      "SI Pulau Application"
    );
  });

  it("should contain description", () => {
    cy.get("[data-cy='home-section2-desc']").should(
      "have.text",
      "SI Pulau is a WebGIS-based information system that presents & disseminates island information and shares island data with Ministries or Institutions & Local Governments and the wider community."
    );
  });

  it("should contain sub header 1", () => {
    cy.get("[data-cy='home-section2-subheader1']").should(
      "have.text",
      "Island Data Provision"
    );
  });

  it("should contain sub content 1", () => {
    cy.get("[data-cy='home-section2-subcontent1']").should(
      "have.text",
      "Provision of information data on islands in Indonesia that can be downloaded by the government and the general public."
    );
  });

  it("should contain sub header 2", () => {
    cy.get("[data-cy='home-section2-subheader2']").should(
      "have.text",
      "Various Information"
    );
  });

  it("should contain sub content 2", () => {
    cy.get("[data-cy='home-section2-subcontent2']").should(
      "have.text",
      "Displays various supporting information from related Ministries or Institutions and Local Governments who are members of network nodes that will enrich island information"
    );
  });
});

describe("home desktop - news - id", () => {
  before(() => {
    cy.visit("/");
  });

  it("show news title from the __NEXT_DATA__", () => {
    cy.visit("/")
      .its("__NEXT_DATA__.props.pageProps.news")
      .each(($el, index) => {
        cy.get(`[data-cy=home-section4-news-title-${index}]`).should(
          "have.text",
          $el.title
        );
      });
  });

  it("show news abstract from the __NEXT_DATA__", () => {
    cy.visit("/")
      .its("__NEXT_DATA__.props.pageProps.news")
      .each(($el, index) => {
        cy.get(`[data-cy=home-section4-news-abstract-${index}]`).should(
          "have.text",
          $el.abstract
        );
      });
  });

  it("show news link from the __NEXT_DATA__", () => {
    cy.visit("/")
      .its("__NEXT_DATA__.props.pageProps.news")
      .each(($el, index) => {
        cy.get(`[data-cy=home-section4-see-news-button-${index}]`).should(
          "have.attr",
          "href",
          "/news/" + $el.newsId
        );
      });
  });

  it("should contain header", () => {
    cy.get("[data-cy='home-section4-header']").should(
      "have.text",
      "Berita Terkait"
    );
  });

  it("should contain subheader", () => {
    cy.get("[data-cy='home-section4-subheader']").should(
      "have.text",
      "Berita dan informasi-informasi seputar SI Pulau"
    );
  });

  it("should have button to go to all news page", () => {
    cy.get("[data-cy='home-section4-see-all-news-button']").should(
      "have.attr",
      "href",
      "/news"
    );
  });
});

describe("home desktop - news - en", () => {
  before(() => {
    cy.visit("/en");
  });

  it("show news title from the __NEXT_DATA__", () => {
    cy.visit("/en")
      // visit yields the "window" object
      // and we can get nested property in a single command
      .its("__NEXT_DATA__.props.pageProps.news")
      .each(($el, index) => {
        cy.get(`[data-cy=home-section4-news-title-${index}]`).should(
          "have.text",
          $el.title
        );
      });
  });

  it("show news abstract from the __NEXT_DATA__", () => {
    cy.visit("/en")
      .its("__NEXT_DATA__.props.pageProps.news")
      .each(($el, index) => {
        cy.get(`[data-cy=home-section4-news-abstract-${index}]`).should(
          "have.text",
          $el.abstract
        );
      });
  });

  it("show news link from the __NEXT_DATA__", () => {
    cy.visit("/en")
      .its("__NEXT_DATA__.props.pageProps.news")
      .each(($el, index) => {
        cy.get(`[data-cy=home-section4-see-news-button-${index}]`).should(
          "have.attr",
          "href",
          "/en/news/" + $el.newsId
        );
      });
  });

  it("should contain header", () => {
    cy.get("[data-cy='home-section4-header']").should(
      "have.text",
      "Related News"
    );
  });

  it("should contain subheader", () => {
    cy.get("[data-cy='home-section4-subheader']").should(
      "have.text",
      "News and Informations about SI Pulau"
    );
  });

  it("should have button to go to all news page", () => {
    cy.get("[data-cy='home-section4-see-all-news-button']").should(
      "have.attr",
      "href",
      "/en/news"
    );
  });
});

describe("home desktop - related website - id", () => {
  before(() => {
    cy.visit("/");
  });

  it("should contain header", () => {
    cy.get("[data-cy='home-section3-header']").should(
      "have.text",
      "Tautan Website Terkait"
    );
  });

  it("should contain description", () => {
    cy.get("[data-cy='home-section3-desc']").should(
      "have.text",
      "Berikut merupakan Kementrian & Lembaga yang bekerja sama dengan Badan Informasi Geospasial terkait Mendata SI Pulau"
    );
  });

  it("should contain related website anchor button", () => {
    cy.fixture("lembagaItems").then((item) => {
      item.lembagaItems.forEach((element, index) => {
        cy.get(`[data-cy='home-section3-button-${index}']`).should(
          "have.text",
          element.label
        );
        cy.get(`[data-cy='home-section3-button-${index}']`).should(
          "have.attr",
          "href",
          element.href
        );
      });
    });
  });
});

describe("home desktop - related website - en", () => {
  before(() => {
    cy.visit("/en");
  });

  it("should contain header", () => {
    cy.get("[data-cy='home-section3-header']").should(
      "have.text",
      "Related Website"
    );
  });

  it("should contain description", () => {
    cy.get("[data-cy='home-section3-desc']").should(
      "have.text",
      "The following are the Ministries & Institutions that collaborate with the Geospatial Information Agency regarding SIPULAU Metadata"
    );
  });

  it("should contain related website anchor button", () => {
    cy.fixture("lembagaItems").then((item) => {
      item.lembagaItems.forEach((element, index) => {
        cy.get(`[data-cy='home-section3-button-${index}']`).should(
          "have.text",
          element.label
        );
        cy.get(`[data-cy='home-section3-button-${index}']`).should(
          "have.attr",
          "href",
          element.href
        );
      });
    });
  });
});

describe("home desktop - visitor - id", () => {
  before(() => {
    cy.visit("/");
  });

  it("should contain header", () => {
    cy.get("[data-cy='home-section6-header']").should(
      "have.text",
      "Statistik Pengunjung"
    );
  });

  it("should contain description", () => {
    cy.get("[data-cy='home-section6-description']").should(
      "have.text",
      "Rekap Data Statistik Pengunjung SI Pulau"
    );
  });

  it("should contain statistic items icon", () => {
    cy.fixture("statisticItems").then((item) => {
      item.statisticItems.forEach((el, index) => {
        cy.get(`[data-cy='home-section6-icon-${index}']`).should(
          "have.attr",
          "src",
          el.imageSrc
        );
      });
    });
  });

  it("should contain statistic items label", () => {
    cy.fixture("statisticItems").then((item) => {
      item.statisticItems.forEach((el, index) => {
        cy.get(`[data-cy='home-section6-label-${index}']`).should(
          "have.text",
          item.in[el.label]
        );
      });
    });
  });

  it("show statistic count from the __NEXT_DATA__", () => {
    cy.fixture("statisticItems").then((item) => {
      item.statisticItems.forEach((el, index) => {
        cy.visit("/")
          .its("__NEXT_DATA__.props.pageProps.statistic")
          .then(($item) => {
            cy.get(`[data-cy=home-section6-value-${index}]`).should(
              "have.text",
              $item[el.value]
            );
          });
      });
    });
  });
});

describe("home desktop - visitor - en", () => {
  before(() => {
    cy.visit("/en");
  });

  it("should contain header", () => {
    cy.get("[data-cy='home-section6-header']").should(
      "have.text",
      "Visitor Statistics"
    );
  });

  it("should contain description", () => {
    cy.get("[data-cy='home-section6-description']").should(
      "have.text",
      "SI Pulau Visitor Statistics Recap"
    );
  });

  it("should contain statistic items icon", () => {
    cy.fixture("statisticItems").then((item) => {
      item.statisticItems.forEach((el, index) => {
        cy.get(`[data-cy='home-section6-icon-${index}']`).should(
          "have.attr",
          "src",
          el.imageSrc
        );
      });
    });
  });

  it("should contain statistic items label", () => {
    cy.fixture("statisticItems").then((item) => {
      item.statisticItems.forEach((el, index) => {
        cy.get(`[data-cy='home-section6-label-${index}']`).should(
          "have.text",
          item.en[el.label]
        );
      });
    });
  });

  it("show statistic count from the __NEXT_DATA__", () => {
    cy.fixture("statisticItems").then((item) => {
      item.statisticItems.forEach((el, index) => {
        cy.visit("/en")
          .its("__NEXT_DATA__.props.pageProps.statistic")
          .then(($item) => {
            cy.get(`[data-cy=home-section6-value-${index}]`).should(
              "have.text",
              $item[el.value]
            );
          });
      });
    });
  });
});

// describe("SIPULAU - home page mobile", () => {
//   before(() => {
//     cy.visit("/").viewport("iphone-6");
//   });

//   it("should hide top navigation when in mobile view", () => {
//     cy.get("[data-cy='top-nav']").should("not.be.visible");
//   });

//   it("should show side nav drawer when click toggle button", () => {
//     cy.get("[data-cy='btn-toggle-sidenav']").should("be.visible");
//   });

//   it("should show side nav drawer when click menu icon on top navbar", () => {
//     cy.get("[data-cy='btn-toggle-sidenav']").click();
//   });

//   it("should change locale to 'en' when click toggle language button", () => {
//     cy.get("[data-cy='btn-toggle-sidenav']")
//       .click()
//       .get("[data-cy='side-nav']")
//       .find("[data-cy='btn-toggle-lang']")
//       .click()
//       .url()
//       .should("include", "/en");
//   });
// });

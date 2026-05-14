class HomePage {

  visitWebsite(data) {

    cy.visit(data.websiteURL);

  }

  searchProduct(data) {

    cy.get('[data-test="search-query"]')
      .clear()
      .type(data.searchProduct + '{enter}');

  }

  openContactPage() {

    cy.contains('Contact').click();

  }

}

export default HomePage;
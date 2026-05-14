class HomePage {

  visit() {
    cy.visit('https://practicesoftwaretesting.com/');
  }

  search(product) {
    cy.get('[data-test="search-query"]')
      .clear()
      .type(product + '{enter}');
  }

}

export default HomePage;
class SortPage {

  sortProducts() {

    cy.get('[data-test="sort"]')
      .select('Price (High - Low)');

    cy.wait(2000);

  }

}

export default SortPage;
class SortPage {

  sortProducts() {

    cy.get('[data-test="sort"]')
      .select(1);

  }

}

export default SortPage;
class ProductPage {

  openFirstProduct() {

    cy.get('[data-test="product-name"]')
      .first()
      .click();

  }

  addToCart() {

    cy.contains('Add to cart')
      .click();

  }

  verifyProductAdded() {

    cy.contains('Product added to shopping cart')
      .should('be.visible');

  }

}

export default ProductPage;
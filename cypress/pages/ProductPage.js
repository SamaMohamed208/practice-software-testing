class ProductPage {

  openFirstProduct() {

    cy.get('[data-test="product-name"]', { timeout: 20000 })
      .first()
      .should('be.visible')
      .click();

    cy.url({ timeout: 10000 })
      .should('include', '/product');
  }

  addToCart() {

    cy.wait(3000);

    cy.contains('Add to cart', { timeout: 30000 })
      .should('exist')
      .should('be.visible')
      .click({ force: true });

    cy.contains('Product added to shopping cart', { timeout: 10000 })
      .should('be.visible');
  }

}

export default ProductPage;
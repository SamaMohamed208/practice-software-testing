class CartPage {

  openCart() {

    cy.get('[data-test="nav-cart"]')
      .click();

  }

  proceedCheckout() {

    cy.contains('Proceed to checkout')
      .click();

  }

  verifyCheckoutPage() {

    cy.url()
      .should('include', 'checkout');

  }

}

export default CartPage;
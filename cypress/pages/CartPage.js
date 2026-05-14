class CartPage {

  openCart() {
    cy.get('[data-test="nav-cart"]').click();
  }

  proceedCheckout() {
    cy.contains('Proceed to checkout').click();
  }

}

export default CartPage;
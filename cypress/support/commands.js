// VISIT
Cypress.Commands.add('visitHome', () => {
  cy.visit('https://practicesoftwaretesting.com/');
});

// SEARCH
Cypress.Commands.add('searchProduct', (product) => {
  cy.get('[data-test="search-query"]').clear().type(product + '{enter}');
});

Cypress.Commands.add('openFirstProduct', () => {

  cy.get('.card', { timeout: 20000 })
    .should('exist')
    .first()
    .click();
});

// ADD TO CART
Cypress.Commands.add('addToCart', () => {

  cy.contains('Add to cart', { timeout: 20000 })
    .should('be.visible')
    .click({ force: true });

  cy.contains('Product added to shopping cart', { timeout: 10000 })
    .should('be.visible');
});

// OPEN CART
Cypress.Commands.add('openCart', () => {
  cy.get('[data-test="nav-cart"]', { timeout: 10000 })
    .should('exist')
    .should('be.visible')
    .click({ force: true });

  cy.url().should('include', 'checkout');
});

// GO TO CHECKOUT
Cypress.Commands.add('goToCheckout', () => {
  cy.contains('Proceed to checkout', { timeout: 10000 })
    .should('be.visible')
    .click();
});

// LOGIN
Cypress.Commands.add('login', (email, password) => {
  cy.contains('Sign in').click();
  cy.get('#email').type(email);
  cy.get('#password').type(password);
  cy.get('[data-test="login-submit"]').click();
});
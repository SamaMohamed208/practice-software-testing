describe('Practice Software Testing Project', () => {

  let user;

  before(() => {
    cy.fixture('user').then((data) => {
      user = data;
    });
  });

  beforeEach(() => {
    cy.visitHome();
    cy.wait(2000);
  });

  // 1
  it('Homepage loads', () => {
    cy.get('body').should('exist');
    cy.get('body').should('be.visible');
    cy.url().should('include', 'practicesoftwaretesting');
  });

  // 2
  it('Login valid user', () => {
    cy.login(user.email, user.password);

    cy.contains('Sign out').should('exist');
    cy.get('body').should('be.visible');
    cy.url().should('not.include', 'login');
  });

  // 3
  it('Search product', () => {
    cy.searchProduct('hammer');

    cy.get('.card').should('exist');
    cy.get('body').should('contain', 'Hammer');
    cy.get('body').should('be.visible');
  });

  // 4
  it('Search invalid product', () => {
    cy.searchProduct('zzzzzzz');

    cy.get('.card').should('have.length', 0);
    cy.get('body').should('exist');
    cy.get('body').should('be.visible');
  });

  // 5
  it('Open product', () => {
    cy.openFirstProduct();

    cy.get('button').should('exist');
    cy.get('body').should('contain', '$');
    cy.get('body').should('be.visible');
  });

  // 6
  it('Add to cart', () => {
    cy.openFirstProduct();
    cy.addToCart();

    cy.contains('Product added to shopping cart').should('be.visible');
    cy.get('body').should('exist');
    cy.get('body').should('be.visible');
  });

  // 7
  it('Open cart → Checkout', () => {
    cy.openFirstProduct();
    cy.addToCart();
    cy.openCart();

    cy.url().should('include', 'checkout');
    cy.contains('Proceed to checkout').should('be.visible');
    cy.get('body').should('be.visible');

    cy.goToCheckout();

    cy.get('body').should('exist');
    cy.get('body').should('be.visible');
  });

  // 8
  it('Sort products', () => {
    cy.get('[data-test="sort"]').select(1);

    cy.get('.card').should('exist');
    cy.get('body').should('be.visible');
    cy.get('body').should('exist');
  });

  // 9
  it('Filters visible', () => {
    cy.get('[data-test="filters"]').should('exist');
    cy.get('[data-test="filters"]').should('be.visible');
    cy.get('body').should('exist');
  });

  // 10
  it('Navigate to contact page', () => {
    cy.contains('Contact').click();

    cy.url().should('include', 'contact');
    cy.get('form').should('exist');
    cy.get('body').should('be.visible');
  });

  // 11
  it('Click logo returns home', () => {
    cy.contains('Contact').click();
    cy.get('.navbar-brand').click();

    cy.url().should('eq', 'https://practicesoftwaretesting.com/');
    cy.get('body').should('exist');
    cy.get('body').should('be.visible');
  });

  // 12
  it('Categories exist', () => {
    cy.get('body').should('contain', 'Categories');
    cy.get('body').should('be.visible');
    cy.get('body').should('exist');
  });

  // 13
  it('Language dropdown', () => {
    cy.get('[data-test="language-select"]').click();

    cy.get('.dropdown-menu').should('be.visible');
    cy.get('body').should('exist');
    cy.get('body').should('be.visible');
  });

  // 14
  it('Footer visible', () => {
    cy.get('app-footer').should('exist');
    cy.get('app-footer').should('be.visible');
    cy.get('body').should('exist');
  });

  // 15
  it('Products displayed', () => {
    cy.get('.card').should('have.length.greaterThan', 0);
    cy.get('body').should('be.visible');
    cy.get('body').should('exist');
  });

});
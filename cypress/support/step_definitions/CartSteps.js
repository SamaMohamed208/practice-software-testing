import { Given, When, Then }
from "@badeball/cypress-cucumber-preprocessor";

import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();



When('user opens first product', () => {
  productPage.openFirstProduct();
});

When('user adds product to cart', () => {
  productPage.addToCart();
});

When('user opens cart', () => {
  cartPage.openCart();
});

Then('checkout page should be displayed', () => {
  cy.url().should('include', 'checkout');
  cy.contains('Proceed to checkout').should('exist');
  cy.get('body').should('be.visible');
});
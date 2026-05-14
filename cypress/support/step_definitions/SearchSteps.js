import { Given, When, Then }
from "@badeball/cypress-cucumber-preprocessor";

import HomePage from '../../pages/HomePage';

const homePage = new HomePage();

When('user searches for {string}', (product) => {
  homePage.search(product);
});

Then('products should be displayed', () => {
  cy.get('.card').should('exist');
  cy.get('body').should('be.visible');
  cy.get('body').should('contain', 'Hammer');
});
import { When, Then }
from "@badeball/cypress-cucumber-preprocessor";

import HomePage from '../../pages/HomePage';

const homePage = new HomePage();

before(function () {

  cy.fixture('user').then((data) => {

    globalThis.data = data;

  });

});

When('user searches for {string}', () => {

  homePage.searchProduct(data);

});

Then('products should be displayed', () => {

  cy.get('.card')
    .should('exist');

});
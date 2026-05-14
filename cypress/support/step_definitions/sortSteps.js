import { When, Then }
from "@badeball/cypress-cucumber-preprocessor";

import SortPage from '../../pages/SortPage';

const sortPage = new SortPage();

When('user sorts products', () => {

  sortPage.sortProducts();

});

Then('sorted products should be displayed', () => {

  cy.get('.card')
    .first()
    .should('be.visible');

  cy.get('body')
    .should('contain', '$');

});
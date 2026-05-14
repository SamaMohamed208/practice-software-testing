import { When, Then }
from "@badeball/cypress-cucumber-preprocessor";

import ContactPage from '../../pages/ContactPage';

const contactPage = new ContactPage();

before(function () {

  cy.fixture('user').then((data) => {

    globalThis.data = data;

  });

});

When('user clicks contact page', () => {

  contactPage.openContactPage();

});

When('user fills contact form', () => {

  contactPage.fillContactForm(data);

});

When('user submits contact form', () => {

  contactPage.submitForm();

});

Then('success message should be visible', () => {

  contactPage.verifySuccessMessage();

});
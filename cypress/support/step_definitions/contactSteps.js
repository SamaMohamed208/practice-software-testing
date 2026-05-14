import { When, Then }
from "@badeball/cypress-cucumber-preprocessor";

import ContactPage from '../../pages/ContactPage';

const contactPage = new ContactPage();

When('user clicks contact page', () => {

  contactPage.openContactPage();

});

When('user fills contact form', () => {

  contactPage.fillContactForm();

});

When('user submits contact form', () => {

  contactPage.submitForm();

});

Then('success message should be visible', () => {

  contactPage.verifySuccessMessage();

});
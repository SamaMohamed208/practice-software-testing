import { Given, When, Then }
from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from '../../pages/LoginPage';

const loginPage = new LoginPage();

Given('user opens the website', () => {
  cy.visit('https://practicesoftwaretesting.com/');
});

When('user enters valid email and password', () => {

  loginPage.clickSignIn();

  loginPage.enterEmail(
    'customer@practicesoftwaretesting.com'
  );

  loginPage.enterPassword('welcome01');
});

When('clicks login button', () => {
  loginPage.clickLoginButton();
});

Then('login should be successful', () => {
  cy.contains('Sign out').should('exist');
});
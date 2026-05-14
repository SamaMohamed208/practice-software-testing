import { Given, When, Then }
from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';

const loginPage = new LoginPage();
const homePage = new HomePage();

before(function () {

  cy.fixture('user').then((data) => {

    globalThis.data = data;

  });

});

Given('user opens the website', () => {

  homePage.visitWebsite(data);

});

When('user enters valid email and password', () => {

  loginPage.clickSignIn();

  loginPage.enterEmail(data);

  loginPage.enterPassword(data);

});

When('clicks login button', () => {

  loginPage.clickLoginButton();

});

Then('login should be successful', () => {

  loginPage.verifySuccessfulLogin();

});
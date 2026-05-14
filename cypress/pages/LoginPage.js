class LoginPage {

  clickSignIn() {

    cy.contains('Sign in').click();

  }

  enterEmail(data) {

    cy.get('#email')
      .type(data.email);

  }

  enterPassword(data) {

    cy.get('#password')
      .type(data.password);

  }

  clickLoginButton() {

    cy.get('[data-test="login-submit"]')
      .click();

  }

  verifySuccessfulLogin() {

    cy.url({ timeout: 10000 })
      .should('include', '/account');

  }

}

export default LoginPage;
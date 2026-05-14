class LoginPage {

  clickSignIn() {
    cy.contains('Sign in').click();
  }

  enterEmail(email) {
    cy.get('#email').type(email);
  }

  enterPassword(password) {
    cy.get('#password').type(password);
  }

  clickLoginButton() {
    cy.get('[data-test="login-submit"]').click();
  }

}

export default LoginPage;
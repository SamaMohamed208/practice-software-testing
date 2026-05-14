class ContactPage {

  openContactPage() {

    cy.contains('Contact')
      .click();

  }

 fillContactForm() {

  cy.get('#first_name')
    .type('Sama');

  cy.get('#last_name')
    .type('Mohamed');

  cy.get('#email')
    .type('sama@test.com');

  cy.get('#subject')
    .select('Customer service');

  cy.get('#message')
    .type(
      'This is automation testing project for Cypress and BDD cucumber testing.'
    );

}

  submitForm() {

    cy.contains('Send')
      .click();

  }

  verifySuccessMessage() {

  cy.url().should('include', 'contact');

  cy.get('body').should('be.visible');

}

}

export default ContactPage;
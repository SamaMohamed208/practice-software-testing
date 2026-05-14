class ContactPage {

  openContactPage() {

    cy.contains('Contact').click();

  }

  fillContactForm(data) {

    cy.get('#first_name')
      .type('Sama');

    cy.get('#last_name')
      .type('Mohamed');

    cy.get('#email')
      .type(data.contactEmail);

    cy.get('#subject')
      .select('Customer service');

    cy.get('#message')
      .type(data.contactMessage);

  }

  submitForm() {

    cy.contains('Send')
      .click();

  }

  verifySuccessMessage() {

    cy.contains('Thanks')
      .should('be.visible');

  }

}

export default ContactPage;
 describe('automation e2e testcase', () => {

  it('product button', () => {
 cy.visit('https://automationexercise.com/');
    cy.get('.material-icons.card_travel').click();

  });
 }) 
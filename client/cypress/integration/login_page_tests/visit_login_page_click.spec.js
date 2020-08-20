context('Login page test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  });

  it('Visit Login page, see Button "Login & click"', () => {
    cy.get('#phone')
      .type('1234567890');
    cy.get('#password')
      .type('123456789')

    cy.get('#login').click();
    cy.url().should('include', '/profile/personal');
  });
});
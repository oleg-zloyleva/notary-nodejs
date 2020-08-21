context('Home page test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Visit home page, see Button "Login & click"', () => {
    cy.contains('Увійти').click();
    cy.url().should('include', '/login');
  });

  it('Visit home page, see Button "Register" & click', () => {
    cy.contains('Реєстрація').click();
    cy.url().should('include', '/register');
  });
});
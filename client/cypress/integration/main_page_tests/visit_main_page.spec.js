context('Home page test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Visit home page, see Main title', () => {
    cy.contains('Lorem ipsum dolor sit amet')
  });

  it('Visit home page, see Button "Login"', () => {
    cy.contains('Увійти')
  });

  it('Visit home page, see Button "Register"', () => {
    cy.contains('Реєстрація')
  });


});
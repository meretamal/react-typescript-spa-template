describe('Home Page', () => {
  it('Should load the page correctly', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'React Typescript SPA Starter');
  });
});

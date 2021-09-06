describe('Smoke test', () => {
  it('Form content renders', () => {
    cy.visit('/');

    cy.title().should('eq', 'playwright with react + typescript + webpack');

    // there are 3 styles of doing this in Cypress, most of the time they are interchangeable
    cy.contains('.pt-3', 'Please Submit the Form');
    cy.contains('Username');
    cy.get('.row-span-2 > .text-center').should('contain', 'submit');

    cy.screenshot();
  });
})

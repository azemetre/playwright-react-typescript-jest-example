// the advised pattern would be to run the generic test in CI with a viewport command line parameter
// since we are doing a 1:1 comparison, this test exists

describe('Form tests', () => {
  it('Unable to submit empty form', () => {
    cy.viewport('iphone-xr');

    cy.visit('/');

    cy.get('.row-span-2 > .text-center').click();

    cy.contains('a username is required');

    cy.screenshot();
  });
});

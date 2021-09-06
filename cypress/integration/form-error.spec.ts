describe('Form tests', () => {
    it('Unable to submit empty form', () => {
      cy.visit('/');

      cy.get('.row-span-2 > .text-center').click();

      cy.contains('a username is required');

      cy.screenshot();
    });
});

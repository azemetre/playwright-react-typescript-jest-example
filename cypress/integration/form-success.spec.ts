describe('Form tests', () => {
  it('Can submit a form when filled correctly', () => {
    cy.visit('/');

    cy.contains('.pt-3','Please Submit the Form');

    cy.get('.flex-shrink').type('evi.nemeth');

    cy.get('.row-span-2 > .text-center').click();

    cy.contains('Thank you for Submitting');

    cy.screenshot();
  });
});

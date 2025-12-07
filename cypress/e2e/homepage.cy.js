describe('Homepage', () => {
    context('homepage should have headliner visible', () => {
        it('should confirm if headliner is present', () => {
        //FIRST TEST FOR 1ST CONTEXT    
        cy.visit('/');
        cy.contains('Your guided path to programming enlightment').should('be.visible');
        });
    });

    context('Homepage Button', () => {
        it('should test to confirm if Begin Journey button leads to Account page', () => {
        //SECOND TEST FOR 2ND CONTEXT
        cy.visit('/');
        cy.contains('BEGIN JOURNEY').click();
        cy.url().should('include', '/account');
        });
    });
});
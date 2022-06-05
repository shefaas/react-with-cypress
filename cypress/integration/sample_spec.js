describe('My First Test in Cypress', () => {
    it('does not do much', () => {
        expect(true).to.equal(true)
    })
})

describe('Visit Google page', () => {
    it('Visit Google page', () => {
        cy.visit('https://google.com')
    })
    it('Look for Gmail word', () => {
        cy.contains('Gmail').click()
    })

    it('Reach Gmail page', () => {
        cy.url().should('include', '/gmail/about')
    })
})
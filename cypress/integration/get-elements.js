describe('Getting an element using unique test selector and custom get functions', () => {
    it('Clicks on a hyperlink using data-test selector', () => {
        cy.visit('/')
        cy.getBySel('react-website-hyperlink').click()
    })
})
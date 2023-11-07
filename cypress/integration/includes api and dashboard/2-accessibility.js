/* These are accessibility tests to verify 508 compliance is being met */
before(() => {
    Cypress.on('window:before:load', (win) => {
      win.addEventListener('unhandledrejection', (event) => {
        const msg = `UNHANDLED PROMISE REJECTION: ${event.reason}`
  
        // fail the test
        throw new Error(msg)
      })
    })
})
describe('Accessibility Testing', () => {
    // Overview
    it(`Overview root, ${Cypress.env('overview_root')}, meets 508 compliance`, () => {
        cy.visit(Cypress.env('overview_root'))
        cy.wait(5000)
        cy.injectAxe()
        cy.checkA11y()
    })
    it(`Overview pages meet 508 compliance`, () => {
        const pages = Cypress.env('overview_pages')
        for (const ea in pages) {
            const page_url = `${Cypress.env('overview_root')}${pages[ea]}`
            cy.visit(page_url)
            cy.wait(5000)
            cy.injectAxe()
            cy.checkA11y()  
        }
    })
})
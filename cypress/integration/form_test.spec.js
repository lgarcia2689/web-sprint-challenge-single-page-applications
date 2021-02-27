beforeEach(() => { 
    cy.visit('http://localhost:3002')
})

describe('Quotes app', () => {
    
    const homeButtonInput = () => cy.get('button[id=homeButton]')
    const orderButtonInput = () => cy.get('button[id=orderButton]')
    const addToOrderInput = () => cy.get('button[id=addToOrder]')


    const nameInput = () => cy.get('input[name=name]')
  
    
    it('sanity check to make sure our tests work', () => {
        expect(1 + 1).to.equal(2)
        expect(1 + 1).not.to.equal(3)
        expect(7).to.equal(7)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    it('the proper elements are showing',() =>{
        homeButtonInput().should('exist')
        orderButtonInput().should('exist')
    })
    
    it('order button works and takes us to order menu',() =>{
        orderButtonInput()
        .click()
        .pause()
    })

    it('can type in inputs',() => {
        nameInput()
        .should('have.value','')
        .type('name')
        .should('have.value','name')

    // describe('Filling out the inputs',() =>{
    //     it('add to order button is disabled', () =>{
    //         addToOrderInput().should('be.disabled')
    //     })

    })

})
 
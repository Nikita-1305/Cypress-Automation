

describe('Registration functionality',() =>
    {
        it('Register new user',() => {


            cy.visit('https://parabank.parasoft.com')
            cy.get('a[href="register.htm"]').click()
            cy.get('input[id="customer.firstName"]').type('Test')
            cy.get('input[id="customer.lastName"]').type('user')
            cy.get('input[id="customer.address.street"]').type('India')
            cy.get('input[id="customer.address.city"]').type('city')
            cy.get('input[id="customer.address.state"]').type('state')
            cy.get('input[id="customer.address.zipCode"]').type('11111111')
            cy.get('input[id="customer.phoneNumber"]').type('0123456789')
            cy.get('input[id="customer.ssn"]').type('1234')
            cy.get('input[id="customer.username"]').type('testuser123')
            cy.get('input[id="customer.password"]').type('password')
            cy.get('input[id="repeatedPassword"]').type('password')
            cy.get('[value="Register"]').click()
        })



        

       
    })
import 'cypress-fill-command'
import {faker} from '@faker-js/faker'
import 'cypress-file-upload'
import 'cypress-mailslurp'
let home
describe ("", ()=>{
    
    it ("", ()=>{
        cy.clickHomePageSignupButton();
        cy.fillPersonalDetails();
        cy.fillSocialDetailsAndSignUp();

       
    })

})
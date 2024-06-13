import 'cypress-fill-command'
import {faker} from '@faker-js/faker'
import 'cypress-file-upload'
import 'cypress-mailslurp'
let home
describe ("", ()=>{
    
    it ("User Signup", ()=>{
        cy.clickHomePageSignupButton();
        cy.fillPersonalDetails();
        cy.fillSocialDetailsAndSignUp();
        cy.verifyOTPPage();
        cy.insertOTP();
       
    })

})
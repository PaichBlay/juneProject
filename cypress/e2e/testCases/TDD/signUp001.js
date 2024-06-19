import 'cypress-fill-command'
import {faker} from '@faker-js/faker'
import 'cypress-file-upload'
import 'cypress-mailslurp'

describe ("Verification of signup scenarios", ()=>{
    
    it ("Verify that a user is able to signup having filled all mandatory and optional fields", ()=>{
        cy.clickHomePageSignupButton();
        cy.fillPersonalDetails();
        cy.fillSocialDetailsAndSignUp();
        cy.verifyOTPPage();
        cy.insertOTP();
    })

})
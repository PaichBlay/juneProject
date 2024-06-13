import {faker} from '@faker-js/faker'
let home
let personal
let social
let otpPage


before('load all element locators', ()=>{
    cy.fixture('selectors').then((ele)=>{
        home = ele.homePage
        personal = ele.personalDetails
        social = ele.socialDetails
        otpPage = ele.otpPage
    })
})


Cypress.Commands.add('clickHomePageSignupButton', ()=>{
    cy.clickAnyElement(home.homePageSignupButton);
})


Cypress.Commands.add('fillPersonalDetails',()=>{
    cy.typeAnyText(personal.fullNameField, faker.person.fullName());
    cy.typeAnyText(personal.businessNameField, faker.company.buzzNoun());
    cy.typeAnyText(personal.businessNameEmail, faker.internet.userName() + '@paich.com');
    cy.typeAnyText(personal.phoneField, faker.phone.number('+4474########'));
    cy.typeAnyText(personal.businessRegField, 'GBC - 2');
    cy.clickAnyElement(personal.nextButton);
})

Cypress.Commands.add('fillSocialDetailsAndSignUp', ()=>{
    cy.typeAnyText(social.websiteField, faker.internet.domainName());
    cy.typeAnyText(social.instagramHandleField, '@'+faker.internet.userName()).invoke('val') .should('match',/@/);  //Assert that the handle contains the "@" symbol
    cy.typeAnyText(social.twitterHandleField, '@'+faker.internet.userName()).invoke('val') .should('match',/@/); // Assert that it contains the "@" symbol
    cy.clickAnyElement(social.howYouHeardCombo)
    cy.typeAnyText(social.howYouHeardCombo, 'Instagram');
    cy.contains(social.howYouHeardSelected, 'Instagram').click();
    cy.typeAnyText(social.passwordField, 'Pa$$w0rd!');
    cy.clickAnyElement(social.signupPageButton)
})































// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
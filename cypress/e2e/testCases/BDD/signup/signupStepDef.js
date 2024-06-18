import { Given,When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {faker} from '@faker-js/faker';
import 'cypress-mailslurp';

let home
let personal
let social
let otpPage
let inboxId
let login
let dashboardPage

before('load all element locators', ()=>{
    cy.fixture('selectors').then((ele)=>{
        home = ele.homePage
        login = ele.loginDetails
        personal = ele.personalDetails
        social = ele.socialDetails
        otpPage = ele.otpPage
        dashboardPage = ele.dashboardDetails
    })
})

Given(/^User has navigated to the trymima page$/, () => {
    cy.visit('/')
});

When(/^User clicks the signup button$/, () => {
	cy.clickAnyElement(home.homePageSignupButton)
    
});

When(/^User provides full name$/, () => {
	cy.typeAnyText(personal.fullNameField, faker.person.fullName())
    cy.log(faker.person.fullName())
});

When(/^User provides business name$/, () => {
	cy.typeAnyText(personal.businessNameField, faker.company.buzzNoun())
});

When(/^User provides business email$/, () => {
	//cy.insertEmail();
    cy.typeAnyText(personal.businessNameEmail, faker.internet.email({provider:'paich.com'}));
});

When(/^User provides phone number$/, () => {
	cy.typeAnyText(personal.phoneField, faker.phone.number('+4474########'));
});

When(/^User provides business registration number$/, () => {
	cy.typeAnyText(personal.businessRegField, 'GBC - 2')
});

When(/^User clicks the next button$/, () => {
	cy.clickAnyElement(personal.nextButton)
});

Then(/^User is presented with social details to complete$/, () => {
	cy.fillSocialDetailsAndSignUp();
});


When(/^User leaves full name blank$/, () => {
	cy.verifyTextfieldContent(personal.fullNameField,'');
});

When(/^user completes social details$/, () => {
	cy.fillSocialDetailsAndSignUp();
});

Then(/^User should not be able to navigate to the next page$/, () => {
    cy.NavigateBack(personal.back);
	cy.checkErrorMessgae(personal.fullnameError,'Full Name is required');
});

When(/^User leaves business name blank$/, () => {
	cy.verifyTextfieldContent(personal.businessNameField,'');
});

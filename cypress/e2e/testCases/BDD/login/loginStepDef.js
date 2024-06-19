
import { Given,When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {faker} from '@faker-js/faker';
import 'cypress-mailslurp';

let home
let personal
let social
let otpPage
let login
let dashboardPage
let loginEmail
let loginPassowrd

before('load all element locators', ()=>{
    cy.fixture('selectors').then((ele)=>{
        home = ele.homePage
        login = ele.loginDetails
        personal = ele.personalDetails
        social = ele.socialDetails
        otpPage = ele.otpPage
        dashboardPage = ele.dashboardDetails
    })

    cy.fixture('login-details').then((el)=>{
        loginEmail = el.email
        loginPassowrd = el.password
    })

})

Given(/^User has navigated to the trymima page$/, () => {
	return true;
});


When(/^User clicks the login button$/, () => {
	cy.clickAnyElement(home.homePageLoginButton)
});

When(/^User provides a valid username and password$/, () => {
    cy.typeAnyText(login.userEmailField,loginEmail);
    cy.typeAnyText(login.userPasswordField,loginPassowrd);
    cy.clickAnyElement(login.loginPageLoginButton);
});


Then(/^User is should be able to login successfullly$/, () => {
	cy.get(dashboardPage.welcomeMsgLabel).should('contain.text', 'Welcome back')
});


When(/^User provides an invalid username and password$/, () => {
    cy.typeAnyText(login.userEmailField,'loginEmail');
    cy.typeAnyText(login.userPasswordField,'loginPassowrd');
    cy.clickAnyElement(login.loginPageLoginButton);
});

When(/^User leaves username and password blank$/, () => {
    cy.typeAnyText(login.userEmailField,'');
    cy.typeAnyText(login.userPasswordField,'');
    cy.clickAnyElement(login.loginPageLoginButton);
});


When(/^User should see an error message indicating that username and password are required$/, () => {
    cy.checkErrorMessgae(personal.emailFieldError,'Password is required')
});

When(/^an alert should be dispalyed to the user for incorrect credentials supplied$/, () => {
   // cy.get('.Toastify__toast.Toastify__toast--close-on-click.Toastify__toast--error.Toastify__toast-theme--light > div[role="alert"]').should('be.visible').and('contain', 'Invalid User Credentials'); 
});
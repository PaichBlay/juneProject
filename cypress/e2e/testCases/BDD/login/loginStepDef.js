
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

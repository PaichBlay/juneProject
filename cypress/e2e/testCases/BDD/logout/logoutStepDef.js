
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

Given(/^I am logged in$/, () => {
	cy.clickAnyElement(home.homePageLoginButton)
    cy.typeAnyText(login.userEmailField,loginEmail);
    cy.typeAnyText(login.userPasswordField,loginPassowrd);
    cy.clickAnyElement(login.loginPageLoginButton);
    cy.get(dashboardPage.welcomeMsgLabel).should('contain.text', 'Welcome back')
});

When(/^I click the logout button$/, () => {
    cy.get('.AppPage_topside__6Eu7D .IconButton_icon__cla1w').last().click({ force: true })
    cy.get('.Settings_logout__U3JnU > :nth-child(1) > .sc-imWYAI').should('exist').click()
});


Then(/^I should see a message indicating I have logged out successfully$/, () => {
    cy.get('.Login_logintext__title__0DSKp').should('contain.text', 'Log in')
});


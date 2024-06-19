import 'cypress-fill-command'
import {faker} from '@faker-js/faker'
import 'cypress-file-upload'
import 'cypress-mailslurp'
let loginEmail
let loginPassowrd

describe('Login Scenarios', ()=>{

   beforeEach('load login details json file', ()=>{
        cy.fixture('login-details').then((el)=>{
            loginEmail = el.email
            loginPassowrd = el.password
        })
    })
    

    it.only ('Verify that a valid user is able to login', ()=>{
        cy.login(loginEmail, loginPassowrd);
    })

    it.skip ('Verify that a user is unable to login with wrong password', ()=>{
        cy.login(loginEmail, 'loginPassowrd');
        //Toastify__toast-body
    })

    it.skip ('Verify that a user is unable to login with wrong username', ()=>{
        cy.login("loginEmail", loginPassowrd);
        //Toastify__toast-body
    })

})




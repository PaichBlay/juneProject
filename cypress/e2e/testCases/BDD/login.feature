Feature: Login Customer Journey -  Mima Web application

    As a user, I should be able to Signup
    And have access to the web application

    Scenario: Verify that a valid user is able to login successfullly with valid username and password
        Given User has navigated to the trymima page
        When User clicks the login button
        And User provides a valid username and password
        Then User is should be able to login successfullly
        
    Scenario: Verify that user is not able to login with incorrect username and password
        Given User has navigated to the trymima page
        When User clicks the login button
        And User provides an invalid username and password
        Then an alert should be dispalyed to the user for incorrect credentials supplied

    Scenario: Verify that user is unable to login with blank credentials
        Given User has navigated to the trymima page
        When User clicks the login button
        And User leaves username and password blank
        Then User should see an error message indicating that username and password are required
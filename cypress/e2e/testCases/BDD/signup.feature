Feature: Signup Journey -  Mima Web application

    As a user, I should be able to Signup
    And have access to the web application

    Scenario: Verify that user is able to sign up having filled all fields (mandatory and optional)
        Given User has navigated to the trymima page
        When User clicks the signup button
        And User provides full name
        And User provides business name
        And User provides business email
        And User provides phone number
        And User provides business registration number
        And User clicks the next button
        Then User is presented with social details to complete
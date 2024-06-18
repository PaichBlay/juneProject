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


    
    Scenario: Verify that user is not able to sign up having filled all mandatory fields leaving full name blank
        Given User has navigated to the trymima page
        When User clicks the signup button
        And User leaves full name blank
        And User provides business name
        And User provides business email
        And User provides phone number
        And User provides business registration number
        And User clicks the next button
        And user completes social details
        Then User should not be able to navigate to the next page

    
    Scenario: Verify that user is not able to sign up when business name is blank
        Given User has navigated to the trymima page
        When User clicks the signup button
        And User provides full name
        And User leaves business name blank
        And User provides business email
        And User provides phone number
        And User provides business registration number
        And User clicks the next button
        And user completes social details
        Then User should not be able to navigate to the next page
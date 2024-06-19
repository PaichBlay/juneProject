Feature: Password Reset Journey -  Mima Web application

    As a user, I should be able to reset my password
    And have access to the web application

    Scenario: Password reset link
        Given I am on the login page
        When I click on the "Forgot password?" link
        Then I should be redirected to the password reset page
        And I should see a form to enter my email for password reset
        And I should be able to login with the new credentials
Feature: Logout Functionality -  Mima Web

    As a user, I should be able to logout successfully

    Scenario: Verify that a valid user is able to logout after successful log in
        Given I am logged in
        When I click the logout button
        Then I should see a message indicating I have logged out successfully


        
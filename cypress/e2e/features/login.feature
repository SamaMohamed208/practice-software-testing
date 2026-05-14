Feature: Login Functionality

Scenario: Valid Login

Given user opens the website
When user enters valid email and password
And clicks login button
Then login should be successful
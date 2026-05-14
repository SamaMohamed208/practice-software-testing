Feature: Contact Page

Scenario: Submit contact form

Given user opens the website
When user clicks contact page
And user fills contact form
And user submits contact form
Then success message should be visible
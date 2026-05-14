Feature: Search Product

Scenario: Search valid product

Given user opens the website
When user searches for "Hammer"
Then products should be displayed
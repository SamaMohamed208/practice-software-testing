Feature: Cart Functionality

Scenario: Open cart and proceed to checkout

Given user opens the website
When user opens first product
And user adds product to cart
And user opens cart
Then checkout page should be displayed
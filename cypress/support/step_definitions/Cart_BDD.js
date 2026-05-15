import { When, Then }
from "@badeball/cypress-cucumber-preprocessor";

import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';

const productPage = new ProductPage();
const cartPage = new CartPage();

When('user opens first product', () => {

  productPage.openFirstProduct();

});

When('user adds product to cart', () => {

  productPage.addToCart();

});

When('user opens cart', () => {

  cartPage.openCart();

});

Then('checkout page should be displayed', () => {

  cartPage.verifyCheckoutPage();

});
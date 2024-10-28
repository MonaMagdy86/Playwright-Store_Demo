import {expect, test} from "@playwright/test";
import exp from "constants";
import { TIMEOUT } from "dns";
import {LoginPage} from '../pages/LoginPage'
import { AddItemPage } from "../pages/AddItemPage";
import { CheckOutPage } from "../pages/CheckOutPage";

   
    test("add item",async({page})=> {

      const login=new LoginPage(page);
      const add=new AddItemPage(page)
      const check=new CheckOutPage(page);
      await login.goToWebsite();
      await login.Login("Dida","dida123");
      await add.selectCategory();
      //await expect(page).toHaveURL("https://www.demoblaze.com/index.html#");
      await add.selectlabtop();
      page.waitForLoadState();
      await add.clickOnAddToCart();
      await check.goToCartPage();
      await expect(page).toHaveURL("https://www.demoblaze.com/cart.html");
      await check.clickOnPlaceOrderButton();
      await check.enterData("Mona","Egypt","Giza","1234","10","2024");
      await check.clickOnPurchaseButton()
      await check.clickOnOkButton()
     })
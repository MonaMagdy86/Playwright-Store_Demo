import {expect, test} from "@playwright/test";
import exp from "constants";
import { TIMEOUT } from "dns";
import {LoginPage} from '../pages/LoginPage'
import { AddItemPage } from "../pages/AddItemPage";

   
    test("add item",async({page})=> {

      const login=new LoginPage(page);
      const add=new AddItemPage(page)
      await login.goToWebsite();
      await login.Login("Dida","dida123");
      await add.selectCategory();
      await add.selectlabtop();
      await add.clickOnAddToCart();
     
      
     })
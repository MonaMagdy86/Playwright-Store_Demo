import {expect, test} from "@playwright/test";
import exp from "constants";
import { TIMEOUT } from "dns";
import {LoginPage} from '../pages/LoginPage'


   
    test("login with valid data",async({page})=> {

      const login=new LoginPage(page);
      await login.goToWebsite();
      await login.Login("Dida","dida123");
     // await expect(login.WelcomeUser).toBeVisible();
     // await login.getWelcomeMessage();
     // await expect(login.WelcomeUser).toBeVisible();
     
      
     })
     test("login with invalid data",async({page})=> {

      const login=new LoginPage(page);
      await login.goToWebsite();
      await login.Login("Monadff","");
     
      
     })
            
        


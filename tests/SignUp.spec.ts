import {expect, test} from "@playwright/test";
import exp from "constants";
import { TIMEOUT } from 'dns';
import {SignUpPage} from '../pages/SignUpPage';
   

    test("Sign up with valid data",async({page})=> {

      const signUp = new SignUpPage(page);
      await signUp.goToWebsite();
      await signUp.SignUp("Mona","mona@123");
      page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
      });
     })
        


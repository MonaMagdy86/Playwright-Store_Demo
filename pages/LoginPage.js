const {expect} =require ('@playwright/test')
exports.LoginPage = class LoginPage{

    constructor(page){
        this.page=page;
        this.loginLink=page.getByRole('link', { name: 'Log in' });
        this.userNameInput=page.locator('#loginusername')
        this.password=page.locator('#loginpassword')
        this.loginButton=page.getByRole('button',{name: 'Log in'});
        this.WelcomeUser=page.locator("#logout2");
    }
      async goToWebsite(){

      await  this.page.goto("https://www.demoblaze.com/");
      }

      async Login(username,password){
        await this.loginLink.click();
        await  this.userNameInput.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
      }
     async getWelcomeMessage(){
      const t=await this.WelcomeUser.innerText();
      console.log(t)
     } 
}
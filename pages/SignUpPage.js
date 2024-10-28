const {expect} =require ('@playwright/test')
exports.SignUpPage = class SignUpPage{

    constructor(page){
        this.page=page;
        this.signUpLink=page.getByRole('link', { name: 'Sign up' });
        this.userNameInput=page.locator('#sign-username')
        this.password=page.locator('#sign-password');
        this.signUpButton=page.getByRole('button',{name: 'Sign up'});
    }
      async goToWebsite(){
     
      await  this.page.goto("https://www.demoblaze.com/");
      }

      async SignUp(username,password){
        await this.signUpLink.click();
        await  this.userNameInput.fill(username);
        await this.password.fill(password);
        await this.signUpButton.click(); 
      }

}
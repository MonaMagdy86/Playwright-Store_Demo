const {expect} =require ('@playwright/test');
const { waitForDebugger } = require('inspector');
exports.CheckOutPage = class CheckOutPage{

    constructor(page){
        this.page=page;
        this.clickOnCartIcon=page.locator("#cartur");
        this.PlaceOrderButton=page.getByRole('button',{ name: "Place Order"});
      //  this.name=page.getByLabel('Name:')
        this.name=page.getByLabel('#name')
        this.country=page.getByLabel('Country:')
        this.city= page.getByLabel('City:')
        this.card=page.getByLabel('Credit card:')
        this.month=page.getByLabel('Month:')
        this.year=page.getByLabel('Year:')
        this.purchaseButton=page.getByText('Purchase')
        this.okButton=page.getByText('Ok')

    }
      
async goToCartPage(){
    await this.clickOnCartIcon.click();
}
async clickOnPlaceOrderButton(){
    await this.PlaceOrderButton.click();
}

async enterData(name,country,city,card,month,year){
    this.enterName(name);
    this.enterCountry(country);
    this.enterCity(city);
    this.enterCard(card);
    this.enterMonth(month);
    this.enterYear(year);
}
    
async enterName(name){
    //await this.name.waitFor({state: "visible"})
    await this.name.fill(name)
}
async enterCountry(country){
    await this.country.fill(country)
}
async enterCity(city){
    await this.city.fill(city)
}
async enterCard(card){
    await this.card.fill(card)
}
async enterMonth(month){
    await this.month.fill(month)
}
async enterYear(year){
    await this.year.fill(year)
}
async clickOnPurchaseButton(){
    await this.purchaseButton.waitFor({state: "attched"})
    await this.purchaseButton.click();
}
async clickOnOkButton(){
    await this.okButton.click();
}
}
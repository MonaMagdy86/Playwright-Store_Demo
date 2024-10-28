const {expect} =require ('@playwright/test')
exports.AddItemPage = class AddItemPage{

    constructor(page){
        this.page=page;
       // this.selectCat=page.locator('[onclick="byCat(\'notebook\')"]')
        this.cat=page.getByRole('link', { name: 'Laptops' })
        this.selectItem=page.getByRole('link', { name: 'Sony vaio i7' })
        this.addToCartButton=page.getByRole('link', { name: 'Add to cart' })
       // this.addToCartButton=page.locator('//a[@class="btn btn-success btn-lg"]')

    }
      
async selectCategory(){
  //this.page.waitForPageLoad();
 // await this.selectCat.scrollIntoViewIfNeeded();

  await this.cat.click();
}
async selectlabtop(){
  await this.selectItem.waitFor({state: "visible"});
  await this.selectItem.click();
}   
async clickOnAddToCart(){
  this.page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  //await this.selectCat.waitFor({state: "visible"});
  await this.addToCartButton.click();
}  
}
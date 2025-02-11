import { test, expect } from "@playwright/test";
import CartPage from "../pages/cart.page";
const path = require('path');

test.describe('Upload File', () => {
    let cartPage: CartPage;

    const fileName = ['logotitle.png']

    for (const name of fileName) {
        test(`Should upload a ${name} file`, async ({ page }) => {
            cartPage = new CartPage(page);
    
            // Open url
            await page.goto("https://practice.sdetunicorns.com/cart/")
    
            // provide test file path 
            const filePath = path.join(__dirname, `../data/${name}`)
    
            // upload test file
            cartPage.uploadComponent().uploadFile(filePath); 
    
            // assertion
            await expect(cartPage.uploadComponent().successTxt)
                .toContainText('uploaded successfully', {timeout: 10000}); 
        
            
        })
    }

   
    
    test.describe('Upload File', () => {
        test('Should upload a test file on a hidden input field', async ({ page }) => {
            // Open url
            await page.goto("https://practice.sdetunicorns.com/cart/")
    
            // provide test file path 
            const filePath = path.join(__dirname, '../data/logotitle.png')
    
            // upload test file 
            await page.setInputFiles('input#upfile_1', filePath); // throws error
    
            // click the submit button
            await page.locator('#upload_1').click();
    
            // assertion
            await expect(page.locator('#wfu_messageblock_header_1_1'))
                .toContainText('uploaded successfully');
        })

    })

})

function toContainText(arg0: string, arg1: { timeout: number; }) {
    throw new Error("Function not implemented.");
}

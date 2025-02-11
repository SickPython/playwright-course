import { test, expect } from "@playwright/test";
import HomePage from "../pages/home.page"; 

test.describe('Home', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);

        await homePage.navigate()

    })

    test('Open HomePage and verify title', async ({ page }) => {
        // open url
        //await page.goto('https://practice.sdetunicorns.com')

        // verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')   
    });
    
    test('Open AboutPage and verify title', async ({ page }) => {
        // open url
        // await page.goto('https://practice.sdetunicorns.com/about/')
        await homePage.navigate()
    
        // verify title
        await expect(page).toHaveTitle("About – Practice E-Commerce Site")
    });

    test('Click get started button using CSS selector', async ({ page }) => {

        // open url
        // await page.goto('https://practice.sdetunicorns.com/');


        await expect(page).not.toHaveURL(/.*#get-started/);

        // click the button
        // await page.locator('#get-started').click();
        await homePage.getStartedBtn.click()

        // verify url has #get-started
        await expect(page).toHaveURL(/.*#get-started/) //"https://practice.sdetunicorns.com/#get-started"
    });

    test('Verify heading text is visible using text selector', async ({ page }) => {

        // open url
        // await page.goto('https://practice.sdetunicorns.com/')
        // fix the test locator
        // const headingText = page.locator('text=Think different. Make different.')
        const headingText = await homePage.headingText

        // verify heading test is visible
        await expect(headingText).toBeVisible();
    });

    test('Verify home link is enabled using text and css selector', async ({ page }) => {

        // open url
        // await page.goto('https://practice.sdetunicorns.com/')

        // find the home text
        //const homeText = await page.locator('#zak-primary-menu >> text=Home')
        // const homeText = await page.locator('#zak-primary-menu:has-text("Home")')
        const homeText = await homePage.homeLink
        // verify heading text is visible
        await expect(homeText).toBeEnabled();
    });

    test('Verify search icon is visible using xpath selector', async ({ page }) => {
        // open url
        // await page.goto('https://practice.sdetunicorns.com/')

        // find search icon
        // const searchIcon = page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']")
        const searchIcon = await homePage.searchIcon
        // verify search icon is visible
        await expect(searchIcon).toBeVisible();
    });

    test('Verify the text of all nav links', async ({ page }) => {
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];
        // open url
        // await page.goto('https://practice.sdetunicorns.com/')

        // find the nav links
        // const navLinks = page.locator("#zak-primary-menu li[id*=menu]")
        // const navLinks = await homePage.navLinks

        // verify nav links text
        expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
    });

});
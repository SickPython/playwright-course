import { test, expect } from "@playwright/test";
import BlogPage from "../pages/blog.page";

test.describe('Blog', () => {
    let blogPage: BlogPage;
    test('Verify Recent Posts count and verify the length of each list', async ({ page }) => {
        blogPage = new BlogPage(page);

        // open blog page
        await blogPage.navigate()

        // loop through the lsit and assert the char length > 10
        for (const el of await blogPage.recentPostsList.elementHandles()) {
            expect(((await el.textContent())!.trim()).length).toBeGreaterThan(10)

        }


        // assert the total length  = 5
        expect(await blogPage.recentPostsList.count()).toEqual(5)
    })
    
})

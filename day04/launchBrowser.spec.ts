import test, { chromium } from "@playwright/test";

test("Launching Browser using local Configuration",async()=>{
    // step 1 : launch the browser
     const browser = await chromium.launch({headless:false})
    // step 2 : create a new browser context 
     const context = await browser.newContext()
     //step 3 : create a new indenpendent page
     const page  = await context.newPage()
    // step 4 : Launch the url
    await page.goto("https://leaftaps.com/opentaps/control/login")
    // step 5 : print the title of the webpage
     const titleOfWindow = await page.title()
     console.log("title of the page is "+titleOfWindow)
})
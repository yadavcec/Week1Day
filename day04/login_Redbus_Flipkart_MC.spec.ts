import {test, expect, firefox, chromium} from '@playwright/test';

test('login_Redbus', async({})=>{

      const browser = await firefox.launch() 
      const context = await browser.newContext()
      const page = await context.newPage()

    await page.goto("https://www.redbus.in/")

   await expect(page).toHaveTitle('Bus Booking Online and Train Tickets at Lowest Price - redBus')
   console.log('Page title validated')

   await expect(page).toHaveURL('https://www.redbus.in/')
   console.log('URL validated')
}
)

test('Login to Flipkart', async({}) =>{

   const browser = await chromium.launch({
      channel: 'msedge'
   })
   const context = await browser.newContext()
   const page = await context.newPage()
   await page.goto('https://www.flipkart.com/')

   await expect(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!")
   console.log('Page title validated')

   await expect(page).toHaveURL('https://www.flipkart.com/')
   console.log('URL validated')

})
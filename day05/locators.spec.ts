import {test, expect} from '@playwright/test'

test("Edit Lead", async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main")

// Login to account
    await page.locator('#username').fill('democsr')
    await page.locator('#password').fill('crmsfa')
    await page.locator("[value='Login']").click()
    
// Select the CRM/SFA link
    await page.locator("//*[@id='label']/a").click()

// Select the Lead Tab
    await page.locator('//a[text()="Leads"]').click() 
    await page.locator('//a[text()="Create Lead"]').click()
//Can use this locator also => "//ul[@class='shortcuts']/li/a[text()='Create Lead']"
// Login and navigate to 'Leads' page
    await page.locator('//input[@id="createLeadForm_companyName"]').fill("Tabtor Comm")
    await page.locator('//input[@id="createLeadForm_firstName"]').fill('prashanth')
    await page.locator('//input[@id="createLeadForm_lastName"]').fill("G")
    await page.locator('//input[@value="Create Lead"]').click()
    await expect(page).toHaveTitle('View Lead | opentaps CRM')

// validate wether 'Leads' page displayed or not.
    const pageTitleName = await page.locator('#sectionHeaderTitle_leads')
    await expect(pageTitleName).toHaveText('View Lead')
    console.log('expected good is true')

//Navigate to Leads page and validate the 'Edit Lead' page
    await page.locator('//a[text()="Edit"]').click()
    // const pageTitleName2 = await page.locator("//div[text()='Edit Lead']").getByText
    // console.log(pageTitleName2)
    // await expect(pageTitleName2).toHaveText('Edit Lead')

    await page.locator("#updateLeadForm_companyName").fill("Prazas")
    await page.locator("//input[@class='smallSubmit']").first().click()

    await page.waitForTimeout(2000)

})
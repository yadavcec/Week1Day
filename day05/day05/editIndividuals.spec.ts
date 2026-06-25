import {test, expect} from '@playwright/test'

test('Edit individual and Save it', async({page})=> {

// Login and confirm 'home page'
    page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator(`//input[@id='password']`).fill('TestLeaf@2025')
    await page.locator(`//input[@id='Login']`).click()
    await page.waitForTimeout(4000)
    await expect(page).toHaveTitle("Home | Salesforce")

// Click on left toggle button and select 'View All' and confirm 'App launcher' popup displayed or not
    await page.locator(`//div[@class='slds-icon-waffle']`).click()
    await page.getByRole('button',{name: 'View All Applications'}).click()
    const appLauncherPopup = await page.locator(`//h2[text()='App Launcher']`)
    expect(appLauncherPopup).toContainText('App Launcher')

// Search & select the 'individuals' text from App launcher popup and verify the page
    await page.locator(`(//input[@class='slds-input'])[4]`).pressSequentially('individuals',{delay:400})  //fill('individuals')
    await page.locator(`//span[@class='label-display']//span`).click()
    await page.waitForTimeout(1000)
 // Below we used grandparent - grandchild relation
    const individualPageHeader = await page.locator(`//div[@class='slds-breadcrumb slds-list_horizontal slds-wrap']//h1`).innerText()
    expect(individualPageHeader).toContain('Individuals')
    console.log(individualPageHeader)       


// Search for lastname and click on dropdown and select the 'Edit' option and confirm
    await page.waitForTimeout(2000)
    const searchTextBoxVisiable = await page.getByRole('searchbox', {name:'Search this list...'}).isVisible()
        if(searchTextBoxVisiable){
            console.log('search text box visiable')
        }else {
            console.log(`search text box not visiable`)
        }

    const searchBox = await page.getByRole('searchbox', {name:'Search this list...'})  // select search field and enter value
    await searchBox.fill(`yadav`)
    await searchBox.press(`Enter`)
// click on the dropdown and edit icon  
    await page.waitForTimeout(3000)
    await page.locator(`(//span[text()='Show Actions'])[1]/preceding-sibling::lightning-primitive-icon`).click() // click on 'dropdown' button
    await page.locator(`(//a[@class='highlightButton']/div[@class='forceActionLink'])[1]`).click()  //Click on 'Edit' option
    const editUser = await page.locator(`//h2[text()='Edit yadav']`).innerText()
    console.log(editUser)
    expect(editUser).toContain(`Edit yadav`)  // verify Edit popup header


// Select the Salutation value as "Mr." from dropdown list & Save and confirm it. (non-select dropdown is used)
    await page.getByRole('button', { name: 'Salutation --None--' }).click()
    await page.locator(`//a[@title='Mr.']`).click()         // selected Salutation vaue as "Mr."
    await page.getByPlaceholder(`First Name`).fill('prash')  // entered firstname as "prash"
    await page.locator(`//span[text()='Save']`).click()  // clicked on 'Save' button.

    const toastMsg = await page.locator(`//div[@class='slds-hyphenate']//span`).innerText()  
    console.log(toastMsg)
    expect(toastMsg).toContain('prash yadav')  // Verified the toast msg for Firstname.
    await page.waitForTimeout(3000)
})

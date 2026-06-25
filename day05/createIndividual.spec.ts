import {test, expect} from '@playwright/test'

test('create individuals in salesforce', async({page})=>{

// login to salesforce and verify the Home page
    page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator(`//input[@id='password']`).fill('TestLeaf@2025')
    await page.locator(`//input[@id='Login']`).click()
    await page.waitForTimeout(2000)
    await expect(page).toHaveTitle("Home | Salesforce")

// Click on left toggle button and select 'View All' and confirm 'App launcher' popup displayed or not
    await page.locator(`//div[@class='slds-icon-waffle']`).click()  // select left toggle button
    await page.getByRole('button',{name: 'View All Applications'}).click()  // select 'view all' link 
    const appLauncherPopup = await page.locator(`//h2[text()='App Launcher']`)
    expect(appLauncherPopup).toContainText('App Launcher')  // validate popup header text

// Search & select the 'individuals' text from App launcher popup and verify the page    
   
//  await page.waitForSelector(`//p[text()='Service']`)  // This waitForSelector will wait for particular element to appear or disappear
//  await page.waitForLoadState('domcontentloaded')  // Waited for dom to load, still Loader in popup failed to load.
    await page.locator(`(//input[@class='slds-input'])[4]`).pressSequentially('individuals',{delay:400}) // enter value with each char delay
    await page.locator(`//span[@class='label-display']//span`).click()  //select the option from search result
    await page.waitForTimeout(2000)
 // Below we used grandparent - grandchild relation
    const individualPageHeader = await page.locator(`//div[@class='slds-breadcrumb slds-list_horizontal slds-wrap']//h1`).innerText()
    expect(individualPageHeader).toContain('Individuals')  // validate Individuals page
    console.log(individualPageHeader)

// Click on the Dropdown icon in the Individuals tab and Select 'New Individual' option and confirm 
    await page.getByRole('button',{name:'Individuals List'}).click()
    await page.locator(`//span[@class='slds-truncate']/lightning-icon/following-sibling::span`).first().click()
    const newIndividualPopupTitle = await page.locator(`//div[@class='required-legend']/preceding-sibling::h2`).innerText()
    expect(newIndividualPopupTitle).toContain('New Individual')
    console.log(newIndividualPopupTitle + `: is the popup title`)

//  This below commented line of code will also works:-
//     const enterLastname = await page.locator(`(//label[@class='uiLabel-top form-element__label uiLabel']/following-sibling::input)[2]`).fill('yadav')
//  //  const enteredValue =  enteredLastname.toHaveValue()
//     expect(enterLastname).toContain('yadav')

// >> Enter the lastname and save and verify it
    const lastName = await page.getByRole('textbox', {name:'Last Name *'})
    await lastName.fill('yadav')
    await expect(lastName).toHaveText('yadavc')
 // await expect(lastName).toHaveText('yadav')
 // --->>>  unable to validate the entered value <<< pls check <<< & need to check if the >>identify the fistname and then click
 // value is blank then provide and message to user.

/*    console.log(enterLastname)
    let valuePresentOrNot = false
    if(enterLastname!=null){
        valuePresentOrNot = true
        console.log(`-> Valid lastname entered`)
    }else{
        console.log(`-> Blank lastname, enter agian`)
    }*/
    
    await page.locator(`//span[text()='Save']`).click()

    const outputName = await page.locator(`(//span[@class='uiOutputText'])[1]`).innerText()
    expect(outputName).toContain('yadav')
    console.log(`Individual saved successfully`)
 
    await page.waitForTimeout(2000)
})
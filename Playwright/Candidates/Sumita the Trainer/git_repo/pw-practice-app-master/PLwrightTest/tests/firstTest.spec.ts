import {expect, test} from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByTitle('Forms').click;
  await page.getByTitle('Form Layouts').click;
    
});

test('Locator syntax rules', async ({ page }) => 
    {
        // by Tag Name
        page.locator('input').first().click()
        page.locator('input').nth(0).click()

        // by ID
        page.locator('#inputEmail1')
        page.locator('[id="inputEmail1"]')

        //by class value
        page.locator('.shape-rectangle')

        // by full class value
        page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

        // by attribute
        page.locator('[placeholder="Email"]')
        page.getByPlaceholder('Email')

        page.locator('[placeholder="Jane Doe"]')
        page.getByPlaceholder('Jane Doe')

        // by combing diffrent locators
        page.locator('input[placeholder="Email"]')
        page.locator('[placeholder="Email"][class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

        // by xpath
        page.locator('//*[@id="inputEmail1"]')
        page.locator('//input[@placeholder="Jane Doe"]')
       
        // by partial text match
        page.locator(':text("Using")')

        // by exact text match
        page.locator(':text-is("Using the Grid")')
    })

test('User Facing Locators', async ({ page }) => 
    {
        await page.getByRole('textbox',{name:"Email"}).first().click()
        await page.getByRole('button',{name:"Sign in"}).first().click()

        await page.getByLabel('Email').first().click()
        await page.getByLabel('Email address').first().click()
        await page.getByPlaceholder('Jane Doe').click()

        await page.getByText('Using the Grid').isVisible()
        await page.getByText('Form without labels').isVisible()

        await page.getByTitle('IoT Dashboard').click()
        await page.getByTitle('Form Layouts').click()        
        await page.getByTestId('inputEmail1').click()   
        
        await page.getByRole('checkbox',{name:"Remember me"}).check()
        await page.getByRole('checkbox',{name:"Remember me"})

        await page.getByRole('checkbox',{name:"Check me out"}).check()

        await page.getByPlaceholder('Email').fill('example@test.com')
        //await page.locator('nb-card').getByTestId('exampleInputPassword1').fill('Welcome@123')
        await page.getByPlaceholder('Password').fill('Welcome@123')
        await page.getByRole('button',{name:'Submit'}).click()




    })

test('Locating Child elements', async ({ page }) =>
{
    await page.locator('nb-card nb-radio:text-is("Option 1")').click()
    await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()
    await page.locator('nb-card').getByRole('button',{name:"Sign in"}).first().click()
   
})

test('Locating parent elements', async ({ page }) =>
{
    await page.locator(('nb-card'),{hasText:"Using the Grid"}).getByRole("textbox",{name:"Email"}).click()
   
})

test('Reusing Locators', async ({ page }) =>
{
    const basicForm = page.locator('nb-card').filter({hasText:"Basic form"})
    const emailField = basicForm.getByRole('textbox',{name:"Email"})
    await emailField.fill('test@test.com')
    const emailValue = emailField.inputValue()
    expect(emailValue).toEqual('test@test.com')        
    await basicForm.getByRole('textbox',{name:"Password"}).fill('Welcome@123')
})

test('extracting values ', async ({ page }) =>
{
    //single text extraction
    const basicForm = page.locator('nb-card').filter({hasText:"Basic form"})
    const buttonText = await basicForm.locator('button').textContent()
    expect(buttonText).toEqual('Submit')

    //all text values

})



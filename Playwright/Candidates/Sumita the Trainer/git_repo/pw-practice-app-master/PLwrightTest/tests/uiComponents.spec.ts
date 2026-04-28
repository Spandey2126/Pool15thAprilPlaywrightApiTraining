import {expect, test} from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/')     
})

test.describe('Form Layouts page',()=>{
test.beforeEach(async ({ page }) => {
 await page.getByTitle('Forms').click()
await page.getByTitle('Form Layouts').click()

})

})

test('tool tips', async ({ page }) =>
{
  await page.getByTitle('Modal & Overlays').click()
await page.getByTitle('Tooltip').click()
const toolTipCard = page.locator('nb-card', {hasText:"Tooltip Placements"})
await toolTipCard.getByRole('button',{name:"Top"}).hover()
page.getByRole('tooltip')
const toolTip = await page.locator('nbtooltip').textContent()
await page.getByRole('tooltip').waitFor({state:'visible'})
expect(toolTip).toEqual('This is a tooltip')
const tooltipplace = await expect(toolTipCard.getByRole('button',{name:"Top"})).toHaveAttribute('ng-reflect-position','top')

await page.getByRole('tooltip').waitFor({state:'hidden'})

})

test('dialog box', async ({ page }) =>
{
  await page.getByTitle('Tables & Data').click()
await page.getByTitle('Smart Table').click()

page.on('dialog',dialog =>
{
  expect(dialog.message()).toEqual('Are you sure you want to delete?')
  //dialog.accept()
  dialog.dismiss()
})

await page.getByRole('table').locator('tr',{hasText:"mdo@gmail.com"}).locator('.nb-trash').click()
await expect(page.locator('table tr').first()).not.toHaveText('"mdo@gmail.com"')

})

test('lists and drop downs', async ({ page }) =>
{
    const dropDownMenu = page.locator('ngx-header nb-select')
    await dropDownMenu.click()
    page.getByRole('list') // ul tag
    //page.getByRole('listitem') // lI tag

    //const options 
    const optionList = page.locator('nb-option-list option-list')
    await expect(optionList).toHaveText(["Light","Dark","Cosmic"," Corporate"])
    await optionList.filter({hasText:"Cosmic"}).click()
    const header = page.locator('nb-layout-header')
    await expect(header).toHaveCSS('background-color','rgb(50,50,89)')

    const colors ={

      "Light" :"rgb(255,255,255)",
      "Dark" :"rgb(34,43,69)",
      "Cosmic" : "rgb(50,50,89)",
      "Corporate" :"rgb(255,255,255)"
    }

})

test('web tables', async ({ page }) =>
{
  await page.getByTitle('Tables & Data').click()
await page.getByTitle('Smart Table').click()

// 1 get the row by any test 

const targetRow = page.getByRole('row',{name:"twitter@outlook.com"})
await targetRow.locator('.nb-edit').click()
await page.locator('input-editor').getByPlaceholder('Age').clear()
await page.locator('input-editor').getByPlaceholder('Age').fill('35')
await page.locator('nb-checkmark').click()

// 2 get the row by value in specified column 

await page.locator('.ng2-smart-pagination-nav').getByText('2').click()
const targetRowById = page.getByRole('row',{name:"12"}).filter({has :page.locator('td').nth(1).getByText('12')})
await targetRowById.locator('.nb-edit').click()
await page.locator('input-editor').getByPlaceholder('E-mail').clear()
await page.locator('input-editor').getByPlaceholder('E-mail').fill('test@test.com')
await page.locator('nb-checkmark').click()
await expect(targetRowById.locator('td').nth(1)).toHaveText('test@test.com')

//test filter for table

const ages = ["20","30","40","200"]

for(let age of ages)
{
  await page.locator('input-filter').getByPlaceholder('Age').clear()
  await page.locator('input-filter').getByPlaceholder('Age').fill(age)
  await page.waitForTimeout(500)

  const ageRows = page.locator('tbody tr')
      for(let row of await ageRows.all())
        {
          const cellValue = await row.locator('td').last().textContent()

          if (age =="200")
          {
            expect(await page.getByRole('table').textContent()).toContain('No data found')
          }
          else
          {
            expect(cellValue).toEqual(age)   
          }

         }
}
})

test('date picker', async ({ page }) =>
{
 await page.getByTitle('Forms').click()
await page.getByTitle('Datepicker').click()

const calenderInputField = page.getByPlaceholder('Form Picker')
await calenderInputField.click()

await page.locator('[class="day-cell ng-star-inserted"]').getByText('26',{exact:true}).click()
await expect(calenderInputField).toHaveValue('Aug 26,2025')

let date = new Date()
date.setDate(date.getDate() + 14)
const expectedDate= date.getDate().toString()
const expectedMonthShot = date.toLocaleString('En-US',{month:'short'})
const expectedMonthLong =date.toLocaleString('En-US',{month:'long'})
const expectedYear = date.getFullYear()
const dateToAssert = `${expectedMonthShot} ${expectedDate},${expectedYear}`//jul 26,2025

let calenderMonthYear = await page.locator('nb-calendar-view-mode').textContent()
const expectedMonthYear = `${expectedMonthLong} ${expectedYear}`
while(calenderMonthYear && !calenderMonthYear.includes(expectedMonthYear))
{
  await page.locator('nb-calendar-pageable-navigation[data-name="chevron-right"]').click()
  calenderMonthYear = await page.locator('nb-calendar-view-mode').textContent()
  
}

await page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDate,{exact:true}).click()
await expect(calenderInputField).toHaveValue(dateToAssert)

})

test('sliders', async ({ page }) =>
{
  // update attribute
  const tempGauge = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger')
  await tempGauge.evaluate(node => {
      node.setAttribute('cx','232.630')
      node.setAttribute('cy','232.630')
  })
  await tempGauge.click()

//mouse movement
const tempBox = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger')
await tempBox.scrollIntoViewIfNeeded()

const box = await tempBox.boundingBox()
if (!box) {
  throw new Error('Bounding box is null');
}
const x = box.x + box.width / 2
const y = box.y + box.width / 2

await page.mouse.move(x,y)
await page.mouse.down()
await page.mouse.move(x +100,y)
await page.mouse.move(x +100,y+100)
await page.mouse.move(x+100,y-50)//outside bounding box
await page.mouse.up()

await expect(tempBox).toContainText('30')

})



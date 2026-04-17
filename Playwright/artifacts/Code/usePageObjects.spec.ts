import {expect, test} from '@playwright/test'
import {navigationPage} from '../page-objects/navigationPage'
import {datepickerPage} from '../page-objects/datepickerPage'
//import {smartTablePage} from '../page-objects/smartTablePage'
import {tooltipPage} from '../page-objects/tooltipPage'
import {smartTablePage} from '../page-objects/smartTablePage'


test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
     
});

test('test check', async({}) => {
  
}

)

test('Navigate to form page', async ({ page }) => 
    {

      const navigateTo = new navigationPage(page)
      navigateTo.datepickerPage()
      navigateTo.smartTablePage()
      navigateTo.tooltipPage()
})

test('Navigate to form page', async ({ page }) => 
    {
      page.on('dialog', dialog => dialog.accept());
      page.locator('').dragTo(page.locator(''))
    })
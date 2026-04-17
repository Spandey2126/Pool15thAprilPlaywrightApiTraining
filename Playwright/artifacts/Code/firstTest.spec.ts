import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/');
  await page.getByRole('link', { name: 'Tabs' }).click();
  await page.locator('iframe[name="aswift_2"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'Discover moreharmonica' }).locator('iframe').contentFrame().getByText('Mauris mauris ante, blandit').click();
  await page.getByRole('paragraph').filter({ hasText: 'Discover moreharmonica' }).locator('iframe').contentFrame().getByRole('tab', { name: 'Section 1' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'Discover moreharmonica' }).locator('iframe').contentFrame().getByRole('tab', { name: 'Section 2' }).locator('span').click();
  await page.getByRole('paragraph').filter({ hasText: 'Discover moreharmonica' }).locator('iframe').contentFrame().getByRole('tabpanel', { name: 'Section' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'Discover moreharmonica' }).locator('iframe').contentFrame().getByRole('tab', { name: 'Section 3' }).locator('span').click();
  await page.getByRole('paragraph').filter({ hasText: 'Discover moreharmonica' }).locator('iframe').contentFrame().getByText('Nam enim risus, molestie et,').click();
  await page.getByRole('paragraph').filter({ hasText: 'Discover moreharmonica' }).locator('iframe').contentFrame().getByText('List item one').click();
  await page.getByRole('paragraph').filter({ hasText: 'Discover moreharmonica' }).locator('iframe').contentFrame().getByRole('tab', { name: 'Section 4' }).locator('span').click();
  await page.getByRole('paragraph').filter({ hasText: 'Discover moreharmonica' }).locator('iframe').contentFrame().getByText('Cras dictum. Pellentesque').click();
  await page.getByRole('paragraph').filter({ hasText: 'Discover moreharmonica' }).locator('iframe').contentFrame().getByText('Suspendisse eu nisl. Nullam').click();
});


--------------------------------------



test('test', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/');
  await page.getByRole('link', { name: 'Tabs' }).click();
  await page.locator('iframe').nth(3).contentFrame().getByText('Mauris mauris ante, blandit').click();
  await page.getByRole('tab', { name: 'Re-Size Accordion' }).click();
  await page.getByRole('tab', { name: 'Toggle Icons' }).click();
  await page.getByRole('tab', { name: 'Re-Size Accordion' }).click();
  await page.locator('iframe').nth(5).contentFrame().getByText('Mauris mauris ante, blandit').click();
  await page.locator('iframe').nth(5).contentFrame().locator('.ui-resizable-handle').first().click();
  await page.locator('iframe').nth(5).contentFrame().locator('.ui-resizable-handle').first().click({
    modifiers: ['ControlOrMeta']
  });
  await page.locator('iframe').nth(5).contentFrame().locator('.ui-resizable-handle').first().click();
  await page.locator('iframe').nth(5).contentFrame().getByText('Resize the outer container: Section 1 Mauris mauris ante, blandit et, ultrices').press('ControlOrMeta+ArrowRight');
  await page.locator('iframe').nth(5).contentFrame().getByText('Resize the outer container: Section 1 Mauris mauris ante, blandit et, ultrices').press('ControlOrMeta+ArrowRight');
  await page.locator('iframe').nth(5).contentFrame().getByText('Resize the outer container: Section 1 Mauris mauris ante, blandit et, ultrices').press('ControlOrMeta+ArrowRight');
  await page.locator('iframe').nth(5).contentFrame().getByText('Resize the outer container: Section 1 Mauris mauris ante, blandit et, ultrices').press('ControlOrMeta+ArrowRight');
  await page.locator('iframe').nth(5).contentFrame().getByText('Resize the outer container: Section 1 Mauris mauris ante, blandit et, ultrices').press('ControlOrMeta+ArrowRight');
  await page.locator('iframe').nth(5).contentFrame().getByText('Resize the outer container: Section 1 Mauris mauris ante, blandit et, ultrices').press('ControlOrMeta+ArrowRight');
  await page.locator('iframe').nth(5).contentFrame().locator('.ui-resizable-handle').first().click();
  await page.locator('iframe').nth(5).contentFrame().locator('.ui-resizable-handle').first().click();
  await page.locator('iframe').nth(5).contentFrame().locator('.ui-resizable-handle.ui-resizable-se').click();
  await page.locator('iframe').nth(5).contentFrame().getByRole('tab', { name: 'Section 2' }).locator('span').click();
  await page.locator('iframe').nth(5).contentFrame().locator('.ui-resizable-handle').first().click();
  await page.locator('iframe').nth(5).contentFrame().locator('.ui-resizable-handle').first().click({
    modifiers: ['ControlOrMeta']
  });
  await page.locator('iframe').nth(5).contentFrame().locator('.ui-resizable-handle').first().click();
  await page.locator('iframe').nth(5).contentFrame().locator('.ui-resizable-handle').first().click();
  await page.locator('iframe').nth(5).contentFrame().locator('.ui-resizable-handle').first().click();
  await page.getByRole('tab', { name: 'Re-Size Accordion' }).click();
});



---------------------------------------------------------

await page.goto('https://www.globalsqa.com/demo-site/');
  await page.getByRole('link', { name: 'Tabs' }).click();
  await page.getByRole('tab', { name: 'Re-Size Accordion' }).click();
  await page.getByRole('tab', { name: 'Toggle Icons' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'Discover' }).locator('iframe').contentFrame().getByRole('tab', { name: 'Section 1' }).locator('span').click();
  await page.getByRole('paragraph').filter({ hasText: 'Discover' }).locator('iframe').contentFrame().getByRole('tab', { name: 'Section 1' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'Discover' }).locator('iframe').contentFrame().getByRole('tab', { name: 'Section 1' }).locator('span').click();
  await page.getByRole('paragraph').filter({ hasText: 'Discover' }).locator('iframe').contentFrame().getByRole('tab', { name: 'Section 2' }).locator('span').click();
  await page.getByRole('paragraph').filter({ hasText: 'Discover' }).locator('iframe').contentFrame().getByRole('tab', { name: 'Section 3' }).locator('span').click();
  await page.getByRole('paragraph').filter({ hasText: 'Discover' }).locator('iframe').contentFrame().getByRole('tab', { name: 'Section 4' }).locator('span').click();
})




------------------------------


test('test', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/');
  await page.getByRole('link', { name: 'Slider' }).click();
  await page.getByRole('tab', { name: 'Range' }).click();
  await page.locator('iframe').nth(1).contentFrame().locator('#slider-range').click();
  await expect(page.locator('iframe').nth(1).contentFrame().getByRole('textbox', { name: 'Price range:' })).toHaveValue('$75 - $250');
  await expect(page.locator('iframe').nth(1).contentFrame().getByRole('textbox', { name: 'Price range:' })).toHaveValue('$75 - $339');
  await expect(page.locator('iframe').nth(1).contentFrame().getByRole('textbox', { name: 'Price range:' })).toHaveValue('$75 - $428');
  await expect(page.locator('iframe').nth(1).contentFrame().getByRole('textbox', { name: 'Price range:' })).toHaveValue('$35 - $428');
});

--------------------

tool pip

 await page.goto('https://www.globalsqa.com/demo-site/');
  await page.getByRole('link', { name: 'ToolTip' }).click();
  await page.locator('iframe[name="aswift_2"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
  await page.locator('iframe').first().contentFrame().getByRole('link', { name: 'Vienna, Austria' }).click();
  await page.goto('https://www.globalsqa.com/demo-site/tooltip/');
  await page.locator('iframe').nth(1).contentFrame().getByRole('link', { name: 'St. Stephen\'s Cathedral' }).click();
});


-------------------------

test('test', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/alertbox/');
  await page.getByRole('button', { name: 'Try it' }).click();
  await page.getByRole('button', { name: 'Try it' }).click();
  await page.getByRole('tab', { name: 'Confirmation Box' }).click();
  await page.getByRole('button', { name: 'Try it' }).click();
  await page.getByRole('button', { name: 'Try it' }).click();
  await page.getByRole('tab', { name: 'Prompt Box' }).click();
  await page.getByRole('button', { name: 'Try it' }).click();
  await page.getByRole('button', { name: 'Try it' }).click();
});


 await row2Data.waitFor({ state: 'visible' });
    console.log('all data=' + await row2Data.allTextContents());

    await expect(await row2Data.locator('td').nth(0)).toHaveText('ajit');
    await expect(await row2Data.locator('td').nth(1)).toHaveText('ajit@gmail.com');
    await expect(await row2Data.locator('td').nth(2)).toHaveText('12345');


-------------------------------------------------------

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Click Here' }).click();
  const page1 = await page1Promise;
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('link', { name: 'Click Here' }).click();
  const page2 = await page2Promise;
});
















import {test,expect,chromium} from '@playwright/test';

test('Open browser', async({})=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.google.com');
    await page.setViewportSize({width:1920, height:982});
    const searchTextbox=page.getByLabel('Search',{exact:true});
    await searchTextbox.fill('Playwright');
    expect(page).toHaveTitle('Google');
    await page.waitForTimeout(5000);
});
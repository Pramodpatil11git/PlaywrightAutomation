import {test,expect} from '@playwright/test';

test('Open browser', async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.setViewportSize({width:1920, height:982});
    const userName = page.getByPlaceholder('Username');
    await userName.fill('standard_user');
    const password = page.getByPlaceholder('Password');
    await password.fill('secret_sauce');
    await page.locator('#login-button').click();
    const swagLabsText = page.locator('.app_logo');
    await expect(swagLabsText).toHaveText('Swag Labs');
    await page.waitForTimeout(5000);


});
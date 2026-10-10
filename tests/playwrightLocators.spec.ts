import {test,expect} from '@playwright/test';

test('Get by Text locator method', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const forgotYourPasswordLink = page.getByText("Forgot your password? ", {exact:true});
    await forgotYourPasswordLink.click();
    await page.waitForTimeout(3000);
})

test('Get by label method', async ({ page }) => {

    await page.goto('https://www.wikipedia.org/');
    const wikipediaSearchbox = page.getByLabel("Search Wikipedia");
    await wikipediaSearchbox.fill('Playwright');
    await page.waitForTimeout(3000);
})

test('Get by placeHolder method', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const username = page.getByPlaceholder("Username");
    await username.fill('Admin');
    await page.waitForTimeout(3000);
})

test('Get by altText method', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const companyImg = page.getByAltText("company-branding");
    await companyImg.click();
    await page.waitForTimeout(3000);
})

test('Get by title method', async ({ page }) => {

    await page.goto('https://www.wikipedia.org/');
    const italianLanguageLink = page.getByTitle("Italiano — Wikipedia — L'enciclopedia libera");
    await italianLanguageLink.click();
    await page.waitForTimeout(3000);
})

test('Get by data-testid method', async ({ page }) => {

    await page.goto('https://open.spotify.com/');
    const signUpLink = page.getByTestId("signup-button");
    await signUpLink.click();
    await page.waitForTimeout(3000);
})

test('Get by role method', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const loginButton = page.getByRole("button", {name: " Login "});
    await loginButton.click();
    await page.waitForTimeout(3000);
})
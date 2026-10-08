import {test,expect} from '@playwright/test';

test('Get by Text locator method', async ({ page }) => {

    await page.goto('https://www.google.com');
    const gmailLink = page.getByText("Gmail",{exact:true}).nth(0);
    await gmailLink.click();
    await page.waitForTimeout(3000);
})

test('Get by label method', async ({ page }) => {

    await page.goto('https://www.wikipedia.org/');
    const wikipediaSearchbox = page.getByLabel("Search Wikipedia");
    await wikipediaSearchbox.fill('Playwright');
    await page.waitForTimeout(3000);
})

test('Get by placeHolder method', async ({ page }) => {

    await page.goto('https://www.amazon.in');
    const seachTextbox = page.getByPlaceholder("Search Amazon.in");
    await seachTextbox.fill('Pen');
    await page.waitForTimeout(3000);
})

test('Get by altText method', async ({ page }) => {

    await page.goto('https://www.redbus.in/');
    const hotelBookingImg = page.getByAltText("Online Hotel Booking");
    await hotelBookingImg.click();
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

    await page.goto('https://open.spotify.com/');
    const supportLink = page.getByRole("button", {name: "Support"});
    await supportLink.click();
    await page.waitForTimeout(3000);
})
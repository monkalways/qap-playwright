import { test, expect } from '@playwright/test';

test('my test', async ({ page }) => {
    await page.goto('https://questaplus.alberta.ca/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Quest A+/);

    // Expect an attribute "to be strictly equal" to the value.
    await expect(page.locator('text=Practice Tests').first()).toHaveAttribute(
        'href',
        'https://questaplus.alberta.ca/app/practice-test-access'
    );

    // Expect an element "to be visible".
    await expect(page.locator('text=Help').first()).toBeVisible();

    await page.click('text=Practice Tests');
    // Expect some text to be visible on the page.
    await expect(page.locator('text=Grade 6 Tests').first()).toBeVisible();

    // Compare screenshot with a stored reference.
    expect(await page.screenshot()).toMatchSnapshot(
        'questaplus-grade-selection-page.png'
    );
});

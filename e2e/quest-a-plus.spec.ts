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
    await page.waitForURL('**/practice-test-access');
    await expect(page.locator('text=Grade 6 Tests').first()).toBeVisible();

    // Compare screenshot with a stored reference.
    // expect(await page.screenshot()).toMatchSnapshot(
    //     'questaplus-grade-selection-page.png'
    // );

    await page.click('text=Grade 6 Tests');
    await expect(
        page.locator('text=English Language Arts 6').first()
    ).toBeVisible();

    await page.click('text=English Language Arts 6');
    await expect(
        page.locator('text=Part B Released Test').first()
    ).toBeVisible();
    await page.click('text=Part B Released Test');
    await expect(page.locator('text=Test Downloading').first()).toBeVisible();

    await page.waitForURL('**/exam-taking/**');
    await expect(page.locator('text=MC 1').first()).toBeVisible();

    await page.click('css=[value="3"]');
    await page.click('button.next');
    await expect(page.locator('text=MC 2').first()).toBeVisible();

    await page.click('css=[value="3"]');
    await page.click('button.next');
    await expect(page.locator('text=MC 3').first()).toBeVisible();

    await page.click('text=Finish Test');
    await expect(page.locator('text=Submit Test').first()).toBeVisible();

    await page.click('text=Submit Test');
    await expect(page.locator('text=Test Summary').first()).toBeVisible();

    await page.click('text=Exit Test');
    await expect(page.locator('text=Grade 6 Tests').first()).toBeVisible();
});

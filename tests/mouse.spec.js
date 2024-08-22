// @ts-check
// const { test, expect } = require('@playwright/test');
//
// test('wb_mouse', async ({ page}) => {
//     await page.goto('https://www.wildberries.ru/')
//     await page.waitForTimeout(1000);
//     await page.locator('.search-catalog__input').fill('Мышь')
//     await page.waitForTimeout(2000)
//     await page.keyboard.press('ArrowDown')
//     await page.keyboard.press('ArrowDown')
//     await page.keyboard.press('ArrowDown')
//     await page.keyboard.press('Enter')
//     await page.waitForTimeout(3000)
//     await page.getByText('Все фильтры').click()
//     await page.waitForTimeout(1000)
//     await page.getByText('Белый').click()
//     await page.waitForTimeout(1000)
//     await page.getByRole('button', { name: 'Показать', exact: true }).click()
//     await page.locator('.search-catalog__input').click()
//     await page.waitForTimeout(1000)
//     await page.locator('.search-catalog__input').pressSequentially(' razer',{delay:100};
//     //await page.keyboard.insertText(' razer');
//     await page.keyboard.press('Enter')
//     await page.waitForTimeout(1000)
//     await page.locator(".product-card__wrapper").nth(0).click()
//     await page.waitForTimeout(5000)
//
// });
// @ts-check
const { test, expect } = require('@playwright/test');



 test('wb_carpet', async ({ page}) => {
     await page.goto('https://www.wildberries.ru/')
     await page.waitForTimeout(1000);
     const navig= page.locator(".search-catalog__input")
     await navig.click()
     await navig.fill("коврик компьютерный большой")
     await page.waitForTimeout(1000)
     await page.keyboard.press('Enter')
     await page.waitForTimeout(1000)
     await page.locator('.search-tags__list').getByText('коврик компьютерный большой 80х40').first().click()
     await page.waitForTimeout(3000)
     await page.getByText('Все фильтры').click()
     await page.waitForTimeout(1000)
     await page.getByText('дерево').click()
     await page.waitForTimeout(1000)
     await page.getByRole('button', { name: 'Показать', exact: true }).click()
     await page.waitForTimeout(3000)
     await page.locator(".product-card__wrapper").nth(0).hover()
     await page.waitForTimeout(2000)
     await page.getByRole('button', { name: 'Быстрый просмотр' }).first().click()
     await page.waitForTimeout(2000)
     await page.locator('button[aria-label="Вперёд"]').click()
     await page.waitForTimeout(2000)
     await page.locator('img[alt="синий"]').click()
     await page.waitForTimeout(2000)
 });
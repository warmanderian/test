// @ts-check
const { test, expect } = require('@playwright/test');


/*
test('wb', async ({ page}) => {
    await page.goto('https://www.wildberries.ru/')
    await page.waitForTimeout(1000);
    const navig= page.locator(".nav-element__burger")
    await navig.click()
    await page.waitForTimeout(1000)
    const electronic=page.getByText('Электроника', { exact: true })
    await electronic.click()
    await page.waitForTimeout(1000)
    const PK=page.getByText("Ноутбуки и Компьютеры")
    await expect(PK).toBeVisible()
    await PK.click()
    await page.waitForTimeout(1000)
    const complect=page.getByText("Комплектующие для ПК")
    await expect(complect).toBeVisible()
    await complect.click()
    await page.waitForTimeout(1000)
    const filters1=page.getByText("Все фильтры")
    await expect(filters1).toBeVisible()
    await filters1.click()
    await page.waitForTimeout(1000)
    const video=page.locator('.filter__item').filter({hasText: 'Видеокарта'})
    await video.click()
    await page.waitForTimeout(1000)
    const rtx4070= page.locator('.filter__item').filter({hasText: 'NVIDIA GeForce RTX 4070'})
    await rtx4070.click()
    await page.waitForTimeout(1000)
    const show=page.locator(".filters-desktop__btn-main")
    await show.click()
    await page.waitForTimeout(5000)
});
*/

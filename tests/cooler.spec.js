// const { test, expect } = require('@playwright/test');
//
//
//
//  test('wb_carpet', async ({ page}) => {
//      await page.goto('https://www.wildberries.ru/')
//      await page.waitForTimeout(1000);
//      const navig= page.locator(".search-catalog__input")
//      await navig.click()
//      await navig.fill("кулер для компьютера")
//      await page.waitForTimeout(2000)
//      await page.keyboard.press('Enter')
//      await page.waitForTimeout(1000)
//      await page.getByText('Все фильтры').click()
//      await page.waitForTimeout(1000)
//      await page.locator('.btn-switch__btn').first().click()
//      await page.waitForTimeout(1000)
//      await page.getByText('Охлаждение корпуса').click()
//      await page.waitForTimeout(1000)
//      await page.getByText('ASUS').click()
//      await page.waitForTimeout(1000)
//      await page.getByText('автоматическая').click()
//      await page.waitForTimeout(1000)
//      await page.getByRole('button', { name: 'Показать', exact: true }).click()
//      await page.waitForTimeout(3000)
//      await page.locator(".product-card__wrapper").nth(0).click()
//      await page.waitForTimeout(1000)
//      await page.getByText('Все характеристики и описание').click()
//      await page.waitForTimeout(1000)
//      // await page.locator(':has-text("ASUS X550VC")').first().hover();
//      // await page.waitForTimeout(1000);
//      await page.locator('.order__button').filter({hasText:'Добавить в корзину'}).first().click()
//      await page.waitForTimeout(1000)
//      await page.getByText('Корзина').click()
//      await page.waitForTimeout(3000)
//      await page.locator(".count__plus.plus").click()
//      await page.waitForTimeout(2000)
//      await page.getByRole('button', {name:'Удалить'}).click()
//      await page.waitForTimeout(2000)
//  });
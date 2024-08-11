// @ts-check
const { test, expect } = require('@playwright/test');

test('has footer', async ({ page }) => {
  await page.goto('https://creditural.ru/');
  const locator= page.getByRole('link', { name: 'Пакетные предложения' })
  await expect(locator).toBeVisible()
  await locator.hover()
  const childLink= page.getByRole('link', { name: ' Территория бизнес-класс ' })
  await expect(childLink).toBeVisible()
  await childLink.click()
  await page.waitForTimeout(5000)
  const button=page.locator(".tabs__list__arrow__next")
  await expect(button).toBeVisible()
  await button.click()
  await page.waitForTimeout(3000)
  const daadad=page.getByRole('link',{name:'КУБ-Бизнес'})
  await expect(daadad).toBeVisible()
  await daadad.click()
  await page.waitForTimeout(5000)
});
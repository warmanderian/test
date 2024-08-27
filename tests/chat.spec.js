const {test} = require("@playwright/test");
test('chat', async ({ page}) => {
    await page.goto('https://www.wildberries.ru/')
    await page.waitForTimeout(1000)
    await page.locator('.simple-menu__link').filter({hasText:'Работа в Wildberries'}).click()
    await page.waitForTimeout(1000)
    await page.getByText('Наши проекты').scrollIntoViewIfNeeded()
    await page.waitForTimeout(1000)
    await page.getByRole('link', { name: 'Вопросы и ответы' }).click()
    await page.waitForTimeout(3000)
    await page.getByPlaceholder("Ваш вопрос").first().fill('Как заполнить заказ');
    await page.waitForTimeout(3000)
    await page.keyboard.press('Enter')
    await page.waitForTimeout(1000)
});

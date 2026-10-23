import { test, expect } from '../fixtures/pageObjectFixture';

test.describe('E-Commerce Global Product Search Suite', () => {

  test('Should navigate to the homepage and verify the trending section', async ({ homePage }) => {
    // Arrange, Act : go to landing
    await homePage.navigateTo();

    await expect(homePage.topTrendingHeader).toBeVisible();
    
  });

  test('Should be able to search a product via the global search bar', async ({ homePage, page }) => {
    await homePage.navigateTo();

    await homePage.header.searchForProduct('Iphone 14 Pro Max');

    await expect(page).toHaveURL(/.*route=product%2Fsearch.*/i);
  })
});
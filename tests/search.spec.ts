import { test, expect } from '../fixtures/pageObjectFixture';
import searchData from '../data/search-data.json';

test.describe('E-Commerce data driven Product Search Suite', () => {

  for(const product of searchData.validProducts){

    test(`Should find product results for keyword ${product.keyword}`, async ({ homePage }) => {
      // Arrange, Act : go to landing
      await homePage.navigateTo();

      await homePage.header.searchForProduct(product.keyword);

      await expect(homePage.page).toHaveURL(new RegExp(product.expectedUrlToken));
    
    });
  }
  

  test('Should print the active environment', async ({ homePage, page }) => {
    await homePage.navigateTo();

    console.log(`[Environment] Target testing Base URL: ${process.env.BASE_URL}`);
    console.log(`[Environment] Active Admin Account: ${process.env.ADMIN_EMAIL}`);

    expect(process.env.BASE_URL).toBeDefined();
  })
});
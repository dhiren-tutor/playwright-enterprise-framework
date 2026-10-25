import { test, expect } from '../fixtures/pageObjectFixture';
import searchData from '../data/search-data.json';

test.describe('MediShop Platform Structural & Routing Verification Suite', () => {


    test('Should successfully load the MediShop home layout and verify main components', async ({ homePage }) => {
      // Arrange, Act : go to landing
      await homePage.navigateToHome();

      const isPlatformActive = await homePage.isPharmacyPlatformLoaded()
      expect(isPlatformActive).toBe(true)
    
    });

  

  test('Should navigate to the product catalog layout through the global header navigation link', async ({ homePage, page }) => {
    await homePage.navigateToHome();

    await homePage.header.openMedicinesCatalog()
    await expect(homePage.page).toHaveURL(/.*medicines.*/)
  })
});
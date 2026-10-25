import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { HeaderComponent } from './components/HeaderComponent';

export class HomePage extends BasePage {

    public readonly header: HeaderComponent;

    private readonly mainPharmacyHeading: Locator;
    private readonly shopByCategoryHeading: Locator;

    constructor(page: Page) {
        super(page);

        this.header = new HeaderComponent(page);
        
        this.mainPharmacyHeading = this.page.getByRole('heading', { name: /Your practice pharmacy/i });
        this.shopByCategoryHeading = this.page.getByRole('heading', { name: /Shop by category/i });
    }

    async navigateToHome(): Promise<void> {
        await this.navigateTo('/MediShopWebApp/home.html');
  }

    async isPharmacyPlatformLoaded(): Promise<boolean> {
        return await this.mainPharmacyHeading.isVisible();
    }
}
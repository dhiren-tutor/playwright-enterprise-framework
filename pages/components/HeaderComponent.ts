import {Page, Locator} from '@playwright/test';

export class HeaderComponent {
    private readonly page: Page;
    private readonly siteBranding: Locator
    private readonly browseMedicinesLink: Locator
    private readonly trackOrderLink: Locator

    constructor(page: Page) {
        this.page = page;

        this.siteBranding = this.page.getByRole('link', { name: /MediShop/i});
        this.browseMedicinesLink = this.page.getByRole('link', { name: /Browse medicines/i });
        this.trackOrderLink = this.page.getByRole('link', { name: /Track an order/i });
    }

    async openMedicinesCatalog(): Promise<void> {
        console.log(`[Header Action] Navigating to Browse Medicines catalog views...`);
        await this.clickElementIfBound(this.browseMedicinesLink, 'Browse Medicines Link')
    }

    async clickElementIfBound(locator: Locator, name: string): Promise<void> {
        await locator.waitFor({ state: 'visible'})
        await locator.click()
    }
}
import {Page, Locator} from '@playwright/test';

export class HeaderComponent {
    private readonly page: Page;
    private readonly searchInput: Locator
    private readonly searchButton: Locator
    private readonly accountDropdownButton: Locator
    private readonly loginLink: Locator

    constructor(page: Page) {
        this.page = page;

        this.searchInput = this.page.getByRole('textbox', { name: '/Search For Products/i'});
        this.searchButton = this.page.getByRole('button', { name: '/search/i' }).first();
        this.accountDropdownButton = this.page.getByRole('button', { name: '/My Account/i' });
        this.loginLink = this.page.getByRole('link', { name: '/Login/i' });
    }

    async searchForProduct(productName: string): Promise<void> {
        const searchInput = this.page.getByPlaceholder('Search For Products').first();
        const searchButton = this.page.getByRole('button', { name: /^Search$/i }).first();

        await searchInput.fill(productName);
        await searchButton.click();
    }

    async openLoginMenu(): Promise<void> {
        console.log(`[Component Action] Navigating to account dropdown`);
        await this.accountDropdownButton.hover();
        await this.loginLink.waitFor({ state: 'visible' });
        await this.loginLink.click();
    }
}
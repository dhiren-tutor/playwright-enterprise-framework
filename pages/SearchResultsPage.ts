import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchResultsPage extends BasePage {
    private readonly productCards: Locator;
    private readonly successNotification: Locator;

    constructor(page: Page) {
        super(page);
        this.productCards = page.locator('.product-layout');
        this.successNotification = page.locator('.alert-success');
    }

    async addProductToCartByName(productName: string): Promise<void> {
        console.log(`[Search Result Action] Targetting product card: "${productName}" to add to cart.`);

        const targetProductCard = this.getElementFromListByText(this.productCards, productName);

        const addToCartButton = targetProductCard.getByRole('button', {name: /add to car/i}).first();

        await targetProductCard.scrollIntoViewIfNeeded();
        await targetProductCard.hover();
        await this.clickElement(addToCartButton, `Add to Cart button for product: ${productName}`);
    }

    getSuccessNotificationText(): Locator {
        return this.successNotification;
    }
}
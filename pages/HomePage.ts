import {expect, Page, Locator} from '@playwright/test';
import { BasePage } from './BasePage';
import { HeaderComponent } from './components/HeaderComponent';

export class HomePage extends BasePage {

    public readonly header: HeaderComponent;

    private readonly shopByCategoryBtn: Locator;
    public readonly topTrendingHeader: Locator;

    constructor(page: Page) {
        super(page);

        this.header = new HeaderComponent(page);
        
        this.shopByCategoryBtn = this.page.getByRole('region', { name: /Shop By Category/i });
        this.topTrendingHeader = this.page.getByRole('heading', { name: /Top Trending Categories/i });
    }

    async expandCategories(): Promise<void> {
        await this.clickElement(this.shopByCategoryBtn, 'Shop By Category button');
    }
}
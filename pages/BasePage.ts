import {Page, Locator} from '@playwright/test';

export abstract class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(path : string): Promise<void> {
        console.log(`[Navigation] Navigating to ${path}`);
        await this.page.goto(path);
    }

    async clickElement(locator: Locator, elementName: string): Promise<void> {
        console.log(`[UI Action] Clicking element: ${elementName}`);
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }

    async fillField(locator: Locator, text: string, fieldName: string): Promise<string> {
        console.log(`[UI Action] Entering charaters into filed: ${fieldName}`);
        await locator.waitFor({ state: 'visible' });
        await localStorage.waitFor({ state: 'visible' });
        await locator.fill(text); 
    }
}
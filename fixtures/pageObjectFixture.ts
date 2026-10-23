import {test as baseTest} from '@playwright/test';
import { HomePage } from '../pages/HomePage';

type MyPageObjects = {
    homePage: HomePage;
}

export const test = baseTest.extend<MyPageObjects>({

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);

        await use(homePage);

        console.log('[Fixtures] Test execution completed. Performing cleanup if necessary.');
    }
});

export { expect } from '@playwright/test';
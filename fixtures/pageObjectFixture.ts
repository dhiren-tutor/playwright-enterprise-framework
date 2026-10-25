import {test as baseTest} from '@playwright/test';
import { HomePage } from '../pages/HomePage';

type MyPageObjects = {
    homePage: HomePage;
}

export const test = baseTest.extend<MyPageObjects>({

    homePage: async ({ page }, use) => {

        await use(new HomePage(page));
    },
});

export { expect } from '@playwright/test';
import {test as baseTest} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '@pages/SearchResultsPage';

type MyPageObjects = {
    homePage: HomePage;
    searchResultsPage: SearchResultsPage;
}

export const test = baseTest.extend<MyPageObjects>({

    homePage: async ({ page }, use) => {

        await use(new HomePage(page));
    },

    searchResultsPage: async ({page}, use) => {
        await use(new SearchResultsPage(page))
    }
});

export { expect } from '@playwright/test';
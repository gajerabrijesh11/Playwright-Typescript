import { test as base } from '@playwright/test';

export const test = base.extend({
  context: async ({ context }, use) => {

    await context.route('**/*', route => {
      const url = route.request().url();

      if (
        url.includes('doubleclick') ||
        url.includes('googleads') ||
        url.includes('googlesyndication')
      ) {
        return route.abort();
      }

      return route.continue();
    });

    await use(context);
  }
});

export { expect } from '@playwright/test';
// import {defineRouting} from 'next-intl/routing';
// import {createNavigation} from 'next-intl/navigation';
 
// export const routing = defineRouting({
//   locales: ['en', 'ge'],
 
//   defaultLocale: 'en'
// });

import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ge'],
  defaultLocale: 'en',
});
// import createMiddleware from 'next-intl/middleware';
// import {routing} from './i18n/routing';
 
// export default createMiddleware(routing);
 
// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(en|ge)/:path*']
// };


import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';  // Make sure the import is correct

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|ge)/:path*'],
};

// import createMiddleware from 'next-intl/middleware';

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ['en', 'ge'],
  
//   // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
//   defaultLocale: 'en'
// });

// export const config = {
//   // Skip all paths that should not be internationalized
//   matcher: ['/((?!api|_next|.*\\..*).*)']
// };
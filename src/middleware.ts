import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';  // Make sure the import is correct

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|ge)/:path*'],
};


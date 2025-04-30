import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import 'antd/dist/reset.css';
import { Navbar } from "@/components/organisms/Navbarr";
import { Footer } from "@/components/organisms/Footer";
import { usePathname } from "@/i18n/navigation";
import { ConditionalFooter } from "@/components/organisms/ConditionalFooter";
import { NavProvider } from "@/context/NavContext";
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }


  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <NavProvider >

            <Navbar />
            {children}
            <ConditionalFooter />

          </NavProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

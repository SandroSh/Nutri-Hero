import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import 'antd/dist/reset.css';
import { Navbar } from "@/components/organisms/Navbarr";
import { ConditionalFooter } from "@/components/organisms/ConditionalFooter";
import { NavProvider } from "@/context/NavContext";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Suspense } from "react";
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
            <Suspense fallback={<div className="h-[70vh] flex items-center justify-center "> loading</div>}>
              {children}
            </Suspense>
            <ConditionalFooter />

          </NavProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


// import '@ant-design/v5-patch-for-react-19';
// import { AntdRegistry } from '@ant-design/nextjs-registry';
import "../globals.css";
// import "antd/dist/reset.css";


import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {/* <AntdRegistry> */}
            {children}
          {/* </AntdRegistry> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

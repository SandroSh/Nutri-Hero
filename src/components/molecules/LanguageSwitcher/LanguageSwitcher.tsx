'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useTransition } from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleSwitch = () => {
    const newLocale = currentLocale === 'en' ? 'ge' : 'en';
    startTransition(() => {
      router.push(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="self-center">
      <Image
        src={currentLocale === 'en' ? '/ENG.svg' : '/GE.svg'}
        width={35}
        height={25}
        alt={currentLocale === 'en' ? 'English icon' : 'Georgian icon'}
        onClick={handleSwitch}
        className="cursor-pointer"
      />
    </div>
  );
};

export default LanguageSwitcher;
import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import { siteConfig } from '@/constant/config';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Авинесия",
    template: `Авинесия`,
  },
  description: "Официальный сайт виртуального государства Авинесия",
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/AvinesiaFlag.png',
    shortcut: '/AvinesiaFlag.png',
    apple: '/AvinesiaFlag.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: "avinesia.ru",
    title: "Авинесия",
    description: "Официальный сайт виртуального государства Авинесия",
    siteName: "Авинесия",
    type: 'website',
    locale: 'ru_RU',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className='text-white bg-dark'>{children}</body>
    </html>
  );
}

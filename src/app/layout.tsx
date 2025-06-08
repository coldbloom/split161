import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";

const roboto = Roboto({
  weight: ['400', '500', '700'], // Укажите нужные начертания
  subsets: ["latin", "cyrillic"], // Добавьте нужные языковые подмножества
  display: 'swap', // Для лучшей производительности
  variable: "--font-roboto", // CSS переменная для использования
});

export const metadata: Metadata = {
  title: {
    template: 'Ледяной Партнер',
    default: 'Ледяной Партнер - Ремонт и обслуживание кондиционеров'
  },
  description: 'Профессиональный монтаж и обслуживание кондиционеров и холодильного оборудования. Гарантия качества, доступные цены, работаем в Донецке, ДНР.',
  keywords: ['кондиционер', 'кондиционеры', 'ремонт кондиционеров', 'обслуживание кондиционеров', 'кондей', 'промышленные холодильные установки'],
  // Основные метатеги
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://holodniypartner.ru/'),

  alternates: {
    canonical: '/', // Основная (каноническая) версия страницы
    languages: {
      'ru-RU': '/ru', // Версия для русского языка
    },
  },

  // Open Graph (для соцсетей)
  openGraph: {
    title: 'Ледяной Партнер - Ремонт и обслуживание кондиционеров',
    description: 'Профессиональные услуги по ремонту и обслуживанию кондиционеров',
    url: 'https://holodniypartner.ru/',
    siteName: 'Ледяной Партнер',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://holodniypartner.ru/'}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Ледяной Партнер',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },

  // Дополнительные метатеги
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Для верификации в поисковых системах
  verification: {
    google: 'ваш-google-verification-code',
    yandex: 'ваш-yandex-verification-code',
  },

  other: {
    "font-roboto": "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}

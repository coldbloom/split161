import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import { YandexMetrika } from "@/app/utils/YandexMetrika";

const roboto = Roboto({
  weight: ['400', '500', '700'], // Укажите нужные начертания
  subsets: ["latin", "cyrillic"], // Добавьте нужные языковые подмножества
  display: 'swap', // Для лучшей производительности
  variable: "--font-roboto", // CSS переменная для использования
});

  export const metadata: Metadata = {
  title: {
    template: 'Ремонт кондиционеров, сплит в Ростове — Фриз Мастер',
    default: 'Ремонт кондиционеров в Ростове-на-Дону с гарантией | Фриз Мастер'
  },
  description: '✅Профессиональный ремонт, установка и обслуживание кондиционеров и сплит-систем в Ростове-на-Дону и Батайске. Выезд мастера в день обращения. Гарантия до 3 лет. Работаем с бытовыми и промышленными системами. +7 (989) 505-27-85',
  keywords: [
    'кондиционеры ростов',
    'чистка кондиционеров ростов',
    'Заправка конлиционеров ростов',
    'ремонт кондиционеров Ростов-на-Дону',
    'установка сплит-систем Ростов',
    'обслуживание кондиционеров Ростов',
    'заправка фреоном Ростов',
    'ремонт сплит-систем',
    'монтаж кондиционеров Ростов',
    'промышленные кондиционеры',
    'срочный ремонт кондиционеров',
    'диагностика кондиционеров Ростов',
    'ремонт кондиционеров Батайск'
  ],
  // Основные метатеги
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://split161.vercel.app'),

  alternates: {
    canonical: '/', // Основная (каноническая) версия страницы
    languages: {
      'ru-RU': '/ru', // Версия для русского языка
    },
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
    ]
  },

  // Open Graph (для соцсетей)
  openGraph: {
    title: 'Ремонт и обслуживание кондиционеров в Ростове-на-Дону | Фриз Мастер',
    description: 'Профессиональный ремонт и обслуживание кондиционеров и сплит-систем в Ростове-на-Дону. Оперативный выезд мастера, гарантия на все работы.',
    url: 'https://split161.vercel.app',
    siteName: 'Фриз Мастер',
    images: [
      {
        url: `https://split161.vercel.app/og_image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Ремонт кондиционеров в Ростове-на-Дону',
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
    google: 'WRfHpP8b5lYUkK6LmUNGNlG4FHh62zdnX17nqDbSXuo',
    yandex: 'c497c7032dd9a757',
  },

  // Добавляем дополнительные метатеги через other
  other: {
    "font-roboto": "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
    "geo.region": "RU-ROS",
    "geo.placename": "Ростов-на-Дону",
    "geo.position": "47.2357;39.7015",
    "ICBM": "47.2357, 39.7015",
    // "yandex-verification": "c497c7032dd9a757",
    // "google-site-verification": "WRfHpP8b5lYUkK6LmUNGNlG4FHh62zdnX17nqDbSXuo",
    "author": "Фриз Мастер",
    "format-detection": "telephone=yes",
    // "business:contact_data:street_address": "Ваш адрес",
    "business:contact_data:locality": "Ростов-на-Дону",
    "business:contact_data:region": "Ростовская область",
    // "business:contact_data:postal_code": "Ваш индекс",
    "business:contact_data:country_name": "Россия",
    "business:contact_data:phone_number": "+7 (989) 505-27-85",
    "place:location:latitude": "47.2357",
    "place:location:longitude": "39.7015",
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
        <YandexMetrika />
      </body>
    </html>
  );
}

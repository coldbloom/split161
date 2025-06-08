import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Заголовки для SEO и безопасности
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // SEO
          { key: 'X-robots-tag', value: 'index, follow' },

          // Безопасность
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },

          // Кеширование
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable', for: 'static' },
        ],
      },
    ];
  },

  // Переменные окружения
  env: {
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://holodniypartner.ru/',
  },

  // Оптимизации
  // experimental: {
  //   optimizePackageImports: ['lucide-react'], // Пример оптимизации иконок
  //   serverMinification: true,
  //   optimizeCss: true, // Оптимизация CSS
  // },
};

export default nextConfig;

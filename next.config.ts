import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   // Для локальных файлов из public domains не нужны
  //   domains: [],
  //
  //   // Отключаем автоматическую конвертацию в WebP/AVIF для SVG
  //   formats: ['image/avif', 'image/webp'], // SVG автоматически исключается
  //
  //   // Увеличиваем время кеширования
  //   minimumCacheTTL: 86400, // 1 день
  //
  //   // Отключаем опасные оптимизации для SVG
  //   dangerouslyAllowSVG: true, // Разрешаем SVG
  //   contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  // },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Заголовки для SEO и безопасности
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // SEO
          { key: 'X-Robots-Tag', value: 'index, follow, max-image-preview:large, max-snippet:-1' },

          // Безопасность
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },

          // Умеренное кеширование для HTML
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate', // 1 час с обязательной валидацией
          },
        ],
      },
    ];
  },

  // Переменные окружения
  env: {
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://split161.vercel.app',
  },

  // Оптимизации
  experimental: {
    // ДОБАВЛЕНО: Современные оптимизации
    serverMinification: true, // Минификация серверного кода
    // optimizeCss: true, // Оптимизация CSS
  },

  compress: true, // Сжатие
  poweredByHeader: false, // Убираем X-Powered-By заголовок
  generateEtags: true, // Генерируем ETags для кеширования
};

export default nextConfig;

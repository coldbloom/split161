import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://split161.vercel.app'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1, // максимальный приоритет для главной
    },
    {
      url: `${baseUrl}/cleaning`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9, // высокий приоритет для ключевой услуги
    },
    // Добавьте все страницы лендинга
  ]
}
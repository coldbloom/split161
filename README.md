# Getting Started split161
66
## yarn start:prod

```bash
    "start:prod": "pm2 start yarn -- start",
```

# Настройки NGINX
### Где лежат конфигурация nginx ?
_(root directory)_

`cd /etc/nginx/sites-enabled/`

### 1. Проверьте конфиг на ошибки:
```bash 
    nginx -t
```

### 2. Перезагрузи Nginx
```bash 
    sudo systemctl reload nginx
```

_(name - имя папки в которую вы создали, создать папку с помощью команды `vi name` или `mkdir name`)_
vim name




NEXT_PUBLIC_SITE_URL

Должен содержать публичный домен, а не localhost
Используется в: metadataBase (для корректных абсолютных URL в метатегах)
OpenGraph-изображениях (og:image) Sitemap.xml
Канонических ссылках (canonical)
Формат: https:// (обязательно с HTTPS для SEO)
NEXT_PUBLIC_API_URL
/api — если API роуты находятся на том же домене

Если API на другом сервере: полный URL (https://split161.vercel.app)


snap и apt работают глобально из любой директории



клиент называется client в pm2



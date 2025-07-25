import { Section1 } from "@/app/components/shared/sections/Section1";
import { Title } from '@/app/components/kit/Title';
import React from "react";
import cn from 'classnames';
import s from './page.module.scss';
import Image from "next/image";
import type { Metadata } from "next";

// Уникальные метатеги для страницы чистки
export const metadata: Metadata = {
  title: 'Чистка кондиционеров и сплитов в Ростове-на-Дону от 1500₽',
  description: '🔧 Профессиональная чистка внутреннего и внешнего блока кондиционера в Ростове. Дезинфекция, антибактериальная обработка. Выезд мастера в день обращения. Гарантия 6 месяцев. Звоните: +7 (989) 505-27-85',

  keywords: [
    'чистка кондиционера ростов',
    'чистка сплитов ростов',
    'чистка сплит систем в ростове',
    'чистка сплита ростов на дону',
    'чистка внутреннего блока кондиционера',
    'чистка внешнего блока кондиционера',
    'дезинфекция кондиционера ростов',
    'антибактериальная обработка кондиционера',
    'профессиональная чистка кондиционеров',
    'обслуживание кондиционеров ростов',
    'цены на чистку кондиционеров',
    'мастер по чистке кондиционеров ростов',
    'чистка кондиционеров на дому',
    'срочная чистка кондиционеров'
  ],

  // Open Graph для соцсетей
  openGraph: {
    title: 'Чистка кондиционеров в Ростове-на-Дону от 1500₽ | Фриз Мастер',
    description: 'Профессиональная чистка внутреннего и внешнего блока кондиционера. Дезинфекция и антибактериальная обработка. Выезд мастера в день обращения.',
    url: 'https://split161.vercel.app/cleaning',
    images: [
      {
        url: 'https://split161.vercel.app/external-clean.jpg',
        width: 840,
        height: 446,
        alt: 'Чистка внутреннего блока кондиционера в Ростове-на-Дону',
      },
    ],
  },

  // Дополнительные метатеги для лучшего SEO
  other: {
    "geo.region": "RU-ROS",
    "geo.placename": "Ростов-на-Дону",
    "service.type": "Чистка кондиционеров",
    "service.area": "Ростов-на-Дону, Батайск, Аксай",
    "price.from": "1500",
    "price.currency": "RUB",
    "business.hours": "Ежедневно 8:00-22:00",
    "contact.phone": "+7 (989) 505-27-85",
  },

  // Альтернативные URL (если планируете)
  alternates: {
    canonical: 'https://split161.vercel.app/cleaning',
  },

  // Для роботов поисковых систем
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function CleaningPage() {
  return (
    <main>
      <Section1 headingText={<h1>Чистка <strong>сплит-систем</strong> <strong>Ростов</strong> — профессиональное обслуживание кондиционеров</h1>} />
      <section className={s.section}>
        <div className={s.content}>
          <Title>Популярные услуги по чистке <span>сплит-систем</span> в <strong>Ростове</strong></Title>
          <p className={s.description}>Если ваш кондиционер стал хуже охлаждать, шуметь или неприятно пахнуть? Пора провести чистку сплит-системы! В Ростове-на-Дону мы предлагаем профессиональное обслуживание кондиционеров с выездом на дом и гарантией качества.</p>
          <div className={s.blockWrapper}>
            <div className={s.contentWrapper}>
              <div className={s.contentBlock}>
                <h3>1. Чистка внутреннего блока</h3>
                <p>Со временем во внутреннем блоке скапливаются:</p>
                <ul>
                  <li>Пыль и бактерии</li>
                  <li>Грибок и плесень</li>
                  <li>Жировые отложения (особенно на кухне)</li>
                </ul>
                <p>Признаки необходимости чистки:</p>
                <ul className={s.listNone}>
                  <li>✔ Слабый поток воздуха</li>
                  <li>✔ Неприятный запах при включении</li>
                  <li>✔ Увеличенное энергопотребление</li>
                </ul>
              </div>
            </div>
            <div className={s.imageWrapper}>
              <Image alt="чистка внутреннего блока" src="/clean-split2.jpg" fill />
            </div>
          </div>

          <div className={cn(s.blockWrapper, s.reverse)}>
            <div className={s.contentWrapper}>
              <div className={s.contentBlock}>
                <h3>2. Чистка внешнего блока</h3>
                <p>Наружный блок подвержен:</p>
                <ul>
                  <li>Засорению пухом и листьями</li>
                  <li>Скоплению пыли и грязи</li>
                  <li>Окислению контактов</li>
                </ul>
                <p>Последствия загрязнения:</p>
                <ul className={s.listNone}>
                  <li>❌ Перегрев компрессора</li>
                  <li>❌ Снижение эффективности охлаждения</li>
                  <li>❌ Повышенный износ системы</li>
                </ul>
              </div>
            </div>
            <div className={s.imageWrapper}>
              <Image alt="чистка внешнего блока" src="/external-clean.jpg" fill />
            </div>
          </div>
          <div className={s.blockWrapper}>
            <div className={s.contentWrapper}>
              <div className={s.contentBlock}>
                <h3>3. Дезинфекция и антибактериальная обработка</h3>
                <p>После механической чистки мы используем специальные антисептики, которые:</p>
                <ul>
                  <li>Уничтожают бактерии и грибок</li>
                  <li>Устраняют неприятные запахи</li>
                  <li>Предотвращают аллергические реакции</li>
                </ul>
              </div>
            </div>
            <div className={s.imageWrapper}>
              <Image alt="чистка внутреннего блока" src="/indoor-clean.jpg" fill />
            </div>
          </div>

          {/*<h3>Почему стоит заказать чистку у нас?</h3>*/}
          {/*<ul className={s.listNone}>*/}
          {/*  <li>✅ Опытные мастера – работаем с 2010 года</li>*/}
          {/*  <li>✅ Без скрытых платежей – фиксированная цена</li>*/}
          {/*  <li>✅ Выезд в день обращения – срочная чистка за 2 часа</li>*/}
          {/*  <li>✅ Гарантия 6 месяцев – бесплатный выезд при проблемах</li>*/}
          {/*</ul>*/}
          {/*<h4>Не ждите, пока кондиционер выйдет из строя — регулярное обслуживание продлит его срок службы и сэкономит ваши деньги!</h4>*/}
        </div>
      </section>
      <section className={s.section}>
        <div className={s.content}>
          <Title>Цены на чистку <strong>сплит-систем</strong> в <span>Ростове-на-Дону</span></Title>
          <div className={s.tableWrapper}>
            <table>
              <thead>
              <tr>
                <th>Услуга</th>
                <th>Стоимость</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Чистка внутреннего блока</td>
                <td>от 1 500 ₽</td>
              </tr>
              <tr>
                <td>Чистка внешнего блока</td>
                <td>от 2 000 ₽</td>
              </tr>
              <tr>
                <td>Полная чистка (внутр. + внеш. блок)</td>
                <td>от 3 000 ₽</td>
              </tr>
              <tr>
                <td>Дезинфекция</td>
                <td>от 500 ₽</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  )
}
import React from 'react';
import Image from "next/image";

import s from './Section3.module.scss'
import { AdvantageCard } from './AdvantageCard';

export type Advantage = {
  icon: string;
  title: string;
  description: string;
}

const advantages = [
  {
    icon: '/icon_4.svg',
    title: 'Скорость обслуживания',
    description: 'В нашей компании работает более 15 бригад, что позволяет быстро реагировать и подбирать специалистов'
  },
  {
    icon: '/icon_3.svg',
    title: 'Прозрачная цена',
    description: 'Вы узнаете цену до выполнения услуги, без “неожиданных” сюрпризов'
  },
  {
    icon: '/icon_2.svg',
    title: 'Оплата после обслуживания',
    description: 'Оплачиваете после того, как услуга завершена и полностью вас устраивает'
  },
  {
    icon: '/icon_1.svg',
    title: 'Даем гарантию 1 год',
    description: 'Получаете гарантию 1 год, которая документально фиксируется'
  }
];

export const Section3 = () => {
  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <div className={s.contentLayout}>
          <h3 className={s.title}><span>Преимущества</span>, которые вы получаете, обращаясь к нам</h3>
          <div className={s.cardsWrapper}>
            {advantages.map((card: Advantage) => (
              <AdvantageCard key={card.icon} {...card} />
            ))}
          </div>
        </div>

        <div className={s.imagesWrapper}>
          <Image unoptimized src='/bg-bratic.svg' alt="background" fill className={s.bg}/>
          <Image src='/bratic.png' alt="Наш сотрудник" fill className={s.image}/>
        </div>
      </div>
    </section>
  );
};
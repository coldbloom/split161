import React from 'react';
import { Cards, CardData } from '@/app/components/shared/Cards';

const discounts: CardData[] = [
  {
    url: '/card1.svg',
    title: 'Скидка 15% на первое обращение'
  },
  {
    url: '/card2.svg',
    title: 'Скидка 15% для военослужащих'
  },
  {
    url: '/card3.svg',
    title: 'Скидка 15% для пенсионеров'
  }
];

export const Section2 = () => (
  <Cards
    id="promotions"
    title={<><span>Скидки</span> на ремонт и чистку сплит-систем в <strong>Ростове-на-Дону</strong></>}
    data={discounts}
  />
)
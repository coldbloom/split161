import { Cards, CardData } from "@/app/components/shared/Cards";
import React from "react";
import s from './Section4.module.scss';

const services: CardData[] = [
  {
    url: '/discount-1.svg',
    title: 'Чистка кондиционеров и сплит систем',
    price: 1500,
  },
  {
    url: '/discount-2.svg',
    title: 'Заправка кондиционеров и сплит систем фреоном',
    price: 1500,
  },
  {
    url: '/discount-3.svg',
    title: 'Ремонт кондиционеров и сплит систем',
    price: 1500,
  }
]

export const Section4 = () => (
  <Cards
    id="services"
    title={<><span>Выберите</span> интересующую <span>услугу</span> и мы свяжемся с вами в течение 10 минут</>}
    titleVariant="p"
    data={services}
    className={s.custom}
  />
);
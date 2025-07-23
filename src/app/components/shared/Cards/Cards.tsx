import { ReactNode } from 'react';
import s from './Cards.module.scss'
import { Card } from './Card';
import { Title, TitleVariant } from '@/app/components/kit/Title'
import cn from "classnames";

export type CardData = {
  url: string;
  title: string;
  title2?: string;
  price?: number;
};

type CardsProps = {
  title: ReactNode;
  titleVariant?: TitleVariant;
  data: CardData[];
  className?: string;
  id?: string;
}

export const Cards = ({ title, titleVariant, data, className, id }: CardsProps) => {
  return (
    <section id={id} className={cn(s.section, className)}>
      <div className={s.content}>
        <Title variant={titleVariant}>{title}</Title>
        <div className={s.cardsWrapper}>
          {data.map((card: CardData) => (<Card key={card.url} {...card} />))}
        </div>
      </div>
    </section>
  );
};
import { ReactNode } from 'react';
import s from './Cards.module.scss'
import { Card } from './Card';
import cn from "classnames";

export type CardData = {
  url: string;
  title: string;
  title2?: string;
  price?: number;
};

type CardsProps = {
  title: ReactNode;
  data: CardData[];
  className?: string;
  id?: string;
}

export const Cards = ({ title, data, className, id }: CardsProps) => {
  return (
    <section id={id} className={cn(s.section, className)}>
      <div className={s.content}>
        <p className={s.title}>{title}</p>
        <div className={s.cardsWrapper}>
          {data.map((card: CardData) => (<Card key={card.url} {...card} />))}
        </div>
      </div>
    </section>
  );
};
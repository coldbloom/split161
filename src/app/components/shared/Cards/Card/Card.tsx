import React from "react";
import Image from "next/image";
import s from './Card.module.scss';
import { CardData } from '../Cards';

export const Card = ({ url, title, title2, price }: CardData) => {
  return (
    <div className={s.wrapper}>
      <div className={s.imageWrapper}>
        <Image unoptimized src={url} alt={'акция'} fill className={s.image}/>
      </div>
      <div className="column">
        <p className={s.title}>{title}</p>
        {title2 && <p className={s.title}>{title2}</p>}
        {price && <span className={s.price}>от {price}₽</span>}
      </div>
        <a className={s.text} href="https://wa.me/qr/3BYHIAJNBWXOD1" aria-label="Оставить заявку в Whats App">
          <span>Оставить заявку</span>
          <Image unoptimized src="/vector.svg" alt="chevron-right" width={10} height={10}/>
        </a>
    </div>
  );
};
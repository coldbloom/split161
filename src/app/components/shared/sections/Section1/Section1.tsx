import React from 'react';
import Image from "next/image";
import { Form } from './Form'
import { MainPhone } from "@/app/components/shared/MainPhone";
import cn from "classnames";
import s from './Section1.module.scss';

type Section1Props = {
  headingText: React.ReactNode | string;
}

export const Section1 = ({ headingText }: Section1Props) => {
  return (
    <section className={s.sectionWrapper}>
      <div className={s.contentWrapper}>
        <div className={cn('column', s.wrapper)}>
          <div className={s.imageWrapper}>
            <Image
              unoptimized
              src="/conditioner.svg"
              alt="сплит"
              className={s.image}
              fill
            />
          </div>
          <MainPhone />
          <div className={s.textWrapper}>
            <div className={cn(s.saleWrapper, 'row')}>
              <Image unoptimized src="/sale.svg" alt="Скидка" width={25} height={25}/>
              <p>Скидка 15% на первый заказ</p>
            </div>
            {headingText}
          </div>
        </div>

        <Form/>
      </div>
    </section>
  );
};
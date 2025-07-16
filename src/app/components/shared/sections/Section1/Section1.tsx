import React from 'react';
import Image from "next/image";

import cn from "classnames";
import s from './Section1.module.scss';
import { Form } from './Form'
import { phone, prettyPhone } from '@/app/utils/const';
import {MainPhone} from "@/app/components/shared/MainPhone";

export const Section1 = () => {
  return (
    <section className={s.sectionWrapper}>
      <div className={s.contentWrapper}>
        <div className={cn('column', s.wrapper)}>
          <div className={s.imageWrapper}>
            <Image
              src="/conditioner.svg"
              alt="Кондиционер"
              className={s.image}
              fill
            />
          </div>
          <MainPhone />
          <div className={s.textWrapper}>
            <div className={cn(s.saleWrapper, 'row')}>
              <Image src="/sale.svg" alt="Скидка" width={25} height={25}/>
              <p>Скидка 15% на первый заказ</p>
            </div>
            <h1>Ремонт и обслуживание <strong>сплит&nbsp;систем</strong> и <strong>кондиционеров</strong> в Ростове-на-Дону</h1>
          </div>
        </div>

        <Form/>
      </div>
    </section>
  );
};
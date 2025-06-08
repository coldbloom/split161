import React from 'react';
import s from './Contacts.module.scss';
import { Layout } from '@/app/components/shared/Layout'
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { MessengerLinks } from '@/app/components/shared/Header/info';

const REQUISITS: Requisite[] = [
  {
    name: 'Наименование',
    requisite: 'ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ КОРОЛЁВ БОГДАН ВЛАДИМИРОВИЧ'
  },
  {
    name: 'ИНН',
    requisite: '930801393043'
  },
  {
    name: 'ОГРНИП',
    requisite: '325930100027026'
  },
  {
    name: 'Расчётный счёт',
    requisite: '40802810552720001096'
  },
  {
    name: 'Банк',
    requisite: 'ЮГО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК'
  },
  {
    name: 'БИК банка',
    requisite: '046015602'
  },
  {
    name: 'Корсчёт',
    requisite: '30101810600000000602'
  },
  {
    name: 'ИНН банка',
    requisite: '7707083893'
  },
  {
    name: 'КПП банка',
    requisite: '616143001'
  },
]

type Requisite = {
  name: string;
  requisite: string;
};

const Requisite = ({ name, requisite }: Requisite) => {
  return (
    <div className={cn('column')} style={{ gap: '4px' }}>
      <span className={s.name}>{name}:</span>
      <span className={s.requisite}>{requisite}</span>
    </div>
  )
}

export const Contacts = () => {
  return (
    <Layout variant="secondary" id="contacts">
      <div className={s.wrapper}>
        <div className={cn(s.gap, 'column')}>
          <h2 className={s.title}>Наши контакты</h2>

          <div className={cn(s.phoneWrapper, 'column')}>
            <a href="tel:+79499620894" itemProp="telephone" aria-label="Позвонить по номеру +7 (949) 962-08-94"
               className={s.phone}>
              <span>+7 (949) 962-08-94</span>
            </a>
            <Link href="https://wa.me/qr/3BYHIAJNBWXOD1" aria-label="Написать в WhatsApp" className={s.linkWhatsUp}>Обратный звонок</Link>
          </div>
          <div>
            <div className={cn(s.workTime, 'row')}>
              <Image src="/clock-icon.svg" alt="" width={24} height={24}/>
              <span className={s.text}>Пн-вс: 09:00-20:00</span>
            </div>
            <a href="mailto:holdniy.partner@gmail.com" className={cn(s.workTime, 'row')}>
              <Image src="/mail-icon.svg" alt="" width={24} height={24}/>
              <span className={s.text}>holdniy.partner@gmail.com</span>
            </a>
          </div>
        </div>
        <div className={cn(s.gap, 'column')}>
          <h3 className={s.title}>Мессенджеры</h3>
          <MessengerLinks iconSize={56} />
        </div>
        <div className={cn(s.gap, 'column')}>
          <h3 className={s.title}>Реквизиты</h3>
          <div className='column' style={{ gap: '16px' }}>
            {REQUISITS.map((props, idx) => (
              <Requisite {...props} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
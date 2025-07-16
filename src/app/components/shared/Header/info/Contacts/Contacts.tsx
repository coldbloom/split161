import cn from "classnames";
import s from './Contacts.module.scss';
import React from "react";
import { phone, prettyPhone } from '@/app/utils/const';

type ContactsProps = {
  visible?: boolean;
  className?: string;
}

export const Contacts = ({ visible = false, className }: ContactsProps) => (
  <address
    className={cn(s.address, 'column', className, { [s['address--always-visible']]: visible })}
  >
    <time dateTime="Mo-Fr 10:00-19:00" className={s.workTime} itemProp="openingHours">Пн-пт с 10:00-19:00</time>
    <a
      href={`tel:${phone}`}
      className={s.phone}
      itemProp="telephone"
      aria-label="Позвонить по телефону"
    >
      {prettyPhone}
    </a>
    <a href="https://wa.me/qr/3BYHIAJNBWXOD1" aria-label="Написать в WhatsApp" className={s.callback}>Обратный звонок</a>
  </address>
);

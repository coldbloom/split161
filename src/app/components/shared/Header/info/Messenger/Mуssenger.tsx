import cn from "classnames";
import s from './Messenger.module.scss';
import Image from "next/image";
import React from "react";

type MessengerLinksProps = {
  iconSize?: number;
}

export const MessengerLinks = ({ iconSize = 48 }: MessengerLinksProps) => (
  <nav aria-label="Мессенджеры">
    <ul className='row' style={{gap: '7px', listStyle: 'none', padding: 0}}>
      <li>
        <a href="https://wa.me/qr/3BYHIAJNBWXOD1" aria-label="Написать в WhatsApp">
          <Image src="/whatsapp-icon.svg" alt="" aria-hidden="true" width={iconSize} height={iconSize}/>
        </a>
      </li>
      <li>
        <a href="https://t.me/ledyanoipartner" aria-label="Написать в Telegram">
          <Image src="/telegram-icon.svg" alt="" aria-hidden="true" width={iconSize} height={iconSize}/>
        </a>
      </li>
    </ul>
  </nav>
)

type MessengerProps = {
  visible?: boolean;
  clasName?: string;
}

export const Messenger = ({visible = false, clasName}: MessengerProps) => (
  <section
    className={cn(s.messenger, 'row', clasName, {[s['messenger--always-visible']]: visible})}
    style={{gap: '24px'}}
  >
    <div>
      <p className={s.ask}>Есть вопрос?</p>
      <p className={s.ask_2}>Задайте онлайн</p>
    </div>
    <MessengerLinks />
  </section>
);

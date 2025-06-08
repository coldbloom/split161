import React from 'react';
import s from './MobileMenu.module.scss';
import { Contacts, Messenger, Region } from '../info';
import { MenuList } from '../MenuList';

export const MobileMenu = () => {
  return (
    <div id="mobile-menu" className={s.wrapper}>
      <nav>
        <MenuList />
      </nav>
      <section className={s.infoWrapper}>
        <Region visible={true} className={s.customRegion} />

        <Contacts visible={true} className={s.customContacts} />

        <Messenger visible={true} clasName={s.customMessenger} />
      </section>
    </div>
  );
};
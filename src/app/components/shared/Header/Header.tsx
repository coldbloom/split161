import React from 'react';
import s from './Header.module.scss';
import { BurgerMenu } from './BurgerMenu';
import { MobileMenu } from "@/app/components/shared/Header/MobileMenu";
import { Logo } from '@/app/components/shared/Logo';
import { Region, Messenger, Contacts } from './info';
import { MenuList } from './MenuList';

export const Header = () => {
  return (
    <header>
      <div className={s.layoutHeader}>
        <div className={s.wrapper}>
          <Logo />

          <Region />

          {/* Мессенджеры */}
          <Messenger />

          {/* Контактная информация */}
          <Contacts />

          {/* Мобильное меню */}
          <BurgerMenu>
            <MobileMenu />
          </BurgerMenu>
        </div>
      </div>
      <nav className={s.nav}>
        <MenuList variant="desktop"/>
      </nav>
    </header>
  );
};
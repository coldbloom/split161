import React from 'react';
import cn from 'classnames';
import s from './Header.module.scss';
import Image from "next/image";
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { MobileMenu } from "@/app/components/shared/Header/MobileMenu";
import { Region, Messenger, Contacts } from './info';
import { MenuList } from './MenuList';

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => (
  <a href="/">
    <div className={cn('row', 'items-center', className)} style={{gap: '6px'}}>
      <Image src="./freeze-master-logo.svg" alt="Компания 'Фриз мастер'" width={46} height={46}/>
      <div className='column' style={{gap: '4px'}}>
        <h2 className={s.name}>Фриз мастер</h2>
        <p className={s.description}>Ремонт, обслуживание, заправка сплит</p>
      </div>
    </div>
  </a>
);

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
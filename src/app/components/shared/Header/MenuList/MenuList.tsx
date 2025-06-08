"use client"

import cn from 'classnames';
import s from './MenuList.module.scss';
import Link from "next/link";
import { MenuContext } from "@/app/components/shared/Header/BurgerMenu";
import {PropsWithChildren, useContext} from "react";

type MenuListProps = {
  variant?: 'mobile' | 'desktop';
};

export const MenuList = ({ variant }: MenuListProps) => {
  const { closeMenu } = useContext(MenuContext);

  const LiClose = ({ children }: PropsWithChildren) => (
    <li onClick={closeMenu}>
      {children}
    </li>
  )

  return (
    <ul className={cn(s.mobileMenuList, {[s.desktop]: variant === 'desktop'})}>
      <LiClose>
        <Link href="#promotions" scroll={true} className={s.menuLink}>
          Акции
        </Link>
      </LiClose>
      <LiClose>
        <Link href="#services" scroll={true} className={s.menuLink}>
          Ремонт
        </Link>
      </LiClose>
      <LiClose>
        <Link href="#services" scroll={true} className={s.menuLink}>
          Обслуживание
        </Link>
      </LiClose>
      <LiClose>
        <Link href="#services" scroll={true} className={s.menuLink}>
          Мойка
        </Link>
      </LiClose>
      <LiClose>
        <Link href="#contacts" scroll={true} className={s.menuLink}>
          Контакты
        </Link>
      </LiClose>
    </ul>
  );
};
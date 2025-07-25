'use client'

import { useState, PropsWithChildren, createContext } from 'react';
import Image from "next/image";
import { ModalPageWindow } from "@/app/components/kit/ModalPageWindow";

import s from './BurgerMenu.module.scss';

// Создаем контекст
export const MenuContext = createContext({
  closeMenu: () => {}
});


export const BurgerMenu = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className={s.burgerButton}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(prev => !prev)}
      >
        <Image
          unoptimized
          src={open ? '/close.svg' : '/hamburger.svg'}
          alt="Меню"
          width={40}
          height={40}
        />
      </button>
      <ModalPageWindow
        isOpen={open}
        onClose={() => setOpen(false)}
        slidePosition="x"
        exitActiveFast={true}
        className={s.modalPage}
        backdropClassName={s.backdrop}
      >
        <MenuContext.Provider value={{ closeMenu: () => setOpen(false) }}>
          {children}
        </MenuContext.Provider>
      </ModalPageWindow>
    </>
  );
};
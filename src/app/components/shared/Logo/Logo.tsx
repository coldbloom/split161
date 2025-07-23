import cn from "classnames";
import Image from "next/image";
import s from './Logo.module.scss';
import React from "react";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => (
  <a href="/">
    <div className={cn('row', 'items-center', className)} style={{ gap: '6px' }}>
      <Image unoptimized src="/freeze-master-logo.svg" alt="Компания 'Фриз мастер'" width={46} height={46}/>
      <div className='column' style={{gap: '4px'}}>
        <h2 className={s.name}>Фриз мастер</h2>
        <p className={s.description}>Ремонт, чистка, заправка сплит-систем</p>
      </div>
    </div>
  </a>
);
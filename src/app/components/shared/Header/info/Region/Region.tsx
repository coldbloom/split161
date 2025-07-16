import cn from "classnames";
import s from './Region.module.scss';
import Image from "next/image";
import React from "react";

type RegionProps = {
  visible?: boolean
  className?: string
};

export const Region = ({ visible = false, className }: RegionProps) => (
  <div
    className={cn(s.location, 'row', 'items-center', className, { [s['location--always-visible']]: visible })}
    style={{gap: '4px'}}
  >
    <Image src={visible ? 'geo-white.svg' : 'geo.svg'} alt="Регион" width={24} height={24} />
    <p itemProp="addressLocality" className={s.text}>Ростов-на-Дону, Батайск, Аксай</p>
  </div>
);

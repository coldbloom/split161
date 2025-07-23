import cn from "classnames";
import s from './Region.module.scss';
import Image from "next/image";
import React from "react";

type RegionProps = {
  visible?: boolean
  className?: string
  withDescription?: boolean
};

export const Region = ({ visible = false, className, withDescription }: RegionProps) => (
  <div
    className={cn(s.location, 'row', 'items-center', className, { [s['location--always-visible']]: visible, [s['withDescription']]: withDescription })}
  >
    {withDescription && <p className={s.text} style={{ width: '100%' }}>Мы работаем в:</p>}
    <div className="row">
      <Image unoptimized src={visible ? '/geo-white.svg' : '/geo.svg'} alt="Регион" width={24} height={24} />
      <p itemProp="addressLocality" className={cn(s.text, { [s['bold-text']]: withDescription })}>Ростов-на-Дону, Батайск, Аксай</p>
    </div>
  </div>
);

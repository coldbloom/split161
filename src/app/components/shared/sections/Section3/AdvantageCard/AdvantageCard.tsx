import React from 'react';
import s from './AdvantageCard.module.scss';
import Image from "next/image";
import { Advantage } from '../Section3';

type AdvantageProps = Advantage;

export const AdvantageCard = ({ icon, title, description }: AdvantageProps) => {
  return (
    <div className={s.wrapper}>
      <Image unoptimized src={icon} alt="icon" width={44} height={44} />
      <p className={s.title}>{title}</p>
      <p className={s.description}>{description}</p>
    </div>
  );
};
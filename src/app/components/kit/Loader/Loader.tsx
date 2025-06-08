import cn from 'classnames';
import s from './Loader.module.scss';
import {CSSProperties} from "react";

const thickness = {
  l: 3.6,
  m: 4.6,
  s: 5,
};

export type LoaderProps = {
  size?: 's' | 'm' | 'l';
  color?: 'dark' | 'light';
  className?: string;
  style?: CSSProperties;
};

export const Loader = ({ size = 'l', color = 'dark', className, style }: LoaderProps) => {
  return (
    <div className={cn(s.container, className, s[`size-${size}`])} style={style}>
      <svg className={s.svg} viewBox="25 25 50 50">
        <circle
          className={cn(s.circle, s[`color-${color}`])}
          cx={50}
          cy={50}
          r={20}
          strokeWidth={thickness[size]}
          fill="none"
        />
      </svg>
    </div>
  );
};

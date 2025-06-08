import cn from "classnames";
import s from './Layout.module.scss';
import {CSSProperties, PropsWithChildren} from "react";

type LayoutProps = {
  className?: string;
  variant?: 'secondary';
  style?: CSSProperties;
  id?: string;
} & PropsWithChildren

export const Layout = ({ children, id, variant, className, style }: LayoutProps) => {
  return (
    <section id={id} className={cn(s.section, { [s['bg-secondary']]: variant === 'secondary' })}>
      <div className={cn(s.wrapper, className)} style={style}>
        {children}
      </div>
    </section>
  )
}
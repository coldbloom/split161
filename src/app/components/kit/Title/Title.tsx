import React from 'react';
import s from './Title.module.scss';
import cn from 'classnames';

export type TitleVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TitleProps = {
  variant?: TitleVariant;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Title: React.FC<TitleProps> = ({
  variant = 'h2',
  children,
  className,
  style,
}) => {
  // Выбираем соответствующий HTML-тег
  const Tag = variant;

  return (
    <Tag
      className={cn(s.title, className)}
      style={style}
    >
      {children}
    </Tag>
  );
};
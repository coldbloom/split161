'use client';

import React, { CSSProperties, ReactNode, useEffect, useRef, forwardRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { usePortalContainer } from '@/app/utils/hooks/usePortalContainer';
import { createPortal } from 'react-dom';
import cn from 'classnames';
import s from './ModalPageWindow.module.scss';

// Создаем компоненты с ref
const Backdrop = forwardRef<HTMLDivElement, { className?: string; onClick?: () => void }>(
  ({ className, onClick }, ref) => (
    <div ref={ref} className={className} onClick={onClick} />
  )
);

const ModalContent = forwardRef<HTMLDivElement, {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode
}>(({ className, style, children }, ref) => (
  <div ref={ref} className={className} style={style}>
    {children}
  </div>
));

type ModalPageWindowProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  exitActiveFast?: boolean;
  slidePosition?: 'x' | 'y';

  className?: string;
  backdropClassName?: string;
  style?: CSSProperties;
};

export const ModalPageWindow = ({
                                  children,
                                  isOpen,
                                  onClose,
                                  exitActiveFast = false,
                                  slidePosition = 'y',
                                  className,
                                  backdropClassName,
                                  style = {}
                                }: ModalPageWindowProps) => {
  const container = usePortalContainer('modal-window');
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const transitionClasses = {
    enter: slidePosition === 'x' ? s['slide-in-enter-x'] : s['slide-in-enter'],
    enterActive: slidePosition === 'x' ? s['slide-in-enter-active-x'] : s['slide-in-enter-active'],
    exit: slidePosition === 'x' ? s['slide-out-x'] : s['slide-out'],
    exitActive: slidePosition === 'x'
      ? (exitActiveFast ? s['side-out-active-fast-x'] : s['slide-out-active-x'])
      : (exitActiveFast ? s['side-out-active-fast'] : s['slide-out-active'])
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!container) return null;

  return createPortal(
    <>
      <CSSTransition
        in={isOpen}
        timeout={300}
        unmountOnExit
        nodeRef={backdropRef}
        classNames={{
          enter: s['backdrop-enter'],
          enterActive: s['backdrop-enter-active'],
          exit: s['backdrop-exit'],
          exitActive: s['backdrop-exit-active']
        }}
      >
        <Backdrop
          ref={backdropRef}
          className={cn(s.backdrop, backdropClassName)}
          onClick={onClose}
        />
      </CSSTransition>

      <CSSTransition
        in={isOpen}
        timeout={300}
        unmountOnExit
        nodeRef={modalRef}
        classNames={transitionClasses}
      >
        <ModalContent ref={modalRef} className={cn(s.modal, className)} style={style}>
          {children}
        </ModalContent>
      </CSSTransition>
    </>,
    container
  );
};
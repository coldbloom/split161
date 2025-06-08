"use client"

import Image from 'next/image';
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

import s from './Carousel.module.scss';
import cn from 'classnames';

import {DotButton, useDotButton} from './EmblaCarouselDotButton';
import { usePrevNextButtons } from './EmblaCarouselArrowButton'

type CarouselProps = {
  slides: string[];
  options?: EmblaOptionsType
}

export const Carousel = ({ slides, options }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className={s.embla}>
      <button className={cn(s.arrowWrapper, s.arrowLeft)} onClick={onPrevButtonClick} />
      <button className={cn(s.arrowWrapper, s.arrowRight)} onClick={onNextButtonClick} />
      <div className={s.emblaViewport} ref={emblaRef}>
        <div className={s.emblaContainer}>
          {slides.map(url => (
            <div className={s.emblaSlide} key={url}>
              <div className={s.imageWrapper}>
                <Image src={url} alt="рабочий процесс" fill={true} className={s.image} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={s.dotsLayout}>
        <div className={s.emblaDots}>
          {scrollSnaps.map((_, i) => (
            <DotButton
              key={i}
              onClick={() => onDotButtonClick(i)}
              className={cn(s.dot, {[s.activeDot]: i === selectedIndex})}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
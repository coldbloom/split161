"use client"

import { useState } from "react";
import s from './QuestionAnswer.module.scss'
import cn from 'classnames';
import Image from "next/image";

export type QuestionAnswerProps = {
  question: string;
  answer: string;
};

export const QuestionAnswer = ({ question, answer }: QuestionAnswerProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={s.wrapper}>
      <div className={cn(s.questionWrapper, 'row')} onClick={() => setOpen(prev => !prev)}>
        <p className={s.questionText}>{question}</p>
        <div className={cn(s.imageWrapper, {[s.open]: isOpen})}>
          <Image src='/plus.svg' alt="" width={12} height={12}/>
        </div>
      </div>

      <div className={cn(s.answerWrapper, {[s.open]: isOpen})}>
        <p>{answer}</p>
      </div>
    </div>
  )
}
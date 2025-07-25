import { Logo } from '@/app/components/shared/Logo';
import Image from "next/image";
import s from './Footer.module.scss';

export const Footer = () => (
  <footer className={s.footer}>
    <div className={s.wrapper}>
      <Logo className={s.logoFooter}/>
      <div className={s.infoWrapper}>
        <span>Фриз мастер {new Date().getFullYear()}. © Все права защищены.</span>
        <a href="/documents/privacy-policy.pdf"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Открыть политику конфиденциальности в новом окне">
          Политика конфиденциальности
        </a>
      </div>
      <div className={s.codeCake}>
        <a href="https://t.me/konstankk" target="_blank" rel="noopener"
           aria-label="Ссылка на контакт разработчика (откроется в новой вкладке)">
          <Image unoptimized src="/codecake.svg" alt="Разработано в CODECAKE" width={235} height={37}/>
        </a>
      </div>
    </div>
  </footer>
);

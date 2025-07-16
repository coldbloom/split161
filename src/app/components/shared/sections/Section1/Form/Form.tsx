import s from './Form.module.scss';
import { PhoneForm } from './PhoneForm';

export const Form = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.description}>Заказать звонок в 1&nbsp;клик</p>
      <PhoneForm />
    </div>
  );
};
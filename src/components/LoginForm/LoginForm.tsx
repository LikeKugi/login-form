import { JSX } from 'react';
import Input from '@/components/Input/Input';
import { AiTwotoneMail } from "react-icons/ai";
import { PiPassword } from "react-icons/pi";
import styles from './LoginForm.module.scss';
import Checkbox from '@/components/Checkbox/Checkbox';

const LoginForm = (): JSX.Element => {
  return (
    <form className={styles.form}>
      <h1 className={styles.form__title}><span>Log</span>in</h1>
      <Input label={'Email'} icon={<AiTwotoneMail />} type={'email'}/>
      <Input label={'Password'} icon={<PiPassword />} type={'password'} />
      <div className={styles.form__actions}>
        <Checkbox label={'Remember Me'} />
        <a>Forgot Password?</a>
      </div>
      <div className={styles.form__actions}>
        <button className={styles.form__submit}>Login</button>
      </div>
      <div className={styles.form__actions}>
        <span className={styles.form__help}>
          Don't have an account? <a>Sign Up</a>
        </span>
      </div>
    </form>
  );
};
export default LoginForm;

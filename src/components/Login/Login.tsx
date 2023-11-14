import { JSX } from 'react';
import styles from './Login.module.scss';
import LoginForm from '@/components/LoginForm/LoginForm';

const Login = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.login}>
        <div className={styles.login__illustration} />
        <LoginForm />
      </div>
    </div>
  );
};
export default Login;

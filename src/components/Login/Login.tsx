import { JSX } from 'react';
import styles from './Login.module.scss';

const Login = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.login}>
        <div className={styles.login__illustration}>

        </div>
      </div>
    </div>
  );
};
export default Login;

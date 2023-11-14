import { JSX } from 'react';
import styles from './Success.module.scss';
import { useAuth } from '@/context/AuthContext/AuthContext';

const Success = (): JSX.Element => {
  const { logout } = useAuth();
  return (
    <div className={styles.success}>
      <h1 className={styles.success__title}>Welcome!</h1>
      <button className={styles.success__btn} onClick={logout}>Logout</button>
    </div>
  );
};
export default Success;

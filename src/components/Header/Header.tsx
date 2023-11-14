import { JSX } from 'react';
import { SlLogin } from 'react-icons/sl';
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <span className={styles.header__icon}>
          <SlLogin/>
        </span>
        <p className={styles.header__text}>React Login Form</p>
      </div>
    </header>
  );
};
export default Header;

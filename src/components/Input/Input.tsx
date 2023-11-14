import { FC, JSX, ReactNode, useId } from 'react';
import styles from './Input.module.scss'

interface IInputProps extends  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  label: ReactNode | string;
  icon?: ReactNode
}

const Input: FC<IInputProps> = ({label, icon, ...props}): JSX.Element => {
  const inputId = useId();
  return (
    <div className={styles.input}>
      <label className={styles.input__label} htmlFor={inputId}>{label}</label>
      <div className={styles.input__box}>{icon && <label className={styles.input__icon} htmlFor={inputId}>{icon}</label>}<input className={styles.input__textbox} id={inputId} {...props}/></div>
    </div>
  );
};
export default Input;

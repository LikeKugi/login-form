import { JSX } from 'react';
import Input from '@/components/Input/Input';
import { AiTwotoneMail } from 'react-icons/ai';
import { PiPassword } from 'react-icons/pi';
import styles from './LoginForm.module.scss';
import Checkbox from '@/components/Checkbox/Checkbox';
import * as yup from 'yup';
import { useAuth } from '@/context/AuthContext/AuthContext';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { fetchData } from '@/api/fetchData';

interface IForm {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Please enter password').min(5, 'Password must have at least 5 characters')
});

const LoginForm = (): JSX.Element => {
  const { login } = useAuth();
  const {
    reset,
    formState: { errors },
    handleSubmit,
    control
  } = useForm({ resolver: yupResolver(validationSchema) });

  const submitHandler = (data: IForm) => {
    fetchData(data.email, data.password).then(
      () => {
        login();
        reset();
      }
    );
  };


  return (
    <form className={styles.form}
          onSubmit={handleSubmit(submitHandler)}>
      <h1 className={styles.form__title}><span>Log</span>in</h1>
      <Controller name={'email'}
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Input label={'Email'}
                           icon={<AiTwotoneMail/>}
                           type={'email'}
                           value={value || ''}
                           onChange={onChange}/>
                  )}/>
      <p className={styles.form__error}>{errors && errors.email && errors.email.message}</p>
      <Controller name={'password'}
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Input label={'Password'}
                           icon={<PiPassword/>}
                           type={'password'}
                           value={value || ''}
                           onChange={onChange}/>
                  )}/>
      <p className={styles.form__error}>{errors && errors.password && errors.password.message}</p>
      <div className={styles.form__actions}>
        <Checkbox label={'Remember Me'}/>
        <a className={styles.form__link}>
          Forgot
          Password?</a>
      </div>
      <div className={styles.form__actions}>
        <button className={styles.form__submit}>Login</button>
      </div>
      <div className={styles.form__actions}>
        <span className={styles.form__help}>
          Don't have an account? <a className={styles.form__link}>Sign Up</a>
        </span>
      </div>
    </form>
  )
    ;
};
export default LoginForm;

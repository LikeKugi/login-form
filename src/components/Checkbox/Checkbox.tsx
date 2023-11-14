import { FC, JSX, ReactNode, useId } from 'react';

interface ICheckboxProps extends  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: ReactNode | string;
}

const Checkbox: FC<ICheckboxProps> = ({label, ...props}): JSX.Element => {
  const inputId = useId();
  return (
    <div>
      <input type="checkbox" id={inputId} {...props}/> <label htmlFor={inputId}>{label}</label>
    </div>
  );
};
export default Checkbox;

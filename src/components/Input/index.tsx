import { FieldErrors } from 'react-hook-form';
import { ErrorInput } from '../../styled-components/menssage';

import './styles.module.scss';
interface InputProps {
  register: any,
  name: string,
  errors: any, 
  label?: string,
  type: "button" |"checkbox"|"color"|"date"|"datetime-local"|"email"|"file"|"hidden"|"image"|"month"|"number"|"password"|"radio"|"range"|"reset"|"search"|"submit"|"tel"|"text"|"time"|"url"|"week",
  disabled?: boolean,
  required?: boolean,
}
const formValidation = (errors: FieldErrors, errorKey: string) => {
  return errors[errorKey] ? <ErrorInput>{errors[errorKey].message}</ErrorInput> : '';
}
export const Input = ({ register, name, errors, label = '', type, disabled = false,required=false}:InputProps ) => {
  console.log({errors})
  return (
    <div>
      <input 
        id={name}
        disabled={disabled}
        type={type}
        label={label}
        {...register(name, { required: required && `Campo obrigatorio` })}
        placeholder={label}
      />
      {errors && formValidation(errors, name)}
    </div>
  )
}
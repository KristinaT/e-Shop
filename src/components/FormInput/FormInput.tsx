import React, { ChangeEvent } from 'react';
import './FormInput.scss';

interface FormInput {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  name: string;
  type: string;
  value: string;
  required: boolean;
}
type Props = FormInput;
const FormInput: React.FC<Props> = ({ onChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={onChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;

import React from 'react';
import './CustomButton.scss';

interface CustomButton {
  type: 'button' | 'submit' | 'reset' | undefined;
}
type Props = CustomButton;
const CustomButton: React.FC<Props> = ({ children, ...otherProps }) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
);

export default CustomButton;

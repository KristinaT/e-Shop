import React from 'react';
import './CustomButton.scss';

interface CustomButton {
  type?: 'button' | 'submit' | 'reset' | undefined;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  onClick?: () => void;
}
type Props = CustomButton;
const CustomButton: React.FC<Props> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;

import React from 'react';
import './CustomButton.scss';

import { CustomButtonContainer } from './styled';

interface CustomButton {
  type?: 'button' | 'submit' | 'reset' | undefined;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  onClick?: () => void;
}

type Props = CustomButton;

const CustomButton: React.FC<Props> = props => (
  <CustomButtonContainer {...props} />
);

CustomButton.defaultProps = {
  isGoogleSignIn: false,
  inverted: false
};

export default CustomButton;

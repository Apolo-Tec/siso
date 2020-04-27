import React from 'react';

import { ButtonProps } from './interface';

import { Container, ButtonText } from './styles';

const Button = ({ title, variant, onPress, disabled }: ButtonProps) => (
<Container variant={variant} onPress={onPress} disabled={disabled}>
  <ButtonText variant={variant}>
    {title}
  </ButtonText>
</Container>
)

export default Button;
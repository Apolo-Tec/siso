import React from 'react';

import { ButtonProps } from './interface';

import { Container, ButtonText } from './styles';

const Button = ({ title, variant }: ButtonProps) => (
<Container variant={variant}>
  <ButtonText variant={variant}>
    {title}
  </ButtonText>
</Container>
)

export default Button;
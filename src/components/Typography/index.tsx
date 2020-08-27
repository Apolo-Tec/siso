import React from 'react';

import { ITypography } from './interface';

import { Container } from './styles';

export default ({ size, text, color }: ITypography) => {
  return (
    <Container size={size} color={color}>{text}</Container>
  )
}
import React from 'react';

import { InputProps } from './interface';

import { TextInputElement } from './styles';

const Input = ({ placeholder }: InputProps) => (
  <TextInputElement placeholder={placeholder} />
)

export default Input;
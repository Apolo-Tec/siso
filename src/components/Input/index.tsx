import React from 'react';

import { InputProps } from './interface';

import { TextInputElement } from './styles';

const Input = ({ placeholder, onChangeText, value, secureTextEntry }: InputProps) => (
  <TextInputElement onChangeText={onChangeText} secureTextEntry={secureTextEntry} value={value} placeholder={placeholder} />
)

export default Input;
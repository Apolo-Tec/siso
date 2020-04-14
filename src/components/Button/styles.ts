import styled from 'styled-components/native';

import { StyledProps } from './interface';

export const Container = styled.TouchableOpacity.attrs((props) => ({
  disabled: props.disabled,
  activeOpacity: 0.5,
}))<StyledProps>`
  border-radius: ${({ theme }) => theme.units.borderRadius};
  background-color: ${(props) => props.theme.colors.button[props.variant].backgroundColor};
  height: ${(props) => props.theme.units.button.height};
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text<StyledProps>`
  text-transform: uppercase;
  font-size: 14px;
  color: ${(props) => props.theme.colors.button[props.variant].fontColor}
`;
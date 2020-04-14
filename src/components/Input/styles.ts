import styled from 'styled-components/native';

export const TextInputElement = styled.TextInput`
  height: ${({ theme }) => theme.units.input.height};
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  border-radius: ${({ theme }) => theme.units.borderRadius};
  font-size: 16px;
  padding: 0 20px;
`;
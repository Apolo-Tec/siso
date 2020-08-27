import styled from 'styled-components/native';

export const Container = styled.Text`
  font-size: ${({ size }) => size ? size : 14};
  color: ${({ color }) => color ? color : '#000000'};
`;
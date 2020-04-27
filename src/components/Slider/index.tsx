import React, { FunctionComponent } from 'react';

import { Container } from './styles';

const Slider: FunctionComponent = ({ children }) => (
  <Container>
    { children }
  </Container>
)

export default Slider;
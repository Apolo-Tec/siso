import React from 'react';
import Routes from './src/routes';

import { ThemeProvider } from 'styled-components';

import { sisoTheme } from './src/theme';

export default function App() {
  return (
      <ThemeProvider theme={sisoTheme}>
        <Routes />
      </ThemeProvider>
  );
}
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import GlobalStyles from '../src/GlobalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

import { DefaultTheme } from 'styled-components';
import colors from './colors';
import spacing from './spacing';
import { size, leading, weight } from './typography';

const theme: DefaultTheme = {
  colors,
  spacing,
  typography: {
    size,
    leading,
    weight,
  },
};

export default theme;

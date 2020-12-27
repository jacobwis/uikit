import { DefaultTheme } from 'styled-components';
import colors from './colors';
import spacing from './spacing';
import { size, leading, weight } from './typography';
import shadow from './shadow';

const theme: DefaultTheme = {
  colors,
  spacing,
  typography: {
    size,
    leading,
    weight,
  },
  shadow,
};

export default theme;

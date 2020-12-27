import 'styled-components';

interface ColorMap {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

type SpacingUnit =
  | 'none'
  | 'px'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl';

type FontSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: ColorMap;
      gray: ColorMap;
      red: ColorMap;
      green: ColorMap;
    };
    spacing: {
      [K in SpacingUnit]: string;
    };
    typography: {
      size: {
        [K in FontSize]: string;
      };
      leading: {
        none: string;
        tight: string;
        normal: string;
        loose: string;
      };
      weight: {
        normal: number;
        bold: number;
        extrabold: number;
      };
    };
    shadow: {
      none: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
  }
}

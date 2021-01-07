import { CSSProperties } from 'styled-components';

export type FontSize =
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

export const size: Record<FontSize, CSSProperties['fontSize']> = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
};

export type Leading = 'none' | 'tight' | 'normal' | 'loose';

export const leading: Record<Leading, CSSProperties['lineHeight']> = {
  none: '1',
  tight: '1.25',
  normal: '1.5',
  loose: '2',
};

export type FontWeight = 'normal' | 'bold' | 'extrabold';

export const weight: Record<FontWeight, CSSProperties['fontWeight']> = {
  normal: 400,
  bold: 600,
  extrabold: 800,
};

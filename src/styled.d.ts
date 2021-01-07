import 'styled-components';
import { CSSProperties, CSSProperties } from 'styled-components';
import { ColorMap, Colors } from './theme/colors';
import { SpacingUnit } from './theme/spacing';
import { FontSize, Leading, FontWeight } from './theme/typography';
import { Shadow } from './theme/shadow';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<Colors, ColorMap>;
    spacing: Record<SpacingUnit, CSSProperties['padding']>;
    typography: {
      size: Record<FontSize, CSSProperties['fontSize']>;
      leading: Record<Leading, CSSProperties['lineHeight']>;
      weight: Record<FontWeight, CSSProperties['fontWeight']>;
    };
    shadow: Record<Shadow, CSSProperties['boxShadow']>;
  }
}

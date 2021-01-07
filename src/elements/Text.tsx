import styled from 'styled-components';
import { FontSize, FontWeight, Leading } from '../theme/typography';

export interface TextProps {
  size?: FontSize;
  leading?: Leading;
  weight?: FontWeight;
}

const Text = styled.span<TextProps>`
  color: ${({ theme }) => theme.colors.gray[900]};
  font-size: ${({ theme, size = 'base' }) => theme.typography.size[size]};
  font-weight: ${({ theme, weight = 'normal' }) =>
    theme.typography.weight[weight]};
  line-height: ${({ theme, size = 'base', leading }) => {
    if (leading) {
      return theme.typography.leading[leading];
    }

    switch (size) {
      case 'xs':
      case '2xl':
      case '3xl':
      case '4xl':
        return theme.typography.leading.tight;
      case '5xl':
      case '6xl':
        return theme.typography.leading.none;
      default:
        return theme.typography.leading.normal;
    }
  }};
`;

export default Text;

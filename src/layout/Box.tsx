import styled from 'styled-components';
import { SpacingUnit } from '../theme/spacing';

interface BoxProps {
  padding?: SpacingUnit;
  paddingVertical?: SpacingUnit;
  paddingHorizontal?: SpacingUnit;
  paddingTop?: SpacingUnit;
  paddingBottom?: SpacingUnit;
}

const Box = styled.div<BoxProps>`
  background-color: red;
  padding: ${({ padding, theme }) => {
    if (padding) {
      return theme.spacing[padding];
    }
  }};
  padding-top: ${({ paddingVertical, paddingTop, theme }) => {
    if (paddingTop) {
      return theme.spacing[paddingTop];
    }

    if (paddingVertical) {
      return theme.spacing[paddingVertical];
    }
  }};
  padding-right: ${({ paddingHorizontal, theme }) => {
    if (paddingHorizontal) {
      return theme.spacing[paddingHorizontal];
    }
  }};
  padding-bottom: ${({ paddingVertical, paddingBottom, theme }) => {
    if (paddingBottom) {
      return theme.spacing[paddingBottom];
    }

    if (paddingVertical) {
      return theme.spacing[paddingVertical];
    }
  }};
  padding-left: ${({ paddingHorizontal, theme }) => {
    if (paddingHorizontal) {
      return theme.spacing[paddingHorizontal];
    }
  }};
`;

export default Box;

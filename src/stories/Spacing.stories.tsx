import * as React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { Story, Meta } from '@storybook/react';

interface SpaceBoxProps {
  size: keyof DefaultTheme['spacing'];
}

const SpaceBox = styled.div<SpaceBoxProps>`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  height: 50px;
  width: ${({ theme, size }) => theme.spacing[size]};
  margin-bottom: 20px;
  position: relative;

  &:after {
    position: absolute;
    left: ${({ theme, size }) => theme.spacing[size]};
    content: '${({ theme, size }) => theme.spacing[size]}';
  }
`;

export default {
  title: 'Foundation/Spacing',
} as Meta;

const Template: Story = () => (
  <div>
    <h1>Spacing</h1>
    <SpaceBox size="0" />
    <SpaceBox size="px" />
    <SpaceBox size="0.5" />
    <SpaceBox size="1" />
    <SpaceBox size="1.5" />
    <SpaceBox size="2" />
    <SpaceBox size="2.5" />
    <SpaceBox size="3" />
    <SpaceBox size="3.5" />
    <SpaceBox size="4" />
    <SpaceBox size="5" />
    <SpaceBox size="6" />
    <SpaceBox size="7" />
    <SpaceBox size="8" />
    <SpaceBox size="9" />
    <SpaceBox size="10" />
    <SpaceBox size="11" />
    <SpaceBox size="12" />
    <SpaceBox size="14" />
    <SpaceBox size="16" />
    <SpaceBox size="20" />
    <SpaceBox size="24" />
    <SpaceBox size="28" />
    <SpaceBox size="32" />
    <SpaceBox size="36" />
    <SpaceBox size="40" />
    <SpaceBox size="44" />
    <SpaceBox size="48" />
    <SpaceBox size="52" />
    <SpaceBox size="56" />
    <SpaceBox size="60" />
    <SpaceBox size="64" />
    <SpaceBox size="72" />
    <SpaceBox size="80" />
    <SpaceBox size="96" />
  </div>
);

export const Spacing = Template.bind({});

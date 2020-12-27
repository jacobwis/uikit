import * as React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { Story, Meta } from '@storybook/react';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 50px;
`;

interface ShadowBoxProps {
  shadow: keyof DefaultTheme['shadow'];
}

const ShadowBox = styled.div<ShadowBoxProps>`
  background-color: #fff;
  box-shadow: ${({ theme, shadow }) => theme.shadow[shadow]};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
`;

export default {
  title: 'Foundation/Shadows',
} as Meta;

const Template: Story = () => (
  <Container>
    <ShadowBox shadow="none">none</ShadowBox>
    <ShadowBox shadow="sm">sm</ShadowBox>
    <ShadowBox shadow="base">base</ShadowBox>
    <ShadowBox shadow="md">md</ShadowBox>
    <ShadowBox shadow="lg">lg</ShadowBox>
    <ShadowBox shadow="xl">xl</ShadowBox>
    <ShadowBox shadow="2xl">2xl</ShadowBox>
  </Container>
);

export const Shadows = Template.bind({});

import * as React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { Story, Meta } from '@storybook/react';
import spacing from '../theme/spacing';

interface SpaceBoxProps {
  size: keyof DefaultTheme['spacing'];
}

const SpaceBox = styled.div<SpaceBoxProps>`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  height: 50px;
  width: ${({ theme, size }) => theme.spacing[size]};
  position: relative;
`;

export default {
  title: 'Foundation/Spacing',
} as Meta;

const Template: Story = () => {
  return (
    <div>
      <h1>Spacing</h1>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="none" />
        <p>none - 0rem - 0px</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="px" />
        <p>px - 0.0625rem - 1px</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="xxxs" />
        <p>xxxs - 0.125rem - 2px</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="xxs" />
        <p>xxs - 0.25rem - 4px</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="xs" />
        <p>xs - 0.5rem - 8px</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="sm" />
        <p>sm - 0.75rem - 12px</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="md" />
        <p>md - 1rem - 16px</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="lg" />
        <p>lg - 1.5rem - 24px</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="xl" />
        <p>xl - 2rem - 32px</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="xxl" />
        <p>xxl - 2.5rem - 40px</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="xxxl" />
        <p>xxxl - 3rem - 48px</p>
      </div>
    </div>
  );
};

export const Spacing = Template.bind({});

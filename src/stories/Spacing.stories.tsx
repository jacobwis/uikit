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
  const sizeKeys = Object.keys(spacing) as Array<keyof DefaultTheme['spacing']>;
  return (
    <div>
      <h1>Spacing</h1>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="0" />
        <p>0 - 0px</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="px" />
        <p>px - 1px</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="0.5" />
        <p>0.5 - 2px</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="1" />
        <p>1 - 4px</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="1.5" />
        <p>1.5 - 6px</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="2" />
        <p>2 - 8px</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="2.5" />
        <p>2.5 - 10px</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="3" />
        <p>3 - 12px</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="3.5" />
        <p>3.5 - 14px</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="4" />
        <p>4 - 16px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="5" />
        <p>5 - 20px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="6" />
        <p>6 - 24px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="7" />
        <p>7 - 28px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="8" />
        <p>8 - 32px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="9" />
        <p>9 - 36px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="10" />
        <p>10 - 40px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="11" />
        <p>11 - 44px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="12" />
        <p>12 - 48px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="14" />
        <p>14 - 56px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="16" />
        <p>16 - 64px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="20" />
        <p>20 - 80px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="24" />
        <p>24 - 96px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="28" />
        <p>28 - 112px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="32" />
        <p>32 - 128px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="36" />
        <p>36 - 144px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="40" />
        <p>40 - 160px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="44" />
        <p>44 - 176px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="48" />
        <p>48 - 192px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="52" />
        <p>52 - 208px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="56" />
        <p>56 - 224px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="60" />
        <p>60 - 240px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="64" />
        <p>64 - 256px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="72" />
        <p>72 - 288px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="80" />
        <p>80 - 320px</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <SpaceBox size="96" />
        <p>96 - 384px</p>
      </div>
    </div>
  );
};

export const Spacing = Template.bind({});

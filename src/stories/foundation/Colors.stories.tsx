import * as React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { Story, Meta } from '@storybook/react';

interface ColorBoxProps {
  color: keyof DefaultTheme['colors'];
  level: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

const ColorBox = styled.div<ColorBoxProps>`
  background-color: ${(props) => props.theme.colors[props.color][props.level]};
  height: 100px;
  width: 100px;
`;

export default {
  title: 'Foundation/Color',
} as Meta;

const Template: Story = () => (
  <div>
    <div>
      <h1>Primary</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <ColorBox color="primary" level={50} />
        <ColorBox color="primary" level={100} />
        <ColorBox color="primary" level={200} />
        <ColorBox color="primary" level={300} />
        <ColorBox color="primary" level={400} />
        <ColorBox color="primary" level={500} />
        <ColorBox color="primary" level={600} />
        <ColorBox color="primary" level={700} />
        <ColorBox color="primary" level={800} />
        <ColorBox color="primary" level={900} />
      </div>
    </div>
    <div>
      <h1>Gray</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <ColorBox color="gray" level={50} />
        <ColorBox color="gray" level={100} />
        <ColorBox color="gray" level={200} />
        <ColorBox color="gray" level={300} />
        <ColorBox color="gray" level={400} />
        <ColorBox color="gray" level={500} />
        <ColorBox color="gray" level={600} />
        <ColorBox color="gray" level={700} />
        <ColorBox color="gray" level={800} />
        <ColorBox color="gray" level={900} />
      </div>
    </div>
    <div>
      <h1>Green</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <ColorBox color="green" level={50} />
        <ColorBox color="green" level={100} />
        <ColorBox color="green" level={200} />
        <ColorBox color="green" level={300} />
        <ColorBox color="green" level={400} />
        <ColorBox color="green" level={500} />
        <ColorBox color="green" level={600} />
        <ColorBox color="green" level={700} />
        <ColorBox color="green" level={800} />
        <ColorBox color="green" level={900} />
      </div>
    </div>
    <div>
      <h1>Red</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <ColorBox color="red" level={50} />
        <ColorBox color="red" level={100} />
        <ColorBox color="red" level={200} />
        <ColorBox color="red" level={300} />
        <ColorBox color="red" level={400} />
        <ColorBox color="red" level={500} />
        <ColorBox color="red" level={600} />
        <ColorBox color="red" level={700} />
        <ColorBox color="red" level={800} />
        <ColorBox color="red" level={900} />
      </div>
    </div>
  </div>
);

export const Color = Template.bind({});

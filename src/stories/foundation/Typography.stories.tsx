import * as React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { Story, Meta } from '@storybook/react';

interface TextProps {
  size: keyof DefaultTheme['typography']['size'];
  leading: keyof DefaultTheme['typography']['leading'];
  weight: keyof DefaultTheme['typography']['weight'];
}

const Text = styled.p<TextProps>`
  font-size: ${({ theme, size }) => theme.typography.size[size]};
  font-weight: ${({ theme, weight }) => theme.typography.weight[weight]};
  line-height: ${({ theme, leading }) => theme.typography.leading[leading]};
`;

export default {
  title: 'Foundation/Typography',
} as Meta;

const Template: Story = () => (
  <div>
    <div>
      <Text size="3xl" weight="normal" leading="normal">
        Font Sizes
      </Text>
      <Text size="xs" weight="normal" leading="normal">
        xs - The quick brown fox jumped over the lazy dog.
      </Text>
      <Text size="sm" weight="normal" leading="normal">
        sm - The quick brown fox jumped over the lazy dog.
      </Text>
      <Text size="base" weight="normal" leading="normal">
        base - The quick brown fox jumped over the lazy dog.
      </Text>
      <Text size="lg" weight="normal" leading="normal">
        lg - The quick brown fox jumped over the lazy dog.
      </Text>
      <Text size="xl" weight="normal" leading="normal">
        xl - The quick brown fox jumped over the lazy dog.
      </Text>
      <Text size="2xl" weight="normal" leading="normal">
        2xl - The quick brown fox jumped over the lazy dog.
      </Text>
      <Text size="3xl" weight="normal" leading="normal">
        3xl - The quick brown fox jumped over the lazy dog.
      </Text>
      <Text size="4xl" weight="normal" leading="normal">
        4xl - The quick brown fox jumped over the lazy dog.
      </Text>
      <Text size="5xl" weight="normal" leading="normal">
        5xl - The quick brown fox jumped over the lazy dog.
      </Text>
      <Text size="6xl" weight="normal" leading="normal">
        6xl - The quick brown fox jumped over the lazy dog.
      </Text>
    </div>
    <div>
      <Text size="3xl" weight="normal" leading="normal">
        Weights
      </Text>
      <Text size="xl" weight="normal" leading="normal">
        normal - The quick brown fox jumped over the lazy dog.
      </Text>
      <Text size="xl" weight="bold" leading="normal">
        bold - The quick brown fox jumped over the lazy dog.
      </Text>
      <Text size="xl" weight="extrabold" leading="normal">
        extrabold - The quick brown fox jumped over the lazy dog.
      </Text>
    </div>
    <div>
      <Text size="3xl" weight="normal" leading="normal">
        Line Height
      </Text>
      <div style={{ maxWidth: '500px' }}>
        <Text
          size="base"
          weight="normal"
          leading="none"
          style={{ marginBottom: '16px' }}
        >
          none - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
          soluta at qui commodi? Nisi, animi! Iusto, architecto hic. Quia vel
          itaque, cumque voluptatibus quidem obcaecati consequuntur labore
          nesciunt culpa autem.
        </Text>
        <Text
          size="base"
          weight="normal"
          leading="tight"
          style={{ marginBottom: '16px' }}
        >
          tight - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
          soluta at qui commodi? Nisi, animi! Iusto, architecto hic. Quia vel
          itaque, cumque voluptatibus quidem obcaecati consequuntur labore
          nesciunt culpa autem.
        </Text>
        <Text
          size="base"
          weight="normal"
          leading="normal"
          style={{ marginBottom: '16px' }}
        >
          normal - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
          soluta at qui commodi? Nisi, animi! Iusto, architecto hic. Quia vel
          itaque, cumque voluptatibus quidem obcaecati consequuntur labore
          nesciunt culpa autem.
        </Text>
        <Text
          size="base"
          weight="normal"
          leading="loose"
          style={{ marginBottom: '16px' }}
        >
          loose - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
          soluta at qui commodi? Nisi, animi! Iusto, architecto hic. Quia vel
          itaque, cumque voluptatibus quidem obcaecati consequuntur labore
          nesciunt culpa autem.
        </Text>
      </div>
    </div>
  </div>
);

export const Typography = Template.bind({});

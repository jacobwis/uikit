import * as React from 'react';
import { screen, render } from '../../utils/tests';
import Text from '../Text';

const sizes = [
  'xs',
  'sm',
  'base',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
];

describe('<Text />', () => {
  it('should render a "span" element by default', () => {
    const testText = 'This is the text for the Text component.';
    render(<Text>{testText}</Text>);
    expect(screen.getByText(testText).tagName).toEqual('SPAN');
  });

  it('should match the snapshot when "props.size" equals "xs"', () => {
    const testText = 'This is the text for the Text component.';
    render(<Text size="xs">{testText}</Text>);
    expect(screen.getByText(testText)).toMatchSnapshot();
  });

  it('should match the snapshot when "props.size" equals "sm"', () => {
    const testText = 'This is the text for the Text component.';
    render(<Text size="sm">{testText}</Text>);
    expect(screen.getByText(testText)).toMatchSnapshot();
  });

  it('should match the snapshot when "props.size" equals "base"', () => {
    const testText = 'This is the text for the Text component.';
    render(<Text size="base">{testText}</Text>);
    expect(screen.getByText(testText)).toMatchSnapshot();
  });

  it('should match the snapshot when "props.size" equals "lg"', () => {
    const testText = 'This is the text for the Text component.';
    render(<Text size="lg">{testText}</Text>);
    expect(screen.getByText(testText)).toMatchSnapshot();
  });

  it('should match the snapshot when "props.size" equals "xl"', () => {
    const testText = 'This is the text for the Text component.';
    render(<Text size="xl">{testText}</Text>);
    expect(screen.getByText(testText)).toMatchSnapshot();
  });

  it('should match the snapshot when "props.size" equals "2xl"', () => {
    const testText = 'This is the text for the Text component.';
    render(<Text size="2xl">{testText}</Text>);
    expect(screen.getByText(testText)).toMatchSnapshot();
  });

  it('should match the snapshot when "props.size" equals "3xl"', () => {
    const testText = 'This is the text for the Text component.';
    render(<Text size="3xl">{testText}</Text>);
    expect(screen.getByText(testText)).toMatchSnapshot();
  });

  it('should match the snapshot when "props.size" equals "4xl"', () => {
    const testText = 'This is the text for the Text component.';
    render(<Text size="4xl">{testText}</Text>);
    expect(screen.getByText(testText)).toMatchSnapshot();
  });

  it('should match the snapshot when "props.size" equals "5xl"', () => {
    const testText = 'This is the text for the Text component.';
    render(<Text size="5xl">{testText}</Text>);
    expect(screen.getByText(testText)).toMatchSnapshot();
  });

  it('should match the snapshot when "props.size" equals "6xl"', () => {
    const testText = 'This is the text for the Text component.';
    render(<Text size="6xl">{testText}</Text>);
    expect(screen.getByText(testText)).toMatchSnapshot();
  });

  it('should match the snapshot when "props.leading" equals "none"', () => {
    const testText = 'This is the text for the Text component.';
    render(<Text leading="none">{testText}</Text>);
    expect(screen.getByText(testText)).toMatchSnapshot();
  });

  it('should match the snapshot when "props.leading" equals "tight"', () => {
    const testText = 'This is the text for the Text component.';
    render(<Text leading="tight">{testText}</Text>);
    expect(screen.getByText(testText)).toMatchSnapshot();
  });

  it('should match the snapshot when "props.leading" equals "normal"', () => {
    const testText = 'This is the text for the Text component.';
    render(<Text leading="normal">{testText}</Text>);
    expect(screen.getByText(testText)).toMatchSnapshot();
  });

  it('should match the snapshot when "props.leading" equals "loose"', () => {
    const testText = 'This is the text for the Text component.';
    render(<Text leading="loose">{testText}</Text>);
    expect(screen.getByText(testText)).toMatchSnapshot();
  });

  it('should match the snapshot when "props.weight" equals "normal"', () => {
    const testText = 'This is the text for the Text component.';
    render(<Text weight="normal">{testText}</Text>);
    expect(screen.getByText(testText)).toMatchSnapshot();
  });

  it('should match the snapshot when "props.weight" equals "bold"', () => {
    const testText = 'This is the text for the Text component.';
    render(<Text weight="bold">{testText}</Text>);
    expect(screen.getByText(testText)).toMatchSnapshot();
  });

  it('should match the snapshot when "props.weight" equals "extrabold"', () => {
    const testText = 'This is the text for the Text component.';
    render(<Text weight="extrabold">{testText}</Text>);
    expect(screen.getByText(testText)).toMatchSnapshot();
  });
});

import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Label.stories';

const {
  Base,
  XSLabel,
  SMLabel,
  MDLabel,
  LGLabel,
  XLLabel,
} = composeStories(stories);

describe('Label', () => {
  test('should render component correctly', () => {
    render(<Base />);
    expect(screen.getByText('Base Label')).toBeInTheDocument();
    expect(screen.getByText('Base Label')).toBeInstanceOf(HTMLLabelElement);
  });

  test('should render xs label', () => {
    render(<XSLabel />);
    expect(screen.getByText('XS Label')).toBeInTheDocument();
    expect(screen.getByText('XS Label')).toHaveTextContent('XS Label');
    expect(screen.getByText('XS Label')).toBeInstanceOf(HTMLLabelElement);
    expect(screen.getByText('XS Label').className).toContain('text-xs');
  });

  test('should render sm label', () => {
    render(<SMLabel />);
    expect(screen.getByText('SM Label')).toBeInTheDocument();
    expect(screen.getByText('SM Label')).toHaveTextContent('SM Label');
    expect(screen.getByText('SM Label')).toBeInstanceOf(HTMLLabelElement);
    expect(screen.getByText('SM Label').className).toContain('text-sm');
  });

  test('should render md label', () => {
    render(<MDLabel />);
    expect(screen.getByText('MD Label')).toBeInTheDocument();
    expect(screen.getByText('MD Label')).toHaveTextContent('MD Label');
    expect(screen.getByText('MD Label')).toBeInstanceOf(HTMLLabelElement);
    expect(screen.getByText('MD Label').className).toContain('text-sm');
  });

  test('should render lg label', () => {
    render(<LGLabel />);
    expect(screen.getByText('LG Label')).toBeInTheDocument();
    expect(screen.getByText('LG Label')).toHaveTextContent('LG Label');
    expect(screen.getByText('LG Label')).toBeInstanceOf(HTMLLabelElement);
    expect(screen.getByText('LG Label').className).toContain('text-base');
  });

  test('should render xl label', () => {
    render(<XLLabel />);
    expect(screen.getByText('XL Label')).toBeInTheDocument();
    expect(screen.getByText('XL Label')).toHaveTextContent('XL Label');
    expect(screen.getByText('XL Label')).toBeInstanceOf(HTMLLabelElement);
    expect(screen.getByText('XL Label').className).toContain('text-base');
  });
});
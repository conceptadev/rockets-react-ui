import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Header.stories';

const { Base, XSHeader, SMHeader, MDHeader, LGHeader, XLHeader } =
  composeStories(stories);

describe('Header', () => {
  test('should render component correctly', () => {
    render(<Base />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('Base Header');
    expect(screen.getByRole('heading')).toBeInstanceOf(HTMLHeadingElement);
  });

  test('should render xs header', () => {
    render(<XSHeader />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('XS Header');
    expect(screen.getByRole('heading')).toBeInstanceOf(HTMLHeadingElement);
    expect(screen.getByRole('heading').tagName).toContain('H5');
    expect(screen.getByRole('heading').className).toContain('text-1xl');
  });

  test('should render sm header', () => {
    render(<SMHeader />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('SM Header');
    expect(screen.getByRole('heading')).toBeInstanceOf(HTMLHeadingElement);
    expect(screen.getByRole('heading').tagName).toContain('H4');
    expect(screen.getByRole('heading').className).toContain('text-2xl');
  });

  test('should render md header', () => {
    render(<MDHeader />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('MD Header');
    expect(screen.getByRole('heading')).toBeInstanceOf(HTMLHeadingElement);
    expect(screen.getByRole('heading').tagName).toContain('H3');
    expect(screen.getByRole('heading').className).toContain('text-3xl');
  });

  test('should render lg header', () => {
    render(<LGHeader />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('LG Header');
    expect(screen.getByRole('heading')).toBeInstanceOf(HTMLHeadingElement);
    expect(screen.getByRole('heading').tagName).toContain('H2');
    expect(screen.getByRole('heading').className).toContain('text-4xl');
  });

  test('should render xl header', () => {
    render(<XLHeader />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('XL Header');
    expect(screen.getByRole('heading')).toBeInstanceOf(HTMLHeadingElement);
    expect(screen.getByRole('heading').tagName).toContain('H1');
    expect(screen.getByRole('heading').className).toContain('text-5xl');
  });
});

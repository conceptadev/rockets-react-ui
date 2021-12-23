import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Anchor.stories';

const {
  Base: BaseAnchor,
  XSAnchor,
  SMAnchor,
  MDAnchor,
  LGAnchor,
  XLAnchor,
} = composeStories(stories);

describe('Anchor', () => {
  test('should render component correctly', () => {
    render(<BaseAnchor />);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveTextContent('Base Anchor');
    expect(screen.getByRole('link')).toBeInstanceOf(HTMLAnchorElement);
  });

  test('should have correct href', () => {
    render(<BaseAnchor />);
    expect(screen.getByRole<HTMLAnchorElement>('link').href).toBe(
      'https://www.test.com/',
    );
  });

  test('should render xs anchor', () => {
    render(<XSAnchor />);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveTextContent('XS Anchor');
    expect(screen.getByRole('link')).toBeInstanceOf(HTMLAnchorElement);
    expect(screen.getByRole('link').className).toContain('text-xs');
  });

  test('should render sm anchor', () => {
    render(<SMAnchor />);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveTextContent('SM Anchor');
    expect(screen.getByRole('link')).toBeInstanceOf(HTMLAnchorElement);
    expect(screen.getByRole('link').className).toContain('text-sm');
    expect(screen.getByRole('link').className).toContain('leading-4');
  });

  test('should render md anchor', () => {
    render(<MDAnchor />);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveTextContent('MD Anchor');
    expect(screen.getByRole('link')).toBeInstanceOf(HTMLAnchorElement);
    expect(screen.getByRole('link').className).toContain('text-sm');
  });

  test('should render lg anchor', () => {
    render(<LGAnchor />);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveTextContent('LG Anchor');
    expect(screen.getByRole('link')).toBeInstanceOf(HTMLAnchorElement);
    expect(screen.getByRole('link').className).toContain('text-base');
  });

  test('should render xl anchor', () => {
    render(<XLAnchor />);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveTextContent('XL Anchor');
    expect(screen.getByRole('link')).toBeInstanceOf(HTMLAnchorElement);
    expect(screen.getByRole('link').className).toContain('text-base');
    expect(screen.getByRole('link').className).toContain('leading-8');
  });
});

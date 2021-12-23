import { act, waitFor, render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Button.stories';

const {
  Base,
  Primary,
  Secondary,
  Outlined,
  WithLeftIcon,
  WithRightIcon,
  Rounded,
  IconButton,
  XSButton,
  SMButton,
  MDButton,
  LGButton,
  XLButton,
} = composeStories(stories);

describe('Button', () => {
  test('should render component correctly', () => {
    render(<Base />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Base Button');
    expect(screen.getByRole('button')).toBeInstanceOf(HTMLButtonElement);
  });

  test('should render primary button', () => {
    render(<Primary />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Primary Button');
    expect(screen.getByRole('button')).toBeInstanceOf(HTMLButtonElement);
    expect(screen.getByRole('button').className).toContain('bg-primary');
  });

  test('should render secondary button', () => {
    render(<Secondary />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Secondary Button');
    expect(screen.getByRole('button')).toBeInstanceOf(HTMLButtonElement);
    expect(screen.getByRole('button').className).toContain('bg-secondary');
  });

  test('should render outlined button', () => {
    render(<Outlined />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Outlined Button');
    expect(screen.getByRole('button')).toBeInstanceOf(HTMLButtonElement);
    expect(screen.getByRole('button').className).toContain('bg-outlined');
  });

  test('should render button with left icon', () => {
    const { container } = render(<WithLeftIcon />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Left Icon');
    expect(screen.getByRole('button')).toBeInstanceOf(HTMLButtonElement);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelector('svg')?.parentElement?.classList).toContain(
      '-ml-0.5',
    );
  });

  test('should render button with right button', () => {
    const { container } = render(<WithRightIcon />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Right Icon');
    expect(screen.getByRole('button')).toBeInstanceOf(HTMLButtonElement);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelector('svg')?.parentElement?.classList).toContain(
      '-mr-0.5',
    );
  });

  test('should render rounded button', () => {
    render(<Rounded />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Rounded Button');
    expect(screen.getByRole('button')).toBeInstanceOf(HTMLButtonElement);
    expect(screen.getByRole('button').className).toContain('rounded-full');
  });

  test('should render only icon button', () => {
    const { container } = render(<IconButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('');
    expect(screen.getByRole('button')).toBeInstanceOf(HTMLButtonElement);
    expect(screen.getByRole('button').className).toContain('rounded-full');
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('should render xs button', () => {
    render(<XSButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('XS Button');
    expect(screen.getByRole('button')).toBeInstanceOf(HTMLButtonElement);
    expect(screen.getByRole('button').className).toContain('text-xs');
    expect(screen.getByRole('button').className).toContain('px-2.5');
    expect(screen.getByRole('button').className).toContain('py-1.5');
  });

  test('should render sm button', () => {
    render(<SMButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('SM Button');
    expect(screen.getByRole('button')).toBeInstanceOf(HTMLButtonElement);
    expect(screen.getByRole('button').className).toContain('text-sm');
    expect(screen.getByRole('button').className).toContain('leading-4');
    expect(screen.getByRole('button').className).toContain('px-3');
    expect(screen.getByRole('button').className).toContain('py-2');
  });

  test('should render md button', () => {
    render(<MDButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('MD Button');
    expect(screen.getByRole('button')).toBeInstanceOf(HTMLButtonElement);
    expect(screen.getByRole('button').className).toContain('text-sm');
    expect(screen.getByRole('button').className).not.toContain('leading-4');
    expect(screen.getByRole('button').className).toContain('px-4');
    expect(screen.getByRole('button').className).toContain('py-2');
  });

  test('should render lg button', () => {
    render(<LGButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('LG Button');
    expect(screen.getByRole('button')).toBeInstanceOf(HTMLButtonElement);
    expect(screen.getByRole('button').className).toContain('text-base');
    expect(screen.getByRole('button').className).toContain('px-4');
    expect(screen.getByRole('button').className).toContain('py-2');
  });

  test('should render xl button', () => {
    render(<XLButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('XL Button');
    expect(screen.getByRole('button')).toBeInstanceOf(HTMLButtonElement);
    expect(screen.getByRole('button').className).toContain('text-base');
    expect(screen.getByRole('button').className).toContain('px-6');
    expect(screen.getByRole('button').className).toContain('py-3');
  });
});

import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Input.stories';

const { Base, WithClearInput, XSInput, SMInput, MDInput, LGInput, XLInput } =
  composeStories(stories);

describe('Input', () => {
  test('should render component correctly', () => {
    render(<Base />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLInputElement);
  });

  test('should not show clear button input', () => {
    const { container } = render(<Base />);
    expect(container.querySelector('svg')).not.toBeInTheDocument();
  });

  test('should show clear button input', () => {
    const { container } = render(<WithClearInput />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('should render xs input', () => {
    render(<XSInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByRole('textbox').className).toContain('text-xs');
    expect(screen.getByRole('textbox').className).toContain('py-1');
  });

  test('should render sm input', () => {
    render(<SMInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByRole('textbox').className).toContain('text-sm');
    expect(screen.getByRole('textbox').className).toContain('py-1.5');
    expect(screen.getByRole('textbox').className).toContain('leading-4');
  });

  test('should render md input', () => {
    render(<MDInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByRole('textbox').className).toContain('text-sm');
    expect(screen.getByRole('textbox').className).toContain('py-1.5');
    expect(screen.getByRole('textbox').className).not.toContain('leading-4');
  });

  test('should render lg input', () => {
    render(<LGInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByRole('textbox').className).toContain('text-base');
    expect(screen.getByRole('textbox').className).toContain('py-2');
  });

  test('should render xl input', () => {
    render(<XLInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByRole('textbox').className).toContain('text-base');
    expect(screen.getByRole('textbox').className).toContain('py-2.5');
  });
});

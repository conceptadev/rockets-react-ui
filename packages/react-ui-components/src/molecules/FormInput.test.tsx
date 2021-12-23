import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './FormInput.stories';

const {
  Base,
  XSFormInput,
  SMFormInput,
  MDFormInput,
  LGFormInput,
  XLFormInput,
} = composeStories(stories);

describe('FormInput', () => {
  test('should render component correctly', () => {
    render(<Base />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByText('Base Form Input')).toBeInTheDocument();
    expect(screen.getByText('Base Form Input')).toBeInstanceOf(
      HTMLLabelElement,
    );
  });

  test('should render xs forminput', () => {
    render(<XSFormInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByText('XS Form Input')).toBeInTheDocument();
    expect(screen.getByText('XS Form Input')).toBeInstanceOf(HTMLLabelElement);
    expect(screen.getByRole('textbox').className).toContain('text-xs');
    expect(screen.getByRole('textbox').className).toContain('py-1');
    expect(screen.getByText('XS Form Input').className).toContain('text-xs');
  });

  test('should render sm forminput', () => {
    render(<SMFormInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByText('SM Form Input')).toBeInTheDocument();
    expect(screen.getByText('SM Form Input')).toBeInstanceOf(HTMLLabelElement);
    expect(screen.getByRole('textbox').className).toContain('text-sm');
    expect(screen.getByRole('textbox').className).toContain('py-1.5');
    expect(screen.getByRole('textbox').className).toContain('leading-4');
    expect(screen.getByText('SM Form Input').className).toContain('text-sm');
  });

  test('should render md forminput', () => {
    render(<MDFormInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByText('MD Form Input')).toBeInTheDocument();
    expect(screen.getByText('MD Form Input')).toBeInstanceOf(HTMLLabelElement);
    expect(screen.getByRole('textbox').className).toContain('text-sm');
    expect(screen.getByRole('textbox').className).toContain('py-1.5');
    expect(screen.getByRole('textbox').className).not.toContain('leading-4');

    expect(screen.getByText('MD Form Input').className).toContain('text-sm');
  });

  test('should render lg forminput', () => {
    render(<LGFormInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByText('LG Form Input')).toBeInTheDocument();
    expect(screen.getByText('LG Form Input')).toBeInstanceOf(HTMLLabelElement);
    expect(screen.getByRole('textbox').className).toContain('text-base');
    expect(screen.getByRole('textbox').className).toContain('py-2');
    expect(screen.getByText('LG Form Input').className).toContain('text-base');
  });

  test('should render xl forminput', () => {
    render(<XLFormInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByText('XL Form Input')).toBeInTheDocument();
    expect(screen.getByText('XL Form Input')).toBeInstanceOf(HTMLLabelElement);
    expect(screen.getByRole('textbox').className).toContain('text-base');
    expect(screen.getByRole('textbox').className).toContain('py-2.5');
    expect(screen.getByText('XL Form Input').className).toContain('text-base');
  });
});

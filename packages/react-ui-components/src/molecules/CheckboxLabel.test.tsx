import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './CheckboxLabel.stories';

const {
  Base,
  XSCheckboxLabel,
  SMCheckboxLabel,
  MDCheckboxLabel,
  LGCheckboxLabel,
  XLCheckboxLabel,
} = composeStories(stories);

describe('CheckboxLabel', () => {
  test('should render component correctly', () => {
    render(<Base />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByText('Base CheckboxLabel')).toBeInTheDocument();
    expect(screen.getByText('Base CheckboxLabel')).toBeInstanceOf(
      HTMLLabelElement,
    );
  });

  test('should render xs checkboxlabel', () => {
    render(<XSCheckboxLabel />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByText('XS CheckboxLabel')).toBeInTheDocument();
    expect(screen.getByText('XS CheckboxLabel')).toBeInstanceOf(
      HTMLLabelElement,
    );
    expect(screen.getByRole('checkbox').className).toContain('h-3');
    expect(screen.getByRole('checkbox').className).toContain('w-3');
    expect(screen.getByText('XS CheckboxLabel').className).toContain(
      'text-xs',
    );
  });

  test('should render sm checkboxlabel', () => {
    render(<SMCheckboxLabel />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByText('SM CheckboxLabel')).toBeInTheDocument();
    expect(screen.getByText('SM CheckboxLabel')).toBeInstanceOf(
      HTMLLabelElement,
    );
    expect(screen.getByRole('checkbox').className).toContain('h-3.5');
    expect(screen.getByRole('checkbox').className).toContain('w-3.5');
    expect(screen.getByText('SM CheckboxLabel').className).toContain(
      'text-sm',
    );
  });

  test('should render md checkboxlabel', () => {
    render(<MDCheckboxLabel />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByText('MD CheckboxLabel')).toBeInTheDocument();
    expect(screen.getByText('MD CheckboxLabel')).toBeInstanceOf(
      HTMLLabelElement,
    );
    expect(screen.getByRole('checkbox').className).toContain('h-4');
    expect(screen.getByRole('checkbox').className).toContain('w-4');
    expect(screen.getByText('MD CheckboxLabel').className).toContain(
      'text-sm',
    );
  });

  test('should render lg checkboxlabel', () => {
    render(<LGCheckboxLabel />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByText('LG CheckboxLabel')).toBeInTheDocument();
    expect(screen.getByText('LG CheckboxLabel')).toBeInstanceOf(
      HTMLLabelElement,
    );
    expect(screen.getByRole('checkbox').className).toContain('h-5');
    expect(screen.getByRole('checkbox').className).toContain('w-5');
    expect(screen.getByText('LG CheckboxLabel').className).toContain(
      'text-base',
    );
  });

  test('should render xl checkboxlabel', () => {
    render(<XLCheckboxLabel />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByText('XL CheckboxLabel')).toBeInTheDocument();
    expect(screen.getByText('XL CheckboxLabel')).toBeInstanceOf(
      HTMLLabelElement,
    );
    expect(screen.getByRole('checkbox').className).toContain('h-6');
    expect(screen.getByRole('checkbox').className).toContain('w-6');
    expect(screen.getByText('XL CheckboxLabel').className).toContain(
      'text-base',
    );
  });
});

import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Checkbox.stories';

const { Base, XSCheckbox, SMCheckbox, MDCheckbox, LGCheckbox, XLCheckbox } =
  composeStories(stories);

describe('Checkbox', () => {
  test('should render component correctly', () => {
    render(<Base />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInstanceOf(HTMLInputElement);
  });

  test('should render xs checkbox', () => {
    render(<XSCheckbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByRole('checkbox').className).toContain('h-3');
    expect(screen.getByRole('checkbox').className).toContain('w-3');
  });

  test('should render sm checkbox', () => {
    render(<SMCheckbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByRole('checkbox').className).toContain('h-3.5');
    expect(screen.getByRole('checkbox').className).toContain('w-3.5');
  });

  test('should render md checkbox', () => {
    render(<MDCheckbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByRole('checkbox').className).toContain('h-4');
    expect(screen.getByRole('checkbox').className).toContain('w-4');
  });

  test('should render lg checkbox', () => {
    render(<LGCheckbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByRole('checkbox').className).toContain('h-5');
    expect(screen.getByRole('checkbox').className).toContain('w-5');
  });

  test('should render xl checkbox', () => {
    render(<XLCheckbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByRole('checkbox').className).toContain('h-6');
    expect(screen.getByRole('checkbox').className).toContain('w-6');
  });

});

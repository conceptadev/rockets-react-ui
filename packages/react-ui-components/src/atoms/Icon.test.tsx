import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Icon.stories';

const { Base, XSIcon, SMIcon, MDIcon, LGIcon, XLIcon } =
  composeStories(stories);

describe('Icon', () => {
  test('should render component correctly', () => {
    const { container } = render(<Base />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
  test('should render xs icon', () => {
    const { container } = render(<XSIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    const iconElement = container.querySelector('svg') as SVGElement;
    expect(iconElement.classList).toContain('h-3');
    expect(iconElement.classList).toContain('w-3');
  });

  test('should render sm icon', () => {
    const { container } = render(<SMIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    const iconElement = container.querySelector('svg') as SVGElement;
    expect(iconElement.classList).toContain('h-4');
    expect(iconElement.classList).toContain('w-4');
  });

  test('should render md icon', () => {
    const { container } = render(<MDIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    const iconElement = container.querySelector('svg') as SVGElement;
    expect(iconElement.classList).toContain('h-5');
    expect(iconElement.classList).toContain('w-5');
  });

  test('should render lg icon', () => {
    const { container } = render(<LGIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    const iconElement = container.querySelector('svg') as SVGElement;
    expect(iconElement.classList).toContain('h-6');
    expect(iconElement.classList).toContain('w-6');
  });

  test('should render xl icon', () => {
    const { container } = render(<XLIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    const iconElement = container.querySelector('svg') as SVGElement;
    expect(iconElement.classList).toContain('h-7');
    expect(iconElement.classList).toContain('w-7');
  });
});

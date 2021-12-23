import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  test('should render component correctly', () => {
    const { container } = render(<Card />)
    expect(container.firstChild).toBeInstanceOf(HTMLDivElement);
    expect(container.firstChild).not.toBeEmptyDOMElement();
    expect(container.firstChild?.firstChild).toBeEmptyDOMElement();
  });
});

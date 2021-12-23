import { render, screen } from '@testing-library/react';
import Column from './Column';

describe('Column', () => {
  test('should render component correctly', () => {
    const { container } = render(<Column />)
    expect(container.firstChild).toBeInstanceOf(HTMLDivElement);
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  test('should have correct class', () => {
    const { container } = render(<Column />)
    const column = container.firstChild as HTMLDivElement;

    expect(column).not.toBeNull();
    expect(column?.classList.contains('flex-col')).toBeTruthy()

    //https://testing-library.com/docs/react-testing-library/setup/
    //https://github.com/testing-library/jest-dom/issues/70

    // expect(column).toHaveStyle('flex-direction: column')
    // const columnStyles = getComputedStyle(column);
    // expect(columnStyles.flexDirection).toEqual('column');

  })
});

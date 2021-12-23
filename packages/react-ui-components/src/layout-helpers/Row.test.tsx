import { render, screen } from '@testing-library/react';
import Row from './Row';

describe('Row', () => {
  test('should render component correctly', () => {
    const { container } = render(<Row />)
    expect(container.firstChild).toBeInstanceOf(HTMLDivElement);
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  test('should have correct class', () => {
    const { container } = render(<Row />)
    const row = container.firstChild as HTMLDivElement;

    expect(row).not.toBeNull();
    expect(row?.classList.contains('flex-col')).toBeFalsy()

    //https://testing-library.com/docs/react-testing-library/setup/
    //https://github.com/testing-library/jest-dom/issues/70
    
    // expect(column).toHaveStyle('flex-direction: column')
    // const columnStyles = getComputedStyle(column);
    // expect(columnStyles.flexDirection).toEqual('column');

  })
});

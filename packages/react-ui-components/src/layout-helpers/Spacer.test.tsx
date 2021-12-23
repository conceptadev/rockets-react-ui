import { render, screen } from '@testing-library/react';
import Spacer from './Spacer';

describe('Spacer', () => {
  test('should render component correctly', () => {
    const { container } = render(<Spacer size={10} />)
    expect(container.firstChild).toBeInstanceOf(HTMLDivElement);
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  test('should have correct margin left class for horizontal spacing', () => {
    const { container } = render(<Spacer size={10} />)
    const spacer = container.firstChild as HTMLDivElement;

    expect(spacer).not.toBeNull();
    expect(spacer?.classList.contains('ml-10')).toBeTruthy();

    //https://testing-library.com/docs/react-testing-library/setup/
    //https://github.com/testing-library/jest-dom/issues/70
    
    // expect(column).toHaveStyle('flex-direction: column')
    // const columnStyles = getComputedStyle(column);
    // expect(columnStyles.flexDirection).toEqual('column');

  })

  test('should have correct margin top class for vertical spacing', () => {
    const { container } = render(<Spacer vertical size={10} />)
    const spacer = container.firstChild as HTMLDivElement;

    expect(spacer).not.toBeNull();
    expect(spacer?.classList.contains('mt-10')).toBeTruthy();

    //https://testing-library.com/docs/react-testing-library/setup/
    //https://github.com/testing-library/jest-dom/issues/70
    
    // expect(column).toHaveStyle('flex-direction: column')
    // const columnStyles = getComputedStyle(column);
    // expect(columnStyles.flexDirection).toEqual('column');

  })
});

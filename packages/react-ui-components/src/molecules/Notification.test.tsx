import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Notification.stories';

const {
  Base,
  Success,
  Warning,
  Info,
  Error,
} = composeStories(stories);

describe('Notification', () => {
  test('should render component correctly', () => {
    render(<Base />);
    expect(screen.getByText('Base Notification')).toBeInTheDocument();
    expect(screen.getByText('Base Notification')).toBeInstanceOf(
      HTMLSpanElement,
    );
  });

  test('should render success notification correctly', () => {
    render(<Success />);
    expect(screen.getByText('Success Notification')).toBeInTheDocument();
    expect(screen.getByText('Success Notification')).toBeInstanceOf(
      HTMLSpanElement,
    );
  });

  test('should render warning notification correctly', () => {
    render(<Warning />);
    expect(screen.getByText('Warning Notification')).toBeInTheDocument();
    expect(screen.getByText('Warning Notification')).toBeInstanceOf(
      HTMLSpanElement,
    );
  });

  test('should render info notification correctly', () => {
    render(<Info />);
    expect(screen.getByText('Info Notification')).toBeInTheDocument();
    expect(screen.getByText('Info Notification')).toBeInstanceOf(
      HTMLSpanElement,
    );
  });

  test('should render error notification correctly', () => {
    render(<Error />);
    expect(screen.getByText('Error Notification')).toBeInTheDocument();
    expect(screen.getByText('Error Notification')).toBeInstanceOf(
      HTMLSpanElement,
    );
  });

});

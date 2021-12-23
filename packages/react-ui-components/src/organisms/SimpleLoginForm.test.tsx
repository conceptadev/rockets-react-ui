import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './SimpleLoginForm.stories';

const { Base } = composeStories(stories);

describe('SimpleLoginForm', () => {
  test('should render component correctly', () => {
    const {container} = render(<Base />);
    expect(container.firstChild).not.toBeEmptyDOMElement();
    expect(screen.getByText("Sign in Form")).toBeInTheDocument();
    expect(screen.getByText("Email address")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByText("Sign in")).toBeInTheDocument();
  });
});

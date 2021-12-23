import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './SignInForm.stories';

const { Base } = composeStories(stories);

describe('SignInForm', () => {
  test('should render component correctly', () => {
    const {container} = render(<Base />);
    expect(container.firstChild).not.toBeEmptyDOMElement();
    expect(screen.getByText("Sign in Form")).toBeInTheDocument();
    expect(screen.getByText("Email address")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByText("Remember me")).toBeInTheDocument();
    expect(screen.getByText("Forgot your password?")).toBeInTheDocument();
    expect(screen.getByText("Sign in")).toBeInTheDocument();
  });
});

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import App from '.';

test('renders welcome message', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/welcome/i);
  expect(linkElement).toBeInTheDocument();
});

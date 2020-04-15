import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders image flipper title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Image Flipper/i);
  expect(linkElement).toBeInTheDocument();
});

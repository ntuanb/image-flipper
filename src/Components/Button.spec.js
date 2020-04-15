import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('renders button by default', () => {
  const { container } = render(<Button/>);

  expect(container.firstChild).toHaveClass('button');
});

test('renders button with className', () => {
  const { container } = render(<Button className="test"/>);

  expect(container.firstChild).toHaveClass('button test');
});

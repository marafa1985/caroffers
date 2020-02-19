import React from 'react';
import { render } from '@testing-library/react';
import Offers from './Offers';

test('renders learn react link', () => {
  const { getByText } = render(<Offers offers={[]} />);
  const linkElement = getByText(/No offer Found/i);
  expect(linkElement).toBeInTheDocument();
});

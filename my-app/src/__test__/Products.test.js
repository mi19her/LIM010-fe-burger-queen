import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';

it('products', () => {
  const { asFragment } = render(<Order />);
  expect(asFragment()).toMatchSnapshot();
});
it.only('se deberia renderizar desayuno despues de un click', async () => {
  const { asFragment, getByText } = render(<Order />);
  act(() => {
    fireEvent.click(getByText('desayuno'));
  });
  expect(getByText('desayuno')).toHaveAttribute('type', expect.stringContaining('button'));
  const { asFragment } = render(<Order />);
  expect(asFragment()).toMatchSnapshot();
});

import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { Products } from '../components/Products';
import { act } from 'react-dom/test-utils';

it('Muestra los productos', async () => {
  const addProductAtOrder = () => {};
  const { getByText, getByTestId, getAllByTestId } = render(
    <Products addProductAtOrder={addProductAtOrder} />
  );
  const divProducts = getByTestId('productList');

  expect(divProducts.children.length).toBe(0);

  await waitForElement(() => getAllByTestId('child'));

  expect(divProducts.children.length).toBe(4);

  await act(() => {
    fireEvent.click(getByText('Almuerzo y cena'));
  });
  await waitForElement(() => getAllByTestId('child')[5]);
  // console.log(divProducts.children.length);
  expect(divProducts.children.length).toBe(14);
});


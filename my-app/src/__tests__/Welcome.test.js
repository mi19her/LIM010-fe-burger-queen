import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { Welcome } from '../views/welcome';
import { Link, MemoryRouter} from 'react-router-dom';
// import { act } from 'react-dom/test-utils';

it('Muestra la vista del mesero y jefe de cocina', async () => {
  const vistaProductos = shallow(
    <MemoryRouter>
      <Welcome />
    </MemoryRouter>
  );
  expect(vistaProductos.find(Link).props('to')).toBe('/waiter');
});

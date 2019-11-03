import React from 'react';
// import '@testing-library/jest-dom/extend-expect'
// import { render, fireEvent, waitForElement } from '@testing-library/react';
import { Welcome } from '../views/welcome';
import {App} from '../App'
// import { Link, MemoryRouter} from 'react-router-dom';
// import { act } from 'react-dom/test-utils';

test('Muestra la vista del mesero y jefe de cocina', async () => {
const {container} = App(<Welcome/>)
console.log(container)


},);

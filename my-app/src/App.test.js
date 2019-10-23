import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe('iniciar Sesion', () => {
//   it('Deberia iniciar sesion', () => signInWithEmailAndPassword('laboratoria@lab.com', '123456789')
//     .then((user) => {
//       expect(user.email).toBe('laboratoria@lab.com');
//     }));
// });

// importamos la funcion que vamos a testear
import { register } from '../src/componets/register';
import { navigateTo } from '../src/router';
// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });

//
jest.mock('../src/lib/authentication', () => ({ registerWithEmail: () => Promise.resolve() }));
jest.mock('../src/router', () => ({ navigateTo: jest.fn() }));

describe('register', () => {
  it('si el usuario se registrò correctamente debe direccionarse a home', () => {
    document.body.appendChild(register());
    document.getElementById('btnregister').click();
    // const e = new Event('submit', {target: { email: { value: 'hola'} } });
    // document.getElementById('registerForm').dispatchEvent(e);

    setTimeout(() => {
      expect(navigateTo).toHaveBeenCalledWith('/home');
      done();
    }, 0);
  });
});

// importamos la funcion que vamos a testear
import { register } from '../src/componets/register';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});


//
describe('register', () => {
  it('si el usuario se registrò correctamente debe direccionarse a home', () => {
    document.body.appendChild(register());

    const e = new Event('submit', {target: { email: { value: 'hola'} } });
    document.getElementById('registerForm').dispatchEvent(e);
    expect(typeof myFunction).toBe('function');
  });
});

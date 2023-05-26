// importamos la funcion que vamos a testear
import { register } from "../src/pages/register";
import { registrarUsuaria } from "../src/lib/firebase";
import { onNavigate } from "../src/router";

jest.mock('../src/router', () => ({
  onNavigate: jest.fn(),
}));
jest.mock('../src/lib/firebase', () => ({
  registrarUsuaria: jest.fn().mockResolvedValue(),
}));

describe('register', () => {
  // validar
  it('debería ser una función', () => {
    expect(typeof register).toBe('function');
  });
// verificar
// estresar
});

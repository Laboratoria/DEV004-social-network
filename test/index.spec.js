import { home } from '../src/components/home';
import { feed } from '../src/components/feed';
import { register } from '../src/components/register';
import * as firebaseFn from '../src/lib/firebase';

jest.mock('../src/lib/firebase.js', () => ({
  signIn: jest.fn(),
  loginWithGoogle: jest.fn(),
  singInHere: jest.fn(),
  createUser: jest.fn(),
  updateName: jest.fn(),
  savedUser: jest.fn(),
  post: jest.fn(),
  addPost: jest.fn(),
  logOut: jest.fn(),
}));

beforeEach(() => {
  document.body.innerHTML = '<div id="root"></div>';
});

describe('Sing In', () => {
  it('si el usurio se logea con éxito se redirige a /feed', (done) => {
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    const mockNavigate = jest.fn();
    const section = home(mockNavigate);
    section.querySelector('#email').value = 'test@test.com';
    section.querySelector('#password').value = 'TEst12$%';
    section.querySelector('#signin-button').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/feed');
      done();
    }, 0);
  });

  it('si el usuario deja el campo de email vacio arroja una alerta', () => {
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    global.alert = jest.fn();
    const section = home();
    section.querySelector('#email').value = '';
    section.querySelector('#password').value = 'TEst12$%';
    section.querySelector('#signin-button').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith('Ingrese su email');
    });
  });

  it('si el usuario deja el campo de contraseña vacio arroja una alerta', () => {
    jest.clearAllMocks();
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    global.alert = jest.fn();
    const section = home();
    section.querySelector('#email').value = 'test@test.com';
    section.querySelector('#password').value = '';
    section.querySelector('#signin-button').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith('Ingrese su contraseña');
    }, 0);
  });

  it('si el usuario introduce un email incorrecto arroja una alerta', () => {
    jest.clearAllMocks();
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    global.alert = jest.fn();
    const section = home();
    section.querySelector('#email').value = 'test.com';
    section.querySelector('#password').value = 'TEst12$%';
    section.querySelector('#signin-button').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith('Ingrese email correcto');
    }, 0);
  });
});

describe('Log In con Google', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });
  it('si el usuario se logea con éxito se redirige a /feed', () => {
    firebaseFn.loginWithGoogle.mockResolvedValueOnce({ user: { uid: 'user-id' } });
    const mockNavigate = jest.fn();
    const section = home(mockNavigate);
    section.querySelector('#google').dispatchEvent(new Event('click'));
    return Promise.resolve().then(() => { expect(mockNavigate).toHaveBeenCalledWith('/feed'); });
  });
});

describe('Ir a registro', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });
  it('El usuario quiere ir a registrarse', () => {
    const mockNavigate = jest.fn();
    const section = home(mockNavigate);
    section.querySelector('#here').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/register');
    }, 0);
  });
});

describe('register', () => {
  it('si el usurio se registra con éxito se redirige a /feed', () => {
    firebaseFn.createUser.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    const mockNavigate = jest.fn();
    const section = register(mockNavigate);
    section.querySelector('#register-name').value = 'Panchita';
    section.querySelector('#register-email').value = 'test@test.com';
    section.querySelector('#register-password').value = 'TEst12$%';
    section.querySelector('#pet-name').value = 'humita';
    section.querySelector('#specie-name').value = 'gato';
    section.querySelector('#register-password2').value = 'TEst12$%';
    section.querySelector('#create-account').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/feed');
    }, 0);
  });

  it('si el usuario deja el campo de nombre vacio arroja una alerta', () => {
    firebaseFn.signIn.mockResolvedValueOnce({ user: { nombre: 'Panchita' } });
    global.alert = jest.fn();
    const section = register();
    section.querySelector('#register-name').value = '';
    section.querySelector('#register-email').value = 'test@test.com';
    section.querySelector('#register-password').value = 'TEst12$%';
    section.querySelector('#pet-name').value = 'humita';
    section.querySelector('#specie-name').value = 'gato';
    section.querySelector('#register-password2').value = 'TEst12$%';
    section.querySelector('#create-account').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith('Ingrese su nombre');
    });
  });
  it('si el usuario deja el campo de email vacio arroja una alerta', () => {
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    global.alert = jest.fn();
    const section = register();
    section.querySelector('#register-name').value = 'Panchita';
    section.querySelector('#register-email').value = '';
    section.querySelector('#register-password').value = 'TEst12$%';
    section.querySelector('#pet-name').value = 'humita';
    section.querySelector('#specie-name').value = 'gato';
    section.querySelector('#register-password2').value = 'TEst12$%';
    section.querySelector('#create-account').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith('Ingrese email');
    });
  });
  it('si el usuario ingresa un email incorrecto lanza una alerta', () => {
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    global.alert = jest.fn();
    const section = register();
    section.querySelector('#register-name').value = 'Panchita';
    section.querySelector('#register-email').value = 'test.com';
    section.querySelector('#register-password').value = 'TEst12$%';
    section.querySelector('#pet-name').value = 'humita';
    section.querySelector('#specie-name').value = 'gato';
    section.querySelector('#register-password2').value = 'TEst12$%';
    section.querySelector('#create-account').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith('Ingrese email correcto');
    });
  });
  it('si el usuario deja el campo de contraseña vacio arroja una alerta', () => {
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    global.alert = jest.fn();
    const section = register();
    section.querySelector('#register-name').value = 'Panchita';
    section.querySelector('#register-email').value = 'test@test.com';
    section.querySelector('#register-password').value = '';
    section.querySelector('#pet-name').value = 'humita';
    section.querySelector('#specie-name').value = 'gato';
    section.querySelector('#register-password2').value = 'TEst12$%';
    section.querySelector('#create-account').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith('Ingrese contraseña');
    });
  });
  it('si el usuario ingresa una contraseña menor a 8 digitos lanza una alerta', () => {
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    global.alert = jest.fn();
    const section = register();
    section.querySelector('#register-name').value = 'Panchita';
    section.querySelector('#register-email').value = 'test@test.com';
    section.querySelector('#register-password').value = '1234567';
    section.querySelector('#pet-name').value = 'humita';
    section.querySelector('#specie-name').value = 'gato';
    section.querySelector('#register-password2').value = 'TEst12$%';
    section.querySelector('#create-account').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith('Ingrese 8 digitos');
    });
  });
  it('Si la contraseña no es segura se lanza una alerta', () => {
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    global.alert = jest.fn();
    const section = register();
    section.querySelector('#register-name').value = 'Panchita';
    section.querySelector('#register-email').value = 'test@test.com';
    section.querySelector('#register-password').value = 'hola';
    section.querySelector('#pet-name').value = 'humita';
    section.querySelector('#specie-name').value = 'gato';
    section.querySelector('#register-password2').value = 'TEst12$%';
    section.querySelector('#create-account').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith('debe incluir como minimos: 2 mayusculas, 2 minusculas, 2 numeros, 2 simbolos');
    });
  });
  it('si el usuario no repite la contraseña se arroja una alerta', () => {
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    global.alert = jest.fn();
    const section = register();
    section.querySelector('#register-name').value = 'Panchita';
    section.querySelector('#register-email').value = 'test@test.com';
    section.querySelector('#register-password').value = 'TEst12$%';
    section.querySelector('#pet-name').value = 'humita';
    section.querySelector('#specie-name').value = 'gato';
    section.querySelector('#register-password2').value = '';
    section.querySelector('#create-account').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith('Ingrese la repeticion de la contraseña');
    });
  });
  it('si las contraseñas no son iguales se arroja una alerta', () => {
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    global.alert = jest.fn();
    const section = register();
    section.querySelector('#register-name').value = 'Panchita';
    section.querySelector('#register-email').value = 'test@test.com';
    section.querySelector('#register-password').value = 'TEst12$%';
    section.querySelector('#pet-name').value = 'humita';
    section.querySelector('#specie-name').value = 'gato';
    section.querySelector('#register-password2').value = '123456';
    section.querySelector('#create-account').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith('Las contraseñas no son iguales');
    });
  });
  it('si el nombre de mascota está vacío se arroja una alerta', () => {
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    global.alert = jest.fn();
    const section = register();
    section.querySelector('#register-name').value = 'Panchita';
    section.querySelector('#register-email').value = 'test@test.com';
    section.querySelector('#register-password').value = 'TEst12$%';
    section.querySelector('#pet-name').value = '';
    section.querySelector('#specie-name').value = 'gato';
    section.querySelector('#register-password2').value = 'TEst12$%';
    section.querySelector('#create-account').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith('Ingrese nombre de la mascota');
    });
  });
  it('si el nombre de mascota no tiene solo letras se arroja una alerta', () => {
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    global.alert = jest.fn();
    const section = register();
    section.querySelector('#register-name').value = 'Panchita';
    section.querySelector('#register-email').value = 'test@test.com';
    section.querySelector('#register-password').value = 'TEst12$%';
    section.querySelector('#pet-name').value = 'humita12%';
    section.querySelector('#specie-name').value = 'gato';
    section.querySelector('#register-password2').value = 'TEst12$%';
    section.querySelector('#create-account').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith('Ingrese nombre: solo letras');
    });
  });
  it('si no hay especie de mascota se arroja una alerta', () => {
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    global.alert = jest.fn();
    const section = register();
    section.querySelector('#register-name').value = 'Panchita';
    section.querySelector('#register-email').value = 'test@test.com';
    section.querySelector('#register-password').value = 'TEst12$%';
    section.querySelector('#pet-name').value = 'humita';
    section.querySelector('#specie-name').value = '';
    section.querySelector('#register-password2').value = 'TEst12$%';
    section.querySelector('#create-account').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith('Ingrese la especie de la mascota');
    });
  });
  it('si la especie no tiene solo letras se arroja una alerta', () => {
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    global.alert = jest.fn();
    const section = register();
    section.querySelector('#register-name').value = 'Panchita';
    section.querySelector('#register-email').value = 'test@test.com';
    section.querySelector('#register-password').value = 'TEst12$%';
    section.querySelector('#pet-name').value = 'humita';
    section.querySelector('#specie-name').value = 'gato12%';
    section.querySelector('#register-password2').value = 'TEst12$%';
    section.querySelector('#create-account').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith('Ingrese especie: solo letras');
    });
  });
});

describe('Ir a home', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });
  it('El usuario quiere volver a home', () => {
    const mockNavigate = jest.fn();
    const section = register(mockNavigate);
    section.querySelector('#back-button').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/');
    }, 0);
  });
});

describe('Feed', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });

  it('Si el usuario crea un post se debe guardar', () => {
    const createPost = firebaseFn.post.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    const section = feed();
    section.querySelector('#status-description').value = 'test post';
    section.querySelector('.post').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(createPost).toHaveBeenCalledTime(1);
    }, 0);
  });

  it('Si el usuario deja el campo de post vacio sale una alerta', () => {
    firebaseFn.post.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    const section = feed();
    section.querySelector('#status-description').value = '';
    section.querySelector('.post').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith('Ingrese post');
    }, 0);
  });

  /* it('El usuario edita el post', () => {

  }); */

  it('Si el usuario se hace logOut', () => {
    firebaseFn.logOut.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    const mockNavigate = jest.fn();
    const section = feed(mockNavigate);
    section.querySelector('#salir').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/');
    }, 0);
  });
});

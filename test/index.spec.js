import { home } from '../src/components/home';
import * as firebaseFn from '../src/lib/firebase';

jest.mock('../src/lib/firebase.js', () => ({
  signIn: jest.fn(),
}));

describe('Sing In', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });
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
});

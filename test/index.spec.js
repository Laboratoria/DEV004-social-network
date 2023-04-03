import { signIn } from '../src/lib/firebase';
import { home } from '../src/components/home';

/* jest.mock('../src/lib/firebase.js', () => {

}); */

describe('Sing In', () => {
  it('si el usurio se logea se redirige a /feed', (done) => {
    document.body.innerHTML = '<main id="root"></main>';
    signIn.mockResolveValue({ user: { email: 'test@test.com' } });
    const section = home();
    section.querySelector('#email').value = 'test@test.com';
    section.querySelector('#password').value = 'TEst12$%';
    section.querySelector('#signin-button').dispatchEvent(new Event('click'));
    expect(window.location.pathname).toBe('/feed');
    done();
  });
});

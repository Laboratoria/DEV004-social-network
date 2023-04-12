export const login = () => {
    const homeDiv = document.createElement('div');
    homeDiv.textContent = 'Bienvenido al Login';
    const buttonHome = document.createElement('button');

    buttonHome.textContent= 'Regresar al Home';

    homeDiv.appendChild(buttonHome);

    return homeDiv;

};
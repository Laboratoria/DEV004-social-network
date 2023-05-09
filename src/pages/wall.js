export const wall = () => {
  // crea contenedor principal
  const wallContainer = document.createElement('div');
  // modifica propiedades de los elemento
  wallContainer.innerHTML = ` <main> 
  <h1> Bienvenido al Muro</h1>
  <button> Postear </button>
  </main>`;
  // retorna el elemento
  return wallContainer;
};

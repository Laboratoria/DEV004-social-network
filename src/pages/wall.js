export const wall = () => {
  // crea contenedor principal
  const h1 = document.createElement('h1');
  // modifica propiedades de los elemento
  h1.textContent = 'dentro de wall';
  // retorna el elemento
  return h1;
};

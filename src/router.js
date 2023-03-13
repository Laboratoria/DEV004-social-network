const LOCAL_ROUTES = {};

// Navigate to a specific path and update the history
export const navigateTo = (pathname, updateHistory = true) => {
  // If the path is not found, redirect to the home page
  // acá establece la ruta de default, en este caso es login. 
  const path = typeof LOCAL_ROUTES[pathname] !== 'function' ? pathname : '/';
  // Update the history
  // va guardando en el objeto vacío ({}) las rutas que ha visitado el usuario.
  // sintaxis del método pushState(título de la ventana,url+nombre de la ruta (login,home,register))
  if (updateHistory) {
    window.history.pushState({}, path, window.location.origin + pathname);
  }

  // Clear the root section and render the new component
  // Limpiar el contenido de la pantalla y no sobreescribir el contenido.
  const rootSection = document.getElementById('root');
  rootSection.innerHTML = '';
  rootSection.append(LOCAL_ROUTES[pathname]());
};

// Initialize the router with the routes
export const initRouter = (routes) => {
  // Add routes to LOCAL_ROUTES
  // método .keys convierte un objeto a un array,entonces devuelve array []
  // método .reduce suma los valores de un array y devuelve un solo valor.
  // no nos queda muy clara esta parte del codigo.***
  Object.keys(routes).reduce((currentRoutes, pathname) => {
    currentRoutes[pathname] = routes[pathname];
    console.log (currentRoutes);
    console.log (LOCAL_ROUTES);
    return currentRoutes;
  }, LOCAL_ROUTES);

  // Add event listener to handle back/forward button
  window.addEventListener('popstate', (e) => {
    navigateTo(window.location.pathname, false);
  });
  // Add event listener to handle page load
  window.addEventListener('load', () => {
    navigateTo(window.location.pathname, false);
  });
};

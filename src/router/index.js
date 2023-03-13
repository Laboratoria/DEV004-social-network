const routes = {};

export const onNavigate = (pathname) => {
  const path = typeof routes[pathname] !== 'function' ? pathname : '/';
  window.history.pushState({}, path, window.location.origin + pathname);
  const rootSection = document.getElementById('root');
  rootSection.innerHTML = '';
  rootSection.append(routes[pathname]());
};

export const addRoutes = (route) => {
  Object.keys(route).reduce((currentRoutes, pathname) => {
    // seria buena agregar validaciones
    currentRoutes[pathname] = route[pathname];
    return currentRoutes;
  }, route);
};

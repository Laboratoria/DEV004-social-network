const LOCAL_ROUTES = {};

// Navigate to a specific path and update the history
export const navigateTo = (pathname, updateHistory = true) => {
  // If the path is not found, redirect to the home page
  const path = typeof LOCAL_ROUTES[pathname] !== 'function' ? pathname : '/';

  // Update the history
  if (updateHistory) {
    window.history.pushState({}, path, window.location.origin + pathname);
  }

  // Clear the root section and render the new component
  const rootSection = document.getElementById('root');
  rootSection.innerHTML = '';
  rootSection.append(LOCAL_ROUTES[pathname]());
};

// Initialize the router with the routes
export const initRouter = (routes) => {
  // Add routes to LOCAL_ROUTES
  Object.keys(routes).reduce((currentRoutes, pathname) => {
    currentRoutes[pathname] = routes[pathname];
    return currentRoutes;
  }, LOCAL_ROUTES);

  // Add event listener to handle back/forward button
  // eslint-disable-next-line no-unused-vars
  window.addEventListener('popstate', (e) => {
    navigateTo(window.location.pathname, false);
  });

  // Add event listener to handle page load
  window.addEventListener('load', () => {
    navigateTo(window.location.pathname, false);
  });
};

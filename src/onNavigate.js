// aqui exportaras las funciones que necesites
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
};

// *Este es el codigo del ejemplo del video min :36
// export const onNavigate = (pathname) => {
//   window.history.pushState(
//     {},
//     pathname,
//     window.location.origin + pathname,
//   );
//   rootDiv.appendChild(routes[pathname]());
// };

// *Intentando pasar window como un argumento
// export const onNavigate = (pathname, Objwindow) => {
//   Objwindow.history.pushState(
//     {},
//     pathname,
//     Objwindow.location.origin + pathname,
//   );
// };

// export const onNavigate = (pathname, window) => {
//   console.log(pathname, window, 'que estres');
//   window.history.pushState(
//     {},
//     pathname,
//     window.location.origin + pathname,
//   );
// };

console.log('Hola mundo!');

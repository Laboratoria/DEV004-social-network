export const encabezado = () => {
  const cabezera = document.createElement("header");
  cabezera.className = "cabezera";
  cabezera.innerHTML =
    '<img src="app/visual/logoPrincipal.png" alt="LogoWanderlust"><h1>Wanderlust</h1><h4>ATREVETE A IR MÁS LEJOS</h4>';
  return cabezera;
};

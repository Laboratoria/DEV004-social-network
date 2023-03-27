export const encabezado = () => {
    const cabezera = document.createElement("header");
    cabezera.className = "cabezera";
    cabezera.innerHTML =
      '<img src="app/visual/logo.png" alt="LogoWanderlust">';
     
  
    return cabezera;
  };
  
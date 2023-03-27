
import { encabezado } from "./componentes/cabezera";
import { ingreso } from "./componentes/Ingreso";

export const app = () => {
  const documento = document.getElementById("root");

  documento.appendChild(encabezado());
  documento.appendChild(ingreso());
};

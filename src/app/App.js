import {encabezado } from "./componentes/Ingreso";

export const app = () => {
  const documento = document.getElementById("root");

  documento.appendChild(encabezado());
};

export const ingreso=()=>{
  const formularioIngreso= document.createElement("form");
  formularioIngreso.className="formularioIngreso";
  formularioIngreso.innerHTML='<input type="text" placeholder="Email"> <input type="password" maxlength="8" placeholder="Password"> <button class="ingresar">Ingresar</button>';
return formularioIngreso;
};

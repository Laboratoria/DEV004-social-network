import { rutas } from './rutas.js'
    
export const onNavigate = (pathName,id) => {
    window.history.pushState(
        {},
        pathName,
        window.location.origin + pathName
    )
    id.appendChild(rutas[pathName]());
}
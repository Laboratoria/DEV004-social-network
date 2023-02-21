import { rutas } from './rutas.js'
    
export const onNavigate = (pathName) => {
    window.history.pushState(
        {},
        pathName,
        window.location.origin + pathName
    )
    rutas[pathName]();
}
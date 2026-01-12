// IMPORTACIONES PROPIAS
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER

/**
 * Función helper que redirige según el rol del usuario
 */
export const redirigirPorRol = async () => {

    const respuesta = await fetch(`${APIKEY_BACK}auth/redirigir`, {
        credentials: "include"
    });
    
    const data = await respuesta.json();
    return data.redirect;

}

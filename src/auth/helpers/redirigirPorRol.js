// IMPORTACIONES PROPIAS
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER

export const redirigirPorRol = async () => {

    const respuesta = await fetch(`${APIKEY_BACK}auth/redirigir`, {
        credentials: "include"
    });
    
    const data = await respuesta.json();
    //console.log(data);
    return data.redirect;

}

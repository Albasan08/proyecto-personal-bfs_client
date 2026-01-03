// IMPORTACIONES DE TERCEROS
import { useEffect, useState } from "react"

// IMPORTACIONES PROPIAS
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

export const useObtenerTodasExperiencias = () => {

    const [experiencias, setExperiencias] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

        const obtenerExperiencias = async () => {

            try {

                const respuesta = await fetch(`${APIKEY_BACK}experiencias`, {
                    credentials: "include",
                });
                
                const data = await respuesta.json();
                //console.log(data);
                // Si la data tiene algún error - Setear el estado de error
                if(!data.ok) {
                    setError(data.error);
                    return;
                };
                // Si todo va bien
                setExperiencias(data.data);

            } catch(error) {

                setError(`Error al obtener las experiencias`);
            };
        };

        obtenerExperiencias();

    }, []);
 
  return (
    {
        experiencias,
        error
    }
  )
};

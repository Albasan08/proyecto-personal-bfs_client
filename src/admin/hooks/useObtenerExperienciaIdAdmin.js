// IMPORTACIONES DE TERCEROS
import { useEffect, useState } from "react"

// IMPORTACIONES PROPIAS
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

export const useObtenerExperienciaIdAdmin = (id) => {

    const [experiencia, setExperiencia] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        const obtenerExperienciaId = async () => {
            
            try {

                const respuesta = await fetch(`${APIKEY_BACK}admin/editar/${id}`, {
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
                setExperiencia(data.data);

            }catch(error) {

                setError(`Error al obtener la experiencia ${id}`);

            }
        };

        obtenerExperienciaId();

    }, [id]); // Cada vez que cambia el id de la página
    
  return (
    {
        experiencia,
        error
    }
  )
}

// IMPORTACIONES DE TERCEROS
import { useEffect, useState } from "react"

// IMPORTACIONES PROPIAS
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

export const useObtenerInfoExperiencia = (id) => {

    const [error, setError] = useState(null);
    const [experiencia, setExperiencia] = useState(null);

    useEffect(() => {
        const obtenerExperienciaProgramId = async () => {

            try {

                const respuesta = await fetch(`${APIKEY_BACK}gestor/programar/${id}`, {
                    credentials: "include"
                });

                const data = await respuesta.json();
                //console.log(data);
                // Si la data tiene algún error - Error
                if (!data.ok) {
                    setError(data.error);
                    return;
                };
                // Si todo va bien
                setExperiencia(data.data);

            } catch (error) {

                setError(`Error al obtener la experiencia ${id}`)
            };
        };

        obtenerExperienciaProgramId();

    }, [id]);

    return (
        {
            experiencia,
            error
        }
    )
}

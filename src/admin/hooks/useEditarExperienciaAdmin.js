// IMPORTACIONES DE TERCEROS
import { useState } from "react"

// IMPORTACIONES PROPIAS
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;


export const useEditarExperienciaAdmin = () => {

    const [error, setError] = useState(null);

    const editarExperienciaPorId = async (id, formData) => {

        setError(null);

        try {

            const respuesta = await fetch(`${APIKEY_BACK}admin/editar/${id}`, {
                method: "PUT",
                credentials: "include",
                body: formData
            });
            
            const data = await respuesta.json();
            //console.log(data);
            // Si hay error - Setear estado
            if(!data.ok) {

                setError(data.error);
                return data;

            };

            return data;

        } catch(error) {

            const errorAMostrar = {
                ok: false,
                error: [
                    {mensaje: "Error al editar la experiencia"}
                ]
            };

            setError(errorAMostrar.error);
            return errorAMostrar;

        };
    }
  return (
    {
        editarExperienciaPorId,
        error
    }
  )
}

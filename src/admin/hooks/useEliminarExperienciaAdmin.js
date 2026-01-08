// IMPORTACIONES DE TERCEROS
import { useState } from "react";

// IMPORTACIONES PROPIAS
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

export const useEliminarExperienciaAdmin = () => {

  const [error, setError] = useState(null);

  const eliminarExperiencia = async (id) => {
    //console.log("ELIMINAR EXPERIENCIA ID:", id); 
    try {

      const respuesta = await fetch(`${APIKEY_BACK}admin/eliminar/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await respuesta.json();
      //console.log(data);
      // Si hay error - Setear estado
      if (!data.ok) {

        setError(data.error);
        return data;

      };

      return data;

    } catch (error) {

      const errorAMostrar = {
        ok: false,
        error: [
          { mensaje: "Error al eliminar la experiencia" }
        ]
      };

      setError(errorAMostrar.error);
      return errorAMostrar;
    }
  };
  
  return (
    {
      eliminarExperiencia,
      error
    }
  )
}

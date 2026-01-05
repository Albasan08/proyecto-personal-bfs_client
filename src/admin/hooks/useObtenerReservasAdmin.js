// IMPORTACIONES DE TERCEROS
import React, { useEffect, useState } from 'react'

// IMPORTACIONES PROPIAS
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

export const useObtenerReservasAdmin = () => {

    const [reservas, setReservas] = useState([]);
    const [error, setError] = useState([]);

    const obtenerReservas = async () => {

        try {

            const respuesta = await fetch(`${APIKEY_BACK}admin/gestion-reserva`, {
                    credentials: "include",
                });
                
            const data = await respuesta.json();
            //console.log(data);
            // Si la data tiene algún error - Setear el estado de error
            if(!data.ok) {
                setError(data.error);
                return;
            };
            // Si todo va bien - Convertir en array para mapear
            setReservas(data.data);
            setError([]);

        } catch(error) {

            setError("Error al obtener las experiencias")

        };
        
    };

    useEffect(() => {
        obtenerReservas();
    }, []);

  return (
    {
        reservas,
        error
    }
  )
}

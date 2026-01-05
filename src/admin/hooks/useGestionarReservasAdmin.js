// IMPORTACIONES DE TERCEROS
import React, { useState } from 'react'

// IMPORTACIONES PROPIAS
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

export const useGestionarReservasAdmin = ({ idReserva, estadoInicial }) => {

    const [estado, setEstado] = useState(estadoInicial);
    const [error, setError] = useState([]);
    
    const estadoToggleBoton = async () => {

        try {

            const respuesta = await fetch(`${APIKEY_BACK}admin/gestion-reserva/${idReserva}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ estado_reserva: !estado }), // el estado contrario al que está
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

            setError("Error de conexión");

        };
    };

  return (
    {
        estado,
        error,
        estadoToggleBoton
    }
  )
}

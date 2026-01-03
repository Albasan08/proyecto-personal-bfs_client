// IMPORTACIONES DE TERCEROS
import { useEffect, useState } from "react"

// IMPORTACIONES PROPIAS
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

export const useObtenerInfoAdmin = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState([]);

    useEffect(() => {

        const obtenerInfoAdmin = async () => {

            try {

                const respuesta = await fetch(`${APIKEY_BACK}admin/info`, {
                    credentials: "include"
                });
                
                const data = await respuesta.json();
                //console.log(data);
                setData(data.data)
                setError([]);

            } catch {

                setError("Error, contacte con el administrador")

            };
        };

        obtenerInfoAdmin();

    }, [])

  return (
    {
        data,
        error
    }
  )
}
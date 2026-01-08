// IMPORTACIONES DE TERCEROS
import { useState } from "react";

export const useFetch = (url, method = "GET", body = null) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async (url, method, body) => {

        setLoading(true);

        try {

            const options = {
                method,
                credentials: "include"
            };
            // Si hay body y no es FormData (PUT, POST Admin) - String
            if (body && !(body instanceof FormData)) { // Verifica que body(variable) pertenece a la clase de formData
                
                options.headers = { "Content-Type": "application/json" };
                options.body = JSON.stringify(body);

            };
            // Si hay body y es formdata - No hacer nada
            if (body instanceof FormData) {
                
                options.body = body;

            };
            //console.log(options, "DESDE HOOK FETCHDATA");
            const respuesta = await fetch(`${url}`, options);
            // Si todo va bien - Data
            const data = await respuesta.json();
            //console.log(data, "DATA DESDE HOOK");
            setData(data);
            setError(null);
            setLoading(false);

        } catch (error) {

            setError(error);
            setData(null);
            setLoading(false);

        }
    };

    return (
        {
            data,
            error,
            loading,
            fetchData,
            setData
        }
    )
}

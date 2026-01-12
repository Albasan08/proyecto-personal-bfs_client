// IMPORTACIONES DE TERCEROS
import { useEffect } from 'react';

// IMPORTACIONES PROPIAS
import './GestorInfoCard.scss'
import { useFetch } from '../../hooks/useFetch';
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

/**
 * Componente que muestra la información del usuario con rol program
 * @returns Información del usuario con rol program
 */
export const GestorInfoCard = () => {
    // Desetructurar elementos que devuelve el hook de useFetch
    const { fetchData, data, error, loading } = useFetch();
    
    const url = `gestor/info/`
    useEffect(() => {
        fetchData(`${APIKEY_BACK}${url}`, "GET");
    }, []); // Recibir la información cuando se carga la página

    return (
        <>
            {error && (
                <div clasName="errores">
                    <p>{error}</p>
                </div>
            )}

            {loading && (
                <div className="loading">
                    <p>Cargando...</p>
                </div>
            )}
            
            {data && (
                <>
                    <header>
                        <h1>Bienvenido, {data.data.nombre_user}</h1>
                    </header>

                    <article className="gestor-card">
                        <div className="gestor-card-info">
                            <h2>Nombre y apellido</h2>
                            <p>{data.data.nombre_user} {data.data.apellido_user}</p>

                            <h2>Email</h2>
                            <p>{data.data.email_user}</p>

                            <h2>Provincia</h2>
                            <p>{data.data.provincia_user}</p>
                        </div>
                    </article>
                </>
            )}
        </>
    )
}
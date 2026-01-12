// IMPORTACIONES DE TERCEROS 
import { useEffect } from 'react';

// IMPORTACIONES PROPIAS
import { useFetch } from '../../hooks/useFetch';
import './AdminInfoCard.scss'
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

/**
 * Componente que obtiene toda la información del usuario con rol admin
 * @returns Información del usuario
 */
export const AdminInfoCard = () => {

    const { fetchData, data, error, loading } = useFetch();

    const url = "admin/info/"
    useEffect(() => {
        fetchData(`${APIKEY_BACK}${url}`, "GET");
    }, []);

    return (
        <>
            <article className="admin-card">
                {data && (
                    <>
                        <header>
                            <h1>Bienvenido, {data.data.nombre_user}</h1>
                        </header>

                        <div className="admin-card-info">
                            <h2>Nombre y apellido</h2>
                            <p>{data.data.nombre_user} {data.data.apellido_user}</p>
                            <h2>Email</h2>
                            <p>{data.data.email_user}</p>
                            <h2>Provincia</h2>
                            <p>{data.data.provincia_user}</p>
                        </div>
                    </>
                )}

            {loading && (
                <div className="loading">
                    <p>Cargando...</p>
                </div>)}

            {error && (
                <div>
                <p className="errores">{error}</p>
            </div>)}
            </article>
        </>
    )
}

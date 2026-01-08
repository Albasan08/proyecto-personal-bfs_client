// IMPORTACIONES PROPIAS
import { useObtenerInfoGestor } from '../hooks/useObtenerInfoGestor'
import './GestorInfoCard.scss'


export const GestorInfoCard = () => {

    const { data } = useObtenerInfoGestor();

    return (
        <>
            {data && (
                <>
                    <h1>Bienvenido, {data.nombre_user}</h1>

                    <article className="gestor-card">
                        <div className="gestor-card-info">
                            <h2>Nombre y apellido</h2>
                            <p>{data.nombre_user} {data.apellido_user}</p>

                            <h2>Email</h2>
                            <p>{data.email_user}</p>
                            <h2>Provincia</h2>
                            <p>{data.provincia_user}</p>
                        </div>
                    </article>
                </>
            )}
        </>
    )
}
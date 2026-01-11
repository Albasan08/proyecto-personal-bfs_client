// IMPORTACIONES DE TERCEROS
import { useEffect } from 'react';

// IMPORTACIONES PROPIAS
import { useFetch } from '../../hooks/useFetch';
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;
import './UserInfoCard.scss'

export const UserInfoCard = () => {

    const { fetchData, data, error, loading } = useFetch();

    const url = "user/info/"
    useEffect(() => {
        fetchData(`${APIKEY_BACK}${url}`, "GET");
    }, []);
    // Normalizar datos para mostrar en card
    const normalizarFecha = (fechaANormalizar) => {

        const fechaNueva = new Date(fechaANormalizar);
        return fechaNueva.toLocaleDateString("es-ES", { 
            day: "2-digit", 
            month: "2-digit", 
            year: "numeric" });

    };

    const normalizarHora = (horaANormalizar) => {

        return horaANormalizar.slice(0, 5); // "14:00:00" → "14:00"

    };

    const normalizarEstado = (estadoANormalizar) => { 
        
        return estadoANormalizar ? "Confirmada" : "Pendiente"; // Si es true - Confirmada, si es false - Pendiente
    
    };

  return (
    <>
            {error && (
                <p className="errores">{error}</p>
            )}

            {loading && (
                <div className="loading">
                    <p>Cargando...</p>
                </div>
            )}
            
            {data && ( 
                <> 
                    <section className="user-info">
                        <header> 
                            <h1>Bienvenido, {data.data.usuario.nombre_user}</h1> 
                        </header> 
                        
                        <article className="user-card"> 
                            <div className="user-card-info"> 
                                <h2>Mi información</h2> 
                                <h3>Nombre y apellido</h3> 
                                <p>{data.data.usuario.nombre_user} {data.data.usuario.apellido_user}</p> 

                                <h3>Email</h3> 
                                <p>{data.data.usuario.email_user}</p> 

                                <h3>Provincia</h3> 
                                <p>{data.data.usuario.provincia_user}</p> 
                            </div> 
                        </article> 
                        
                        <article className="user-reservas"> 
                            <h2>Mis reservas</h2> 
                                {data.data.reservas.length === 0 && ( 
                                    <p>No tienes reservas registradas.</p> 
                                )} 
                            
                            {data.data.reservas.length > 0 && ( 
                                <ul className="lista-reservas"> 
                                    {data.data.reservas.map((reserva, index) => ( 
                                        <li key={index} className="reserva-item"> 
                                            <p><strong>Experiencia:</strong> {reserva.nombre_expe}</p> 
                                            <p><strong>Fecha:</strong> {normalizarFecha(reserva.fecha_reserva)}</p> 
                                            <p><strong>Hora:</strong> {normalizarHora(reserva.horario_reserva)}</p> 
                                            <p><strong>Personas:</strong> {reserva.personas_reserva}</p> 
                                            <p><strong>Estado:</strong> {normalizarEstado(reserva.estado_reserva)}</p> 
                                        </li> ))} 
                                </ul> )} 
                        </article> 
                    </section>     
                </> 
            )}
        </>
  )
}

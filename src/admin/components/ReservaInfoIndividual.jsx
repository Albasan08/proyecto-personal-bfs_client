// IMPORTACIONES PROPIAS
import { BotonReserva } from './BotonReserva'
import './ReservaInfoIndividual.scss'

export const ReservaInfoIndividual = ({ reserva }) => {
    return (
        <article className="card-info">
            <p><strong>Reserva id: </strong>{reserva.id_reserva}</p>
            <p><strong>Email: </strong>{reserva.email_user}</p>
            <p><strong>Experiencia id: </strong>{reserva.id_experience}</p>
            <p><strong>Fecha: </strong>{reserva.fecha_reserva}</p>
            <p><strong>Hora: </strong>{reserva.horario_reserva}</p>
            <p><strong>Personas: </strong>{reserva.personas_reserva}</p>
            <p><strong>Estado: </strong>{reserva.estado_reserva ? "Confirmada" : "Pendiente"}</p>
            
            <BotonReserva idReserva={reserva.id_reserva} estadoInicial={reserva.estado_reserva}/>
        </article>
    )
}

// IMPORTACIONES PROPIAS
import { ReservaInfoIndividual } from "./ReservaInfoIndividual"
import './ReservasInfo.scss'

export const ReservasInfo = ({ reservas, error }) => {

  return (
    <>
    {/*Gestión de errores*/}
    {error && (
        <p>{error}</p>
    )}

    {/*Lista reservas*/}
    <section className="grid-reserva">
        {reservas.map((reserva) => {
            return (
            <ReservaInfoIndividual key={reserva.id_reserva} reserva={reserva}/>
        )})}
    </section>
    </>
  )
}

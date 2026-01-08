// IMPORTACIONES PROPIAS
import { ReservaInfoIndividual } from "./ReservaInfoIndividual"
import './ReservasInfo.scss'

export const ReservasInfo = ({ reservas, error }) => {

  return (
    <>
      {error && (
        <div>
          <p className="errores">{error}</p>
        </div>
      )}
      {/*Lista reservas*/}
      <section className="grid-reserva">
        {reservas.map((reserva) => {
          return (
            <ReservaInfoIndividual key={reserva.id_reserva} reserva={reserva} />
          )
        })}
      </section>
    </>
  )
}

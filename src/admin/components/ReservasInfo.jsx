// IMPORTACIONES PROPIAS
import { ReservaInfoIndividual } from "./ReservaInfoIndividual"
import './ReservasInfo.scss'

/**
 * Componente que muestra el grid de las reservas
 * @param {Object} reservas Objeto con toda la información de las reservas
 * @param {Object} error Error desde la data de fetch
 * @returns Grid reservas
 */
export const ReservasInfo = ({ reservas, error }) => {

  return (
    <>
      {error && (
        <div className="errores">
          <p>{error}</p>
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

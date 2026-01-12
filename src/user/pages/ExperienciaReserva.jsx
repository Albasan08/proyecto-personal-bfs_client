// IMPORTACIONES PROPIAS
import { Footer } from "../../components/Footer"
import { NavBar } from "../../components/NavBar"
import { InfoReservaTemporal } from "../components/InfoReservaTemporal"

/**
 * Página que muestra la información de la reserva antes de confirmarla
 * @returns Información de la reserva temporal
 */
export const ExperienciaReserva = () => {
  return (
    <>
    <NavBar />
    <main>
      <InfoReservaTemporal />
    </main>
    <Footer />
    </>
  )
}

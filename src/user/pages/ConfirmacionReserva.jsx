// IMPORTACIONES PROPIAS
import { Footer } from '../../components/Footer'
import { NavBar } from '../../components/NavBar'
import { ReservaConfirmacion } from '../components/ReservaConfirmacion'

/**
 * Página que muestra el mensaje final después de confirmar la reserva
 * @returns Mensaje de confirmación
 */
export const ConfirmacionReserva = () => {
  return (
    <>
    <NavBar />
    <main>
      <ReservaConfirmacion />
    </main>
    <Footer />
    </>
  )
}

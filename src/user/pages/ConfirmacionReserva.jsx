// IMPORTACIONES PROPIAS
import { Footer } from '../../components/Footer'
import { NavBar } from '../../components/NavBar'
import { ReservaConfirmacion } from '../components/ReservaConfirmacion'

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

// IMPORTACIONES PROPIAS
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { GestorInfoCard } from '../components/GestorInfoCard'

/**
 * Página que muestra toda la información del usuario con rol program
 * @returns Componente donde se muestra toda la información dle usuario program
 */
export const GestorInfo = () => {
  return (
    <>
    <NavBar />
    <main>
      <GestorInfoCard />
    </main>
    <Footer />
    </>
  )
}

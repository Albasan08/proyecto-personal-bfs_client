// IMPORTACIONES PROPIAS
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { AdminInfoCard } from '../components/AdminInfoCard'
import '../components/AdminInfoCard.scss'

/**
 * Página que muestra la información del usuario
 * @returns Card con información del usuario con rol admin
 */
export const AdminInfo = () => {
  return (
    <>
      <NavBar />
      <main>
        <section className="adminInfoCard">
          <AdminInfoCard />
        </section>
      </main>
      <Footer />
    </>
  )
}

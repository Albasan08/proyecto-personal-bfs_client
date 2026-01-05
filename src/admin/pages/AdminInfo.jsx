// IMPORTACIONES PROPIAS
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { AdminInfoCard } from '../components/AdminInfoCard'
import '../components/AdminInfoCard.scss'

export const AdminInfo = () => {

  return (
    <>
      <NavBar />
      <main>
        <section>
          <AdminInfoCard />
        </section>
      </main>
      <Footer />
    </>
  )
}

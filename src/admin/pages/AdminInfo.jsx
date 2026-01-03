// IMPORTACIONES PROPIAS
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { AdminInfoCard } from '../components/AdminInfoCard'
import '../components/AdminInfoCard.scss'

export const AdminInfo = () => {

  return (
    <>
    <NavBar />
    <section className='pagina'>
      <AdminInfoCard />
    </section>
    <Footer />
    </>
  )
}

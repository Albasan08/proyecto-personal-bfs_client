// IMPORTACIONES PROPIAS
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { GestorInfoCard } from '../components/GestorInfoCard'

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

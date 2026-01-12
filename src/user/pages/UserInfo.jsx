// IMPORTACIONES PROPIAS
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { UserInfoCard } from '../components/UserInfoCard'

/**
 * Página de info usuario con rol user
 * @returns Información completa del usuario
 */
export const UserInfo = () => {
  return (
    <>
    <NavBar />
    <main>
      <UserInfoCard />
    </main>
    <Footer />
    </>
  )
}

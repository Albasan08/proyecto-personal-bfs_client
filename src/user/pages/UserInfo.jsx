// IMPORTACIONES PROPIAS
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { UserInfoCard } from '../components/UserInfoCard'

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

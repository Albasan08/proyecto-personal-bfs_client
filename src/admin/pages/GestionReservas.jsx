// IMPORTACIONES PROPIAS
import { Footer } from '../../components/Footer'
import { NavBar } from '../../components/NavBar'
import { ReservasInfo } from '../components/ReservasInfo';
import { useObtenerReservasAdmin } from '../hooks/useObtenerReservasAdmin';

export const GestionReservas = () => {

  const { reservas, error } = useObtenerReservasAdmin();
  
  return (
    <>
    <NavBar />
    <main>
      <h1>Gestión de reservas</h1>
      <ReservasInfo 
        error={error}
        reservas={reservas}/>
    </main>
    <Footer />
    </>
  )
}

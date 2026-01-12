// IMPORTACIONES DE TERCEROS 
import { useEffect } from 'react';

// IMPORTACIONES PROPIAS
import { Footer } from '../../components/Footer'
import { NavBar } from '../../components/NavBar'
import { ReservasInfo } from '../components/ReservasInfo';
import { useFetch } from '../../hooks/useFetch';
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

/**
 * Página que gestiona la información de la reserva
 * @returns Información de la reserva
 */
export const GestionReservas = () => {

  const { fetchData, data, error, loading } = useFetch();
  
  const url = "admin/gestion-reserva"
  useEffect(() => {
    fetchData(`${APIKEY_BACK}${url}`, "GET");
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <header>
          <h1>Gestión de reservas</h1>
        </header>

        {loading && (
          <div className="loading">
            <p>Cargando...</p>
          </div>
        )}

        {data && (
          <ReservasInfo
          error={error}
          reservas={data.data} />
        )}

      </main>
      <Footer />
    </>
  )
}

// IMPORTACIONES DE TERCEROS
import { useEffect } from "react"
import { useParams } from "react-router-dom";

// IMPORTACIONES PROPIAS
import { NavBar } from "../../src/components/NavBar"
import { CalendarioReservasExperienciaId } from "../components/CalendarioReservasExperienciaId"
import { Footer } from "../components/Footer"
import { InfoDetalladaExperienciaId } from "../components/InfoDetalladaExperienciaId"
import { useFetch } from "../hooks/useFetch"
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

/**
 * Página donde se muestra toda la información de la experiencia
 * @returns Componente donde se muestra la información de la experiencia y calendario para reservar
 */
export const DetalleExperiencia = () => {
  // Desestructurar los componentes de los
  const { fetchData, data, error, loading } = useFetch();

  const { id } = useParams();

  const url = `experiencias/${id}`
  useEffect(() => {
    fetchData(`${APIKEY_BACK}${url}`, "GET");
  }, []);

  return (
    <>
      <NavBar />
      <main>

        {error && (
          <div className="errores">
            <p>{error}</p>
          </div>
        )}

        {loading && (
          <div className="loading">
            <p>Cargando...</p>
          </div>
        )}

        {data && (
          <>
            <InfoDetalladaExperienciaId experiencia={data.data.experiencia} />
            <CalendarioReservasExperienciaId programacion={data.data.programacion} experiencia={data.data.experiencia}/>
          </>
        )}

      </main>
      <Footer />
    </>
  )
}
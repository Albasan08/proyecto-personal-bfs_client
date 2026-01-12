// IMPORTACIONES DE TERCEROS
import { useParams } from "react-router-dom";
import { useEffect } from "react";

// IMPORTACIONES PROPIAS
import { NavBar } from '../../components/NavBar'
import { FormularioEditarExperiencia } from '../components/FormularioEditarExperiencia'
import { Footer } from "../../components/Footer";
import { useFetch } from "../../hooks/useFetch";
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

/**
 * Página que gestiona la edición de experiencias
 * @returns Formulario de editar experiencia
 */
export const EditarExperiencia = () => {

  const { id } = useParams(); 

  const { fetchData, data, error, loading } = useFetch();

  const url = `admin/editar/${id}`
  useEffect(() => {
    fetchData(`${APIKEY_BACK}${url}`, "GET");
   }, []);

  return (
    <>
    <NavBar />
    <main>
      {loading && (
          <div className="loading">
            <p>Cargando...</p>
          </div>
      )}

      {error && (
        <div>
          <p className="errores">{error}</p>
        </div>
      )}

      {data && <FormularioEditarExperiencia experiencia={data.data} />} {/* Para que el formulario no cargue antes y de null */}
    </main>
    <Footer />
    </>
  )
}
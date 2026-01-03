// IMPORTACIONES DE TERCEROS
import { useParams } from "react-router-dom";

// IMPORTACIONES PROPIAS
import { NavBar } from '../../components/NavBar'
import { FormularioEditarExperiencia } from '../components/FormularioEditarExperiencia'
import { useObtenerExperienciaIdAdmin } from '../hooks/useObtenerExperienciaIdAdmin';
import { Footer } from "../../components/Footer";

export const EditarExperiencia = () => {

  const { id } = useParams(); 
  const { experiencia, error } = useObtenerExperienciaIdAdmin(id);

  return (
    <>
    <NavBar />
    {experiencia && <FormularioEditarExperiencia experiencia={experiencia} />} {/* Para que el formulario no cargue antes y de null */}
    <Footer />
    </>
  )
}

// IMPORTACIONES DE TERCEROS
import { useNavigate } from "react-router-dom";

/**
 * Componente que redirige a la vista detalle de la experiencia por su ID
 * @param {Number} id ID de la experiencia a mostrar
 * @returns Vista detalle de la experiencia
 */
export const BotoneraVerMasExperiencia = ({ id }) => {

  const navigate = useNavigate();

  return (
    <>
    <button className="btn-principal btn-userVerMas" onClick={() => navigate(`/experiencias/${id}`)}>Ver más</button>
    </>
  )
}

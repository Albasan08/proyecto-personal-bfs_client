// IMPORTACIONES DE TERCEROS
import { useNavigate } from "react-router-dom";

/**
 * Botón para editar la experiencia en la card del grid inicial
 * @param {Number} id ID de la experiencia
 * @returns Navigate formulario editar experiencia
 */
export const BotoneraEditarExperiencia = ({ id }) => {

  const navigate = useNavigate();
  
  return (
    <>
    <button className="btn-principal" onClick={() => navigate(`/admin/editar/${id}`)}>Editar</button>
    </>
  )
}
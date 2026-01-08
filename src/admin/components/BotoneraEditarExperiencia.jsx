// IMPORTACIONES DE TERCEROS
import { useNavigate } from "react-router-dom";

export const BotoneraEditarExperiencia = ({ id }) => {

  const navigate = useNavigate();
  
  return (
    <>
    <button className="btn-principal" onClick={() => navigate(`/admin/editar/${id}`)}>Editar</button>
    </>
  )
}
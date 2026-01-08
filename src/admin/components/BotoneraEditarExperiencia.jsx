// IMPORTACIONES DE TERCEROS
import { useNavigate } from "react-router-dom";

// IMPORTACIONES PROPIAS
import './BotoneraEditarExperiencia.scss'

export const BotoneraEditarExperiencia = ({ id }) => {

  const navigate = useNavigate();
  
  return (
    <>
    <button className="btn-principal" onClick={() => navigate(`/admin/editar/${id}`)}>Editar</button>
    </>
  )
}
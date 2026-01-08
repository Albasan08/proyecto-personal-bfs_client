// IMPORTACIONES DE TERCEROS
import { useNavigate } from "react-router-dom";

// IMPORTACIONES PROPIAS
import './BotoneraProgramarExperiencia.scss'

export const BotoneraProgramarExperiencia = ({ id }) => {
  
  const navigate = useNavigate();

  return (
    <>
    <button className="btn-principal" onClick={() => navigate(`/gestor/programar/${id}`)}>Programar</button>
    </>
  )
}

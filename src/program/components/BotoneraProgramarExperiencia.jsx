// IMPORTACIONES DE TERCEROS
import { useNavigate } from "react-router-dom";

// IMPORTACIONES PROPIAS
import './BotoneraProgramarExperiencia.scss'

/**
 * Componente que redirige a la página de programar del usuario con rol program para programar la experiencia
 * @param {Number} id Número de la experiencia del párametro del enlace  
 * @returns Redirigir a la página de programar experiencia por ID
 */
export const BotoneraProgramarExperiencia = ({ id }) => {
  
  const navigate = useNavigate();

  return (
    <>
    <button className="btn-principal" onClick={() => navigate(`/gestor/programar/${id}`)}>Programar</button>
    </>
  )
}

// IMPORTACIONES DE TERCEROS
import { useNavigate } from "react-router-dom";

export const BotonProgramarExperiencia = () => {

  const navigate = useNavigate();

  return (
    <>
    <div>
        <button className="btn-principal">Programar</button>
        <button className="btn-secundario" onClick={() => navigate(`/experiencias`)}>Volver</button>
    </div>
    </>
  )
}

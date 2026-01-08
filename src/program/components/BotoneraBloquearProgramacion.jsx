// IMPORTACIONES DE TERCEROS
import { useNavigate } from "react-router-dom";

export const BotoneraBloquearProgramacion = () => {

  const navigate = useNavigate();

  return (
    <>
    <div>
      <button className="btn-principal">Bloquear</button>
      <button className="btn-secundario" onClick={() => navigate(`/experiencias`)}>Volver</button>
    </div>
    </>
  )
}

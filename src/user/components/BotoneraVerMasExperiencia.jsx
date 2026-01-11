// IMPORTACIONES DE TERCEROS
import { useNavigate } from "react-router-dom";

export const BotoneraVerMasExperiencia = ({ id }) => {

    const navigate = useNavigate();

  return (
    <>
    <button className="btn-principal btn-userVerMas" onClick={() => navigate(`/experiencias/${id}`)}>Ver más</button>
    </>
  )
}

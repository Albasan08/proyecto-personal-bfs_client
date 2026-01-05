// IMPORTACIONES PROPIAS
import { useGestionarReservasAdmin } from '../hooks/useGestionarReservasAdmin'
import './BotonReserva.scss'

export const BotonReserva = ({ idReserva, estadoInicial }) => {

    const { estado, error, estadoToggleBoton } = useGestionarReservasAdmin({ idReserva, estadoInicial });

  return (
    <>
    <button className={`btn-toggle ${estado ? "confirmado" : "pendiente"}`}
        onClick={estadoToggleBoton}>{estado}
        <span>
        {estado ? "Confirmada" : "Pendiente"}</span>
    </button>
    </>
  )
}

// IMPORTACIONES DE TERCEROS
import { useNavigate } from "react-router-dom"
import './ReservaConfirmacion.scss'

/**
 * Componente que muestra la confirmación de la reserva
 * @returns Redirige al usuario a la página de inicio (/experiencias)
 */
export const  ReservaConfirmacion = () => {

  const navigate = useNavigate();

  return (
    <>
    <section className="confirmacion-reserva">
      <h1>¡Gracias por tu reserva!</h1>

      <h2>En breve nuestro personal se podrá en contacto contigo para gestionar la reserva</h2>

      <button type="button" className="btn-principal" onClick={() => navigate(`/experiencias`)}>Volver al inicio</button>

    </section>
    </>
  )
}

// IMPORTACIONES DE TERCEROS
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch"

// IMPORTACIONES PROPIAS
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

/**
 * Componente que recoge la información de la reserva para confirmar
 * @returns Información de la reserva temporal antes de confirmar
 */
export const InfoReservaTemporal = () => {

  const { state: reserva } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const { fetchData } = useFetch();

  const confirmarReserva = (event) => {

    event.preventDefault();

    const body = {
      email_user: reserva.email_user,
      id_experience: reserva.id_experience,
      fecha_reserva: reserva.fecha_reserva,
      horario_reserva: reserva.horario_reserva,
      personas_reserva: reserva.personas_reserva,
      estado_reserva: reserva.estado_reserva
    };

    const url = `experiencias/${id}/reserva`
    // Conexión con el back
    fetchData(`${APIKEY_BACK}${url}`, "POST", body);

    navigate("/experiencias/confirmacion");

  };

  return (
    <>
      <section>
        <h1>Confirmar reserva</h1>

        <p><strong>Experiencia:</strong> {reserva.nombre_experiencia}</p>
        <p><strong>Fecha:</strong> {reserva.fecha_reserva}</p>
        <p><strong>Hora:</strong> {reserva.horario_reserva}</p>
        <p><strong>Personas:</strong> {reserva.personas_reserva}</p>

        <button className="btn-principal" onClick={confirmarReserva}>Confirmar reserva</button>
        <button className="btn-secundario" onClick={() => navigate(`/experiencias/${id}`)}>Volver a la experiencia</button>
      </section>
    </>
  )
}

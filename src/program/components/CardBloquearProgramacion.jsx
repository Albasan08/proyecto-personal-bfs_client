// IMPORTACIONES DE TERCEROS
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

// IMPORTACIONES PROPIAS
import { CalendarioFechas } from '../components/CalendarioFechas'
import './CardBloquearProgramacion.scss'


export const CardBloquearProgramacion = () => {

  const [fechasBloqueadas, setFechasBloqueadas] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault();
    // Formatear fechas - DayPicker devuelve un objeto Date //
    // toIsoString - Convierte a en un formato ISO ("2025-02-10T00:00:00.000Z") / Split T - Divide la primera parte (Fecha / Hora) / [0] - Solo coge la primera parte (fecha)
    const fechasFormateadas = fechasBloqueadas.map(fechaBloqueada => fechaBloqueada.toISOString().split("T")[0]);
    // Recoger info de inputs y construir objeto a enviar al back
    const body = {
      fecha_bloqueada: fechasFormateadas,
      razon_bloqueo: event.target.razon_bloqueo
    }
    //console.log(body);

  };

  return (
    <>
    <h1>Página en mantenimiento</h1>
    {/* }
      <section className="cardBloquear">
        <header>
          <h1>Gestiona la programación bloqueada</h1>
        </header>

        <form encType="multipart/form-data" onSubmit={handleSubmit}>
        {/* Pendiente select con el título de las experiencias y calendario bloquear
          

          <button type="submit" className="btn-principal">Bloquear</button>
          <button type="button" className="btn-secundario" onClick={() => navigate(`/experiencias`)}>Volver</button>
        </form>
      </section> */} 
    </>
  )
}

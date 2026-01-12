// IMPORTACIONES DE TERCEROS
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

// IMPORTACIONES PROPIAS
import { useFetch } from "../../hooks/useFetch"
import { CalendarioFechas } from "./CalendarioFechas"
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

/**
 * Componente que permite programar una experiencia
 * @returns Envía al back la información de la experiencia programada
 */
export const CardProgramarExperiencia = () => {
  // Estados de fechas y rangos - Un array porque sino el map da error
  const [fechas, setFechas] = useState([]);
  const [rangos, setRangos] = useState([]);
  // Desetructurar las propiedades del hook fetch
  const { fetchData, data, error, loading } = useFetch();

  const { id } = useParams();

  const navigate = useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault();
    //Normalizar para enviar a Back
    const fechasNormalizadas = fechas.map(fecha => fecha.toISOString().split("T")[0]);
    const rangosNormalizados = rangos.map(rango => ({

      inicio: rango.inicio.toLocaleTimeString([], { 
        hour: "2-digit", 
        minute: "2-digit" 
        }),
        fin: rango.fin.toLocaleTimeString([], { 
          hour: "2-digit", 
          minute: "2-digit" })
      
    }));
    // Body para enviar a back
    const body = {
      fechas: fechasNormalizadas,
      rangos: rangosNormalizados
    }

    const url = `gestor/programar/${id}`
    fetchData(`${APIKEY_BACK}${url}`, "PUT", body);

  };

  return (
    <>
      <header>
        <h1>Programa la experiencia</h1>
      </header>

      <article>
        <form encType="application/x-www-form-urlencoded" onSubmit={handleSubmit}>
          <CalendarioFechas onChangeFechas={setFechas} onChangeRangos={setRangos} />

          <button type="submit" className="btn-principal">Programar</button>
          <button type="button" className="btn-secundario" onClick={() => navigate(`/experiencias`)}>Volver</button>
        </form>
      </article>

      {error && (
        <div className="errores">
          <p>{error}</p>
        </div>
      )}

      {loading && (
        <div className="loading">
          <p>Cargando...</p>
        </div>
      )}

      {data && (
        <div>
          <p className="oks">{data.mensaje}</p>
        </div>
      )}
    </>
  )
}

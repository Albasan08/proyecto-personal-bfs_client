// IMPORTACIONES DE TERCEROS
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

// IMPORTACIONES PROPIAS
import { useFetch } from "../../hooks/useFetch"
import { CalendarioFechas } from "./CalendarioFechas"
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

export const CardProgramarExperiencia = () => {

  const [fechas, setFechas] = useState([]);
  const [rangos, setRangos] = useState([]);

  const { fetchData, data, error, loading } = useFetch();

  const { id } = useParams();

  const navigate = useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault();
    //Normalizar para enviar a Back
    const fechasNormalizadas = fechas.map(fecha => fecha.toISOString().split("T")[0]);
    const rangosNormalizados = rangos.map(rango => ({
      inicio: rango.inicio.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      fin: rango.fin.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }));

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
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <CalendarioFechas onChangeFechas={setFechas} onChangeRangos={setRangos} />

          <button type="submit" className="btn-principal">Programar</button>
          <button type="button" className="btn-secundario" onClick={() => navigate(`/experiencias`)}>Volver</button>
        </form>
      </article>

      {error && (
        <p className="errores">{error}</p>
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

// IMPORTACIONES DE TERCEROS
import { useParams } from "react-router-dom"
import { useEffect } from "react"

// IMPORTACIONES PROPIAS
import { CalendarioFechas } from "./CalendarioFechas"
import { InfoBasicaExperiencia } from "./InfoBasicaExperiencia"
import { SelectorExperiencias1h } from "./SelectorExperiencias1h"
import { SelectorExperiencias2h } from "./SelectorExperiencias2h"
import { SelectorExperiencias15h } from "./SelectorExperiencias15h"
import { BotonProgramarExperiencia } from "./BotonProgramarExperiencia"
import { useFetch } from "../../hooks/useFetch"
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

export const CardProgramarExperiencia = () => {

  const { fetchData, data, error, loading } = useFetch();

  const { id } = useParams();

  const url = `gestor/programar/${id}`
  useEffect(() => {
    fetchData(`${APIKEY_BACK}${url}`, "GET");
  }, []);
  console.log(data);

  return (
    <>
      <header>
        <h1>Programa la experiencia</h1>
      </header>

      {error && (
        <p className="errores">{error}</p>
      )}

      {loading && (
        <div className="loading">
          <p>Cargando...</p>
        </div>
      )}

      {data && data.data && (
      <InfoBasicaExperiencia experiencia={data.data} />
      )}

      <CalendarioFechas />

      {/*Horarios en función de la duración, se pone ? porque sino da null (tarda en hacer traer la info de la duración*/}
      {data?.data?.duracion_expe == 60 && (
        <SelectorExperiencias1h />
      )}
      {data?.data?.duracion_expe == 90 && (
        <SelectorExperiencias15h />
      )}
      {data?.data?.duracion_expe == 120 && (
        <SelectorExperiencias2h />
      )}

      < BotonProgramarExperiencia />
    </>
  )
}

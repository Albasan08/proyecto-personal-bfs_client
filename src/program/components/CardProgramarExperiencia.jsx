// IMPORTACIONES DE TERCEROS
import { useParams } from "react-router-dom"

// IMPORTACIONES PROPIAS
import { CalendarioFechas } from "./CalendarioFechas"
import { InfoBasicaExperiencia } from "./InfoBasicaExperiencia"
import { useObtenerInfoExperiencia } from "../hooks/useObtenerInfoExperiencia"
import { SelectorExperiencias1h } from "./SelectorExperiencias1h"
import { SelectorExperiencias2h } from "./SelectorExperiencias2h"
import { SelectorExperiencias15h } from "./SelectorExperiencias15h"
import { BotonProgramarExperiencia } from "./BotonProgramarExperiencia"

export const CardProgramarExperiencia = () => {

  const { id } = useParams();
  const { error, experiencia } = useObtenerInfoExperiencia(id);
  //console.log(experiencia);
  return (
    <>
    <h1>Programa la experiencia</h1>
    <InfoBasicaExperiencia id={id}/>
    <CalendarioFechas />

    {/*Horarios en función de la duración, se pone ? porque sino da null (tarda en hacer traer la info de la duración*/}
    {experiencia?.duracion_expe == 60 && (
      <SelectorExperiencias1h />
    )}
    {experiencia?.duracion_expe == 90 && (
      <SelectorExperiencias15h />
    )}
    {experiencia?.duracion_expe == 120 && (
      <SelectorExperiencias2h />
    )}
    
    < BotonProgramarExperiencia />
    </>
  )
}

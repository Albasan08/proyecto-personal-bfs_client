// IMPORTACIONES DE TERCEROS

// IMPORTACIONES PROPIAS
import { CardExperiencia } from "./CardExperiencia"
import './GridCard.scss'

export const GridCard = ( { experiencias }) => {

  return (
    <>
    <section className="grid-experiencias">
        {experiencias.map((experiencia) => (
            <CardExperiencia key={experiencia.id_expe} experiencia={experiencia}/>
        ))}
    </section>
    </>
  )
}

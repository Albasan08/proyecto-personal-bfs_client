// IMPORTACIONES PROPIAS
import { CardExperiencia } from "./CardExperiencia"
import './GridCard.scss'

/**
 * Componente con todas las experiencias en formato grid
 * @param {Object} experiencias Objeto con todas las experiencias de la BBDD
 * @returns Una card por cada experiencia
 */
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

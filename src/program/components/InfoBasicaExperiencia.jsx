// IMPORTACIONES DE TERCEROS
import './InfoBasicaExperiencia.scss'

// IMPORTACIONES PROPIAS
import { useObtenerInfoExperiencia } from "../hooks/useObtenerInfoExperiencia"

export const InfoBasicaExperiencia = ({ id }) => {

    const { experiencia, error } = useObtenerInfoExperiencia(id);

    return (
        <>
            <article>
                {experiencia && (
                    <>
                        <h2>{experiencia.nombre_expe}</h2>
                        <div dangerouslySetInnerHTML={{ __html: experiencia.desc_corta_expe }} /> {/* Para convertir las etiquetas de html*/}
                        <p>{experiencia.duracion_expe} mins</p>
                    </>
                )}

                {/*Gestión de errores*/}
                {error && (
                    <p className="errores">{error}</p>
                )}
            </article>
        </>
    )
}

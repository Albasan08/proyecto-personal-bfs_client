// IMPORTACIONES DE TERCEROS
import { useEffect } from 'react';

// IMPORTACIONES PROPIAS
import './InfoBasicaExperiencia.scss'


export const InfoBasicaExperiencia = ({ experiencia }) => {
    return (
        <>
            {experiencia && (
                <article>
                    <h2>{experiencia.nombre_expe}</h2>
                    <div dangerouslySetInnerHTML={{ __html: experiencia.desc_corta_expe }} /> {/* Para convertir las etiquetas de html*/}
                    <p>{experiencia.duracion_expe} mins</p>
                </article>
            )}
        </>
    )
}

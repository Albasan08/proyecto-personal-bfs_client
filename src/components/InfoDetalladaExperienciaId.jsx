// IMPORTACIONES PROPIAS
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;
import './InfoDetalladaExperienciaId.scss'

/**
 * Componente que muestra toda la información de la experiencia por ID
 * @param {Object} experiencia Objeto con toda la información de la experiencia
 * @returns 
 */
export const InfoDetalladaExperienciaId = ({ experiencia }) => {
    return (
        <>
            <section>
                {experiencia && (
                    <>
                        <div className="imagen-experiencia-id">
                            <img
                                src={`${APIKEY_BACK}uploads/experiencias/${experiencia.imagen_expe}`}
                                alt={`experiencia de ${experiencia.nombre_expe}`}>
                            </img>
                        </div>

                        <div>
                            <h1>{experiencia.nombre_expe}</h1>
                            {/*Para convertir a etiquetas html otra vez */}
                            <p
                                dangerouslySetInnerHTML={{ __html: experiencia.desc_larga_expe }}
                            />
                            <div className="precio-duracion">
                                <p>{experiencia.duracion_expe} min</p>
                                <p>{experiencia.precio_expe} €</p>
                            </div>
                        </div>
                    </>
                )}
            </section>
        </>
    )
}
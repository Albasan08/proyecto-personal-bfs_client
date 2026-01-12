// IMPORTACIONES DE TERCEROS
import Cookies from "js-cookie";

// IMPORTACIONES PROPIAS
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;
import { BotoneraEditarExperiencia } from '../admin/components/BotoneraEditarExperiencia';
import './CardExpe.scss'
import { BotoneraProgramarExperiencia } from "../program/components/BotoneraProgramarExperiencia";
import { BotoneraVerMasExperiencia } from "../user/components/BotoneraVerMasExperiencia";

/**
 * Componente que muestra la información de la experiencia
 * @param {Object} experiencia Objeto con toda la información de la experiencia
 * @returns Toda la información de la experiencia
 */
export const CardExperiencia = ({ experiencia }) => {
    // Para pintar los botones en función del rol
    const rol = Cookies.get("rol");

  return (
    <>
    <article className="card-expe">
        <div>
            <img 
                src={`${APIKEY_BACK}uploads/experiencias/${experiencia.imagen_expe}`}
                alt={`experiencia de ${experiencia.nombre_expe}`}>
            </img>
        </div>

        <div>
            <h2>{experiencia.nombre_expe}</h2>
            {/*Para convertir a etiquetas html otra vez */}
            <p 
                dangerouslySetInnerHTML={{ __html: experiencia.desc_corta_expe }}
            />
            <div className="precio-duracion">
                <p>{experiencia.duracion_expe} min</p>
                <p>{experiencia.precio_expe} €</p>
            </div>
        </div>

        {/*Botonera admin */}
        {rol === "admin" && (
            <div className="btn-editar">
                <BotoneraEditarExperiencia id={experiencia.id_expe} />
            </div>
        )}

        {/*Botonera program */}
        {rol === "program" && (
            <div className="btn-programar">
                <BotoneraProgramarExperiencia id={experiencia.id_expe} />
            </div>
        )}

        {/*Botonera user o usuario no registrado*/}
        {(!rol || rol === "user") && ( 
            <div className="btn-verMas"> 
                <BotoneraVerMasExperiencia id={experiencia.id_expe} /> 
            </div> 
        )}
    </article>
    </>
  )
}

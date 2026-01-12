// IMPORTACIONES DE TERCEROS
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// IMPORTACIONES PROPIAS
import { EditorDescripcion } from "./EditorDescripcion";
import { PopUpEliminarExperiencia } from "./PopUpEliminarExperiencia";
import { useFetch } from "../../hooks/useFetch";
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

/**
 * Componente que gestiona la edición de la experiencia
 * @param {Object} experiencia 
 * @returns Popup para eliminar o acción de editar experiencia
 */
export const FormularioEditarExperiencia = ({ experiencia }) => {

    const { fetchData, data, error, loading, setData } = useFetch();

    const [mostrarPopup, setMostrarPopup] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();
    
    const editorCorto = useEditor({
        extensions: [StarterKit, TextStyle],
        content: experiencia?.desc_corta_expe || "" // Si no no carga el editor
    });

    const editorLargo = useEditor({
        extensions: [StarterKit, TextStyle],
        content: experiencia?.desc_larga_expe || ""
    });
    // Actualizar los editores de TipTap
    useEffect(() => {
        if (experiencia && editorCorto) {
            editorCorto.commands.setContent(experiencia.desc_corta_expe);
        }
    }, [experiencia, editorCorto]);

    useEffect(() => {
        if (experiencia && editorLargo) {
            editorLargo.commands.setContent(experiencia.desc_larga_expe);
        }
    }, [experiencia, editorLargo]);
    // Para navegar directamente a experiencias cuando se elimine
    useEffect(() => { 
        if (data?.ok === true && data?.mensaje === "Experiencia eliminada correctamente") { 
            
            navigate("/experiencias"); } 
        
        }, [data, navigate]);

    const handleFormularioInputs = async (event) => {

        event.preventDefault();
        // Los inputs normales
        const formData = new FormData(event.target);
        // Los editores TipTap
        formData.append("desc_corta_expe", editorCorto.getHTML());
        formData.append("desc_larga_expe", editorLargo.getHTML());
        // La imagen
        const nuevaImagen = event.target.imagen_expe.files[0];
        // Si no hay imagen nueva - No enviar
        if (!nuevaImagen) {
            formData.delete("imagen_expe");
        };

        const url = `admin/editar/${id}`
        // Conexión con el back
        fetchData(`${APIKEY_BACK}${url}`, "PUT", formData);
        // Borrar mensajes
        setTimeout(() => {
            setData(prev => prev ? { ...prev, mensaje: "" } : null);
        }, 4000);
    }

    return (
        <>
            <section>
                <header>
                    <h1>Editar experiencia</h1>
                    <h2>Cambia la experiencia para tus clientes</h2>
                </header>

                <article>
                    <form className="formulario-auth flex-container" encType="multipart/form-data" onSubmit={handleFormularioInputs}>
                        <label>Nombre:</label>
                        <input type="text" id="nombre_expe" name="nombre_expe" defaultValue={experiencia.nombre_expe}></input>

                        <label>Descripción corta:</label>
                        <EditorDescripcion editor={editorCorto} />

                        <label>Descripción larga:</label>
                        <EditorDescripcion editor={editorLargo} />

                        <label>Imagen:</label>
                        <p>{experiencia.imagen_expe}</p>
                        <input type="file" accept="image/*" id="imagen_expe" name="imagen_expe" placeholder="Sube aquí tu imagen"></input>

                        <label>Duración:</label>
                        <input type="number" id="duracion_expe" name="duracion_expe" defaultValue={experiencia.duracion_expe}></input>

                        <label>Precio:</label>
                        <input type="number" id="precio_expe" name="precio_expe" defaultValue={experiencia.precio_expe}></input>

                        <label>Máximo de personas:</label>
                        <input type="number" id="personas_max_expe" name="personas_max_expe" defaultValue={experiencia.personas_max_expe}></input>

                        <button type="submit" id="botonEditarExperiencia" className="btn-principal">Editar</button>
                        <button type="button" id="botonEliminarExperiencia" className="btn-secundario" onClick={() => setMostrarPopup(true)}>Eliminar</button>
                        <button type="button" id="botonVolverExperiencia" className="btn-secundario" onClick={() => navigate(`/experiencias`)}>Volver</button>
                        
                        {/*Pop up para confirmar la eliminación*/}
                        {mostrarPopup &&
                            <PopUpEliminarExperiencia
                                confirmarEliminar={async () => {

                                    const url = `admin/eliminar/${id}`
                                    // Conexión con el back
                                    await fetchData(`${APIKEY_BACK}${url}`, "DELETE");

                                }}

                                cancelarEliminar={() => setMostrarPopup(false)}

                            />}

                        {/*Gestión de los errores */}
                        {data && (
                            <div className="oks">
                                <p>{data.mensaje}</p>
                            </div>
                        )}

                        {/*Gestión de la confirmación*/}
                        {error && (
                            <div className="errores">
                                <p>{error}</p>
                            </div>
                        )}

                        {/*Loading*/}
                        {loading && (
                            <div>
                                <p className="loading"> Cargando...</p>
                            </div>
                        )}
                    </form>
                </article>
            </section>
        </>
    )
}
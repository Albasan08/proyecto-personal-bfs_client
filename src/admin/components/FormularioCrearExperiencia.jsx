// IMPORTACIONES DE TERCEROS
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// IMPORTACIONES PROPIAS
import { EditorDescripcion } from "./EditorDescripcion";
import { useFetch } from "../../hooks/useFetch";
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

/**
 * 
 * @returns 
 */
export const FormularioCrearExperiencia = () => {

    const { fetchData, data, error, loading, setData } = useFetch();

    const editorCorto = useEditor({
        extensions: [StarterKit, TextStyle],
        content: ""
    });
    const editorLargo = useEditor({
        extensions: [StarterKit, TextStyle],
        content: ""
    });

    const navigate = useNavigate();

    const handleFormularioInputs = async (event) => {

        event.preventDefault();
        // Normalizar nombre de la experiencia para en el back poder comparar
        const nombreExperiencia = event.target.nombre_expe.value;
        const nombreExpeLimpio = nombreExperiencia.trim().charAt(0).toUpperCase() + nombreExperiencia.slice(1).toLowerCase();
        // Coger la info de la imagen
        const archivoImagen = event.target.imagen_expe.files[0];
        // Crear FormData 
        const formData = new FormData();
        formData.append("nombre_expe", nombreExpeLimpio);
        formData.append("desc_corta_expe", editorCorto.getHTML());
        formData.append("desc_larga_expe", editorLargo.getHTML());
        formData.append("imagen_expe", archivoImagen);
        formData.append("duracion_expe", event.target.duracion_expe.value.trim());
        formData.append("precio_expe", event.target.precio_expe.value.trim());
        formData.append("personas_max_expe", event.target.personas_max_expe.value.trim());

        const url = "admin/crear"
        // Conexión con el back
        fetchData(`${APIKEY_BACK}${url}`, "POST", formData);
        // Borrar el formulario una vez enviado y mensajes de ok o error
        event.target.reset();
        editorCorto.commands.clearContent();
        editorLargo.commands.clearContent();
        setTimeout(() => {
            setData(prev => prev ? { ...prev, mensaje: "" } : null);
        }, 4000);
    };

    return (
        <section>
            <header>
                <h1>Crear experiencia</h1>
                <h2>Crea una nueva experiencia para tus clientes</h2>
            </header>

            <article>
                <form className="formulario-auth flex-container" encType="multipart/form-data" onSubmit={handleFormularioInputs}>
                    <label>Nombre:</label>
                    <input type="text" id="nombre_expe" name="nombre_expe" placeholder="Cata con vista a los viñedos" required></input>

                    <label>Descripción corta:</label>
                    <EditorDescripcion editor={editorCorto} />

                    <label>Descripción larga:</label>
                    <EditorDescripcion editor={editorLargo} />

                    <label>Imagen:</label>
                    <input type="file" accept="image/*" id="imagen_expe" name="imagen_expe" placeholder="Sube aquí tu imagen" required></input>

                    <label>Duración:</label>
                    <input type="number" id="duracion_expe" name="duracion_expe" placeholder="Minutos totales" required></input>

                    <label>Precio:</label>
                    <input type="number" id="precio_expe" name="precio_expe" placeholder="Precio por persona sin divisas" required></input>

                    <label>Máximo de personas:</label>
                    <input type="number" id="personas_max_expe" name="personas_max_expe" placeholder="Número máximo de personas" required></input>

                    <button type="submit" id="botonCrearExperiencia" className="btn-principal">Crear</button>
                    <button type="button" id="botonVolverExperiencia" className="btn-secundario" onClick={() => navigate("/experiencias/:id")}>Volver</button>
                </form>
            </article>

            {/*Gestión de la confirmación */}
            {data && (
                <div className="oks">
                    <p>{data.mensaje}</p>
                </div>
            )}

            {/*Gestión de los errores*/}
            {error && (
                <div className="errores">
                    <p>{error}</p>
                </div>
            )}

            {/*Loading*/}
            {loading && (
                <div>
                    <p className="loading">Cargando...</p>
                </div>
            )}
        </section>
    )
}

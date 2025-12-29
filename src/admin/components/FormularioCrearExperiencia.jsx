// IMPORTACIONES DE TERCEROS
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// IMPORTACIONES PROPIAS
import { EditorDescripcion } from "./EditorDescripcion";
import { useCrearExperienciaAdmin } from "../hooks/useCrearExperienciaAdmin";

export const FormularioCrearExperiencia = () => {

    const [errores, setErrores] = useState([]); // Si haces null el map da error
    const [mensajeOk, setMensajeOk] = useState("");

    const { crearExperiencia } = useCrearExperienciaAdmin();

    const editorCorto = useEditor({
        extensions: [StarterKit, TextStyle],
        content: ""
    });
    const editorLargo = useEditor({
        extensions: [StarterKit, TextStyle],
        content: ""
    });

    const navigate = useNavigate();
    // Evento que recoge los inputs del formulario
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

        const data = await crearExperiencia(formData);
        // Si hay errores en la data - pintarlos
        if (!data.ok) {
            setErrores(data.error);
            return;
        };
        // Si no hay errores - mantener el estado y pintar el ok
        setErrores([]);
        setMensajeOk(data.mensaje);
        // Borrar el formulario una vez enviado
        event.target.reset();
        editorCorto.commands.clearContent();
        editorLargo.commands.clearContent();
        // Borrar mensaje de ok
        setTimeout(() => { 
            setMensajeOk(""); }, 
            3000); // 3 segundos

    };

  return (
     <section>
            <div>
                <h1>Crear experiencia</h1>
                <h2>Crea una nueva experiencia para tus clientes</h2>
            </div>
     
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
                    {/*Gestión de errores*/}
                    {errores.length > 0  && (
                        <div>
                            {errores.map((error, index) => (
                                <p key={index} className="errores">{error.mensaje}</p>
                            ))}
                        </div>
                    )}

                    {/*Gestión de ok*/}
                    {mensajeOk && (
                        <p className="oks">{mensajeOk}</p>
                    )}
                </form>
            </article>
     
        </section>
  )
}

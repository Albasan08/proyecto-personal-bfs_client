// IMPORTACIONES DE TERCEROS
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// IMPORTACIONES PROPIAS
import { EditorDescripcion } from "./EditorDescripcion";
import { useEditarExperienciaAdmin } from "../hooks/useEditarExperienciaAdmin";

export const FormularioEditarExperiencia = ({ experiencia }) => {

    const [errores, setErrores] = useState([]);
    const [mensajeOk, setMensajeOk] = useState("");

    const { editarExperienciaPorId } = useEditarExperienciaAdmin();
    const navigate = useNavigate();
    const { id } = useParams();
    //console.log(experiencia, "DESDE COMPONENTE FORMULARIO")
    const editorCorto = useEditor({
        extensions: [StarterKit, TextStyle],
        content: experiencia?.desc_corta_expe || "" // Sino no carga el editor
    });

    const editorLargo = useEditor({
        extensions: [StarterKit, TextStyle],
        content: experiencia?.desc_larga_expe || ""
    });
    // Actualizar los editores de TipTap
    useEffect(() => {
        if(experiencia && editorCorto) {
            editorCorto.commands.setContent(experiencia.desc_corta_expe);
        }
    }, [experiencia, editorCorto]);

    useEffect(() => {
        if(experiencia && editorLargo) {
            editorLargo.commands.setContent(experiencia.desc_larga_expe);
        }
    }, [experiencia, editorLargo]);

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
        if(!nuevaImagen) {
            formData.delete("imagen_expe");
        };

        const data = await editarExperienciaPorId(id, formData);
        // Si data tiene errores - Setear estado
        if (!data.ok) {
            setErrores(data.error);
            return;
        };
        // Si todo va bien - Mantener
        setErrores([])
        setMensajeOk(data.mensaje);
        // Borrar mensaje de ok
        setTimeout(() => { 
            setMensajeOk(""); }, 
            3000); // 3 segundos

    }

    return (
        <section>
            <div>
                <h1>Editar experiencia</h1>
                <h2>Cambia la experiencia para tus clientes</h2>
            </div>

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
                    <button type="button" id="botonVolverExperiencia" className="btn-secundario" onClick={() => navigate(`/experiencias/${id}`)}>Volver</button>
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

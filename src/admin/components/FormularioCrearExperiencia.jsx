// IMPORTACIONES DE TERCEROS
import { Link } from "react-router";
import { useState } from "react";

// IMPORTACIONES PROPIAS
import { EditorDescripcion } from "./EditorDescripcion";


export const FormularioCrearExperiencia = () => {
    const [tituloExperiencia, setTituloExperiencia] = useState("");
    const [desCortaExperiencia, setDesCortaExperiencia] = useState("");
    const [desLargaExperiencia, setDesLargaExperiencia] = useState("");
    const [precioExperiencia, setPrecioExperiencia] = useState("");
    const [personasMaxExperiencia, setPersonasMaxExperiencia] = useState("");
    const [imagenExperiencia, setImagenExperiencia] = useState("");
    const [duracionExperiencia, setDuracionExperiencia] = useState("");

  return (
     <section>
             <div>
                 <h1>Crear experiencia</h1>
                 <h2>Crea una nueva experiencia para tus clientes</h2>
             </div>
     
             <article>
                <form className="">
                    <label>Nombre:</label>
                    <input type="text" id="tituloExperiencia" name="tituloExperiencia" required placeholder="Cata con vista a los viñedos"></input>

                    <label>Descripción corta:</label>
                    <EditorDescripcion value={desCortaExperiencia} onChange={setDesCortaExperiencia} />

                   
                     
                    <button type="submit" id="botonLogin" className="btn-principal">Iniciar sesión</button>
                    <button type="button" id="botonLoginGoogle" className="btn-secundario">Iniciar sesión con Google</button>
                </form>
             </article>
     
             {/*Gestión de errores - Si hay errores en el hook mostrarlos*/}
     
             <div>
                 <p>¿No tienes cuenta?</p>
                 <Link to="/auth/register" className="link">Crear cuenta</Link>
             </div>
     
         </section>
  )
}

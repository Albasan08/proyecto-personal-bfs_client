// IMPORTACIONES DE TERCEROS
import { Link } from "react-router";
import { useState } from "react";

// IMPORTACIONES PROPIAS
import { useLoginGoogle } from "../hooks/useLoginGoogle";
import { useLoginEmailContra } from "../hooks/useLoginEmailContra";
import { ErroresAuth } from "./ErroresAuth";
import './FormularioLoginAuth.scss'

/**
 * Componente formulario para iniciar sesión con usuario y contraseña
 * @returns Formulario para iniciar sesión
 */
export const FormularioLoginAuth = () => {

    // Requerir estados de los campos del formulario que se actualizarán después
    const [emailLogin, setEmailLogin] = useState("");
    const [contraseniaLogin, setContraseniaLogin] = useState("");
    const [error, setError] = useState(null);
    // Requerir función login con Google
    const { loginConGoogle, errorGoogle } = useLoginGoogle();
    // Requerir función login con email y contraseña
    const { inicioSesionEmailContra, errorEmail } = useLoginEmailContra();
    // Evento para capturar los datos de los campos y conectar con hook de login con email y contraseña
    const handleDatosFormularioLogin = async (event) => {
       
        event.preventDefault();

        setError(null); 
        // Capturar datos formulario
        const emailLogin = event.target.emailLogin.value;
        const contraseniaLogin = event.target.contraseniaLogin.value;
        // Setear estados
        setEmailLogin(emailLogin);
        setContraseniaLogin(contraseniaLogin);
        // Conectar con hook
        try {

            const user = await inicioSesionEmailContra(emailLogin, contraseniaLogin);
        
        } catch(error) {

            setError(error);

        }
    }

  return (
    <>  
    <section>
        <div>
            <h1>Inicio de sesión</h1>
            <h2>Bienvenido de nuevo a tu nueva experiencia</h2>
        </div>

        <article>
            <form className="formulario-auth flex-container" onSubmit={handleDatosFormularioLogin} action="/auth/login" method="post"encType="application/x-www-form-urlencoded">
                <label htmlFor="emailLogin">Correo electrónico:</label>
                <input type="text" id="emailLogin" name="emailLogin" required placeholder="ejemplo@ejemplo.com"></input>

                <label htmlFor="contraseniaLogin">Contraseña:</label>
                <input type="password" id="contraseniaLogin" name="contraseniaLogin" required placeholder="ContraseñaEjemplo1@"></input>
                
                <button type="submit" id="botonLogin" className="btn-principal">Iniciar sesión</button>
                <button type="button" id="botonLoginGoogle" className="btn-secundario" onClick={loginConGoogle}>Iniciar sesión con Google</button>
            </form>
        </article>

        {/*Gestión de errores - Si hay errores en el hook mostrarlos*/}
        <ErroresAuth errorMessage={errorEmail?.message} />
        <ErroresAuth errorMessage={errorGoogle?.message} />

        <div>
            <p>¿No tienes cuenta?</p>
            <Link to="/auth/register" className="link">Crear cuenta</Link>
        </div>

    </section>
    </>
  )
}

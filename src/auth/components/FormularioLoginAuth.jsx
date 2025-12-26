// IMPORTACIONES DE TERCEROS
import { Link } from "react-router";
import { useState } from "react";

// IMPORTACIONES PROPIAS
import { useLoginGoogle } from "../hooks/useLoginGoogle";
import { useLoginEmailContra } from "../hooks/useLoginEmailContra";
import { ErroresAuth } from "./ErroresAuth";

export const FormularioLoginAuth = () => {

    // Requerir estados de los campos del formulario que se actualizarán después
    const [emailLogin, setEmailLogin] = useState("");
    const [contraseniaLogin, setContraseniaLogin] = useState("");
    const [error, setError] = useState(null);

    // Requerir función login con Google
    const { loginConGoogle, errorGoogle } = useLoginGoogle();

    // Requerir función login con email y contraseña
    const { inicioSesionEmailContra, errorEmail } = useLoginEmailContra();

    // Recoger errores

    // Evento para capturar los datos de los campos y conectar con hook de login con email y contraseña
    const handleDatosFormularioLogin = async (event) => {
        event.preventDefault();

        // Para limpiar los errores
        setError(null); 

        // Capturar datos formulario
        const emailLogin = event.target.emailLogin.value;
        //console.log(emailLogin);
        const contraseniaLogin = event.target.contraseniaLogin.value;
        //console.log(contraseniaLogin);

        // Setear estados
        setEmailLogin(emailLogin);
        setContraseniaLogin(contraseniaLogin);

        // Conectar con hook
        try {
            const user = await inicioSesionEmailContra(emailLogin, contraseniaLogin);
        } catch(error) {
            console.log(error)
            // Pendiente gestionar error
        }
    }

  return (
    <>  
        <div>
            <h1>Inicio de sesión</h1>
            <h2>Bienvenido de nuevo a tu nueva experiencia</h2>
        </div>

        <section>
            <form className="formularioLogin flexContainer" onSubmit={handleDatosFormularioLogin}>
                <label htmlFor="emailLogin">Correo electrónico:</label>
                <input type="text" id="emailLogin" name="emailLogin" required placeholder="ejemplo@ejemplo.com"></input>

                <label htmlFor="contraseniaLogin">Contraseña:</label>
                <input type="password" id="contraseniaLogin" name="contraseniaLogin" required placeholder="ContraseñaEjemplo1@"></input>
                
                <button type="submit" id="botonLogin">Iniciar sesión</button>
                <button type="button" id="botonLoginGoogle" onClick={loginConGoogle}>Iniciar sesión con Google</button>
            </form>
        </section>

        {/*Gestión de errores - Si hay errores en el hook mostrarlos*/}
        <ErroresAuth errorMessage={errorEmail?.message} />
        <ErroresAuth errorMessage={errorGoogle?.message} />

        <div>
            <p>¿No tienes cuenta?</p>
            <Link to="/auth/register" className="link">Crear cuenta</Link>
        </div>
    </>
  )
}

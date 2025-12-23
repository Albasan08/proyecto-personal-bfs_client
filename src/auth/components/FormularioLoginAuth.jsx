// IMPORTACIONES DE TERCEROS
import { Link } from "react-router";
import { useState } from "react";

// IMPORTACIONES PROPIAS
import { useLoginGoogle } from "../hooks/useLoginGoogle";

export const FormularioLoginAuth = () => {

    // Requerir estados de los campos del formulario que se actualizarán después
    const [emailLogin, setEmailLogin] = useState("");
    const [contraseniaLogin, setContraseniaLogin] = useState("");

    // Requerir función login por Google
    const { loginConGoogle } = useLoginGoogle();

    // Evento para capturar los datos de los campos
    const handleDatosFormularioLogin = (event) => {
        event.preventDefault();

        // Capturar datos formulario
        const emailLogin = event.target.emailLogin.value;
        //console.log(emailLogin);
        const contraseniaLogin = event.target.contraseniaLogin.value;
        //console.log(contraseniaLogin);

        // Setear estados
        setEmailLogin(emailLogin);
        setContraseniaLogin(contraseniaLogin);
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
                <input type="text" id="contraseniaLogin" name="contraseniaLogin" required placeholder="ContraseñaEjemplo1@"></input>
                
                <button type="submit" id="botonLogin">Iniciar sesión</button>
                <button type="button" id="botonLoginGoogle" onClick={loginConGoogle}>Iniciar sesión con Google</button>
            </form>
        </section>
        <div>
            <p>¿No tienes cuenta?</p>
            <Link to="/auth/register" className="link">Crear cuenta</Link>
        </div>
    </>
  )
}

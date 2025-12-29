// IMPORTACIONES DE TERCEROS
import { useState } from "react";
import { Link } from "react-router";


// IMPORTACIONES PROPIAS
import { useRegisterGoogle } from "../hooks/useRegisterGoogle";
import { ErroresAuth } from "./ErroresAuth";

export const FormularioRegisterAuth = () => {

    // Requerir estados de los campos del formulario que se actualizarán después
    const [emailRegister, setEmailRegister] = useState("");
    const [contraseniaRegister, setContraseniaRegister] = useState("");
    const [contraseniaRegister2, setContraseniaRegister2] = useState("");

    const [nombreRegister, setNombreRegister] = useState("");
    const [apellidoRegister, setApellidoRegister] = useState("");
    const [provinciaRegister, setProvinciaRegister] = useState(null);

    const [errorConexion, setErrorConexion] = useState(null);

    // Usar hook de registrar con email y contraseña
    const { registrarConLogin, error } = useRegisterGoogle();


    // Lista de provincias para input SELECT
    const provinciasEspania = [
        "Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila", "Badajoz", "Barcelona", "Burgos", 
        "Cáceres", "Cádiz", "Cantabria", "Castellón", "Ciudad Real", "Córdoba", "Cuenca", "Girona", "Granada", 
        "Guadalajara", "Gipuzkoa", "Huelva", "Huesca", "Illes Balears", "Jaén", "La Coruña", "La Rioja", 
        "Las Palmas", "León", "Lleida", "Lugo", "Madrid", "Málaga", "Murcia", "Navarra", "Ourense", 
        "Palencia", "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Segovia", "Sevilla", "Soria", 
        "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Zamora", "Zaragoza"
    ];

    // Evento para capturar los datos de los campos
    const handleDatosFormularioRegister = async (event) => {
        event.preventDefault();

        // Para limpiar los errores
        setErrorConexion(errorConexion);

        // Capturar datos formulario
        const emailRegister = event.target.emailRegister.value.trim().toLowerCase();
        const contraseniaRegister = event.target.contraseniaRegister.value.trim();
        const contraseniaRegister2 = event.target.contraseniaRegister2.value.trim();

        const nombreRegister = event.target.nombreRegister.value;
        const nombreLimpio = nombreRegister.trim().charAt(0).toUpperCase() + nombreRegister.slice(1).toLowerCase();

        const apellidoRegister = event.target.apellidoRegister.value;
        const apellidoLimpio = apellidoRegister.trim().charAt(0).toUpperCase() + apellidoRegister.slice(1).toLowerCase();
        
        const provinciaRegister = event.target.provinciaRegister.value;

        // Setear estados
        setEmailRegister(emailRegister);
        setContraseniaRegister(contraseniaRegister);
        setContraseniaRegister2(contraseniaRegister2);

        setNombreRegister(nombreLimpio);
        setApellidoRegister(apellidoLimpio);
        setProvinciaRegister(provinciaRegister);

        // Si las contraseñas no coinciden
        if (contraseniaRegister !== contraseniaRegister2) { 
            setErrorConexion("Las contraseñas no coinciden"); 

            // Borrar el error después de varios segundos para que no permanezca en pantalla
            setTimeout(() => { setErrorConexion(null); }, 5000); // 3 segundos
        }
        
        // Conectar con hook
        try {
            const user = await registrarConLogin(emailRegister, contraseniaRegister, contraseniaRegister2, nombreRegister, apellidoRegister, provinciaRegister);
        } catch(error) {
            setErrorConexion(errorConexion);
        }
    }

  return (
    <>
        <section>
        <div>
            <h1>Crea una cuenta nueva</h1>
            <h2>Únete a la mejor experiencia de enoturismo de Rioja Alavesa</h2>
        </div>

        <article>
            <form className="formulario-auth flex-container" onSubmit={handleDatosFormularioRegister} action="/auth/register" method="post">
                    <label htmlFor="emailRegister">Correo electrónico:</label>
                    <input type="text" id="emailRegister" name="emailRegister" required placeholder="ejemplo@ejemplo.com"></input>
    
                    <label htmlFor="contraseniaRegister">Contraseña:</label>
                    <input type="password" id="contraseniaRegister" name="contraseniaRegister" required placeholder="ContraseñaEjemplo1@"></input>

                    <label htmlFor="contraseniaRegister2">Repetir contraseña:</label>
                    <input type="password" id="contraseniaRegister2" name="contraseniaRegister2" required placeholder="ContraseñaEjemplo1@"></input>

                    <label htmlFor="nombreRegister">Nombre:</label>
                    <input type="text" id="nombreRegister" name="nombreRegister" required placeholder="Peio"></input>
    
                    <label htmlFor="apellidoRegister">Primer apellido:</label>
                    <input type="text" id="apellidoRegister" name="apellidoRegister" required placeholder="Extebarria"></input>

                    <label htmlFor="provinciaRegister">Provincia:</label>
                    <select id="provinciaRegister" name="provinciaRegister" required>
                        <option  value="">Selecciona tu provincia</option>
                        {provinciasEspania.map((provincia) => (
                            <option key={provincia} value={provincia}>
                                {provincia}
                            </option>
                        ))}
                    </select>
                    
                <button type="submit" id="botonRegister" className="btn-principal">Crear cuenta</button>
            </form>
        </article>

        {/*Gestión de errores - Si hay errores en el hook mostrarlos (de firebase) */}
        {<ErroresAuth errorMessage={error?.message}/>}
        
        {/*Gestión de errores de que las contraseñas no coinciden */}
        {errorConexion && ( <p className="error">{errorConexion}</p> )}

        <div>
            <p>¿Ya tienes cuenta?</p>
            <Link to="/auth/login" className="link">Iniciar sesión</Link>
        </div>
        </section>
    </>
  )
}

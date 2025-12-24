// IMPORTACIONES DE TERCEROS
import { useState } from "react";
import { Link } from "react-router";
import { useRegisterGoogle } from "../hooks/useRegisterGoogle";
import { ErroresAuth } from "./ErroresAuth";

// IMPORTACIONES PROPIAS

export const FormularioRegisterAuth = () => {

    // Requerir estados de los campos del formulario que se actualizarán después
    const [emailRegister, setEmailRegister] = useState("");
    const [contraseniaRegister, setContraseniaRegister] = useState("");
    const [contraseniaRegister2, setContraseniaRegister2] = useState("");

    const [nombreRegister, setNombreRegister] = useState("");
    const [apellidoRegister, setApellidoRegister] = useState("");
    const [provinciaRegister, setProvinciaRegister] = useState(null);

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

        // Capturar datos formulario
        const emailRegister = event.target.emailRegister.value;
        //console.log(emailRegister);
        const contraseniaRegister = event.target.contraseniaRegister.value;
        //console.log(contraseniaRegister);
        const contraseniaRegister2 = event.target.contraseniaRegister2.value;
        //console.log(contraseniaRegister2);

        const nombreRegister = event.target.nombreRegister.value;
        //console.log(nombreRegister);
        const apellidoRegister = event.target.apellidoRegister.value;
        //console.log(apellidoRegister);
        const provinciaRegister = event.target.provinciaRegister.value;
        //console.log(provinciaRegister);

        // Setear estados
        setEmailRegister(emailRegister);
        setContraseniaRegister(contraseniaRegister);
        setContraseniaRegister2(contraseniaRegister2);

        setNombreRegister(nombreRegister);
        setApellidoRegister(apellidoRegister);
        setProvinciaRegister(provinciaRegister);
        
        // Conectar con hook
        try {
            const user = await registrarConLogin(emailRegister, contraseniaRegister, nombreRegister, apellidoRegister, provinciaRegister);
        } catch(error) {
            setError(error)
        }
    }

  return (
    <>
        <div>
            <h1>Crea una cuenta nueva</h1>
            <h2>Únete a la mejor experiencia de enoturismo de Rioja Alavesa</h2>
        </div>

        <section>
            <form className="formularioRegister flexContainer" onSubmit={handleDatosFormularioRegister}>
                <fieldset>
                    <label htmlFor="emailRegister">Correo electrónico:</label>
                    <input type="text" id="emailRegister" name="emailRegister" required placeholder="ejemplo@ejemplo.com"></input>
    
                    <label htmlFor="contraseniaRegister">Contraseña:</label>
                    <input type="text" id="contraseniaRegister" name="contraseniaRegister" required placeholder="ContraseñaEjemplo1@"></input>

                    <label htmlFor="contraseniaRegister2">Repetir contraseña:</label>
                    <input type="text" id="contraseniaRegister2" name="contraseniaRegister2" required placeholder="ContraseñaEjemplo1@"></input>
                </fieldset>

                <fieldset>
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
                </fieldset>
                    
                <button type="submit" id="botonRegister">Crear cuenta</button>
            </form>
        </section>

        {/*Gestión de errores - Si hay errores en el hook mostrarlos*/}
        {<ErroresAuth errorMessage={error?.message}/>}


        <div>
            <p>¿Ya tienes cuenta?</p>
            <Link to="/auth/login" className="link">Iniciar sesión</Link>
        </div>
    </>
  )
}

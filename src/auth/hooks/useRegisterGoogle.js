// IMPORTACIONES DE TERCEROS
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

// IMPORTACIONES PROPIAS
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

export const useRegisterGoogle = () => {
    
    //Estados
    const [error, setError] = useState(null);
    const [userGoogleNew, setUserGoogleNew] = useState(null);
    const [uidGoogle, setUidGoogle] = useState("");
    const [token, setToken] = useState("");

    const auth = getAuth();

    const registrarConLogin = (emailRegister, contraseniaRegister, contraseniaRegister2, nombreRegister, apellidoRegister, provinciaRegister) => {

        const result = createUserWithEmailAndPassword(auth, emailRegister, contraseniaRegister)
        .then((result) => {
            //console.log(result);
            const user = result.user;
            //console.log(user);

            // Cambiar estados
            setUserGoogleNew(user);
            setUidGoogle(user.uid)
            setError(null);
            setToken(user.accessToken)
            //console.log(token)

            //Construir objeto que se mandará a la BBDD de postgres algunos desde firebase otros desde el formulario
            const newRegisterUser = {
                uid_user: user.uid,
                nombre_user: nombreRegister,
                apellido_user: apellidoRegister,
                email_user: emailRegister,
                contrasenia_user: contraseniaRegister,
                contrasenia_user2: contraseniaRegister2,
                provincia_user: provinciaRegister,
                rol_user: "user",
                token: user.accessToken
            }
            //console.log(newRegisterUser)

            // Conexión con la BBDD desde el back
            const conexionBackBBDD = async () => {
                try {
                    const respuesta = await fetch(`${APIKEY_BACK}auth/register`, { 
                        method: "POST", 
                        headers: { "Content-Type": "application/json" },
                        credentials: "include", 
                        body: JSON.stringify(newRegisterUser)
                    });

                    const data = await respuesta.json();
                    //console.log(data);

                    // Mantener estado
                    setError(null);

                } catch(error) {

                    setError(error);

                }
            }

            return conexionBackBBDD();
        })
        .catch((error) => {

            //Cambiar estados
            setError(error);
            setUserGoogleNew(null);

        })
    }

  return (
    {
        registrarConLogin,
        error,
        userGoogleNew,
    }
  )
}


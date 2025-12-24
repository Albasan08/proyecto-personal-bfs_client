// IMPORTACIONES DE TERCEROS
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

// IMPORTACIONES PROPIAS

export const useRegisterGoogle = () => {
    
    //Estados
    const [error, setError] = useState(null);
    const [userGoogleNew, setUserGoogleNew] = useState(null);
    const [uidGoogle, setUidGoogle] = useState("");

    const auth = getAuth();

    const registrarConLogin = (emailRegister, contraseniaRegister, nombreRegister, apellidoRegister, provinciaRegister) => {

        const result = createUserWithEmailAndPassword(auth, emailRegister, contraseniaRegister)
        .then((result) => {
            //console.log(result);
            const user = result.user;
            //console.log(user);

            // Cambiar estados
            setUserGoogleNew(user);
            setUidGoogle(user.uid)
            setError(null);

            //Construir objeto que se mandará a la BBDD de postgres algunos desde firebase otros desde el formulario
            const newRegisterUser = {
                uid_user: user.uid,
                nombre_user: nombreRegister,
                apellido_user: apellidoRegister,
                email_user: emailRegister,
                contrasenia_user: contraseniaRegister,
                provincia_user: provinciaRegister,
                rol_user: "user"
            }

            //console.log(newRegisterUser)

            // PENDIENTE MANDAR A LA BASE DE DATOS
            // PENDIENTE HACER MIDDLEWARES DE FORMULARIOS
            
        })
        .catch((error) => {
            const errorCode = error.code;
            //console.log(errorCode)
            const errorMessage = error.message;
            //console.log(errorMessage);
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


// IMPORTACIONES DE TERCEROS
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export const useLoginEmailContra = () => {

  const [errorEmail, setErrorEmail] = useState(null); // Dividir los errores, sino el componente no sabe cual coger de las 2 opciones
  const [userGoogle, setUserGoogle] = useState(null);
  const [tokenGoogle, setTokenGoogle] = useState(null);

  const auth = getAuth();

  const inicioSesionEmailContra = (emailLogin, contraseniaLogin) => {

    const result = signInWithEmailAndPassword(auth, emailLogin, contraseniaLogin)
      .then((result) => {

      const user = result.user;
      //console.log(user);

      const token = user.accessToken;
      //console.log(token)

      // Cambiar estados
      setUserGoogle(user);
      setTokenGoogle(token);
      // Por si acaso
      setErrorEmail(null);

      })
      .catch((error) => {

        const errorCode = error.code;
        //console.log(errorCode)
        const errorMessage = error.message;
        //console.log(errorMessage)

        // PENDIENTE GESTIONAR ERRORES

        // Cambiar estados
        setErrorEmail(error);
        setUserGoogle(null);
        setTokenGoogle(null)
      })

  }

  return (
    {
      inicioSesionEmailContra,
      errorEmail,
      userGoogle,
      tokenGoogle
    }
  )
}

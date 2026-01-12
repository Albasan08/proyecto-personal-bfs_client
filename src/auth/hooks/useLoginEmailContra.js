// IMPORTACIONES DE TERCEROS
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// IMPORTACIONES PROPIAS
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;
import { redirigirPorRol } from "../helpers/redirigirPorRol";

/**
 * Hook que gestiona el inicio de sesión con usuario y contraseña
 * @returns error, user, token y función de inicio de sesión
 */
export const useLoginEmailContra = () => {

  const [errorEmail, setErrorEmail] = useState(null); // Dividir los errores, sino el componente no sabe cual coger de las 2 opciones
  const [userGoogle, setUserGoogle] = useState(null);
  const [tokenGoogle, setTokenGoogle] = useState(null);

  const auth = getAuth();
  const navigate = useNavigate();

  const inicioSesionEmailContra = (emailLogin, contraseniaLogin) => {

    const result = signInWithEmailAndPassword(auth, emailLogin, contraseniaLogin)
      .then((result) => {

        const user = result.user;
        const token = user.accessToken;
        // Cambiar estados
        setUserGoogle(user);
        setTokenGoogle(token);
        setErrorEmail(null);

        const LoginUser = {
          email_user: emailLogin,
          contrasenia_user: contraseniaLogin,
          token: user.accessToken,
          uid_user: user.uid
        }
        // Conexión con la BBDD desde el back y redirigir
        const conexionBackBBDD = async () => {
          try {
            const respuesta = await fetch(`${APIKEY_BACK}auth/login`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify(LoginUser)
            });

            const data = await respuesta.json();

            const redirect = await redirigirPorRol(); 
            navigate(redirect, { replace: true });

          } catch (error) {

            setErrorEmail(error);
            setUserGoogle(null); 
            setTokenGoogle(null);

          }
        }

        return conexionBackBBDD();

      })

      .catch((error) => {
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

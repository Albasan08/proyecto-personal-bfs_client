// IMPORTACIONES DE TERCEROS
import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

// IMPORTACIONES PROPIAS
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;
import { redirigirPorRol } from "../helpers/redirigirPorRol";

/**
 * Hook que gestiona el inicio de sesión mediante ventana emergente de Google
 * @returns token, user, error y función de login
 */
export const useLoginGoogle = () => {
    //Estados de userGoogle, error y token
    const [errorGoogle, setErrorGoogle] = useState(null);
    const [userGoogle, setUserGoogle] = useState(null);
    const [tokenGoogle, setTokenGoogle] = useState(null);

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const loginConGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);

            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            // Cambiar estados
            setUserGoogle(user);
            setTokenGoogle(token);
            setErrorGoogle(null);

            // Objeto que se envía al back
            const LoginUser = {
                email_user: user.email,
                token: token,
                uid_user: user.uid
            }

            // Conectar con BBDD
            const respuesta = await fetch(`${APIKEY_BACK}auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(LoginUser)
            });

            const data = await respuesta.json();
            // Redirigir por rol
            const redirect = await redirigirPorRol(); 
            navigate(redirect, { replace: true });

        } catch(error) {
            // Cambiar estados
            setErrorGoogle(error);
            setUserGoogle(null);
            setTokenGoogle(null);
        }
    }
  return (
    { 
        loginConGoogle,
        tokenGoogle,
        userGoogle,
        errorGoogle
    }
  )
}
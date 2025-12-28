// IMPORTACIONES DE TERCEROS
import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

// IMPORTACIONES PROPIAS
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;
import { redirigirPorRol } from "../helpers/redirigirPorRol";

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
            //console.log(credential)
            const token = credential.accessToken;
            //console.log(token)
            const user = result.user;
            //console.log(user)

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
            //console.log(LoginUser);

            // Conectar con BBDD
            const respuesta = await fetch(`${APIKEY_BACK}auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(LoginUser)
            });

            const data = await respuesta.json();
            //console.log(data);
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
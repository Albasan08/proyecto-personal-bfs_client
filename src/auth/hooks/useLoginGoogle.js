// IMPORTACIONES DE TERCEROS
import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const useLoginGoogle = () => {

    //Estados de userGoogle, error y token
    const [error, setError] = useState(null);
    const [userGoogle, setUserGoogle] = useState(null);
    const [tokenGoogle, setTokenGoogle] = useState(null);

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

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
            // Por si acaso
            setError(null);

        } catch(error) {

            const errorCode = error.code;
            //console.log(errorCode)
            const errorMessage = error.message;
            //console.log(errorMessage)
            const emailUserError = error.customData.email;
            //console.log(emailUserError)
            const credentialError = GoogleAuthProvider.credentialFromError(error);
            //console.log(credentialError)

            // PENDIENTE GESTIONAR ERRORES

            // Cambiar estados
            setError(error);
            setUserGoogle(null);
        }
    }
  return (
    { 
        loginConGoogle,
        tokenGoogle,
        userGoogle,
        error
    }
  )
}
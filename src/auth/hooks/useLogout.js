// IMPORTACIONES DE TERCEROS
import { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';



export const useLogout = () => {
    // Estados de userGoogle y error
    const [error, setError] = useState(null);
    const [userGoogle, setUserGoogle] = useState(null);

    const auth = getAuth();

    const cerrarSesionGoogle = async () => {

        try {
        const result = await signOut(auth);
        //console.log("SESIÓN CERRADA DESDE HOOK USELOGOUT")

        // Cambiar estados
        setUserGoogle(null)
        setError(null);

        } catch (error) {
          console.log(error)
          setError(error)
          // Pendiente gestionar errores
        }

    }
  return (
    {
        cerrarSesionGoogle,
        error,
        userGoogle
    }
  )
}

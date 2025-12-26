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

      // Conectar con back para borrar cookies// Conectar con BBDD
      const conexionBack = async () => {
        try {
          const respuesta = await fetch(`${APIKEY_BACK}auth/logout`, {
            method: "POST",
            credentials: "include",
          });

          // Mantener estado
          setError(null);
          setUserGoogle(null);

        } catch (error) {

          setError(error);
          setUserGoogle(null);

        }
      }

      // Cambiar estados
      setUserGoogle(null)
      setError(null);

      conexionBack();

    } catch (error) {

      setError(error);

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

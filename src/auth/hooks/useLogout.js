// IMPORTACIONES DE TERCEROS
import { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

// IMPORTACIONES PROPIAS
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

/**
 * Hook que gestiona el logout de usuarios registrados
 * @returns error, usuarioGoogle y función de cerrar sesión
 */
export const useLogout = () => {
  // Estados de userGoogle y error
  const [error, setError] = useState(null);
  const [userGoogle, setUserGoogle] = useState(null);

  const auth = getAuth();
  const navigate = useNavigate();

  const cerrarSesionGoogle = async () => {

    try {
      await signOut(auth);
      // Conectar con back para borrar cookies y redirigir
      const respuesta = await fetch(`${APIKEY_BACK}auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      const data = await respuesta.json(); 
      // Mantener estado
      setError(null);
      setUserGoogle(null);

      navigate(data.redirect, { replace: true });

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

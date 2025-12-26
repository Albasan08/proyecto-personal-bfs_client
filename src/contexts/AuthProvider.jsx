// IMPORTACIONES DE TERCEROS
import { useEffect, useState } from "react"
import { onAuthStateChanged, getAuth } from 'firebase/auth';

// IMPORTACIONES PROPIAS
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({ children }) => {

    // Crear el estado inicial
    const [userGoogle, setUserGoogle] = useState(null);
    const [error, setError] = useState(null);

    const auth = getAuth();

    useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (userGoogle) => { // Aunque se refresque la página el usuario sigue logueado
      
      // Si hay usuario cambia el estado de user, sino null
        if(userGoogle) {

        setUserGoogle(userGoogle);
        setError(null);

      } else {

        setUserGoogle(null);
        setError(error);

      }

    });

  }, []); // Solo al principio, cuando se carga el componente por primera vez

  return (
    <AuthContext.Provider value={{ userGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}

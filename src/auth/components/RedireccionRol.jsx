// IMPORTACIONES DE TERCEROS
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

/**
 * Componente que redirige según el rol
 * @param {Prop} children 
 * @returns navigate para redirigir según el rol
 */
export const RedireccionRol = ({ children, redirigir }) => {
    // Coger token y rol de cookies
    const token = Cookies.get("token");
    const rol = Cookies.get("rol");
     
    if(token && rol) {
        const redirigirSegunRol = {
            admin: "/admin/info",
            user: "/user/info",
            program: "/gestor/info"
        }

        return <Navigate to={redirigirSegunRol[rol]} replace />;
    }

  return children
  
}

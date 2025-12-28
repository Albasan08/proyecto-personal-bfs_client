// IMPORTACIONES DE TERCEROS
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

// IMPORTACIONES PROPIAS

export const RedireccionRol = ({ children, redirigir }) => {
    // Coger token y rol de cookies
    const token = Cookies.get("token");
    const rol = Cookies.get("rol");
    //console.log(rolCookie);
     
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

// IMPORTACIONES DE TERCEROS
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

/**
 * Componente que protege las rutas
 * @param {String} roles roles permitidos para proteger las rutas
 * @param {Object} children desde Provider
 * @returns children
 */
export const PrivateRoute = ({ children, roles }) => {
    // Coger token para comprobar que el usuario esté logueado
    const token = Cookies.get("token");
    // Si no hay token redirigir a index
    if (!token) { 
        return <Navigate to="/auth/login" replace />; 
    }
    // Coger rol mediante cookies para comprobar rol
    const rol = Cookies.get("rol");
    // Convertir el string en un arrray para después poder comparar
    const rolesPermitidos = Array.isArray(roles) ? roles : [roles];
    // Si el rol no es correcto redirigir a index
    if (!rolesPermitidos.includes(rol)) { 
        return <Navigate to="/experiencias" replace />; 
    }

  return children
}

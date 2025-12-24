// IMPORTACIONES DE TERCEROS
import { Link } from "react-router"

// IMPORTACIONES PROPIAS
import { useLogout} from "../auth/hooks/useLogout"


export const NavBar = () => {

  // Requerir función dentro de hook
  const { cerrarSesionGoogle } = useLogout();

  return (
    <nav>
        <ul className='nav'>
            <li className="nav-link" onClick={ cerrarSesionGoogle }>Cerrar sesión</li>
        </ul >
    </nav>
  )
}

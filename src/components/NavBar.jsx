// IMPORTACIONES DE TERCEROS
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";


// IMPORTACIONES PROPIAS
import { useState } from "react";
import { useLogout } from "../auth/hooks/useLogout"
import './NavBar.scss'

export const NavBar = () => {

  const [abrir, setAbrir] = useState(false);
  // Requerir función dentro de hook
  const { cerrarSesionGoogle } = useLogout();
  
  const token = Cookies.get("token");
  //console.log(token);
  const rol = Cookies.get("rol");
  //console.log(rol);

  return (
    <>
      <header className="navbar-container">
        <div className="logo">Neozahi</div>

        <button className="toggle" onClick={() => setAbrir(!abrir)}>
          <span className={`hamburger ${abrir ? "abrir" : ""}`}></span>
        </button>

        <nav className={`navbar ${abrir ? "show" : ""}`}>
          {/*Siempre visible*/}
          <NavLink to="/experiencias" onClick={() => setAbrir(false)}>Experiencias</NavLink>

          {/*Cuando el usuario no está registrado*/}
          {!token && (
            <NavLink to="/auth/login" onClick={() => setAbrir(false)}>Iniciar sesión</NavLink>
          )}
          
          {/*Cuando el rol es admin*/}
          {token && rol === "admin" && (
            <>
              <NavLink to="/admin/info" onClick={() => setAbrir(false)}>Información</NavLink>
              <NavLink to="/admin/crear" onClick={() => setAbrir(false)}>Crear experiencia</NavLink>
              <NavLink to="/admin/gestion-reserva" onClick={() => setAbrir(false)}>Gestionar reservas</NavLink>
            </>
          )}

           {/*Cuando el rol es user*/}
          {token && rol === "user" && (
            <>
              <NavLink to="/user/info" onClick={() => setAbrir(false)}>Información</NavLink>
            </>
          )}

          {/*Cuando el rol es program*/}
          {token && rol === "program" && (
            <>
              <NavLink to="/gestor/info" onClick={() => setAbrir(false)}>Información</NavLink>
            </>
          )}
          
          {/*Cuando solo está registrado - Da igual el rol*/}
          {token && (
            <NavLink onClick={cerrarSesionGoogle}>Cerrar sesión</NavLink>
          )}
        </nav>
      </header>
    </>
  )
}


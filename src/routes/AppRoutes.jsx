// IMPORTACIONES DE TERCEROS
import { Navigate, Route, Routes } from "react-router"

// IMPORTACIONES PROPIAS
import { 
  LoginAuth, 
  RegisterAuth, 
  Experiencias, 
  DetalleExperiencia, 
  ExperienciaReserva, 
  Stripe, 
  ConfirmacionReserva, 
  UserInfo,
  CrearExperiencia,
  EditarExperiencia,  
  GestionReservas, 
  AdminInfo, 
  ProgramarExperiencia, 
  GestorInfo 
} from "./index"
import { PrivateRoute } from "../auth/components/PrivateRoute"
import { RedireccionRol } from "../auth/components/RedireccionRol"


export const AppRoutes = () => {
  return (
    <>
    <Routes>
      {/*Auth*/}
      <Route path='auth/login' element={
        <RedireccionRol redirigir={'auth/login'}> 
        <LoginAuth />
        </RedireccionRol>}
      />
      <Route path='auth/register' element={
        <RedireccionRol redirigir={'auth/register'}> 
        <RegisterAuth />
        </RedireccionRol>}
      />

      {/* Public */}
      <Route path="experiencias" element={<Experiencias />} />
      <Route path="experiencias/:id" element={<DetalleExperiencia />} />

      {/* User */}
      <Route path="experiencias/:id/reserva"
        element={
          <PrivateRoute roles={["user"]}>
            <ExperienciaReserva />
          </PrivateRoute>
        }
      />

      <Route path="experiencias/stripe"
        element={
          <PrivateRoute roles={["user"]}>
            <Stripe />
          </PrivateRoute>
        }
      />

      <Route path="experiencias/confirmacion"
        element={
          <PrivateRoute roles={["user"]}>
            <ConfirmacionReserva />
          </PrivateRoute>
        }
      />

      <Route path="user/info"
        element={
          <PrivateRoute roles={["user"]}>
            <UserInfo />
          </PrivateRoute>
        }
      />

      {/* Admin */}
      <Route path="admin/crear"
        element={
          <PrivateRoute roles={["admin"]}>
            <CrearExperiencia />
          </PrivateRoute>
        }
      />

      <Route path="admin/editar/:id"
        element={
          <PrivateRoute roles={["admin"]}>
            <EditarExperiencia />
          </PrivateRoute>
        }
      />

      <Route path="admin/gestion-reserva"
        element={
          <PrivateRoute roles={["admin"]}>
            <GestionReservas />
          </PrivateRoute>
        }
      />

      <Route path="admin/info"
        element={
          <PrivateRoute roles={["admin"]}>
            <AdminInfo />
          </PrivateRoute>
        }
      />

      {/* Gestor program */}
      <Route path="gestor/programar"
        element={
          <PrivateRoute roles={["program"]}>
            <ProgramarExperiencia />
          </PrivateRoute>
        }
      />

      <Route path="gestor/info"
        element={
          <PrivateRoute roles={["program"]}>
            <GestorInfo />
          </PrivateRoute>
        }
      />

      {/* Errores */}
      <Route path="/*" element={<Navigate to="/experiencias" />} />
      <Route path="/index" element={<Navigate to="/experiencias" />} />

    </Routes>
    </>
  )
}
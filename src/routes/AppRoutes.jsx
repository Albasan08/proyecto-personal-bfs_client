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


export const AppRoutes = () => {
  return (
    <>
    <Routes>
        {/*Auth*/}
        <Route path='auth/login' element={<LoginAuth />}/>
        <Route path='auth/register' element={<RegisterAuth />}/>

        {/*Public*/}
        <Route path='experiencias' element={<Experiencias />}/>
        <Route path='/experiencias/:id' element={<DetalleExperiencia />}/>

        {/*User*/}
        <Route path='experiencias/:id/reserva' element={<ExperienciaReserva />}/>
        <Route path='experiencias/stripe' element={<Stripe />}/>
        <Route path='experiencias/confirmacion' element={<ConfirmacionReserva />}/>
        <Route path='user/info' element={<UserInfo />}/>

        {/*Admin*/}
        <Route path='admin/crear' element={<CrearExperiencia />}/>
        <Route path='admin/editar/:id' element={<EditarExperiencia />}/>
        <Route path='admin/gestion-reserva' element={<GestionReservas />}/>
        <Route path='admin/info' element={<AdminInfo />}/>

        {/*Admin*/}
        <Route path='gestor/programar' element={<ProgramarExperiencia />}/>
        <Route path='gestor/info' element={<GestorInfo />}/>

        {/*Errores*/}
        <Route path='/*' element={<Navigate to={"/experiencias"} />}/>
        <Route path='/index' element={<Navigate to={"/experiencias"} />}/>
    </Routes>
    </>
  )
}

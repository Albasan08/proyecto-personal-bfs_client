// IMPORTACIONES DE TERCEROS
import { Navigate, Route, Routes } from "react-router"
// IMPORTACIONES PROPIAS
import { LoginAuth } from "../auth/pages/LoginAuth"
import { RegisterAuth } from "../auth/pages/RegisterAuth"


export const AppRoutes = () => {
  return (
    <>
    <Routes>
        {/*Auth*/}
        <Route path='auth/login' element={<LoginAuth />}/>
        <Route path='auth/register' element={<RegisterAuth />}/>
    </Routes>
    </>
  )
}

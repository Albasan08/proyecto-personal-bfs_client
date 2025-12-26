// IMPORTACIONES DE TERCEROS
import "./firebase/firebaseConfig"

// IMPORTACIONES PROPIAS
import './App.scss'
import { AuthProvider } from './contexts/AuthProvider'
import { AppRoutes } from './routes/AppRoutes'


function App() {

  return (
    <>
    <AuthProvider>
    <AppRoutes />
    </AuthProvider>
    </>
  )
}

export default App

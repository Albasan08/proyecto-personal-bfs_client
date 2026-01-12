// IMPORTACIONES PROPIAS
import { Footer } from '../../components/Footer'
import { NavBar } from '../../components/NavBar'
import { FormularioCrearExperiencia } from '../components/FormularioCrearExperiencia'

/**
 * Página que gestiona la creación de experiencias
 * @returns Formulario crear experiencias
 */
export const CrearExperiencia = () => {
  return (
    <>
    <NavBar />
    <main>
      <FormularioCrearExperiencia />
    </main>
    <Footer />
    </>
  )
}

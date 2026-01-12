// IMPORTACIONES PROPIAS
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { CardProgramarExperiencia } from '../components/CardProgramarExperiencia'
import '../components/CardBloquearProgramacion.scss'

/**
 * Página para programar la experiencia
 * @returns Componente para programar la experiencia por ID
 */
export const ProgramarExperiencia = () => {
  
  return (
    <>
    <NavBar />
    <main>
      <section className="cardProgram">
        <CardProgramarExperiencia />
      </section>
    </main>
    <Footer />
    </>
  )
}

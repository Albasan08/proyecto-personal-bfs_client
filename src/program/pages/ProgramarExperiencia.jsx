// IMPORTACIONES PROPIAS
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { CardProgramarExperiencia } from '../components/CardProgramarExperiencia'
import '../components/CardBloquearProgramacion.scss'

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

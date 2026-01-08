// IMPORTACIONES PROPIAS
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { CardBloquearProgramacion } from '../components/CardBloquearProgramacion'
import '../components/CardBloquearProgramacion.scss'

export const BloquearProgramacion = () => {
  return (
    <>
    <NavBar />
    <main>
      <section className="cardProgram">
        <CardBloquearProgramacion />
      </section>
    </main>
    <Footer />
    </>
  )
}

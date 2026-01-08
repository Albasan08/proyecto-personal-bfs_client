// IMPORTACIONES PROPIAS
import { CalendarioFechas } from '../components/CalendarioFechas'
import { SelectorExperiencias1h } from '../components/SelectorExperiencias1h'
import { SelectorExperiencias2h } from '../components/SelectorExperiencias2h'
import { SelectorExperiencias15h } from '../components/SelectorExperiencias15h'
import { BotoneraBloquearProgramacion } from '../components/BotoneraBloquearProgramacion'
import './CardBloquearProgramacion.scss'
import { RazonBloqueoProgramacion } from './RazonBloqueoProgramacion'

export const CardBloquearProgramacion = () => {
  return (
    <>
      <section className="cardBloquear">
        <h1>Gestiona la programación bloqueada</h1>

        <h2>Calendario de fechas</h2>
        <CalendarioFechas />

        <h2>Experiencias de 60 mins</h2>
        <SelectorExperiencias1h />

        <h2>Experiencias de 90 mins</h2>
        <SelectorExperiencias15h />

        <h2>Experiencias de 120 mins</h2>
        <SelectorExperiencias2h />

        <RazonBloqueoProgramacion />

        <BotoneraBloquearProgramacion />
      </section>
    </>
  )
}

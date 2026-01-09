// IMPORTACIONES PROPIAS
import './SelectorExperiencias.scss'

export const SelectorExperiencias1h = ({ horariosBloqueados, setHorariosBloqueados }) => {
  return (
    <>
    <article className="botoneraHorarios">
        <button type="button" id="btnHorario1-1" className="btn-secundario">11:00</button>
        <button type="button" id="btnHorario2-1" className="btn-secundario">12:00</button>
        <button type="button" id="btnHorario3-1" className="btn-secundario">13:00</button>
        <button type="button" id="btnHorario4-1" className="btn-secundario">14:00</button>
        <button type="button" id="btnHorario5-1" className="btn-secundario">15:00</button>
        <button type="button" id="btnHorario6-1" className="btn-secundario">16:00</button>
        <button type="button" id="btnHorario7-1" className="btn-secundario">17:00</button>
    </article>
    </>
  )
}

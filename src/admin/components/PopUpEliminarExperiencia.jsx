export const PopUpEliminarExperiencia = ({ confirmarEliminar, cancelarEliminar }) => {
  return (
    <>
    <div className="overlay">
        <div className="popup">
            <h3>¿Quieres eliminar esta experiencia?</h3>
            <button type="button" className="btn-principal" onClick={confirmarEliminar}>Sí, eliminar</button>
            <button type="button" className="btn-secundario" onClick={cancelarEliminar}>No, volver</button>
        </div>
    </div>
    </>
  )
}

/**
 * Popup de seguridad que se muestra al querer eliminar una experiencia
 * @param {Function} confirmarEliminar Función que confirma la eliminación de la experiencia
 * @param {Function} cancelarEliminar Función que cancela la eliminación de la experiencia
 * @returns Cancelar o Confirmar experiencia
 */
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

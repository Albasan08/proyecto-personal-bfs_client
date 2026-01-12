/**
 * Componente que gestiona los errores desde firebase
 * @param {Object} errorMessage 
 * @returns div con error.message
 */
export const ErroresAuth = ({ errorMessage }) => {

    // Si no hay mensaje de error, no devuelvas nada
    if(!errorMessage) {
        return null
    }
  return (
        <div className="errores">
            <p>{errorMessage}</p>
        </div>
  )
  
}


import PropTypes from "prop-types"

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

ErroresAuth.propTypes = { 
    errorMessage: PropTypes.string 
};

import React from 'react'
import PropTypes from 'prop-types'

// Função para obter a data atual no formato YYYY-MM-DD
const getTodayDate = () => {
  const today = new Date()
  return today.toISOString().split('T')[0] // Obtém apenas a data no formato YYYY-MM-DD
}

const DateInput = ({ etiqueta, campo, desativado, input, setinput }) => {
  // Usa a data atual como valor padrão se 'input' não estiver definido
  const displayValue = input || getTodayDate()

  return (
    <div className="form-group">
      <label htmlFor={campo} className="form-label">
        {etiqueta}
      </label>
      <input
        type="date"
        id={campo}
        name={campo}
        className="form-control"
        disabled={desativado}
        value={displayValue}
        onChange={(e) => setinput(e.target.value)}
      />
    </div>
  )
}

DateInput.propTypes = {
  etiqueta: PropTypes.string.isRequired,
  campo: PropTypes.string.isRequired,
  desativado: PropTypes.bool.isRequired,
  input: PropTypes.string, // Tornar 'input' opcional
  setinput: PropTypes.func.isRequired,
}

DateInput.defaultProps = {
  input: '', // Define o valor padrão para 'input'
}

export default DateInput

import React from 'react'
import { CFormCheck } from '@coreui/react'
import PropTypes from 'prop-types'

const Radios = ({ nome, ativo, etiqueta, desativado, onChange }) => {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value)
    }
  }

  return (
    <div>
      <div>
        <CFormCheck
          type="radio"
          name={nome}
          id={nome}
          label={etiqueta}
          checked={ativo}
          disabled={desativado}
          onChange={handleChange} // Adiciona o evento onChange
        />
      </div>
    </div>
  )
}

Radios.propTypes = {
  nome: PropTypes.string.isRequired,
  ativo: PropTypes.bool.isRequired,
  desativado: PropTypes.bool.isRequired,
  etiqueta: PropTypes.string.isRequired,
  onChange: PropTypes.func, // Define onChange como uma função opcional
}

export default Radios

import React from 'react'
import { CFormCheck } from '@coreui/react'
import PropTypes from 'prop-types'

const Checkbox = ({ id, value, etiqueta, checked, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.checked)
  }
  return (
    <div>
      <CFormCheck
        inline
        id={`checkbox-${id}`}
        value={value}
        checked={checked}
        onChange={handleChange}
        label={etiqueta}
      />
    </div>
  )
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  etiqueta: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

const Checkbox2 = ({ id, value, etiqueta, checked, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.checked)
  }

  return (
    <div>
      <CFormCheck
        id={`checkbox-${id}`}
        checked={checked}
        onChange={handleChange}
        label={etiqueta}
      />
    </div>
  )
}

Checkbox2.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  etiqueta: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export { Checkbox, Checkbox2 }

import React from 'react'
import { CFormLabel, CCol, CFormInput } from '@coreui/react'
import PropTypes from 'prop-types'

const Input = ({
  etiqueta,
  desativado,
  register = () => {},
  name = '',
  input,
  setinput,
  tipo,
  onChange,
  step,
  ncharsmin = 0,
  ncharsmax = Infinity,
  background = 'white',
}) => {
  // Função de validação do comprimento do texto
  const handleChange = (e) => {
    const value = e.target.value
    if (value.length >= ncharsmin && value.length <= ncharsmax) {
      if (setinput) {
        setinput(value)
      }
      if (onChange) {
        onChange(value)
      }
    }
  }

  return (
    <>
      <CFormLabel
        htmlFor="colFormLabelSm"
        className="col-sm-2 col-form-label col-form-label-sm w-100"
      >
        {etiqueta}
      </CFormLabel>
      <CCol xs className="w-100">
        <CFormInput
          disabled={desativado}
          className="w-100"
          value={input}
          type={tipo}
          onChange={handleChange}
          {...(register && name ? register(name) : {})}
          step={step}
          style={{
            backgroundColor: background,
            ...(tipo === 'number'
              ? {
                  MozAppearance: 'textfield',
                  appearance: 'textfield',
                  '::-webkit-outer-spin-button': { display: 'none' },
                  '::-webkit-inner-spin-button': { display: 'none' },
                }
              : {}),
          }}
          onWheel={(e) => e.target.blur()}
        />
      </CCol>
    </>
  )
}

Input.propTypes = {
  etiqueta: PropTypes.string.isRequired,
  desativado: PropTypes.bool.isRequired,
  input: PropTypes.string,
  setinput: PropTypes.func,
  register: PropTypes.func,
  name: PropTypes.string,
  tipo: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  step: PropTypes.string,
  ncharsmin: PropTypes.number,
  ncharsmax: PropTypes.number,
  background: PropTypes.string,
}

Input.defaultProps = {
  input: '',
  setinput: undefined,
  register: undefined,
  name: '',
  onChange: undefined,
  step: undefined,
  ncharsmin: 0,
  ncharsmax: Infinity,
  background: 'white',
}

export default Input

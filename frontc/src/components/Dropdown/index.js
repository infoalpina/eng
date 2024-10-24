import React from 'react'
import PropTypes from 'prop-types'
import { CFormLabel, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react'

function Dropdown({ etiqueta, desativado, valores, setValor, titulo, withScroll, onChange }) {
  const maxVisibleItems = 5 // Defina o número máximo de itens visíveis antes de rolar

  const dropdownMenuStyle = {
    maxHeight: withScroll ? `${maxVisibleItems * 38}px` : 'auto', // Ajuste conforme necessário
    overflowY: withScroll ? 'auto' : 'visible',
  }

  return (
    <>
      <CFormLabel
        htmlFor="colFormLabelSm"
        className="col-sm-2 col-form-label col-form-label-sm w-100"
      >
        {titulo}
      </CFormLabel>
      <CDropdown className="mt-3">
        <CDropdownToggle color="white" style={{ border: '1px solid black' }} disabled={desativado}>
          {etiqueta}
        </CDropdownToggle>
        <CDropdownMenu style={dropdownMenuStyle}>
          {valores.map((itemValor) => (
            <CDropdownItem
              key={itemValor}
              onClick={() => {
                setValor(itemValor)
                if (onChange) onChange(itemValor)
              }}
            >
              {itemValor}
            </CDropdownItem>
          ))}
        </CDropdownMenu>
      </CDropdown>
    </>
  )
}

Dropdown.propTypes = {
  titulo: PropTypes.string.isRequired,
  etiqueta: PropTypes.string.isRequired,
  desativado: PropTypes.bool,
  valores: PropTypes.array.isRequired,
  setValor: PropTypes.func.isRequired,
  withScroll: PropTypes.bool, // Nova propriedade para habilitar a rolagem
  onChange: PropTypes.func, // Propriedade opcional onChange
}

function DropdownFCA({
  etiqueta,
  desativado,
  valores,
  setValor,
  titulo,
  withScroll,
  setEstado,
  valor1,
  valor2,
  setFCA,
  onChange,
}) {
  const maxVisibleItems = 5

  const dropdownMenuStyle = {
    maxHeight: withScroll ? `${maxVisibleItems * 38}px` : 'auto',
    overflowY: withScroll ? 'auto' : 'visible',
  }

  return (
    <>
      <CFormLabel
        htmlFor="colFormLabelSm"
        className="col-sm-2 col-form-label col-form-label-sm w-100"
      >
        {titulo}
      </CFormLabel>
      <CDropdown className="mt-3">
        <CDropdownToggle color="white" style={{ border: '1px solid black' }} disabled={desativado}>
          {etiqueta}
        </CDropdownToggle>
        <CDropdownMenu style={dropdownMenuStyle}>
          {valores.map((itemValor) => (
            <CDropdownItem
              key={itemValor}
              onClick={() => {
                setValor(itemValor)
                setEstado(true)
                if (onChange) onChange(itemValor)
              }}
            >
              {itemValor}
            </CDropdownItem>
          ))}
        </CDropdownMenu>
      </CDropdown>
    </>
  )
}

DropdownFCA.propTypes = {
  valor1: PropTypes.string.isRequired,
  valor2: PropTypes.string.isRequired,
  setFCA: PropTypes.node.isRequired,
  setEstado: PropTypes.node.isRequired,
  titulo: PropTypes.string.isRequired,
  etiqueta: PropTypes.string.isRequired,
  desativado: PropTypes.bool,
  valores: PropTypes.array.isRequired,
  setValor: PropTypes.func.isRequired,
  withScroll: PropTypes.bool,
  onChange: PropTypes.func, // Propriedade opcional onChange
}

export { Dropdown, DropdownFCA }

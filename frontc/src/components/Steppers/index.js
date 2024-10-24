import React from 'react'
import { CButtonGroup, CFormCheck } from '@coreui/react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

function Steppers2passos({ rota1, rota2, ativo1, ativo2 }) {
  return (
    <CButtonGroup
      role="group"
      aria-label="Basic checkbox toggle button group"
      className="w-25 mt-3 ms-3"
    >
      <Link to={rota1}>
        <CFormCheck
          type="radio"
          button={{ color: 'primary', variant: 'outline' }}
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          label="1"
          defaultChecked={ativo1}
        />
      </Link>
      <Link to={rota2}>
        <CFormCheck
          type="radio"
          button={{ color: 'primary', variant: 'outline' }}
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
          label="2"
          defaultChecked={ativo2}
        />
      </Link>
    </CButtonGroup>
  )
}

function Steppers3passos({ rota1, rota2, rota3, ativo1, ativo2, ativo3 }) {
  return (
    <CButtonGroup
      role="group"
      aria-label="Basic checkbox toggle button group"
      className="w-25 mt-3 ms-3"
    >
      <Link to={rota1}>
        <CFormCheck
          type="radio"
          button={{ color: 'primary', variant: 'outline' }}
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          label="1"
          defaultChecked={ativo1}
        />
      </Link>
      <Link to={rota2}>
        <CFormCheck
          type="radio"
          button={{ color: 'primary', variant: 'outline' }}
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
          label="2"
          defaultChecked={ativo2}
        />
      </Link>
      <Link to={rota3}>
        <CFormCheck
          type="radio"
          button={{ color: 'primary', variant: 'outline' }}
          name="btnradio"
          id="btnradio3"
          autoComplete="off"
          label="3"
          defaultChecked={ativo3}
        />
      </Link>
    </CButtonGroup>
  )
}

Steppers2passos.propTypes = {
  rota1: PropTypes.string.isRequired,
  rota2: PropTypes.string.isRequired,
  ativo1: PropTypes.bool.isRequired,
  ativo2: PropTypes.bool.isRequired,
}

Steppers3passos.propTypes = {
  rota1: PropTypes.string.isRequired,
  rota2: PropTypes.string.isRequired,
  rota3: PropTypes.string.isRequired,
  ativo1: PropTypes.bool.isRequired,
  ativo2: PropTypes.bool.isRequired,
  ativo3: PropTypes.bool.isRequired,
}

export { Steppers2passos, Steppers3passos }

import React from 'react'
import { CCol, CButton, CRow } from '@coreui/react'
import PropTypes from 'prop-types'
import useCreateFCA from '../../hooks/UseCreateFCA'

const AtualizarTorres = ({ descricao, texto, texto1 }) => {
  const { encaminharPara } = useCreateFCA()

  const handleVoltar = () => {
    encaminharPara('/main')
  }

  return (
    <CRow className="d-flex justify-content-center align-items-center min-vh-100">
      <CCol sm="12">
        <div className="card p-3 border shadow text-center">
          <h3>{descricao}</h3>
          <p>{texto}</p>
          <p>{texto1}</p>
        </div>
      </CCol>
      <CCol sm="12" className="mt-3 text-center">
        <CButton color="primary" onClick={handleVoltar}>
          Voltar
        </CButton>
      </CCol>
    </CRow>
  )
}

AtualizarTorres.propTypes = {
  descricao: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  texto1: PropTypes.string.isRequired,
}

export default AtualizarTorres

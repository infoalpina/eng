import React from 'react'
import { Imagens } from '../index'
import { CCol, CRow } from '@coreui/react'
import grafico02 from '../../assets/images/grafico_de_seta.jpg'
import grafico04 from '../../assets/images/graficos_gerais.png'

export default function Editarusuarios() {
  return (
    <div>
      <CRow>
        <h1 className="m-4"> Dashboards</h1>
      </CRow>
      <CRow className="d-flex align-items-center justify-content-end">
        <Imagens src={grafico02} altura={'30rem'} largura={'30rem'} />
      </CRow>
      <CRow className="d-flex align-items-center justify-content-start">
        <Imagens src={grafico04} altura={'30rem'} largura={'30rem'} />
      </CRow>
    </div>
  )
}

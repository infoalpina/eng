import React from 'react'
import PropTypes from 'prop-types'
import { Sidebar, Cabecalho, Deslogin } from '../components/index'
import { CContainer, CRow, CCol, CNavbar } from '@coreui/react'
import axios from 'axios'
import UseDeslogin from '../hooks/UseDeslogin'

export default function Corpo({
  titulo,
  cabecalhoSecundario,
  conteudoPrimario,
  conteudoSecundario,
  conteudoTerciario,
  open,
}) {
  const { desabled } = UseDeslogin()
  const logout = async (e) => {
    const rota = '/'
    desabled(rota)
  }

  return (
    <>
      <CContainer fluid className="h-100 p-0 m-0 ">
        <header
          className="d-flex wrap justify-content-center align-items-around w-100 bg-success"
          style={{
            position: 'fixed',
            top: '0',
            right: '0',
            zIndex: '10',
          }}
        >
          <CNavbar
            colorScheme="light"
            style={{ background: '#2EB85C' }}
            className="w-100 d-flex align-items-center justify-content-center"
          >
            <CCol xs="4" className="d-flex justify-content-center">
              <Sidebar open={open} />
            </CCol>
            <CCol> {titulo} </CCol>
            <CCol xs="4" className="d-flex justify-content-center">
              <Deslogin descricao={'Desconectar'} funcao={logout} />
            </CCol>
          </CNavbar>
        </header>
        <main className="pt-5">
          <CCol md={12} className="d-flex wrap justify-content-center align-itens-center">
            <CCol md={9}>
              <CCol> {cabecalhoSecundario} </CCol>
              <CRow className="d-flex wrap justify-content-center align-itens-center">
                {conteudoPrimario}
              </CRow>
              <CRow className="d-flex wrap justify-content-center align-itens-center">
                {conteudoSecundario}
              </CRow>
              <CRow className="d-flex wrap justify-content-center align-itens-center">
                {conteudoTerciario}
              </CRow>
            </CCol>
          </CCol>
        </main>
      </CContainer>
    </>
  )
}

Corpo.propTypes = {
  titulo: PropTypes.string.isRequired,
  cabecalhoSecundario: PropTypes.node.isRequired,
  conteudoPrimario: PropTypes.node.isRequired,
  conteudoSecundario: PropTypes.node.isRequired,
  conteudoTerciario: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
}

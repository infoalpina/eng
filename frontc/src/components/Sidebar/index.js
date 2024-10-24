import React, { useState, useEffect } from 'react'
import { CSidebar, CSidebarNav, CNavTitle, CNavItem, CButton } from '@coreui/react'
import { Imagens } from '../index'
import Image from '../../assets/images/barra_lateral.png'
import Logo from '../../assets/images/user.png'
import { useUser } from '../../userContext'
import retorno from '../../assets/images/Back.png'
import { useCookies } from 'react-cookie'

export default function Sidebar(open) {
  const [sidebar, setSidebar] = useState(false)
  const [sidebar2, setSidebar2] = useState(false)
  const [cookies] = useCookies(['name', 'user', 'timeOut'])
  const [itsVersionament, setItsVersionament] = useState('Desktop')
  const name = cookies.name
  const user = cookies.user
  const timeOut = cookies.timeOut

  useEffect(() => {
    if (open.open) {
      setSidebar(true)
      setSidebar2(false)
    } else {
      setSidebar(false)
      setSidebar2(true)
    }
  }, [open])
  const [isMobile, setIsMobile] = useState(false)
  const [projeto, setProjeto] = useState(false)
  const [torres, setTorres] = useState(false)
  const [usuario, setusuario] = useState(false)
  const [larguraSideBar, setlarguraSideBar] = useState(false)

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
    setSidebar2((prevState) => !prevState)
  }

  const toggleProjeto = () => {
    setProjeto((prevState) => !prevState)
  }

  const toggleTorres = () => {
    setTorres((prevState) => !prevState)
  }

  useEffect(() => {
    if (user === 'Engenhariaengenharia') {
      setusuario('Engenharia')
    } else {
      setusuario('Comum')
    }
    function handleResize() {
      const { innerWidth } = window
      if (innerWidth < 768) {
        setItsVersionament('Celular')
      } else if (innerWidth >= 768 && innerWidth < 992) {
        setItsVersionament('Tablet')
      } else {
        setItsVersionament('Desktop')
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (itsVersionament === 'Desktop') {
      setlarguraSideBar('25')
    } else if (itsVersionament === 'Tablet') {
      setlarguraSideBar('50')
    } else {
      setlarguraSideBar('100')
    }
  }, [itsVersionament])

  console.log('itsversionament', itsVersionament)

  return (
    <>
      {sidebar && (
        <CSidebar
          className={`d-flex wrap justify-content-center align-items-center w-${larguraSideBar} h-100`}
          style={{
            background: '#2EB85C',
            position: 'fixed',
            left: '0',
            top: '0',
            zIndex: 5,
            padding: '2.5rem 0',
          }}
        >
          <CSidebarNav
            className={`d-flex wrap justify-content-center align-items-center w-${larguraSideBar} h-100`}
            style={{
              background: '#2EB85C',
              position: 'fixed',
              left: '0',
              top: '0',
              width: '25%',
              height: '100%',
            }}
          >
            <CButton
              onClick={toggleSidebar}
              color="success"
              style={{
                height: '60px',
                position: 'fixed',
                left: '0',
                top: '0rem',
                width: '6.2rem',
              }}
            >
              <Imagens src={retorno} altura="3rem" largura="3rem" />
            </CButton>
            <div className="d-flex flex-column align-items-center">
              <Imagens src={Logo} altura={'8rem'} largura={'8rem'} />
              <div>
                <p>Nome: {name}</p>
                <p>Tipo de usuário: {usuario} </p>
              </div>
            </div>
            <CNavTitle
              style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', margin: '1rem 0' }}
            >
              Funções
            </CNavTitle>
            <div className="d-flex flex-column align-items-center" style={{ overflowY: 'auto' }}>
              {user === 'EngenhariaComumEngenharia' && (
                <>
                  <CButton onClick={toggleProjeto} color="success">
                    Projetos
                  </CButton>
                  {projeto && (
                    <>
                      <CNavItem href="#/FCA"> FCA </CNavItem>
                      <CNavItem href="#/selecao"> Seleção </CNavItem>
                    </>
                  )}
                </>
              )}
              {user === 'Engenhariaengenharia' && (
                <>
                  <CButton onClick={toggleProjeto} color="success">
                    Projetos
                  </CButton>
                  {projeto && (
                    <>
                      <CNavItem href="#/FCA"> FCA </CNavItem>
                      <CNavItem href="#/selecao"> Seleção </CNavItem>
                    </>
                  )}
                  <CButton onClick={toggleTorres} color="success">
                    Gerenciamento / Cadastro
                  </CButton>
                  {torres && (
                    <>
                      <CNavItem href="#/Gerenciamentodetorres/true"> Gerenciamento </CNavItem>
                      <CNavItem href="#/CriarTorresSelecao1"> Cadastro de Torres-Seleção</CNavItem>
                      <CNavItem href="#/CriarTorresFCA1"> Cadastro Resfriadores-FCA</CNavItem>
                    </>
                  )}
                </>
              )}
            </div>
          </CSidebarNav>
        </CSidebar>
      )}
      {sidebar2 && (
        <div
          style={{
            background: '#2EB85C',
            width: '100px',
            display: 'flex',
            justifyContent: 'center',
            height: '2%',
            zIndex: '10',
          }}
        >
          <CButton
            onClick={toggleSidebar}
            color="success"
            style={{
              height: '40px',
              position: 'fixed',
              left: '0',
              top: '0rem',
              width: '6.2rem',
            }}
          >
            <Imagens src={Image} altura="2rem" largura="2rem" />
          </CButton>
        </div>
      )}
    </>
  )
}

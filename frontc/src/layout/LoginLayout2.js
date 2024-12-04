import React, { useState } from 'react'
import { Input, Usuario, Submit, LogoImage } from '../components/index'
import { CContainer, CRow, CCol } from '@coreui/react'
import Logo from '../assets/images/engrenagem.png'
import User from '../assets/images/user.png'
import UseEnviarRoutes from '../hooks/UseEnviarRoutes'
import { useUser } from 'src/userContext'
import ReCAPTCHA from 'react-google-recaptcha'

function LoginLayout() {
  let [usuario, setUsuario] = useState('')
  let [senha, setSenha] = useState('')
  let [msg, setMsg] = useState('')
  const { dominio } = useUser()
  const [captcha, setCaptcha] = useState(false)
  const { validation } = UseEnviarRoutes()

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    if (captcha) {
      await submit()
    } else {
      setMsg('Por favor, preencha o captcha')
    }
  }

  const onChangeCaptcha = (value) => {
    setCaptcha(value)
  }

  const submit = async (e) => {
    //url1 sera local aonde a pagina sera enviada
    const rota = '/main'
    //url2 sera local aonde a pagina ira verificar os dados no backend
    const buscarDados = `${dominio}backengenharia/login/access/`

    const dados = {
      usuario: usuario,
      senha: senha,
      captcha: captcha,
    }

    const mensagens = validation(rota, buscarDados, dados)
    console.log(mensagens)
    if (Array.isArray(mensagens)) {
      setMsg(mensagens)
    } else {
      setMsg(['Erro inesperado'])
    }
  }

  return (
    <main>
      <div
        className="d-flex align-items-center justify-content-center bg-success w-100"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: -1,
        }}
      >
        <LogoImage
          src={Logo}
          style={{
            animation: 'clockwise 1s infinite linear',
            transformOrigin: 'center center',
          }}
        />
      </div>
      <div
        className="d-flex align-items-center justify-content-center bg-white w-100 p-5"
        style={{
          position: 'fixed',
          top: 200,
          right: 0,
        }}
      >
        <CContainer>
          <CRow className="justify-content-center">
            <CCol className="align-items-center">
              <Usuario src={User} />
            </CCol>
          </CRow>
          <CRow className="justify-content-center">
            <CCol>
              <Input etiqueta={'Usuário'} name={'usuario'} input={usuario} setinput={setUsuario} />
            </CCol>
          </CRow>
          <CRow className="justify-content-center">
            <CCol>
              <Input etiqueta={'Senha'} name={'senha'} input={senha} setinput={setSenha} />
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <ReCAPTCHA
                sitekey="6LfyLccpAAAAANyipAsBoNUzKonrlySyj0JNVcD0"
                onChange={onChangeCaptcha}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              {/*<Submit descricao={'Acessar'} funcao={handleFormSubmit} />*/}
              <Submit descricao={'Acessar'} funcao={submit} />
            </CCol>
          </CRow>
        </CContainer>
      </div>
      <footer></footer>
    </main>
  )
}

export default LoginLayout

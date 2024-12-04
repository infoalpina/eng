import { React, useState } from 'react'
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
  const [captcha, setCaptcha] = useState(false)
  const { dominio } = useUser()
  const { validation } = UseEnviarRoutes()

  const onChangeCaptcha = (value) => {
    setCaptcha(value)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    if (captcha) {
      await submit()
    } else {
      setMsg('Por favor, preencha o captcha')
    }
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

    const mensagens = await validation(rota, buscarDados, dados)
    console.log(mensagens)
    if (Array.isArray(mensagens)) {
      setMsg(mensagens)
    } else {
      setMsg(['Erro inesperado'])
    }
  }
  return (
    <>
      <main
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CContainer fluid className="h-100 p-0 m-0 w-100">
          <CRow className="p-0 m-0 h-100">
            <CCol
              xs="4"
              className="bg-success h-100 d-flex align-items-center justify-content-end"
            ></CCol>
            <CCol xs="2" className=" d-flex align-items-center bg-success" style={{ zIndex: -1 }}>
              <LogoImage
                src={Logo}
                style={{
                  animation: 'clockwise 1s infinite linear',
                  transformOrigin: 'center center',
                }}
              />
            </CCol>
            <CCol
              xs="6"
              className="bg-white h-100 d-flex align-items-center justify-content-center"
            >
              <form style={{ width: '75%' }}>
                <CContainer>
                  <CRow className="justify-content-center">
                    <CCol className="align-items-center">
                      <Usuario src={User} />
                    </CCol>
                  </CRow>
                  <CRow className="justify-content-center">
                    <CCol>
                      <Input
                        etiqueta={'Usuário'}
                        input={usuario}
                        setinput={setUsuario}
                        desativado={false}
                        tipo={'text'}
                      />
                    </CCol>
                  </CRow>
                  <CRow className="justify-content-center">
                    <CCol>
                      <Input
                        etiqueta={'Senha'}
                        input={senha}
                        setinput={setSenha}
                        tipo={'password'}
                        desativado={false}
                      />
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
                      <Submit descricao={'Acessar'} funcao={submit} />
                      {/*<Submit descricao={'Acessar'} funcao={handleFormSubmit} />*/}
                    </CCol>
                  </CRow>
                  {Array.isArray(msg) &&
                    msg.map((mensagem, index) => (
                      <CRow key={index}>
                        <CCol>{mensagem}</CCol>
                      </CRow>
                    ))}
                </CContainer>
              </form>
            </CCol>
          </CRow>
        </CContainer>
      </main>
      <footer></footer>
    </>
  )
}

export default LoginLayout

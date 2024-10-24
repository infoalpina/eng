import React, { useState, useEffect } from 'react'

import {
  Input,
  Success,
  Cancel,
  Bombas,
  Ventiladores,
  Acionamentos,
  Feixes,
  Checkbox,
} from '../index'
import { CCol, CRow, CCard, CCardBody } from '@coreui/react'
import PropTypes from 'prop-types'
import useCreateFCA from '../../hooks/UseCreateFCA'
import { useUser } from 'src/userContext'

const DadosPrincipaisFCA = ({ titulo, dis, dados }) => {
  const { dominio } = useUser()
  const [dadosFormulariosBombas, setDadosFormulariosBombas] = useState([])
  const [dadosFormulariosVentiladores, setDadosFormulariosVentiladores] = useState([])
  const [dadosFormulariosAcionamentos, setDadosFormulariosAcionamentos] = useState([])
  const [dadosFormulariosFeixes, setDadosFormulariosFeixes] = useState([])
  const [dadosFormulariosBombasOld, setDadosFormulariosBombasOld] = useState([])
  const [dadosFormulariosVentiladoresOld, setDadosFormulariosVentiladoresOld] = useState([])
  const [dadosFormulariosAcionamentosOld, setDadosFormulariosAcionamentosOld] = useState([])
  const [dadosFormulariosFeixesOld, setDadosFormulariosFeixesOld] = useState([])

  const [permissioncadastro, setPermissionCadastro] = useState('')
  const [id, setId] = useState()
  const [ativo, setAtivo] = useState('')
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false)
  const [erromsg, seterromsg] = useState([])
  const [nome, setNome] = useState('')
  const [compFeixe, setCompFeixe] = useState('')
  const [areasTransversais, setAreasTransversais] = useState('')
  const [larguraDaTorre, setLarguraDaTorre] = useState('')
  const [comprimentoDasTorre, setComprimentoDasTorre] = useState('')
  const [alturaDaTorre, setAlturaDaTorre] = useState('')
  const [areaLivreDoVentilador, setAreaLivreDoVentilador] = useState('')
  const [velocidadePeriferica, setVelocidadePeriferica] = useState('')
  const [n_feixes, setN_feixes] = useState('')
  const [FCA, setFCA] = useState('')
  const [numeroDeTubosVertical, setNumeroDeTubosVertical] = useState('')
  const [distanciaEntreTubos, setDistanciaEntreTubos] = useState('')
  const [diametrosExternosEntreTubos, setDiametrosExternosEntreTubos] = useState('')
  const [diametrosInternosEntreTubos, setDiametrosInternosEntreTubos] = useState('')
  const { validarCreateFCA, encaminharPara, enviarDadosParaBackend } = useCreateFCA()
  const [itsVersionament, setItsVersionament] = useState('Desktop')
  const [showCCol, setShowCCol] = useState(true)
  const [LarguraForm, setLarguraForm] = useState('w-100')
  const [isStandard, setIsStandard] = useState(true)
  const [forcOuInd, setForcOuInd] = useState('Forçado')
  const [tipoDeCarcaca, settipoDeCarcaca] = useState()

  const handleDeleteValores = (event) => {
    event.preventDefault()
    const values = { id: dados }
    const rota = `${dominio}backengenharia/calculoFCA/DeleteTorres/`
    enviarDadosParaBackend(rota, values)
    encaminharPara(`../TorreDeletadaComSucesso/${[ativo]}`)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const rota = `${dominio}backengenharia/calculoFCA/filtroLerTorres/${dados}/`
        const response = await fetch(rota)
        if (!response.ok) {
          const errorMessage = await response.text()
          throw new Error(`Solicitação falhou: ${errorMessage}`)
        }

        const data = await response.json()
        const dataArray = Object.values(data)

        setLoading(true)

        if (loading) {
          setNome(
            data['data'][0]['fca'].nome.toString().slice(0, -1) +
              '/' +
              data['data'][0]['fca'].nome.toString().slice(-1),
          )
        }

        setData(dataArray)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (loading && data && data[0] && data[0][0]) {
      console.log('data', data)
      setId(data[0][0].fca.id)
      setAtivo(data[0][0].fca.ativado)
      setNome(data[0][0].fca.nome)
      setCompFeixe(data[0][0].fca.comprimento_feixe)
      setAreasTransversais(data[0][0].fca.areas_transversais)
      setLarguraDaTorre(data[0][0].fca.largura)
      setComprimentoDasTorre(data[0][0].fca.comprimento)
      setAlturaDaTorre(data[0][0].fca.altura)
      setAreaLivreDoVentilador(data[0][0].fca.area_livre_ventilador)
      setVelocidadePeriferica(data[0][0].fca.velocidade_periferica)
      setN_feixes(data[0][0].fca.N_feixes)
      setDadosFormulariosBombasOld(data[0][0].bomba)
      setDadosFormulariosVentiladoresOld(data[0][0].ventiladores)
      setDadosFormulariosAcionamentosOld(data[0][0].acionamentos)
      setDadosFormulariosFeixesOld(data[0][0].feixes)
      setIsStandard(data[0][0].fca.tower_is_standard)
      setForcOuInd(data[0][0].fca.forcOuInd)
      console.log('data', data)
      settipoDeCarcaca(data[0][0].fca.tipoDeCarcaca)
    }
  }, [loading, data, dados])

  const handleProcessarValores = (event) => {
    event.preventDefault()
    const dados = {
      Nome: nome,
      Comprimento_dos_feixes: compFeixe,
      Áreas_transversais: areasTransversais,
      numero_de_feixes: n_feixes,
      largura_da_torre: larguraDaTorre,
      Comprimento_da_torre: comprimentoDasTorre,
      Altura_da_torre: alturaDaTorre,
      Area_livre_do_ventilador: areaLivreDoVentilador,
      Velocidade_periférica: velocidadePeriferica,
      FCA: FCA,
      Número_de_tubos_vertical: numeroDeTubosVertical,
      Distância_entre_tubos: distanciaEntreTubos,
      Diâmetro_externo_entre_tubos: diametrosExternosEntreTubos,
      Diâmetro_interno_entre_tubos: diametrosInternosEntreTubos,
      dadosFormulariosBombas: dadosFormulariosBombas,
      dadosFormulariosVentiladores: dadosFormulariosVentiladores,
      dadosFormulariosAcionamentos: dadosFormulariosAcionamentos,
      dadosFormulariosFeixes: dadosFormulariosFeixes,
      tower_is_standard: isStandard,
      forcOuInd: forcOuInd,
      tipoDeCarcaca: tipoDeCarcaca,
    }
    const mensagensErro = validarCreateFCA(
      nome,
      areasTransversais,
      larguraDaTorre,
      comprimentoDasTorre,
      alturaDaTorre,
      dadosFormulariosFeixes,
      dadosFormulariosBombas,
      dadosFormulariosVentiladores,
      dadosFormulariosAcionamentos,
      forcOuInd,
    )
    if (mensagensErro.length === 0) {
      const rota = `${dominio}backengenharia/calculoFCA/Create/`
      const verification = enviarDadosParaBackend(rota, dados)
        .then((verification) => {
          setPermissionCadastro(verification.data)
          encaminharPara(`../TorreCadastradaComSucesso/${verification.data}`)
        })
        .catch((error) => {
          console.error(error)
        })
    }
    seterromsg(mensagensErro)
  }

  const handleUpdateValores = (event) => {
    event.preventDefault()

    const dados = {
      id: id,
      Nome: nome,
      Comprimento_dos_feixes: compFeixe,
      Áreas_transversais: areasTransversais,
      numero_de_feixes: n_feixes,
      largura_da_torre: larguraDaTorre,
      Comprimento_da_torre: comprimentoDasTorre,
      Altura_da_torre: alturaDaTorre,
      Area_livre_do_ventilador: areaLivreDoVentilador,
      Velocidade_periférica: velocidadePeriferica,
      FCA: FCA,
      Número_de_tubos_vertical: numeroDeTubosVertical,
      Distância_entre_tubos: distanciaEntreTubos,
      Diâmetro_externo_entre_tubos: diametrosExternosEntreTubos,
      Diâmetro_interno_entre_tubos: diametrosInternosEntreTubos,
      dadosFormulariosBombas: dadosFormulariosBombasOld,
      dadosFormulariosVentiladores: dadosFormulariosVentiladoresOld,
      dadosFormulariosAcionamentos: dadosFormulariosAcionamentosOld,
      dadosFormulariosFeixes: dadosFormulariosFeixesOld,
      tower_is_standard: isStandard,
      forcOuInd: forcOuInd,
      tipoDeCarcaca: tipoDeCarcaca,
    }

    const mensagensErro = validarCreateFCA(
      nome,
      areasTransversais,
      larguraDaTorre,
      comprimentoDasTorre,
      alturaDaTorre,
      dadosFormulariosFeixes,
      dadosFormulariosBombas,
      dadosFormulariosVentiladores,
      dadosFormulariosAcionamentos,
      forcOuInd,
    )
    if (mensagensErro.length === 0) {
      const rota = `${dominio}backengenharia/calculoFCA/filtroUpdateTorres/`
      enviarDadosParaBackend(rota, dados)
        .then((verification) => {
          encaminharPara(`../TorreAtualizadaComSucesso/${verification.data}`)
        })
        .catch((error) => {
          console.error(error)
        })
    } else {
      seterromsg(mensagensErro)
    }
  }

  const handleToSwitchOffValores = (event) => {
    setNome('')
    setCompFeixe('')
    setAreasTransversais('')
    setLarguraDaTorre('')
    setComprimentoDasTorre('')
    setAlturaDaTorre('')
    setAreaLivreDoVentilador('')
    setVelocidadePeriferica('')
    setN_feixes('')
    setFCA('')
    setNumeroDeTubosVertical('')
    setDistanciaEntreTubos('')
    setDiametrosExternosEntreTubos('')
    setDiametrosInternosEntreTubos('')
    setDadosFormulariosBombas([])
    setDadosFormulariosVentiladores([])
  }

  let button

  if (ativo) {
    button = <Cancel descricao={'Desativar'} funcao={handleDeleteValores} />
  } else {
    button = <Success descricao={'Ativar'} funcao={handleDeleteValores} />
  }

  useEffect(() => {
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
      setShowCCol(true)
      setLarguraForm('w-100')
    } else if (itsVersionament === 'Tablet') {
      setShowCCol(false)
      setLarguraForm('w-100')
    } else {
      setShowCCol(false)
      setLarguraForm('w-75')
    }
  }, [itsVersionament])

  const handleCheckboxChange = (e) => {
    setIsStandard(e.target.checked)
  }
  return (
    <>
      <form
        className={`border rounded m-3 p-3 ${LarguraForm}`}
        style={{ border: '1px solid black', borderRadius: '10px' }}
      >
        <CRow>
          <CCol md={'12'}>
            <CCol>
              <h1>FCA</h1>
            </CCol>
            <CRow
              className="border rounded m-3 p-3"
              style={{ border: '1px solid black', borderRadius: '10px' }}
            >
              <CRow
                className="border rounded m-3 p-3"
                style={{ border: '1px solid black', borderRadius: '10px' }}
              >
                <CCol>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={isStandard}
                      onChange={handleCheckboxChange}
                      disabled={dis}
                      id="isStandardCheckbox"
                    />
                    <label className="form-check-label" htmlFor="isStandardCheckbox">
                      O modelo é padrão?
                    </label>
                  </div>
                </CCol>
              </CRow>
              {showCCol ? (
                <>
                  <CCol>
                    <Input
                      etiqueta={'Modelo'}
                      desativado={dis}
                      input={nome}
                      setinput={setNome}
                      tipo={'Text'}
                    />
                  </CCol>
                </>
              ) : (
                <>
                  <Input
                    etiqueta={'Nome'}
                    desativado={dis}
                    input={nome}
                    setinput={setNome}
                    tipo={'Text'}
                  />
                </>
              )}

              {showCCol ? (
                <CCol>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={forcOuInd === 'Forçado'}
                      onChange={() => setForcOuInd('Forçado')}
                      disabled={dis}
                      id="checkbox1"
                    />
                    <label className="form-check-label" htmlFor="checkbox1">
                      Forçado
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={forcOuInd === 'Induzido'}
                      onChange={() => setForcOuInd('Induzido')}
                      disabled={dis}
                      id="checkbox2"
                    />
                    <label className="form-check-label" htmlFor="checkbox2">
                      Induzido
                    </label>
                  </div>
                </CCol>
              ) : (
                <>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={forcOuInd === 'Forçado'}
                      onChange={() => setForcOuInd('Forçado')}
                      disabled={dis}
                      id="checkbox1"
                    />
                    <label className="form-check-label" htmlFor="checkbox1">
                      Forçado
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={forcOuInd === 'Induzido'}
                      onChange={() => setForcOuInd('Induzido')}
                      disabled={dis}
                      id="checkbox2"
                    />
                    <label className="form-check-label" htmlFor="checkbox2">
                      Induzido
                    </label>
                  </div>
                </>
              )}
            </CRow>

            <CRow
              md={'12'}
              className="border rounded m-3 p-3"
              style={{ border: '1px solid black', borderRadius: '10px' }}
            >
              {showCCol ? (
                <>
                  <CCol>
                    <Input
                      etiqueta={'Áreas transversais (m²)'}
                      desativado={dis}
                      tipo={'number'}
                      input={areasTransversais}
                      setinput={setAreasTransversais}
                    />
                  </CCol>
                  <CCol>
                    <Input
                      etiqueta={'Tipo de carcaça'}
                      desativado={dis}
                      tipo={'text'}
                      input={tipoDeCarcaca}
                      setinput={settipoDeCarcaca}
                    />
                  </CCol>
                </>
              ) : (
                <>
                  <Input
                    etiqueta={'Tipo de carcaça'}
                    desativado={dis}
                    tipo={'text'}
                    input={tipoDeCarcaca}
                    setinput={settipoDeCarcaca}
                  />
                  <Input
                    etiqueta={'Áreas transversais (m²)'}
                    desativado={dis}
                    tipo={'number'}
                    input={areasTransversais}
                    setinput={setAreasTransversais}
                  />
                </>
              )}
            </CRow>

            <CRow
              md={'12'}
              className="border rounded m-3 p-3"
              style={{ border: '1px solid black', borderRadius: '10px' }}
            >
              {showCCol ? (
                <>
                  <CCol>
                    <Input
                      etiqueta={'Largura da torre (mm)'}
                      desativado={dis}
                      tipo={'number'}
                      input={larguraDaTorre}
                      setinput={setLarguraDaTorre}
                    />
                  </CCol>
                  <CCol>
                    <Input
                      etiqueta={'Comprimento da torre (mm)'}
                      desativado={dis}
                      tipo={'number'}
                      input={comprimentoDasTorre}
                      setinput={setComprimentoDasTorre}
                    />
                  </CCol>
                  <CCol>
                    <Input
                      etiqueta={'Altura da torre (mm)'}
                      desativado={dis}
                      tipo={'number'}
                      input={alturaDaTorre}
                      setinput={setAlturaDaTorre}
                    />
                  </CCol>
                </>
              ) : (
                <>
                  <Input
                    etiqueta={'Largura da torre (mm)'}
                    desativado={dis}
                    tipo={'number'}
                    input={larguraDaTorre}
                    setinput={setLarguraDaTorre}
                  />
                  <Input
                    etiqueta={'Comprimento da torre (mm)'}
                    desativado={dis}
                    tipo={'number'}
                    input={comprimentoDasTorre}
                    setinput={setComprimentoDasTorre}
                  />
                  <Input
                    etiqueta={'Altura da torre (mm)'}
                    desativado={dis}
                    tipo={'number'}
                    input={alturaDaTorre}
                    setinput={setAlturaDaTorre}
                  />
                </>
              )}
            </CRow>
          </CCol>
        </CRow>
        <CRow>
          <CCol md={'12'}>
            <CCol>
              <h1>Caracteristicas dos Feixes</h1>
            </CCol>
            <CRow
              md={'12'}
              className="border rounded m-3 p-3"
              style={{ border: '1px solid black', borderRadius: '10px' }}
            >
              {showCCol ? (
                <>
                  <Feixes
                    dadosFormularios={dadosFormulariosFeixes}
                    setDadosFormularios={setDadosFormulariosFeixes}
                    dis={dis}
                    dadosFormulariosOld={dadosFormulariosFeixesOld}
                    setDadosFormulariosOld={setDadosFormulariosFeixesOld}
                    loading={loading}
                  />
                </>
              ) : (
                <>
                  <Feixes
                    dadosFormularios={dadosFormulariosFeixes}
                    setDadosFormularios={setDadosFormulariosFeixes}
                    dis={dis}
                    dadosFormulariosOld={dadosFormulariosFeixesOld}
                    setDadosFormulariosOld={setDadosFormulariosFeixesOld}
                    loading={loading}
                  />
                </>
              )}
            </CRow>
          </CCol>
        </CRow>
        <CRow>
          <CCol md={'12'}>
            <CCol>
              <h1>Bombas</h1>
            </CCol>
            <CRow
              md={'12'}
              className="border rounded m-3 p-3"
              style={{ border: '1px solid black', borderRadius: '10px' }}
            >
              {showCCol ? (
                <>
                  <Bombas
                    dadosFormularios={dadosFormulariosBombas}
                    setDadosFormularios={setDadosFormulariosBombas}
                    dis={dis}
                    dadosFormulariosOld={dadosFormulariosBombasOld}
                    setDadosFormulariosOld={setDadosFormulariosBombasOld}
                    loading={loading}
                  />
                </>
              ) : (
                <>
                  <Bombas
                    dadosFormularios={dadosFormulariosBombas}
                    setDadosFormularios={setDadosFormulariosBombas}
                    dis={dis}
                    dadosFormulariosOld={dadosFormulariosBombasOld}
                    setDadosFormulariosOld={setDadosFormulariosBombasOld}
                    loading={loading}
                  />
                </>
              )}
            </CRow>
          </CCol>
        </CRow>
        <CRow>
          <CCol md={'12'}>
            <CCol>
              <h1>Ventiladores</h1>
            </CCol>
            <CRow
              md={'12'}
              className="border rounded m-3 p-3"
              style={{ border: '1px solid black', borderRadius: '10px' }}
            >
              {showCCol ? (
                <>
                  <Ventiladores
                    dadosFormularios={dadosFormulariosVentiladores}
                    setDadosFormularios={setDadosFormulariosVentiladores}
                    dis={dis}
                    dadosFormulariosOld={dadosFormulariosVentiladoresOld}
                    setDadosFormulariosOld={setDadosFormulariosVentiladoresOld}
                    loading={loading}
                  />
                </>
              ) : (
                <>
                  <Ventiladores
                    dadosFormularios={dadosFormulariosVentiladores}
                    setDadosFormularios={setDadosFormulariosVentiladores}
                    dis={dis}
                    dadosFormulariosOld={dadosFormulariosVentiladoresOld}
                    setDadosFormulariosOld={setDadosFormulariosVentiladoresOld}
                    loading={loading}
                  />
                </>
              )}
            </CRow>
          </CCol>
        </CRow>
        <CRow>
          <CCol md={'12'}>
            <CCol>
              <h1>Acionamentos</h1>
            </CCol>
            <CRow
              md={'12'}
              className="border rounded m-3 p-3"
              style={{ border: '1px solid black', borderRadius: '10px' }}
            >
              {showCCol ? (
                <>
                  <Acionamentos
                    dadosFormularios={dadosFormulariosAcionamentos}
                    setDadosFormularios={setDadosFormulariosAcionamentos}
                    dis={dis}
                    dadosFormulariosOld={dadosFormulariosAcionamentosOld}
                    setDadosFormulariosOld={setDadosFormulariosAcionamentosOld}
                    loading={loading}
                  />
                </>
              ) : (
                <>
                  <Acionamentos
                    dadosFormularios={dadosFormulariosAcionamentos}
                    setDadosFormularios={setDadosFormulariosAcionamentos}
                    dis={dis}
                    dadosFormulariosOld={dadosFormulariosAcionamentosOld}
                    setDadosFormulariosOld={setDadosFormulariosAcionamentosOld}
                    loading={loading}
                  />
                </>
              )}
            </CRow>
          </CCol>
        </CRow>
        <CRow>
          <CCol md={'12'}>
            <CRow>
              <CCard style={{ width: '100%' }} className="mt-3 mb-3">
                <CCardBody>
                  {erromsg.length > 0 && (
                    <div className="alert alert-danger" role="alert">
                      {erromsg.map((mensagem, index) => (
                        <p key={index} className="mb-0">
                          {mensagem}
                        </p>
                      ))}
                    </div>
                  )}
                </CCardBody>
              </CCard>
            </CRow>
            <CRow
              className="border rounded m-3 p-3"
              style={{ border: '1px solid black', borderRadius: '10px' }}
            >
              {showCCol ? (
                <>
                  {titulo === 'Cadastro de Torres FCA' && (
                    <>
                      <CCol>
                        <Success descricao={'Cadastrar'} funcao={handleProcessarValores} />
                      </CCol>
                      <CCol>
                        <Cancel descricao={'Limpar dados'} funcao={handleToSwitchOffValores} />
                      </CCol>
                    </>
                  )}
                  {titulo === 'Editar torres' && (
                    <>
                      <CCol>
                        <Success descricao={'Atualizar'} funcao={handleUpdateValores} />
                      </CCol>
                      <CCol>{button}</CCol>
                    </>
                  )}
                </>
              ) : (
                <>
                  {titulo === 'Cadastro de Torres FCA' && (
                    <>
                      <Success descricao={'Cadastrar'} funcao={handleProcessarValores} />
                      <Cancel descricao={'Limpar dados'} funcao={handleToSwitchOffValores} />
                    </>
                  )}
                  {titulo === 'Editar torres' && (
                    <>
                      <Success descricao={'Atualizar'} funcao={handleUpdateValores} />
                      <CCol>{button}</CCol>
                    </>
                  )}
                </>
              )}
            </CRow>
          </CCol>
        </CRow>
      </form>
    </>
  )
}

DadosPrincipaisFCA.propTypes = {
  dis: PropTypes.bool.isRequired,
  dados: PropTypes.node.isRequired,
  titulo: PropTypes.string.isRequired,
}

export default DadosPrincipaisFCA

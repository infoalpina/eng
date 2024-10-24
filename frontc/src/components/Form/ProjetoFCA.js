import React, { useState, useEffect } from 'react'
import {
  Input,
  Success,
  Cancel,
  DropdownFCA,
  Date,
  ModalFluidCooler,
  ModalBomba,
  ModalVentiladores,
  ModalAcio,
  ModalTubos,
  ModalCalorEspecifico,
} from '../index'
import { useUser } from 'src/userContext'
import { CRow, CCol, CCard, CCardBody, CFormSelect, CFormCheck } from '@coreui/react'
import useCustomNavigate from '../../hooks/UseCustomNavigate'
import { useCookies } from 'react-cookie'

const ProjetoFCA = () => {
  const { validarFCA, encaminharPara, enviarDadosParaBackend } = useCustomNavigate()
  const {
    dominio,
    setRespostaFCA,
    nomedoprojeto,
    setnomedoprojeto,
    cliente,
    setcliente,
    dataatual,
    setdataatual,
    diametrodotubo,
    setdiametrodotubo,
    tipodefluido,
    settipodefluido,
    temperaturaquente,
    settemperaturaquente,
    temperaturafria,
    settemperaturafria,
    temperaturadebulboumido,
    settemperaturadebulboumido,
    temperaturadebulboseco,
    settemperaturadebulboseco,
    vazaodeagua,
    setvazaodeagua,
    perdaDePressaoEstaticaAdicional,
    setperdaDePressaoEstaticaAdicional,
    pressaoDeArDoAmbiente,
    setpressaoDeArDoAmbiente,
    velocidadeMediaDoAr,
    setvelocidadeMediaDoAr,
    fatorDeIncrustracao,
    setfatorDeIncrustracao,
    numberBombas,
    setNumberBombas,
    torrerSelect,
    settorreSelect,
    useractive,
    setuseractive,
    idTorre,
    setidTorre,
    data,
    setData,
    tipo,
    settipo,
    bfluido,
    setbfluido,
    btubo,
    setbtubo,
    calorespecificodofluido,
    setcalorespecificodofluido,
    densidadedofluido,
    setdensidadedofluido,
    condutibilidadetermicadofluido,
    setcondutibilidadetermicadofluido,
    viscosidadedinamica,
    setviscosidadedinamica,
    erromsg,
    seterromsg,
    itsVersionament,
    setItsVersionament,
    HeightWidght,
    setHeightWidght,
    modalBomba,
    setModalBomba,
    modalVentil,
    setModalVentil,
    modalTubos,
    setModalTubos,
    modalCalorEspecifico,
    setModalCalorEspecifico,
    modelosDaTorre,
    setModelosDaTorre,
    modelosBomba,
    setModelosBomba,
    modelosVentil,
    setModelosVentil,
    modelosTubo,
    setModelosTubo,
    tipoDeCalorEspecifico,
    setTipoDeCalorEspecifico,
    valorSelectCalorEspecifico,
    setValorSelectCalorEspecifico,
    valorSelect,
    setvalorSelect,
    valorSelectBomba,
    setvalorSelectBomba,
    modalAcio,
    setModalAcio,
    valorSelectVentil,
    setvalorSelectVentil,
    valorSelectTubos,
    setvalorSelectTubos,
    DensidadeDoFlluido,
    setDensidadeDoFlluido,
    CondutibilidadeTermicaDoFluido,
    setCondutibilidadeTermicaDoFluido,
    ViscosidadeDinamicaDoFluido,
    setViscosidadeDinamicaDoFluido,
    modelosAcio,
    setModelosAcio,
    valorSelectAcio,
    setvalorSelectAcio,
    selectedCompactado,
    setSelectedCompactado,
    optionsCompactado,
    setoptionsCompactado,
  } = useUser()
  const [AlturaDoDifusor, setAlturaDoDifusor] = useState(0)
  const [cookies] = useCookies(['name', 'user', 'timeOut'])
  const user = cookies.user
  useEffect(() => {
    if (diametrodotubo === '1pol') {
      setoptionsCompactado(['Não Compactado'])
      setSelectedCompactado('Não Compactado')
    } else {
      setoptionsCompactado(['Compactado', 'Não Compactado'])
    }
  }, [diametrodotubo])

  useEffect(() => {
    if (tipodefluido === 'água') {
      setcalorespecificodofluido(4.1868)
    } else if (tipodefluido === 'óleo') {
      setcalorespecificodofluido()
    }
    setModalBomba(false)
    setModalVentil(false)
    setModalAcio(false)
    setModalTubos(false)
    setModalCalorEspecifico(false)
  }, [tipodefluido])

  useEffect(() => {
    setuseractive(user)
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
      setHeightWidght('w-100')
    } else if (itsVersionament === 'Tablet') {
      setHeightWidght('w-100')
    } else {
      setHeightWidght('w-75')
    }
  }, [itsVersionament])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rota = `${dominio}backengenharia/calculoFCA/ReadProject/`
        let response = await enviarDadosParaBackend(rota)
        setData(response)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }
    fetchData()
  }, [tipo])

  useEffect(() => {
    if (data && data.data) {
      const torresFiltradas = data.data
        .map((grupo) => grupo.filter((torre) => torre && torre['ativado']))
        .flat()
      const modelosDaTorre = torresFiltradas
        .map((torre) => {
          const nome = torre && torre['nome']
          const cod = torre && torre['id']
          if (nome && cod) {
            return `${nome} - ${cod}`
          }
          return null
        })
        .filter(Boolean)
      setModelosDaTorre(modelosDaTorre)
    }
  }, [data, tipo])

  useEffect(() => {
    if (tipodefluido === 'água' && diametrodotubo === '3/4pol') {
      settipo('1')
    } else if (tipodefluido === 'água' && diametrodotubo === '1pol') {
      settipo('2')
    } else if (tipodefluido === 'óleo' && diametrodotubo === '3/4pol') {
      settipo('3')
    } else if (tipodefluido === 'óleo' && diametrodotubo === '1pol') {
      settipo('4')
    }
  }, [diametrodotubo, tipodefluido])

  const handleValorSelecionado = (setFunction, valor) => {
    console.log('valor', valor)
    setFunction(valor)
  }

  const handleProcessarClick = (event) => {
    event.preventDefault()
    let partes = valorSelect.split('-')
    let numeroFrenteDoMenos
    if (partes.length > 1) {
      numeroFrenteDoMenos = partes[1].trim()
    } else {
      console.log('Não há número à frente do sinal de menos.')
    }
    const dados = {
      id: numeroFrenteDoMenos,
      FCA: tipo,
      diametro_de_tubo: diametrodotubo,
      tipo_de_fluido: tipodefluido,
      nome_do_projeto: nomedoprojeto,
      cliente: cliente,
      data_atual: dataatual,
      temperatura_quente_E_1: temperaturaquente,
      temperatura_fria_E_2: temperaturafria,
      temperatura_do_bulbo_umido_E_4: temperaturadebulboumido,
      temperatura_do_bulbo_seco_E_3: temperaturadebulboseco,
      vazao_de_agua_E_6: vazaodeagua,
      perda_de_pressao_estatica_adicional: perdaDePressaoEstaticaAdicional,
      numero_de_celulas_E_12: torrerSelect,
      cod_resfriador_TY: valorSelect,
      calor_especifico_do_fluido: calorespecificodofluido,
      densidade_do_fluido: densidadedofluido,
      condutibilidade_termica_do_fluido: condutibilidadetermicadofluido,
      viscosidade_dinamica: viscosidadedinamica,
      pressao_de_ar_do_ambiente: pressaoDeArDoAmbiente,
      velocidade_media_do_ar: velocidadeMediaDoAr,
      fator_de_incrustracao: fatorDeIncrustracao,
      AlturaDoDifusor: AlturaDoDifusor,
      valorSelectBomba: valorSelectBomba,
      valorSelectVentil: valorSelectVentil,
      valorSelectAcio: valorSelectAcio,
      valorSelectTubos: valorSelectTubos,
      valorSelectCalorEspecifico: valorSelectCalorEspecifico,
      selectedCompactado: selectedCompactado,
      tipodefluido: tipodefluido,
      numberBombas: numberBombas,
    }
    const mensagensErro = validarFCA(
      nomedoprojeto,
      cliente,
      diametrodotubo,
      tipodefluido,
      modelosDaTorre,
      valorSelectBomba,
      valorSelectVentil,
      valorSelectAcio,
      valorSelectTubos,
      valorSelectCalorEspecifico,
      temperaturaquente,
      temperaturafria,
      temperaturadebulboumido,
      temperaturadebulboseco,
      vazaodeagua,
      perdaDePressaoEstaticaAdicional,
      pressaoDeArDoAmbiente,
      velocidadeMediaDoAr,
      fatorDeIncrustracao,
      calorespecificodofluido,
      densidadedofluido,
      condutibilidadetermicadofluido,
      viscosidadedinamica,
      torrerSelect,
      AlturaDoDifusor,
      numberBombas,
    )
    if (mensagensErro === null) {
      const rota = `${dominio}backengenharia/calculoFCA/receive_data/`
      try {
        const verification = enviarDadosParaBackend(rota, dados)
        setRespostaFCA(verification)
        encaminharPara('../ResultadosFCA')
      } catch (error) {
        console.error(error)
      }
    }

    seterromsg(mensagensErro || [])
  }

  const processarValorSelect = async (valorSelect) => {
    if (valorSelect.includes('-')) {
      const id = valorSelect.split('-')[1].trim()
      const rotaBomba = `${dominio}backengenharia/calculoFCA/get_bomba/`
      const rotaVentiladores = `${dominio}backengenharia/calculoFCA/get_ventiladores/`
      const rotaAcionamentos = `${dominio}backengenharia/calculoFCA/get_acionamentos/`
      const rotaTubos = `${dominio}backengenharia/calculoFCA/get_tubos/`

      try {
        const [
          verificationBomba,
          verificationVentiladores,
          verificationAcionamentos,
          verificationTubos,
        ] = await Promise.all([
          enviarDadosParaBackend(rotaBomba, [id, useractive]),
          enviarDadosParaBackend(rotaVentiladores, [id, useractive]),
          enviarDadosParaBackend(rotaAcionamentos, [id, useractive]),
          enviarDadosParaBackend(rotaTubos, [id, useractive, diametrodotubo, selectedCompactado]),
        ])
        var listCondutibilTermic = {
          'Condutibilidade termica - AÇO CARBONO':
            verificationTubos['data'][0]['condutib_termic_carbon'],
          'Condutibilidade termica - AÇO INOX':
            verificationTubos['data'][0]['condutib_termic_inox'],
        }

        setTipoDeCalorEspecifico(listCondutibilTermic)
        setModalBomba(true)
        setModalVentil(true)
        setModalAcio(true)
        setModalTubos(true)
        setModalCalorEspecifico(true)
        setModelosAcio(verificationAcionamentos.data)
        setModelosBomba(verificationBomba.data)
        setModelosVentil(verificationVentiladores.data)
        setModelosTubo(verificationTubos.data)
      } catch (error) {
        console.error(error)
      }
    }
  }

  const handleSelectChange = (event) => {
    setModalBomba(false)
    setModalVentil(false)
    setModalAcio(false)
    setModalTubos(false)
    setModalCalorEspecifico(false)
    setSelectedCompactado(event.target.value)
  }
  return (
    <form
      className={`${HeightWidght} mt-3 ms-3`}
      style={{ border: '1px solid black', borderRadius: '10px' }}
    >
      <CRow
        className="border rounded m-3 p-3"
        style={{ border: '1px solid black', borderRadius: '10px' }}
      >
        <CRow>
          <CRow>
            <Input etiqueta={'Nome do projeto'} input={nomedoprojeto} setinput={setnomedoprojeto} />
          </CRow>
          <CRow>
            <Input etiqueta={'Cliente'} input={cliente} setinput={setcliente} />
          </CRow>
          <CRow>
            <Date
              desativado={true}
              etiqueta={'Digite a data do projeto'}
              campo={'Data atual'}
              input={dataatual}
              setinput={setdataatual}
            />
          </CRow>
          <h5 className={'mt-3'}>Entrada de dados para seleção</h5>
          <DropdownFCA
            titulo={'Diâmetro do tubo (mm)'}
            etiqueta={diametrodotubo}
            valores={['1pol', '3/4pol']}
            setValor={setdiametrodotubo}
            setEstado={setbtubo}
          />
        </CRow>
        <p>Selecione se é compactado</p>
        <CRow>
          <CCol xs={12} md={6}>
            <CFormSelect
              aria-label="Select Compactado"
              value={selectedCompactado}
              onChange={handleSelectChange}
            >
              {optionsCompactado.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </CFormSelect>
          </CCol>
        </CRow>
        <CRow>
          <DropdownFCA
            titulo={'Tipo de fluido'}
            etiqueta={tipodefluido}
            valores={['água', 'óleo']}
            setValor={settipodefluido}
            setEstado={setbfluido}
          />
        </CRow>
        <CRow>
          {bfluido && btubo && (
            <ModalFluidCooler
              processarValorSelect={processarValorSelect}
              descricao={'Modelos da torre'}
              texto={modelosDaTorre}
              settexto={setModelosDaTorre}
              valor={valorSelect}
              setValor={setvalorSelect}
              enviarRequisicao={handleValorSelecionado}
            />
          )}
        </CRow>
        <CRow>
          {modalBomba && (
            <ModalBomba
              descricao={'Modelos de bomba'}
              texto={modelosBomba}
              valor={valorSelectBomba}
              setValor={setvalorSelectBomba}
              enviarRequisicao={handleValorSelecionado}
            />
          )}
        </CRow>
        <CRow>
          {modalVentil && (
            <ModalVentiladores
              descricao={'Modelos de ventiladores'}
              texto={modelosVentil}
              valor={valorSelectVentil}
              setValor={setvalorSelectVentil}
              enviarRequisicao={handleValorSelecionado}
            />
          )}
        </CRow>
        <CRow>
          {modalAcio && (
            <ModalAcio
              descricao={'Modelos de acionamentos'}
              texto={modelosAcio}
              valor={valorSelectAcio}
              setValor={setvalorSelectAcio}
              enviarRequisicao={handleValorSelecionado}
            />
          )}
        </CRow>
        <CRow>
          {modalTubos && (
            <ModalTubos
              descricao={'Quantidade de tubos'}
              texto={modelosTubo}
              valor={valorSelectTubos}
              setValor={setvalorSelectTubos}
              enviarRequisicao={handleValorSelecionado}
            />
          )}
        </CRow>
        <CRow>
          {modalCalorEspecifico && (
            <ModalCalorEspecifico
              descricao={'Condutibilidade térmica'}
              texto={tipoDeCalorEspecifico}
              valor={valorSelectCalorEspecifico}
              setValor={setValorSelectCalorEspecifico}
              enviarRequisicao={handleValorSelecionado}
            />
          )}
        </CRow>
        <CRow>
          <Input
            etiqueta={'Temperatura quente (ºC)'}
            input={temperaturaquente}
            setinput={settemperaturaquente}
            tipo={'number'}
          />
        </CRow>
        <CRow>
          <Input
            etiqueta={'Temperatura fria (ºC)'}
            input={temperaturafria}
            setinput={settemperaturafria}
            tipo={'number'}
          />
        </CRow>
        <CRow>
          <Input
            etiqueta={'Temperatura do bulbo úmido (ºC)'}
            input={temperaturadebulboumido}
            setinput={settemperaturadebulboumido}
            tipo={'number'}
          />
        </CRow>
        <CRow>
          <Input
            etiqueta={'Temperatura do bulbo Seco (ºC)'}
            input={temperaturadebulboseco}
            setinput={settemperaturadebulboseco}
            tipo={'number'}
          />
        </CRow>
        <CRow>
          <Input
            etiqueta={'Vazão da água (m³/h)'}
            input={vazaodeagua}
            setinput={setvazaodeagua}
            tipo={'number'}
          />
        </CRow>
        <CRow>
          <Input
            etiqueta={'Perda de pressão estatica adicional (mmca)'}
            input={perdaDePressaoEstaticaAdicional}
            setinput={setperdaDePressaoEstaticaAdicional}
            tipo={'number'}
          />
        </CRow>
        <CRow>
          <Input
            etiqueta={'Pressão do ambiente (MBAR)'}
            input={pressaoDeArDoAmbiente}
            setinput={setpressaoDeArDoAmbiente}
            tipo={'number'}
          />
        </CRow>
        <CRow>
          <Input
            etiqueta={'Velocidade média do ar (m/s)'}
            input={velocidadeMediaDoAr}
            setinput={setvelocidadeMediaDoAr}
            tipo={'number'}
            desativado={false}
          />
        </CRow>
        <CRow>
          <Input
            etiqueta={'Fator de incrustração (m².K/W)'}
            input={fatorDeIncrustracao}
            setinput={setfatorDeIncrustracao}
            tipo={'number'}
          />
        </CRow>
        <CRow>
          {tipodefluido === 'óleo' && (
            <>
              <CRow>
                <Input
                  etiqueta={'Calor especifico do fluido (KJ/Kg.K)'}
                  input={calorespecificodofluido}
                  setinput={setcalorespecificodofluido}
                  tipo={'number'}
                />
              </CRow>
              <CRow>
                <Input
                  etiqueta={'Densidade do fluido (Kg/m³)'}
                  input={densidadedofluido}
                  setinput={setdensidadedofluido}
                  tipo={'number'}
                />
              </CRow>
              <CRow>
                <Input
                  etiqueta={'Condutibilidade térmica do fluido (W/M·K)'}
                  input={condutibilidadetermicadofluido}
                  setinput={setcondutibilidadetermicadofluido}
                  tipo={'number'}
                />
              </CRow>
              <CRow>
                <Input
                  etiqueta={'Viscosidade dinamica (KG/m.s)'}
                  input={viscosidadedinamica}
                  setinput={setviscosidadedinamica}
                  tipo={'number'}
                />
              </CRow>
            </>
          )}
        </CRow>
        <CRow>
          <Input
            etiqueta={'Quantidade de bombas (u)'}
            input={numberBombas}
            setinput={setNumberBombas}
            tipo={'number'}
          />
        </CRow>
        <CRow>
          <Input
            etiqueta={'Quantidade de torres (u)'}
            input={torrerSelect}
            setinput={settorreSelect}
            tipo={'number'}
          />
        </CRow>
      </CRow>
      <CRow>
        <Input
          etiqueta={'Altura do difusor (h)'}
          desativado={false}
          input={AlturaDoDifusor}
          setinput={setAlturaDoDifusor}
          tipo={'number'}
        />
      </CRow>
      <CRow
        className="border rounded m-3 p-3"
        style={{ border: '1px solid black', borderRadius: '10px' }}
      >
        <CCol>
          <Success descricao={'Processar'} funcao={handleProcessarClick} />
        </CCol>
        <CCol>
          <Cancel descricao={'Limpar dados'} />
        </CCol>
      </CRow>
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
    </form>
  )
}

export default ProjetoFCA

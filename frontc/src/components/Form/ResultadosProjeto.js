import React, { useState, useEffect } from 'react'
import { Input, Table1, Imagens, ModalPrint, Cancel, Submit } from '../index'
import { CRow, CCol, CSpinner } from '@coreui/react'
import excel from '../../assets/images/excel.png'
import imprimir from '../../assets/images/imprimir.png'
import useExport from '../../hooks/UseExport'
import { useUser } from 'src/userContext'
import useCustomNavigate from '../../hooks/UseCustomNavigate'
import { useCookies } from 'react-cookie'

const ResultadosProjeto = () => {
  const { exportExcelBasico, exportExcelCompleto, exportPDFBasico, exportPDFCompleto } = useExport()
  const [relatorio, setRelatorio] = useState('')
  const [dados, setDados] = useState('')
  const exportToExcel = exportExcelBasico(relatorio)
  const exportToPDF = exportPDFBasico(relatorio)

  return (
    <form
      className="w-100 mt-3 ms-3 p-5"
      style={{ border: '1px solid black', borderRadius: '10px' }}
    >
      <CCol>
        <CCol>
          <CRow
            className="border rounded m-3 p-3"
            style={{ border: '1px solid black', borderRadius: '10px' }}
          >
            <CCol
              className="border rounded p-3 d-flex justify-content-center align-items-center "
              style={{ border: '1px solid black', borderRadius: '10px' }}
            >
              <p>Desejado</p>
            </CCol>
            <Input etiqueta={'Vazão'} />
            <Input etiqueta={'TAQ'} />
            <Input etiqueta={'TAF(ºC)'} />
            <Input etiqueta={'TBU'} />
            <CRow className="d-flex justify-content-start align-items-start mt-3">
              <CCol md={2}>
                <button
                  onClick={exportToExcel}
                  style={{ background: 'transparent', border: 'none' }}
                >
                  <Imagens src={excel} altura={'100px'} />
                </button>
              </CCol>
              <CCol md={2}>
                <button onClick={exportToPDF} style={{ background: 'transparent', border: 'none' }}>
                  <Imagens src={imprimir} altura={'100px'} />
                </button>
              </CCol>
            </CRow>
          </CRow>
        </CCol>
      </CCol>
      <CCol
        className="d-flex justify-content-center align-items-center border rounded"
        style={{ border: '1px solid black', borderRadius: '10px' }}
      >
        <Table1 Dados={dados} Name={'Nome da torre'} />
      </CCol>
    </form>
  )
}

const ResultadosFCA = () => {
  const { exportExcelBasico, exportExcelCompleto, exportPDFBasico, exportPDFCompleto } = useExport()
  const {
    respostaFCA,
    setRespostaFCA,
    dominio,
    ventiladores,
    setVentiladores,
    QuestionPrint,
    setQuestionPrint,
    Observacoes,
    setObsevacoes,
    setValuesVentiladores,
    setValuesFCAs,
  } = useUser()
  const { encaminharPara } = useCustomNavigate()

  const [dadosCarregados, setDadosCarregados] = useState(false)
  const [Database, setDatabase] = useState('')
  const [Q6, setQ6] = useState('')
  const [Q9, setQ9] = useState('')
  const [Q8, setQ8] = useState('')
  const [Q7, setQ7] = useState('')
  const [R1, setR1] = useState('')
  const [H1, setH1] = useState('')
  const [X1, setX1] = useState('')
  const [L7, setL7] = useState('')
  const [R7, setR7] = useState('')
  const [T2, setT2] = useState('')
  const [H2, setH2] = useState('')
  const [X2, setX2] = useState('')
  const [X4, setX4] = useState('')
  const [M_e_11, setM_e_11] = useState('')
  const [V8_e_11, setV8_e_11] = useState('')
  const [R5, setR5] = useState('')
  const [O1, setO1] = useState('')
  const [O2, setO2] = useState('')
  const [L9, setL9] = useState('')
  const [C9, setC9] = useState('')
  const [E9_3600, setE9_3600] = useState('')
  const [R9, setR9] = useState('')
  const [N9, setN9] = useState('')
  const [A9, setA9] = useState('')
  const [G9, setG9] = useState('')
  const [M0, setM0] = useState('')
  const [V9, setV9] = useState('')
  const [M1, setM1] = useState('')
  const [R0, setR0] = useState('')
  const [T9, setT9] = useState('')
  const [R8, setR8] = useState('')
  const [A8, setA8] = useState('')
  const [V, setV] = useState('')
  const [W, setW] = useState('')
  const [K1, setK1] = useState('')
  const [N, setN] = useState('')
  const [T_K0_20, setT_K0_20] = useState('')
  const [F8, setF8] = useState('')
  const [ComprimentodeCadaTubo, setComprimentodeCadaTubo] = useState('')
  const [DiametroExternoDoTubo, setDiametroExternoDoTubo] = useState('')
  const [CoeficienteGlobal, setCoeficienteGlobal] = useState('')
  const [perdaPressaoEstaticaDoAr, setperdaPressaoEstaticaDoAr] = useState('')
  const [VelocidadeDasAguasNosTubos, setVelocidadeDasAguasNosTubos] = useState('')
  const [PerdaDePressaoDasAguasNosTubos, setPerdaDePressaoDasAguasNosTubos] = useState('')
  const [WIRKUNGSGRAD, setWIRKUNGSGRAD] = useState('')
  const [FLUEGELWINKEL, setFLUEGELWINKEL] = useState('')
  const [PotenciaConsumidaPorVentilador, setPotenciaConsumidaPorVentilador] = useState('')
  const [PotenciaConsumidaPorVentilador_1_36, setPotenciaConsumidaPorVentilador_1_36] = useState('')
  const [PotenciaTotalDosVentiladores, setPotenciaTotalDosVentiladores] = useState('')
  const [PotenciaTotalDosVentiladores_1_36, setPotenciaTotalDosVentiladores_1_36] = useState('')
  const [velocidadeMediaDoAr, setvelocidadeMediaDoAr] = useState('')
  const [tolerancia, settolerancia] = useState('')
  const [loading, setloading] = useState(true)
  const [showPrint, setShowPrint] = useState(false)
  const [Fluidos, setFluidos] = useState('')
  const [VentiladoresResults, setVentiladoresResults] = useState()
  const [serieBool, setSerieBool] = useState()
  const [pressaoEstaticaCalculada, setPressaoEstaticaCalculada] = useState()
  const [analyzingMenssage, setAnalyzingMenssage] = useState()
  const [analyzingMenssageBool, setAnalyzingMenssageBool] = useState(false)
  const { enviarDadosParaBackend } = useCustomNavigate()
  let rota = `${dominio}backengenharia/calculoFCA/AnalyzingSecondPlain/`

  useEffect(() => {
    if (!dadosCarregados) {
      const carregarDados = async () => {
        try {
          const resultado = await respostaFCA
          setAnalyzingMenssage(resultado.message)
          let analyzing = true

          const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

          while (analyzing) {
            const response = await enviarDadosParaBackend(rota, resultado)
            analyzing = !response.Analyzingbool
            console.log('response', response)
            await sleep(10)

            if (
              (response.result !== undefined && response.result !== null) ||
              (response.result !== undefined && response.result !== null)
            ) {
              const objeto0 = response.result[0]
              const objeto1 = response.result[1]

              setPressaoEstaticaCalculada(
                objeto1.perda_pressao_estatica_do_ar ? objeto1.perda_pressao_estatica_do_ar : null,
              )
              setSerieBool(objeto0.serie)
              setValuesVentiladores(objeto0.calculoVentil.data[0])
              setValuesFCAs(response)
              setFluidos(objeto1['tipo_de_fluido'])
              setDatabase(objeto0.datas)
              setvelocidadeMediaDoAr(parseFloat(objeto1.e_8))
              setQ6(parseFloat(objeto0.Q6).toFixed(4))
              setQ9(parseFloat(objeto0.Q9).toFixed(4))
              setQ8(parseFloat(objeto0.Q8).toFixed(4))
              setQ7(parseFloat(objeto0.Q7).toFixed(4))
              setR1(parseFloat(objeto0.R1).toFixed(4))
              setH1(parseFloat(objeto0.H1).toFixed(4))
              setX1(parseFloat(objeto0.X1).toFixed(4))
              setL7(parseFloat(objeto0.L7).toFixed(4))
              setR7(parseFloat(objeto0.R7).toFixed(4))
              setT2(parseFloat(objeto0.T2).toFixed(4))
              setH2(parseFloat(objeto0.H2).toFixed(4))
              setX2(parseFloat(objeto0.X2).toFixed(4))
              setX4(parseFloat(objeto0.X4).toFixed(4))
              setM_e_11(parseFloat(objeto0.vazao_massica_de_ar_por_torre).toFixed(4))
              setV8_e_11(parseFloat(objeto0.vazao_volumetrica_de_ar_por_torre).toFixed(4))
              setR5(parseFloat(objeto0.R5).toFixed(4))
              setO1(parseFloat(objeto0.O1).toFixed(4))
              setO2(parseFloat(objeto0.O2).toFixed(4))
              setL9(parseFloat(objeto0.L9).toFixed(4))
              setC9(parseFloat(objeto0.C9).toFixed(4))
              setE9_3600(parseFloat(objeto0.viscosidade_dinamica).toFixed(4))
              setR9(parseFloat(objeto0.R9).toFixed(4))
              setN9(parseFloat(objeto0.N9).toFixed(4))
              setA9(parseFloat(objeto0.A9).toFixed(4))
              setG9(parseFloat(objeto0.G9).toFixed(4))
              setM0(parseFloat(objeto0.M0).toFixed(4))
              setV9(parseFloat(objeto0.V9).toFixed(4))
              setM1(parseFloat(objeto0.M1).toFixed(4))
              setR0(parseFloat(objeto0.R0).toFixed(4))
              setT9(parseFloat(objeto0.T9).toFixed(4))
              setR8(parseFloat(objeto0.R8).toFixed(4))
              setA8(parseFloat(objeto0.A8).toFixed(4))
              setV(parseFloat(objeto0.V).toFixed(5))
              setW(parseFloat(objeto0.W).toFixed(4))

              // Lógica de tolerância
              settolerancia(-1 * parseFloat(objeto0.E_1 - objeto0.W1).toFixed(4))

              setK1(parseInt(objeto0.K1))
              setN(parseInt(objeto0.n))
              setT_K0_20(parseInt(objeto0.nome_da_torre))
              setF8(parseFloat(objeto0.F8).toFixed(4))
              setComprimentodeCadaTubo(parseFloat(objeto0.Comprimento_de_cada_tubo).toFixed(4))
              setDiametroExternoDoTubo(parseFloat(objeto0.R_R6_1).toFixed(4))
              setCoeficienteGlobal(parseFloat(objeto0.K9).toFixed(4))
              setperdaPressaoEstaticaDoAr(parseFloat(objeto0.Y5).toFixed(4))
              setVelocidadeDasAguasNosTubos(parseFloat(objeto0.W0).toFixed(4))
              setPerdaDePressaoDasAguasNosTubos(parseFloat(objeto0.V5).toFixed(4))
              setWIRKUNGSGRAD(parseFloat(objeto0.W4).toFixed(4))
              setFLUEGELWINKEL(parseFloat(objeto0.W5).toFixed(4))
              setPotenciaConsumidaPorVentilador(parseFloat(objeto0.N7).toFixed(4))
              setPotenciaConsumidaPorVentilador_1_36(parseFloat(objeto0.N7 * 1.36).toFixed(4))
              setPotenciaTotalDosVentiladores(parseFloat(objeto0.N7 * objeto0.K1).toFixed(4))
              setPotenciaTotalDosVentiladores_1_36(
                parseFloat(objeto0.N7 * objeto0.K1 * 1.36).toFixed(4),
              )

              setDadosCarregados(true)
              setloading(false)
            }
          }
        } catch (error) {
          console.error(error)
        }
      }

      carregarDados()
    }
  }, [dadosCarregados, respostaFCA])

  const handleRetornar = (event) => {
    encaminharPara('../FCA')
  }

  const handleCalcularVentilador = async (event) => {
    try {
      console.log('serieBool', serieBool)
      if (serieBool == '8E' || serieBool == '9EM2') {
        encaminharPara('../ResultadosFCAVentiladores')
        console.log('testando')
      } else {
        setShowPrint(true)
        console.log('testando 2')
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error)
    }
  }

  return loading ? (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <p>{analyzingMenssage} 79%...</p>
      <CSpinner color="primary" size="lg" />
    </div>
  ) : (
    <form
      className="w-100 mt-3 ms-3 p-5"
      style={{ border: '1px solid black', borderRadius: '10px' }}
    >
      <CCol>
        <CCol>
          <CRow
            className="border rounded m-3 p-3"
            style={{ border: '1px solid black', borderRadius: '10px' }}
          >
            <CCol
              className="border rounded p-3 d-flex justify-content-center align-items-center "
              style={{ border: '1px solid black', borderRadius: '10px' }}
            >
              <p>Desejado</p>
            </CCol>
            <CRow>Valores de carga térmica</CRow>
            <CRow>
              <Input etiqueta={'Carga térmica Total (Kw)'} desativado={true} input={Q6} />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Carga térmica por torre/fluido (Kw)'}
                desativado={true}
                input={Q9}
              />
            </CRow>
            <CRow>
              <Input etiqueta={'Carga térmica por torre/ar (Kw)'} desativado={true} input={Q8} />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Carga térmica por torre/água irrig (Kw)'}
                desativado={true}
                input={Q7}
              />
            </CRow>
            <CRow>Valores calculados para o ar</CRow>
            <CRow>Condições de entrada</CRow>
            <CRow>
              <Input etiqueta={'Densidade (Kg/M³)'} desativado={true} input={R1} />
            </CRow>
            <CRow>
              <Input etiqueta={'Entalpia (Kj/Kg)'} desativado={true} input={H1} />
            </CRow>
            <CRow>
              <Input etiqueta={'Conteudo de água (Kg/Kg)'} desativado={true} input={X1} />
            </CRow>
            <CRow>
              <Input etiqueta={'Condutibilidade térmica (W/(Mk))'} desativado={true} input={L7} />
            </CRow>
            <CRow>
              <Input etiqueta={'Número de reynold'} desativado={true} input={R7} />
            </CRow>
            <CRow>Condições de saída</CRow>
            <CRow>
              <Input etiqueta={'Temperatura (ºC)'} desativado={true} input={T2} />
            </CRow>
            <CRow>
              <Input etiqueta={'Entalpia (Kj/Kg)'} desativado={true} input={H2} />
            </CRow>
            <CRow>
              <Input etiqueta={'Conteúdo de água (Kg/Kg)'} desativado={true} input={X2} />
            </CRow>
            <CRow>
              <Input etiqueta={'Evaporação (Kg/Kg)'} desativado={true} input={X4} />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Vazão massica de ar por torre'}
                desativado={true}
                input={M_e_11 + '(Kg/h)'}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Vazão volumétrica de ar por torre (m³/s)'}
                desativado={true}
                input={V8_e_11}
                background={'#f5ef3d'}
              />
            </CRow>
            <CRow>Valores calculados para circuitos primarios</CRow>
            <CRow>
              <Input
                etiqueta={'Tolerancia na temperatura'}
                desativado={true}
                input={tolerancia}
                background={'#f5ef3d'}
              />
            </CRow>
            <CRow>
              <Input etiqueta={'Densidade média do fluido (Kg/m³)'} desativado={true} input={R5} />
            </CRow>
            <CRow>
              <Input etiqueta={'Entalpia na saída (Kj/Kg)'} desativado={true} input={O1} />
            </CRow>
            <CRow>
              <Input etiqueta={'Entalpia na entrada (Kj/Kg)'} desativado={true} input={O2} />
            </CRow>
            <CRow>
              <Input etiqueta={'Condutibilidade térmica (W/(M.K))'} desativado={true} input={L9} />
            </CRow>
            <CRow>
              <Input etiqueta={'Calor especifico (Kj/(Kg.K))'} desativado={true} input={C9} />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Viscosidade dinâmica (KG/(M.H))'}
                desativado={true}
                input={E9_3600}
              />
            </CRow>
            <CRow>
              <Input etiqueta={'Número de reynold'} desativado={true} input={R9} />
            </CRow>
            <CRow>
              <Input etiqueta={'Número de nusselt'} desativado={true} input={N9} />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Coeficiente de pelicula interna (W/(m².K))'}
                desativado={true}
                input={A9}
              />
            </CRow>
            <CRow>
              <Input etiqueta={'Vazão fluido/torre (m³/h)'} desativado={true} input={G9} />
            </CRow>
            <CRow>
              <Input etiqueta={'Vazão massica fluido (Kg/h)'} desativado={true} input={M0} />
            </CRow>
            <CRow>Valores calculados para circuitos secundarios</CRow>
            <CRow>
              <Input etiqueta={'Vazão água irigação/torre (m³/h)'} desativado={true} input={V9} />
            </CRow>
            <CRow>
              <Input etiqueta={'Massa água irrigação/torre (Kg/h)'} desativado={true} input={M1} />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Densidade de chuva(irrigação) (m³/(m².h))'}
                desativado={true}
                input={R0}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Temperatura da água na bacia'}
                desativado={true}
                input={T9 + '(ºC)'}
              />
            </CRow>
            <CRow>
              <Input etiqueta={'Número de reynold'} desativado={true} input={R8} />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Coeficiente pelicula (água irrig.)'}
                desativado={true}
                input={A8 + '(w/(m².k))'}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'perca de água por evaporação'}
                desativado={true}
                input={V + '(Kg/h)'}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'perca de água por arraste'}
                desativado={true}
                input={W + '(Kg/h)'}
              />
            </CRow>
            <CRow>
              Dados do resfriador {N} - {T_K0_20} / {K1}
            </CRow>
            <CRow>
              <Input etiqueta={'área de troca por torre (m²)'} desativado={true} input={F8} />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Comprimento de cada tubo (m)'}
                desativado={true}
                input={ComprimentodeCadaTubo}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Diâmetro externo do tubo (m)'}
                desativado={true}
                input={DiametroExternoDoTubo}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Coeficiente global (w/(m².k))'}
                desativado={true}
                input={CoeficienteGlobal}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Perda de pressão estatica do ar (mmCA)'}
                desativado={true}
                input={perdaPressaoEstaticaDoAr}
                background={'#f5ef3d'}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Velocidade da água nos tubos (m/s)'}
                desativado={true}
                input={VelocidadeDasAguasNosTubos}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Perda de pressão da água nos tubos (mCA)'}
                desativado={true}
                input={PerdaDePressaoDasAguasNosTubos}
                background={'#f5ef3d'}
              />
            </CRow>
            <CRow>
              <Input etiqueta={'Wirkungsgrad des vent'} desativado={true} input={WIRKUNGSGRAD} />
            </CRow>
            <CRow>
              <Input etiqueta={'Fluengelwinkel'} desativado={true} input={FLUEGELWINKEL} />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Potência consumida por ventilador'}
                desativado={true}
                input={
                  PotenciaConsumidaPorVentilador +
                  ' kW = ' +
                  PotenciaConsumidaPorVentilador_1_36 +
                  '(BHP)'
                }
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Potência total dos ventiladores'}
                desativado={true}
                input={
                  PotenciaTotalDosVentiladores +
                  'KW = ' +
                  PotenciaTotalDosVentiladores_1_36 +
                  '(BHP)'
                }
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Velocidade do ar (m/s) calculada'}
                desativado={true}
                input={velocidadeMediaDoAr.toFixed(2)}
                setinput={setvelocidadeMediaDoAr}
              />
            </CRow>
            {showPrint && (
              <>
                <CRow>
                  <Input
                    etiqueta={'Pressão estatica (mmCA) calculada'}
                    desativado={true}
                    input={pressaoEstaticaCalculada.toFixed(2)}
                    setinput={setPressaoEstaticaCalculada}
                  />
                </CRow>
                <CRow>
                  <Input
                    etiqueta={'Observaçoes'}
                    desativado={false}
                    input={Observacoes}
                    setinput={setObsevacoes}
                  />
                </CRow>
              </>
            )}
            {showPrint && (
              <CRow className="d-flex justify-content-start align-items-start mt-3">
                <CCol md={2}>
                  <ModalPrint
                    tipoDeFluido={Fluidos}
                    Observacoes={Observacoes}
                    descricao={<Imagens src={imprimir} altura={'100px'} />}
                    color={'transparent'}
                    texto={'Importar para PDF'}
                    enviarRequisicaoBasicoFCAAgua={() => exportPDFBasico(VentiladoresResults)}
                    enviarRequisicaoCompletoFCAAgua={() => exportPDFBasico(VentiladoresResults)}
                    enviarRequisicaoBasicoFCAOleo={() => exportPDFBasico(VentiladoresResults)}
                    enviarRequisicaoCompletoFCAOleo={() => exportPDFBasico(VentiladoresResults)}
                    enviarRequisicaoVentiladores={
                      serieBool == '8E' || serieBool == '9EM2'
                        ? () => exportPDFBasico(VentiladoresResults)
                        : undefined
                    }
                  />
                </CCol>
              </CRow>
            )}
            <CRow>
              <Cancel descricao={'Retornar'} funcao={handleRetornar} />
            </CRow>
            <CRow>
              {serieBool == '8E' || serieBool == '9EM2' ? (
                <Submit descricao={'Calcular Ventiladores'} funcao={handleCalcularVentilador} />
              ) : (
                <Submit descricao={'Imprimir'} funcao={handleCalcularVentilador} />
              )}
            </CRow>
          </CRow>
        </CCol>
      </CCol>
      <CCol
        className="d-flex justify-content-center align-items-center border rounded"
        style={{ border: '1px solid black', borderRadius: '10px' }}
      ></CCol>
    </form>
  )
}

export { ResultadosProjeto, ResultadosFCA }

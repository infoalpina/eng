import React, { useState, useEffect } from 'react'
import { Input, Imagens, ModalPrint } from '../index'
import { CRow, CCol } from '@coreui/react'
import imprimir from '../../assets/images/imprimir.png'
import useExport from '../../hooks/UseExport'
import { useUser } from 'src/userContext'
import useCustomNavigate from '../../hooks/UseCustomNavigate'

const ResultadosFCAVentiladores = () => {
  const { exportExcelBasico, exportExcelCompleto, exportPDFBasico, exportPDFCompleto } = useExport()
  const { dominio, ventiladores, valuesVentiladores, cliente, tipodefluido } = useUser()
  const { validarFCA, encaminharPara, enviarDadosParaBackend } = useCustomNavigate()

  const [msg, setmsg] = useState('')
  const [Cliente, setCliente] = useState('')
  const [Oferta, setOferta] = useState('')
  const [Date, setDate] = useState('')
  const [Visto, setVisto] = useState('')
  const [Item, setItem] = useState('')
  const [VazaoDeAr, setVazaoDeAr] = useState('')
  const [PressaoEstatica, setPressaoEstatica] = useState('')
  const [PressaoEstaticaEmPascal, setPressaoEstaticaEmPascal] = useState('')
  const [DensidadeDoAr, setDensidadeDoAr] = useState('')
  const [DiametroDoVentilador, setDiametroDoVentilador] = useState('')
  const [PaDoVentiladorDe, setPaDoVentiladorDe] = useState('')
  const [ComprimentoDasPas, setComprimentoDasPas] = useState('')
  const [DiametroDoCubo, setDiametroDoCubo] = useState('')
  const [AreaDePassagemDoAr, setAreaDePassagemDoAr] = useState('')
  const [VelocidadeDePassagemDoAr, setVelocidadeDePassagemDoAr] = useState('')
  const [RelacaoDCDV, setRelacaoDCDV] = useState('')
  const [RotacaoDoVentilador, setRotacaoDoVentilador] = useState('')
  const [VelocidadePeriferica, setVelocidadePeriferica] = useState('')
  const [AdimensionalDoSistema, setAdimensionalDoSistema] = useState('')
  const [AdimensionalDeVazao, setAdimensionalDeVazao] = useState('')
  const [AdimensionalDePressao, setAdimensionalDePressao] = useState('')
  const [NumeroDePas, setNumeroDePas] = useState('')
  const [AnguloDasPas, setAnguloDasPas] = useState('')
  const [RendimentoEstaticoDoVentilador, setRendimentoEstaticoDoVentilador] = useState('')
  const [AcrescimoDeRendimentoPorDcDv, setAcrescimoDeRendimentoPorDcDv] = useState('')
  const [AlturaDoDifusor, setAlturaDoDifusor] = useState('')
  const [AcrescimoDeRendimentoNoDifusor, setAcrescimoDeRendimentoNoDifusor] = useState('')
  const [RendimentoComDcDveComDifusor, setRendimentoComDcDveComDifusor] = useState('')
  const [RendimentoDoRedultor, setRendimentoDoRedultor] = useState('')
  const [PotenciaConsumida1, setPotenciaConsumida1] = useState('')
  const [PotenciaConsumida2, setPotenciaConsumida2] = useState('')
  const [SPLdoventiladora1mpara9E, setSPLdoventiladora1mpara9E] = useState('')
  const [constanteAparacalculodePWL, setconstanteAparacalculodePWL] = useState('')
  const [PWL, setPWL] = useState('')
  const [Empuxo, setEmpuxo] = useState('')
  const [Quantidade, setQuantidade] = useState('')
  const [Modelo, setModelo] = useState('')
  const [Cubo, setCubo] = useState('')
  const [Pas, setPas] = useState('')
  const [trintaEUm, settrintaEUm] = useState('')
  const [SecentaETres, setSecentaETres] = useState('')
  const [CentoEVinteECinco, setCentoEVinteECinco] = useState('')
  const [DuzentosECinquenta, setDuzentosECinquenta] = useState('')
  const [Quinhentos, setQuinhentos] = useState('')
  const [Mil, setMil] = useState('')
  const [DoisMil, setDoisMil] = useState('')
  const [QuatroMil, setQuatroMil] = useState('')
  const [OitoMil, setOitoMil] = useState('')
  const [dadosCarregados, setDadosCarregados] = useState(false)
  const [VentiladoresResults, setVentiladoresResults] = useState()
  const [PasCabeCubo, setPasCabeCubo] = useState()
  const [Observacoes, setObservacoes] = useState()
  const [Fluidos, setFluidos] = useState()
  const [NdecaracMax, setNdecaracMax] = useState(100)
  useEffect(() => {
    setNdecaracMax(Fluidos == 'água' ? 400 : 100)
  }, [Fluidos])

  useEffect(() => {
    setNdecaracMax(Fluidos == 'água' ? 400 : 100)
  }, [Fluidos])

  useEffect(() => {
    if (!dadosCarregados) {
      const carregarDados = async () => {
        try {
          setCliente(cliente)
          setFluidos(tipodefluido)
          setVazaoDeAr(valuesVentiladores['vazao_volumetrica_por_torre'].toFixed(2))
          setPressaoEstatica(valuesVentiladores['perda_pressao_estatica_do_ar'].toFixed(2))
          setPressaoEstaticaEmPascal(
            parseFloat(valuesVentiladores['perda_pressao_estatica_do_ar_em_pascal']).toFixed(2),
          )
          setDensidadeDoAr(parseFloat(valuesVentiladores['densidade']).toFixed(3))
          setDiametroDoVentilador(
            parseFloat(valuesVentiladores['diametro_do_ventilador']).toFixed(2),
          )
          setPaDoVentiladorDe(parseFloat(valuesVentiladores['modelo_das_pas']).toFixed(2))
          setComprimentoDasPas(valuesVentiladores['comprimento_das_pas'] / 1000)
          setDiametroDoCubo(parseFloat(valuesVentiladores['diametro_do_cubo']).toFixed(3))
          setAreaDePassagemDoAr(parseFloat(valuesVentiladores['area_de_passagem_do_ar']).toFixed(3))
          setVelocidadeDePassagemDoAr(
            parseFloat(valuesVentiladores['velocidade_de_passagem_do_ar']).toFixed(3),
          )
          setRelacaoDCDV(parseFloat(valuesVentiladores['relacao_DC_DV']).toFixed(3))
          setRotacaoDoVentilador(parseFloat(valuesVentiladores['rotacao']).toFixed(1))
          setVelocidadePeriferica(
            parseFloat(valuesVentiladores['velocidade_periferica']).toFixed(1),
          )
          setAdimensionalDoSistema(
            parseFloat(valuesVentiladores['adimensional_do_sistema']).toFixed(3),
          )
          setAdimensionalDeVazao(parseFloat(valuesVentiladores['adimensional_de_vazao']).toFixed(3))
          setAdimensionalDePressao(
            parseFloat(valuesVentiladores['adimensional_de_pressao']).toFixed(3),
          )
          setNumeroDePas(valuesVentiladores['numero_de_pas'])
          setAnguloDasPas(parseFloat(valuesVentiladores['angulo_das_pas']).toFixed(1))
          setRendimentoEstaticoDoVentilador(
            parseFloat(valuesVentiladores['rendimento_estatico_do_ventilador']).toFixed(1),
          )
          setAcrescimoDeRendimentoPorDcDv(
            parseFloat(valuesVentiladores['acrescimo_por_dc_dv']).toFixed(3),
          )
          setAlturaDoDifusor(valuesVentiladores['AlturaDoDifusor'])
          setAcrescimoDeRendimentoNoDifusor(
            parseFloat(valuesVentiladores['acrescimo_rendimento_no_difusor']).toFixed(3),
          )
          setRendimentoComDcDveComDifusor(
            parseFloat(valuesVentiladores['rendimento_dc_dv_difusor']).toFixed(2),
          )
          setRendimentoDoRedultor(valuesVentiladores['rendimento_do_redultor'])
          setPotenciaConsumida1(parseFloat(valuesVentiladores['potencia_consumida']).toFixed(2))
          setPotenciaConsumida2(parseFloat(valuesVentiladores['potencia_consumida_2']).toFixed(1))
          setSPLdoventiladora1mpara9E(parseInt(valuesVentiladores['spl_do_ventilador']))
          setconstanteAparacalculodePWL(valuesVentiladores['constante_a_para_calculo_em_PWL'])
          setPWL(parseInt(valuesVentiladores['pwl']))
          setEmpuxo(parseInt(valuesVentiladores['empuxo']))
          setModelo(valuesVentiladores['nome'])
          settrintaEUm(parseInt(valuesVentiladores['distribuicao_de_PWL_para_9_em_231']))
          setSecentaETres(parseInt(valuesVentiladores['distribuicao_de_PWL_para_9_em_263']))
          setCentoEVinteECinco(parseInt(valuesVentiladores['distribuicao_de_PWL_para_9_em_2125']))
          setDuzentosECinquenta(parseInt(valuesVentiladores['distribuicao_de_PWL_para_9_em_2250']))
          setQuinhentos(parseInt(valuesVentiladores['distribuicao_de_PWL_para_9_em_2500']))
          setMil(parseInt(valuesVentiladores['distribuicao_de_PWL_para_9_em_21000']))
          setDoisMil(parseInt(valuesVentiladores['distribuicao_de_PWL_para_9_em_22000']))
          setQuatroMil(parseInt(valuesVentiladores['distribuicao_de_PWL_para_9_em_24000']))
          setOitoMil(parseInt(valuesVentiladores['distribuicao_de_PWL_para_9_em_28000']))
          setPasCabeCubo(parseInt(valuesVentiladores['pa_cabe_cubo']))
          setCubo(valuesVentiladores['ventiladores']['material_dos_cubos'])
          setPas(valuesVentiladores['ventiladores']['material_das_pas'])
        } catch (error) {
          console.error(error)
        }
      }
      carregarDados()
    }
  }, [dadosCarregados, ventiladores])

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
              <p>Resultado dos ventiladores</p>
            </CCol>
            <CRow>Cliente</CRow>
            <CRow>
              <Input etiqueta={'Nome do cliente'} desativado={true} input={Cliente} />
            </CRow>
            <CRow>
              <Input etiqueta={'Oferta'} desativado={false} input={Oferta} setinput={setOferta} />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Data do projeto'}
                desativado={false}
                input={Date}
                setinput={setDate}
                tipo={'date'}
              />
            </CRow>
            <CRow>
              <Input etiqueta={'Visto'} desativado={false} input={Visto} setinput={setVisto} />
            </CRow>

            <CRow>Dados do projeto</CRow>
            <CRow>
              <Input etiqueta={'Item'} desativado={false} input={Item} setinput={setItem} />
            </CRow>
            <CRow>
              <Input etiqueta={'Vazão de ar'} desativado={true} input={`${VazaoDeAr} (m3/s)`} />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Pressão estática (mmCA)'}
                desativado={true}
                input={`${PressaoEstatica} (mmCA)`}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Pressão estática (Pa)'}
                desativado={true}
                input={`${PressaoEstaticaEmPascal} (Pa)`}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Densidade do ar'}
                desativado={true}
                input={`${DensidadeDoAr} (kg/m3)`}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Diametro do ventilador'}
                desativado={true}
                input={`${DiametroDoVentilador} (m)`}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Pa do ventilador de'}
                desativado={true}
                input={`${PaDoVentiladorDe} (m)`}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Comprimento das pas'}
                desativado={true}
                input={`${ComprimentoDasPas} (m)`}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Diâmetro do cubo'}
                desativado={true}
                input={`${DiametroDoCubo} (m)`}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Área de passagem do ar'}
                desativado={true}
                input={`${AreaDePassagemDoAr} (m²)`}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Velocidade de passagem do ar'}
                desativado={true}
                input={`${VelocidadeDePassagemDoAr} (m/s)`}
              />
            </CRow>
            <CRow>
              <Input etiqueta={'Relacao Dc/Dv'} desativado={true} input={`${RelacaoDCDV}`} />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Rotação do ventilador'}
                desativado={true}
                input={`${RotacaoDoVentilador} (rpm)`}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Velocidade periférica'}
                desativado={true}
                input={`${VelocidadePeriferica} (rpm)`}
              />
            </CRow>

            <CRow>
              <Input
                etiqueta={'Adimensional do sistema'}
                desativado={true}
                input={`${AdimensionalDoSistema} (s)`}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Adimensional de vazão'}
                desativado={true}
                input={`${AdimensionalDeVazao} (j)`}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Adimensional de pressão'}
                desativado={true}
                input={`${AdimensionalDePressao} (y)`}
              />
            </CRow>
            <CRow>
              <Input etiqueta={'Número de pás'} desativado={true} input={`${NumeroDePas}`} />
            </CRow>
            <CRow>
              <Input etiqueta={'Angulo das pás'} desativado={true} input={`${AnguloDasPas} (ºC)`} />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Rendimento estático do ventilador'}
                desativado={true}
                input={`${RendimentoEstaticoDoVentilador} (%)`}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Acréscimo de rendimento por Dc/Dv'}
                desativado={true}
                input={`${AcrescimoDeRendimentoPorDcDv}`}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Altura do difusor'}
                desativado={true}
                input={`${AlturaDoDifusor} (m)`}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Acréscimo de rendimento no difusor'}
                desativado={true}
                input={AcrescimoDeRendimentoNoDifusor}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Rendimento (Com Dc/Dv e com difusor)'}
                desativado={true}
                input={`${RendimentoComDcDveComDifusor} (%)`}
              />
            </CRow>
            <CRow>
              <Input
                tipo={'number'}
                etiqueta={'Rendimento do redutor (%)'}
                desativado={true}
                input={RendimentoDoRedultor}
                setinput={setRendimentoDoRedultor}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Potência consumida (kW)'}
                desativado={true}
                input={`${PotenciaConsumida1} (kW)`}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Potência consumida (CV)'}
                desativado={true}
                input={`${PotenciaConsumida2} (CV)`}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'SPL do ventilador a 1 m (para 9E)'}
                desativado={true}
                input={`${SPLdoventiladora1mpara9E} (dB(A))`}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'SPL do ventilador a 2 m (para 9E)'}
                desativado={true}
                input={`${parseFloat(SPLdoventiladora1mpara9E - 3)} (dB(A))`}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'constante "A" para cálculo de PWL:'}
                desativado={true}
                input={`${constanteAparacalculodePWL}`}
              />
            </CRow>
            <CRow>
              <Input etiqueta={PWL} desativado={true} input={`${PWL}`} />
            </CRow>
            <CRow>
              <Input etiqueta={'Empuxo'} desativado={true} input={`${Empuxo} (N)`} />
            </CRow>
            <CRow>
              <Input
                tipo={'number'}
                etiqueta={'Quantidade'}
                desativado={false}
                input={Quantidade}
                setinput={setQuantidade}
              />
            </CRow>
            <CRow>
              <Input etiqueta={'Modelo'} desativado={true} input={`${Modelo}`} />
            </CRow>
            <CRow>Materiais de construção</CRow>
            <CRow>
              <Input etiqueta={'Cubo'} desativado={true} input={Cubo} />
            </CRow>
            <CRow>
              <Input etiqueta={'Pas'} desativado={true} input={Pas} />
            </CRow>
            <CRow>Distribuicao de PWL para 9em2</CRow>
            <CRow>
              <Input etiqueta={'31'} desativado={true} input={trintaEUm} />
            </CRow>
            <CRow>
              <Input etiqueta={'63'} desativado={true} input={SecentaETres} />
            </CRow>
            <CRow>
              <Input etiqueta={'125'} desativado={true} input={CentoEVinteECinco} />
            </CRow>
            <CRow>
              <Input etiqueta={'250'} desativado={true} input={DuzentosECinquenta} />
            </CRow>
            <CRow>
              <Input etiqueta={'500'} desativado={true} input={Quinhentos} />
            </CRow>
            <CRow>
              <Input etiqueta={'1000'} desativado={true} input={Mil} />
            </CRow>
            <CRow>
              <Input etiqueta={'2000'} desativado={true} input={DoisMil} />
            </CRow>
            <CRow>
              <Input etiqueta={'4000'} desativado={true} input={QuatroMil} />
            </CRow>
            <CRow>
              <Input etiqueta={'8000'} desativado={true} input={OitoMil} />
            </CRow>
            <CRow>
              <Input
                ncharsmax={NdecaracMax}
                tipo={'text'}
                etiqueta={'Observações'}
                desativado={false}
                input={Observacoes}
                setinput={setObservacoes}
              />
            </CRow>
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
                  enviarRequisicaoVentiladores={() => exportPDFBasico(VentiladoresResults)}
                />
              </CCol>
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

export { ResultadosFCAVentiladores }

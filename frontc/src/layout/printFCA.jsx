import React, { useState, useEffect } from 'react'
import generatePDF from 'react-to-pdf'
import { useLocation } from 'react-router-dom'
import { useUser } from 'src/userContext'

const ResfriadorEvaporativoOleo = () => {
  const {
    cliente,
    nomedoprojeto,
    ventiladores,
    vazaodeagua,
    temperaturaquente,
    temperaturafria,
    temperaturadebulboumido,
    pressaoDeArDoAmbiente,
    torrerSelect,
    valorSelectTubos,
    velocidadeMediaDoAr,
    calorespecificodofluido,
    densidadedofluido,
    condutibilidadetermicadofluido,
    viscosidadedinamica,
    QuestionPrint,
    selectedCompactado,
    valorSelectCalorEspecifico,
    valuesFCAs,
    numberBombas,
  } = useUser()
  const recuperarConteudoParaPDF = () => document.getElementById('Conteudo')
  const handleClick = () => {
    generatePDF(recuperarConteudoParaPDF, personalizacao)
  }
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const fluidoValue = queryParams.get('fluido')
  const sorc = queryParams.get('sorc')

  const [Ventil, setVentil] = useState('')
  const [CargaTermica, setCargaTermica] = useState('')
  const [NivelDeRuido, setNivelDeRuido] = useState()
  const [LadosLivresDeEntradaDeAr, setLadosLivresDeEntradaDeAr] = useState()
  const [SpecialName, setSpecialName] = useState()
  const [TiragemDoAr, setTiragemDoAr] = useState()
  const [NdeCel_NdeVentilPorCel, setNdeCel_NdeVentilPorCel] = useState()
  const [FeixesTubular, setFeixesTubular] = useState()
  const [AreaTrocaPorTorres, setAreaTrocaPorTorres] = useState()
  const [VazaoDeArEmCadaVentilador, setVazaoDeArEmCadaVentilador] = useState()
  const [PerdaDePressaoEstatica, setPerdaDePressaoEstatica] = useState()
  const [DensidadeDoArNoVentilador, setDensidadeDoArNoVentilador] = useState()
  const [VelocidadeMediaDoAr, setVelocidadeMediaDoAr] = useState()
  const [ModeloDoVentilador, setModeloDoVentilador] = useState()
  const [DiametroDoVentilador, setDiametroDoVentilador] = useState()
  const [AnguloDasPas, setAnguloDasPas] = useState()
  const [Transmissao, setTransmissao] = useState()
  const [TaxaDeReducao, setTaxaDeReducao] = useState()
  const [PotenciaDoMotorEletrico, setPotenciaDoMotorEletrico] = useState()
  const [PotenciaConsumidaPeloVentilaor, setPotenciaConsumidaPeloVentilaor] = useState()
  const [RotacaoDoVentilador, setRotacaoDoVentilador] = useState()
  const [VelocidadePerifericaDoVentilador, setVelocidadePerifericaDoVentilador] = useState()
  const [PresaoSonoraPorVentilador2m, setPresaoSonoraPorVentilador2m] = useState()
  const [MotorEletricoTipo, setMotorEletricoTipo] = useState()
  const [PerdaDeAguaPorEvaporacaoDeAguaPorArraste, setPerdaDeAguaPorEvaporacaoDeAguaPorArraste] =
    useState()
  const [PerdaDeCargaNoFeixe, setPerdaDeCargaNoFeixe] = useState()
  const [PerdaDeCargaNoFeixe2, setPerdaDeCargaNoFeixe2] = useState()
  const [PressaoMaximaNoFeixe, setPressaoMaximaNoFeixe] = useState()
  const [DensidadeDeChuva, setDensidadeDeChuva] = useState()
  const [BombaDoCircuitoSecundario, setBombaDoCircuitoSecundario] = useState()
  const [VazaoDaBomba, setVazaoDaBomba] = useState()
  const [PressaoDaBomba, setPressaoDaBomba] = useState()
  const [PotenciaNominalDaBomba, setPotenciaNominalDaBomba] = useState()
  const [RotacaoDaBomba, setRotacaoDaBomba] = useState()
  const [DimensoesExternas, setDimensoesExternas] = useState()
  const [MaterialCarcacaEBaciaDeAguaFria, setMaterialCarcacaEBaciaDeAguaFria] = useState()
  const [MaterialFeixesTubular, setMaterialFeixesTubular] = useState()
  const [MaterialCavaleteDeApoioNosFeixes, setMaterialCavaleteDeApoioNosFeixes] = useState()
  const [MaterialEliminadorEGotas, setMaterialEliminadorEGotas] = useState()
  const [MaterialSistemaDeDistribuicao, setMaterialSistemaDeDistribuicao] = useState()
  const [MaterialDoVentilador, setMaterialDoVentilador] = useState()
  const [DensidadeEntrada, setDensidadeEntrada] = useState()
  const [EntalpiaEntrada, setEntalpiaEntrada] = useState()
  const [ConteudoDaAguaEntrada, setConteudoDaAguaEntrada] = useState()
  const [CondutibilidadeTermicaEntrada, setCondutibilidadeTermicaEntrada] = useState()
  const [NumeroDeReynoldEntrada, setNumeroDeReynoldEntrada] = useState()
  const [TemperaturaSaida, setTemperaturaSaida] = useState()
  const [EntalpiaSaida, setEntalpiaSaida] = useState()
  const [ConteudoDaAguaSaida, setConteudoDaAguaSaida] = useState()
  const [EvaporacaoSaida, setEvaporacaoSaida] = useState()
  const [VazaoMassicaDeArPorTorre, setVazaoMassicaDeArPorTorre] = useState()
  const [VazaoVolumetricaDeArPorTorre, setVazaoVolumetricaDeArPorTorre] = useState()
  const [ToleranciaNaTemperaturaCP, setToleranciaNaTemperaturaCP] = useState()
  const [DensidadeMediaDoFluidoCP, setDensidadeMediaDoFluidoCP] = useState()
  const [EntalpiaNaSaidaCP, setEntalpiaNaSaidaCP] = useState()
  const [EntalpiaNaEntradaCP, setEntalpiaNaEntradaCP] = useState()
  const [CondutibilidadeTermicaCP, setCondutibilidadeTermicaCP] = useState()
  const [CalorEspecificoCP, setCalorEspecificoCP] = useState()
  const [ViscosidadeDinamicaCP, setViscosidadeDinamicaCP] = useState()
  const [NumeroDeReynoldCP, setNumeroDeReynoldCP] = useState()
  const [NumeroDeNusseltCP, setNumeroDeNusseltCP] = useState()
  const [CoeficienteDePeliculaInternaCP, setCoeficienteDePeliculaInternaCP] = useState()
  const [VazaoFluidoTorreCP, setVazaoFluidoTorreCP] = useState()
  const [VazaoMassicaFluidoCP, setVazaoMassicaFluidoCP] = useState()
  const [VazaoAguaIrrigacaoCS, setVazaoAguaIrrigacaoCS] = useState()
  const [MassaAguaIrrigacaoCS, setMassaAguaIrrigacaoCS] = useState()
  const [DensidadeDeChuvaCS, setDensidadeDeChuvaCS] = useState()
  const [TemperaturaDeAguaNaBaciaCS, setTemperaturaDeAguaNaBaciaCS] = useState()
  const [NumeroDeReynoldCS, setNumeroDeReynoldCS] = useState()
  const [CoeficienteDePeliculaCS, setCoeficienteDePeliculaCS] = useState()
  const [PerdaDeAguaPorEvaporacaoCS, setPerdaDeAguaPorEvaporacaoCS] = useState()
  const [PerdaDeAguaPorArrasteCS, setPerdaDeAguaPorArrasteCS] = useState()
  const [QtedeDeBombas, setQtedeDeBombas] = useState()
  const [tolerancia, setTolerancia] = useState('')
  const [ComprimentoDosFeixes, setComprimentoDosFeixes] = useState('')
  const [AreasTransversais, setAreasTransversais] = useState('')
  const [NumeroDeTubosNaHorizontal, setNumeroDeTubosNaHorizontal] = useState('')
  const [loading, setLoading] = useState(false)
  const [fluido, setFluido] = useState('')
  const [velocidadeDeAguaNosTubos, setVelocidadeDeAguaNosTubos] = useState('')
  const [evaporacaoSimplificada, setEvaporacaoSimplificada] = useState('')

  const calcularEnergia = (
    fluidoValue,
    vazaodeagua,
    temperaturafria,
    temperaturaquente,
    cargaTérmica,
  ) => {
    if (fluidoValue == 'água') {
      return (vazaodeagua * (temperaturaquente - temperaturafria) * 1000).toLocaleString('pt-BR')
    } else {
      return (cargaTérmica * 860).toLocaleString('pt-BR')
    }
  }
  useEffect(() => {
    setFluido(fluidoValue == 'água' ? 'água' : 'fluido')
    var serieBool = valuesFCAs.result[0].datas[0].outros_dados[1].serie
    setLoading(true)
    setComprimentoDosFeixes(valuesFCAs.result[0].datas[0].outros_dados[3].comprimento_dos_feixes)
    setAreasTransversais(valuesFCAs.result[0].datas[0].areas_transversais)
    setEvaporacaoSimplificada((parseFloat(valuesFCAs.result[0].Q6) * 860) / 580)
    if (selectedCompactado === 'Não Compactado') {
      setNumeroDeTubosNaHorizontal(valuesFCAs.result[0].datas[0].outros_dados[3].N_de_tub_hor)
    } else {
      setNumeroDeTubosNaHorizontal(
        valuesFCAs.result[0].datas[0].outros_dados[3].N_de_tub_hor_compact,
      )
    }
    const valorCalculado = parseFloat(valuesFCAs.result[1].E_1 - valuesFCAs.result[0].W1).toFixed(4)
    if (valorCalculado > 0) {
      setTolerancia(-1 * valorCalculado)
      setToleranciaNaTemperaturaCP(-1 * valorCalculado)
    } else {
      setTolerancia(-1 * valorCalculado)
      setToleranciaNaTemperaturaCP(-1 * valorCalculado)
    }
    if (valuesFCAs.result[0].datas[0].forcOuInd == 'Induzido') {
      setLadosLivresDeEntradaDeAr(4)
    } else {
      setLadosLivresDeEntradaDeAr(1)
    }
    if (serieBool == '8E' || serieBool == '9EM2') {
      var spl_2m = parseFloat(valuesFCAs.result[0].calculoVentil.data[0].spl_do_ventilador) - 3
      setDensidadeDoArNoVentilador(valuesFCAs.result[1].calculoVentil.data[0].densidade)
      setAnguloDasPas(valuesFCAs.result[1].calculoVentil.data[0].angulo_das_pas)
      setPotenciaConsumidaPeloVentilaor(
        parseFloat(valuesFCAs.result[1].calculoVentil.data[0].potencia_consumida_2),
      )
      setVelocidadePerifericaDoVentilador(
        parseFloat(valuesFCAs.result[1].calculoVentil.data[0].velocidade_periferica),
      )
      setPresaoSonoraPorVentilador2m(
        parseFloat(valuesFCAs.result[1].calculoVentil.data[0].spl_do_ventilador) - 3,
      )
    } else {
      setDensidadeDoArNoVentilador(valuesFCAs.result[0].R1)
      var spl_2m = 84
      const modelo = valuesFCAs.result[0].datas[0].outros_dados[1].modelo
      var anguloDasPas = modelo.split('/')
      anguloDasPas = anguloDasPas[2]
      //anguloDasPas = modelo.split('-')
      var anguloDasPasmodi = anguloDasPas
      console.log('anguloDasPasmodi', anguloDasPasmodi)
      //diametroDoVentilador = diametroDoVentilador[0]
      //const partesModelo = modelo.split('-')
      //console.log('partesModelo', partesModelo)
      //const partesDasPartesDosModelos = partesModelo[1].split('/')
      //console.log('partesDasPartesDosModelos', partesDasPartesDosModelos)
      //analisar isso daqui para outros
      setAnguloDasPas(parseFloat(anguloDasPasmodi.replace(',', '.')))
      setPotenciaConsumidaPeloVentilaor(
        parseFloat(valuesFCAs.result[0].datas[0].outros_dados[2].potencia_do_motor) * 0.91,
      )
      setVelocidadePerifericaDoVentilador(
        (3.1416 *
          parseFloat(valuesFCAs.result[0].datas[0].outros_dados[2].rotacao_do_ventilador) *
          parseFloat(valuesFCAs.result[0].datas[0].outros_dados[1].diametro_do_ventilador)) /
          60,
      )
      setPresaoSonoraPorVentilador2m(spl_2m)
    }
    if (spl_2m > 78) {
      setNivelDeRuido('Standard')
    } else if (spl_2m > 72 || spl_2m <= 78) {
      setNivelDeRuido('Silencioso')
    } else {
      setNivelDeRuido('Super silencioso')
    }

    const partes = valorSelectTubos.split('-')
    const quantidadeDeTubos = partes[2]
    const name = `${torrerSelect} ${
      torrerSelect == 1
        ? 'Resfriador modelo' + '\xa0'.repeat(5) + 'FCA - '
        : 'Resfriadores modelos' + '\xa0'.repeat(5) + 'FCA - '
    }
    ${
      valuesFCAs.result[0].datas[0].tipoDeCarcaca
        ? valuesFCAs.result[0].datas[0].tipoDeCarcaca + ' - '
        : ''
    }
    ${quantidadeDeTubos == 6 ? ' G - ' : ''}
    ${valuesFCAs.result[0].datas[0].nome}`
    setSpecialName(name)
    setNdeCel_NdeVentilPorCel(
      `${torrerSelect} / ${valuesFCAs.result[0].datas[0].outros_dados[1].n_de_ventilador_por_celula}`,
    )
    console.log('valuesFCAs', valuesFCAs)
    var tipoDeMaterial = valorSelectCalorEspecifico.split('-')
    tipoDeMaterial = tipoDeMaterial[1]
    setMaterialFeixesTubular(tipoDeMaterial)
    const feixesTubular = `(${tipoDeMaterial}) - ${
      valuesFCAs.result[1].diametro_de_tubo ? '3/4' : '1'
    } - ${
      tipoDeMaterial.trim() === 'AÇO INOX'
        ? '1.2'
        : parseFloat(valuesFCAs.result[0].datas[0].outros_dados[3].exp_parede) * 1000
    } - ${quantidadeDeTubos} - ${
      valuesFCAs.result[0].datas[0].outros_dados[3].modelo === 'Compactado' ? 23 : 30.5
    }`
    setRotacaoDoVentilador(
      parseFloat(valuesFCAs.result[0].datas[0].outros_dados[2].rotacao_do_ventilador),
    )
    setFeixesTubular(feixesTubular)
    setTiragemDoAr(valuesFCAs.result[0].datas[0].forcOuInd)
    setFeixesTubular(feixesTubular)
    setTiragemDoAr(valuesFCAs.result[0].datas[0].forcOuInd)
    setCargaTermica(
      calcularEnergia(
        fluidoValue,
        vazaodeagua,
        temperaturafria,
        temperaturaquente,
        valuesFCAs.result[0].Q6,
      ),
    )
    setAreaTrocaPorTorres(valuesFCAs.result[0].F8)
    setVazaoDeArEmCadaVentilador(valuesFCAs.result[0].vazao_volumetrica_de_ar_por_torre)
    setPerdaDePressaoEstatica(valuesFCAs.result[0].Y5)
    setVelocidadeMediaDoAr(valuesFCAs.result[0].e_8)
    setModeloDoVentilador(valuesFCAs.result[1].datas[0].outros_dados[1].modelo)
    setDiametroDoVentilador(
      parseFloat(valuesFCAs.result[1].datas[0].outros_dados[1].diametro_do_ventilador) * 1000,
    )
    setTransmissao(
      valuesFCAs.result[1].datas[0].outros_dados[2].tipo_de_acionamento_de_transmissao +
        ' ' +
        valuesFCAs.result[1].datas[0].outros_dados[2].modelo,
    )
    setTaxaDeReducao(valuesFCAs.result[1].datas[0].outros_dados[2].taxa_de_reducao)
    setPotenciaDoMotorEletrico(valuesFCAs.result[1].datas[0].outros_dados[2].potencia_do_motor)
    setMotorEletricoTipo(valuesFCAs.result[1].datas[0].outros_dados[2].motor_eletrico_tipo)
    setPerdaDeAguaPorEvaporacaoDeAguaPorArraste(
      parseFloat(valuesFCAs.result[1].VW).toLocaleString('pt-BR', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }),
    )
    setPerdaDeCargaNoFeixe(valuesFCAs.result[0].V5 <= 0.1 ? 0.1 : valuesFCAs.result[0].V5)
    setPerdaDeCargaNoFeixe2(valuesFCAs.result[0].V5)
    setPressaoMaximaNoFeixe('10')
    setDensidadeDeChuva(valuesFCAs.result[0].R0)
    setBombaDoCircuitoSecundario(valuesFCAs.result[0].datas[0].outros_dados[0].modelo)
    setVazaoDaBomba(valuesFCAs.result[0].datas[0].outros_dados[0].vazao)
    setPressaoDaBomba(valuesFCAs.result[0].datas[0].outros_dados[0].pressao)
    setPotenciaNominalDaBomba(valuesFCAs.result[0].datas[0].outros_dados[0].potencia)
    setRotacaoDaBomba(valuesFCAs.result[0].datas[0].outros_dados[0].rotacao)
    setDimensoesExternas(valuesFCAs.result[0].codigo)
    setMaterialCarcacaEBaciaDeAguaFria('PRFV')
    setMaterialCavaleteDeApoioNosFeixes('AÇO CARBONO ZINCADO A FOGO')
    setMaterialEliminadorEGotas('PVC / POLIPROPILENO')
    setMaterialSistemaDeDistribuicao('TUBOS DE PVC')
    setMaterialDoVentilador(
      `CUBO:${valuesFCAs.result[0].datas[0].outros_dados[1].material_dos_cubos} / PÁS:${valuesFCAs.result[0].datas[0].outros_dados[1].material_das_pas}`,
    )
    if (sorc == 'completo') {
      setDensidadeEntrada(valuesFCAs.result[0].R1)
      setEntalpiaEntrada(valuesFCAs.result[0].H1)
      setConteudoDaAguaEntrada(valuesFCAs.result[0].X1)
      setCondutibilidadeTermicaEntrada(valuesFCAs.result[0].L7)
      setNumeroDeReynoldEntrada(valuesFCAs.result[0].R7)
      setTemperaturaSaida(valuesFCAs.result[0].T2)
      setEntalpiaSaida(valuesFCAs.result[0].H2)
      setConteudoDaAguaSaida(valuesFCAs.result[0].X2)
      setEvaporacaoSaida(valuesFCAs.result[0].X4)
      setVazaoMassicaDeArPorTorre(valuesFCAs.result[0].vazao_massica_de_ar_por_torre)
      setVazaoVolumetricaDeArPorTorre(valuesFCAs.result[0].vazao_volumetrica_de_ar_por_torre)
      setDensidadeMediaDoFluidoCP(valuesFCAs.result[0].R5)
      setEntalpiaNaSaidaCP(valuesFCAs.result[0].O1)
      setEntalpiaNaEntradaCP(valuesFCAs.result[0].O2)
      setCondutibilidadeTermicaCP(valuesFCAs.result[0].L9)
      setCalorEspecificoCP(valuesFCAs.result[0].C9)
      setViscosidadeDinamicaCP(valuesFCAs.result[0].viscosidade_dinamica)
      setNumeroDeReynoldCP(valuesFCAs.result[0].R9)
      setNumeroDeNusseltCP(valuesFCAs.result[0].N9)
      setCoeficienteDePeliculaInternaCP(valuesFCAs.result[0].A9)
      setVazaoFluidoTorreCP(valuesFCAs.result[0].G9)
      setVazaoMassicaFluidoCP(valuesFCAs.result[0].M0)
      setVazaoAguaIrrigacaoCS(valuesFCAs.result[0].V9)
      setMassaAguaIrrigacaoCS(valuesFCAs.result[0].M1)
      setDensidadeDeChuvaCS(valuesFCAs.result[0].R0)
      setTemperaturaDeAguaNaBaciaCS(valuesFCAs.result[0].T9)
      setNumeroDeReynoldCS(valuesFCAs.result[0].R8)
      setCoeficienteDePeliculaCS(valuesFCAs.result[0].A8)
      setPerdaDeAguaPorEvaporacaoCS(valuesFCAs.result[0].V)
      setPerdaDeAguaPorArrasteCS(valuesFCAs.result[0].W)
      setVelocidadeDeAguaNosTubos(valuesFCAs.result[0].W0)
    }
  }, [ventiladores])

  const personalizacao = {
    method: 'open',
    page: {
      margin: {
        top: 20,
        right: 20,
        bottom: 0,
        left: 20,
      },
      format: 'A4',
    },
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        margin: 0,
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      }}
    >
      <main style={styles.main}>
        <div id="Conteudo">
          <div style={{ fontWeight: 'bold', fontSize: '1.5em' }}>
            RESFRIADOR EVAPORATIVO DE FLUIDOS - SÉRIE FCA
          </div>
          <div style={styles.headerContent}>
            <div style={{ marginRight: '20px' }}>CLIENTE: {cliente}</div>
            <div style={{ marginRight: '20px' }}>PROJETO: {nomedoprojeto}</div>
            <div>
              DATA:
              {new Date().toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </div>
          </div>
          <div style={{ ...styles.headerContent, marginBottom: '20px' }}>
            <div style={{ marginRight: '150px' }}>DADOS DO PROJETO</div>
            <div>
              {tolerancia > 0 ? parseInt(tolerancia * 10 + 200) : parseInt(tolerancia * -10 + 100)}
            </div>
          </div>
          <div>
            <dl style={styles.dl}>
              {renderKeyValue('CARGA TÉRMICA (kcal/h):', CargaTermica)}
              {renderKeyValue('LÍQUIDO A RESFRIAR:', fluidoValue.toUpperCase())}
              {renderKeyValue(
                `VAZÃO DE ${fluido.toUpperCase()} TOTAL (m³/h):`,
                parseFloat(vazaodeagua).toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                }),
              )}
              {renderKeyValue(
                `TEMPERATURA DE ${fluido.toUpperCase()} QUENTE (ºC):`,
                parseFloat(temperaturaquente).toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                }),
              )}
              {renderKeyValue(
                `TEMPERATURA DE ${fluido.toUpperCase()} FRIA (ºC):`,
                parseFloat(temperaturafria).toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                }),
              )}
              {renderKeyValue(
                'TEMPERATURA DE BULBO ÚMIDO DO AR (ºC):',
                parseFloat(temperaturadebulboumido).toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                }),
              )}
              {fluido == 'óleo' && (
                <>
                  {renderKeyValue(
                    `CALOR ESPECÍFICO DE ${fluido.toUpperCase()} (ºC):`,
                    parseFloat(calorespecificodofluido).toLocaleString('pt-BR', {
                      minimumFractionDigits: 3,
                      maximumFractionDigits: 3,
                    }),
                  )}
                  {renderKeyValue(
                    `DENSIDADE DE ${fluido.toUpperCase()} (Kj/KgºC):`,
                    parseFloat(densidadedofluido).toLocaleString('pt-BR', {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    }),
                  )}
                  {renderKeyValue(
                    `CONDUTIBILIDADE TÉRMICA DE ${fluido.toUpperCase()} (W/mK):`,
                    parseFloat(condutibilidadetermicadofluido).toLocaleString('pt-BR', {
                      minimumFractionDigits: 4,
                      maximumFractionDigits: 4,
                    }),
                  )}
                  {renderKeyValue(
                    `VISCOSIDADE DINÂMICA DE ${fluido.toUpperCase()} (Kg/ms):`,
                    parseFloat(viscosidadedinamica).toLocaleString('pt-BR', {
                      minimumFractionDigits: 4,
                      maximumFractionDigits: 4,
                    }),
                  )}
                </>
              )}
              {renderKeyValue(
                'PRESSÃO DO AR DO AMBIENTE (mBar):',
                parseFloat(pressaoDeArDoAmbiente).toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                }),
              )}
              {renderKeyValue('NÍVEL DE RUIDO:', NivelDeRuido)}
              {renderKeyValue('LADOS LIVRES PARA ENTRADA DE AR:', LadosLivresDeEntradaDeAr)}
            </dl>
          </div>
          <div style={{ ...styles.headerContent, marginBottom: '20px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{SpecialName}</div>
          </div>
          <dl style={styles.dl}>
            {renderKeyValue('TIRAGEM DO AR:', TiragemDoAr)}
            {renderKeyValue(
              'NÚMERO DE CÉLULAS / NÚMERO DE VENTILADORES POR CÉLULAS:',
              NdeCel_NdeVentilPorCel,
            )}
            {renderKeyValue('FEIXES TUBULAR:', FeixesTubular)}
            {renderKeyValue(
              'ÁREA DE TROCA / TORRE (C/CURVAS) (m²):',
              parseFloat(AreaTrocaPorTorres).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }),
            )}
            {renderKeyValue(
              'VAZAO DE AR EM CADA VENTILADOR (m³/s):',
              parseFloat(VazaoDeArEmCadaVentilador).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }),
            )}
            {renderKeyValue(
              'PERDA DE PRESSÃO ESTÁTICA (mmCA):',
              parseFloat(PerdaDePressaoEstatica).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }),
            )}
            {renderKeyValue(
              'DENSIDADE DO AR NO VENTILADOR (kg/m³):',
              parseFloat(DensidadeDoArNoVentilador).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }),
            )}
            {renderKeyValue(
              'VELOCIDADE MÉDIA DO AR (m/s):',
              parseFloat(VelocidadeMediaDoAr).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }),
            )}
            {renderKeyValue(
              'MODELO: VENTILADOR / DIÂMETRO (mm) / ÂNGULO (°):',
              ModeloDoVentilador +
                ' / ' +
                DiametroDoVentilador +
                ' / ' +
                parseFloat(AnguloDasPas).toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                }),
            )}
            {renderKeyValue('TRANSMISSÃO:', Transmissao)}
            {valuesFCAs.result[1].datas[0].outros_dados[2].tipo_de_acionamento_de_transmissao !=
              'Direto' &&
              renderKeyValue(
                'TAXA DE REDUÇÃO:',
                parseFloat(TaxaDeReducao).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }),
              )}
            {renderKeyValue(
              'POTÊNCIA DO MOTOR ELÉTRICO (cv):',
              parseFloat(PotenciaDoMotorEletrico).toLocaleString('pt-BR', {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              }),
            )}
            {renderKeyValue(
              'POTÊNCIA CONSUMIDA PELO VENTILADOR (cv):',
              parseFloat(PotenciaConsumidaPeloVentilaor).toLocaleString('pt-BR', {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              }),
            )}
            {renderKeyValue(
              'ROTAÇÃO DO VENTILADOR (rpm) / VELOCIDADE PERIFÉRICA DO VENTILADOR (m/s):',
              parseFloat(RotacaoDoVentilador).toLocaleString('pt-BR', {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              }) +
                ' / ' +
                parseFloat(VelocidadePerifericaDoVentilador).toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                }),
            )}
            {renderKeyValue(
              'PRESSÃO SONORA POR VENTILADOR, A 2M (dB(A)):',
              parseFloat(PresaoSonoraPorVentilador2m).toLocaleString('pt-BR', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }),
            )}
            {renderKeyValue('MOTOR ELÉTRICO TIPO:', MotorEletricoTipo)}
            {renderKeyValue(
              'PERDA DE ÁGUA POR EVAPORAÇÃO + ARRASTE (m3/h):',
              PerdaDeAguaPorEvaporacaoDeAguaPorArraste,
            )}
            {renderKeyValue(
              'PERDA DE CARGA NO FEIXE (mCA) / PRESSÃO MÁXIMA NO FEIXE (kg/cm²):',
              `
              ${parseFloat(PerdaDeCargaNoFeixe).toLocaleString('pt-BR', {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              })} /
                ${parseFloat(PressaoMaximaNoFeixe).toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })}
                `,
            )}
            {renderKeyValue(
              'DENSIDADE DE CHUVA (IRRIGAÇÃO) (m³/(m².h)):',
              parseFloat(DensidadeDeChuva).toLocaleString('pt-BR', {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              }),
            )}
            {renderKeyValue(
              'QUANTIDADE / BOMBA DO CIRCUITO SECUNDÁRIO:',
              `${numberBombas}` + ` x ` + BombaDoCircuitoSecundario,
            )}
            {renderKeyValue(
              `VAZÃO DA BOMBA (m³/h):`,
              `${numberBombas}` +
                ` x ` +
                parseFloat(VazaoDaBomba).toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                }),
            )}
            {renderKeyValue(
              'PRESSÃO DA BOMBA (mCA):',
              parseFloat(PressaoDaBomba).toLocaleString('pt-BR', {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              }),
            )}
            {renderKeyValue(
              'QUANTIDADE / POTÊNCIA NOMINAL DA BOMBA (cv):',
              `${numberBombas}` +
                ` x ` +
                parseFloat(PotenciaNominalDaBomba).toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                }),
            )}
            {renderKeyValue(
              'ROTAÇÃO DA BOMBA (rpm):',
              parseFloat(RotacaoDaBomba).toLocaleString('pt-BR', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }),
            )}
            {renderKeyValue('DIMENSSÕES EXTERNAS (mm):', DimensoesExternas)}
          </dl>
          <div style={{ ...styles.headerContent, marginBottom: '20px', marginTop: '10px' }}>
            <div style={{ marginRight: '150px' }}>MATERIAIS DE CONSTRUÇÃO</div>
          </div>
          <dl style={styles.dl}>
            {renderKeyValue('CARCAÇA E BACIA DE ÁGUA FRIA:', MaterialCarcacaEBaciaDeAguaFria)}
            {renderKeyValue('FEIXES TUBULAR:', MaterialFeixesTubular)}
            {renderKeyValue('CAVALETE DE APOIO NOS FEIXES:', MaterialCavaleteDeApoioNosFeixes)}
            {renderKeyValue('ELIMINADOR E GOTAS:', MaterialEliminadorEGotas)}
            {renderKeyValue('SISTEMA DE DISTRIBUIÇÃO:', MaterialSistemaDeDistribuicao)}
            {renderKeyValue('VENTILADOR:', MaterialDoVentilador)}
          </dl>
          {sorc == 'completo' && (
            <>
              <div style={{ ...styles.headerContent, marginBottom: '20px', marginTop: '200px' }}>
                <div style={{ marginRight: '150px' }}>VALORES CALCULADOS PARA O AR ENTRADA</div>
              </div>
              <dl>
                {renderKeyValue(
                  'DENSIDADE (kg/m³):',
                  parseFloat(DensidadeEntrada).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'ENTALPIA (kJ/kg):',
                  parseFloat(EntalpiaEntrada).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'CONTEÚDO DA ÁGUA (kg/kg):',
                  parseFloat(ConteudoDaAguaEntrada).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'CONDUTIBILIDADE TÉRMICA (W/m.K):',
                  parseFloat(CondutibilidadeTermicaEntrada).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'NÚMERO DE REYNOLD:',
                  parseFloat(NumeroDeReynoldEntrada).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
              </dl>
              <div style={{ ...styles.headerContent, marginBottom: '20px', marginTop: '10px' }}>
                <div style={{ marginRight: '150px' }}>VALORES CALCULADOS PARA O AR SAÍDA</div>
              </div>
              <dl>
                {renderKeyValue(
                  'TEMPERATURA (ºC):',
                  parseFloat(TemperaturaSaida).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'ENTALPIA (kJ/kg):',
                  parseFloat(EntalpiaSaida).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'CONTEÚDO DA ÁGUA (kg/kg):',
                  parseFloat(ConteudoDaAguaSaida).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'EVAPORAÇÃO (kg/kg):',
                  parseFloat(EvaporacaoSaida).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'VAZÃO MASSICA DE AR POR TORRE (kg/h):',
                  parseFloat(VazaoMassicaDeArPorTorre).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'VAZÃO VOLUMÉTRICA DE AR POR TORRE (m³/s):',
                  parseFloat(VazaoVolumetricaDeArPorTorre).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
              </dl>
              <div style={{ ...styles.headerContent, marginBottom: '20px', marginTop: '10px' }}>
                <div style={{ marginRight: '150px' }}>
                  VALORES CALCULADOS PARA CIRCUITOS PRIMÁRIOS
                </div>
              </div>
              <dl>
                {renderKeyValue(
                  'TOLERÂNCIA NA TEMPERATURA (°C):',
                  parseFloat(ToleranciaNaTemperaturaCP).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'DENSIDADE MÉDIA DO FLUIDO (kg/m³):',
                  parseFloat(DensidadeMediaDoFluidoCP).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'ENTALPIA NA SAÍDA (kJ/kg):',
                  parseFloat(EntalpiaNaSaidaCP).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'ENTALPIA NA ENTRADA (kJ/kg):',
                  parseFloat(EntalpiaNaEntradaCP).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'CONDUTIBILIDADE TÉRMICA (W/(m.K)):',
                  parseFloat(CondutibilidadeTermicaCP).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'CALOR ESPECÍFICO (kJ/(kg.K)):',
                  parseFloat(CalorEspecificoCP).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'VISCOSIDADE DINÂMICA (kg/(m.h)):',
                  parseFloat(ViscosidadeDinamicaCP).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'NÚMERO DE REYNOLD:',
                  parseFloat(NumeroDeReynoldCP).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'NÚMERO DE NUSSELT:',
                  parseFloat(NumeroDeNusseltCP).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'COEFICIENTE DE PELICULA INTERNA (W/(m².K)):',
                  parseFloat(CoeficienteDePeliculaInternaCP).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'VAZÃO FLUIDO/TORRE (m³/h):',
                  parseFloat(VazaoFluidoTorreCP).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'VAZÃO MASSICA FLUIDO (kg/h):',
                  parseFloat(VazaoMassicaFluidoCP).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'VELOCIDADE DE ÁGUA NOS TUBOS (m/s):',
                  parseFloat(velocidadeDeAguaNosTubos).toLocaleString('pt-BR', {
                    minimumFractionDigits: 4,
                    maximumFractionDigits: 4,
                  }),
                )}
                {renderKeyValue(
                  'PERDA DE CARGA NO FEIXE (mCA):',
                  parseFloat(PerdaDeCargaNoFeixe2).toLocaleString('pt-BR', {
                    minimumFractionDigits: 4,
                    maximumFractionDigits: 4,
                  }),
                )}
              </dl>
              <div style={{ ...styles.headerContent, marginBottom: '20px', marginTop: '10px' }}>
                <div style={{ marginRight: '150px' }}>
                  VALORES CALCULADOS PARA CIRCUITOS SECUNDÁRIOS
                </div>
              </div>
              <dl>
                {renderKeyValue(
                  'VAZÃO ÁGUA IRRIGAÇÃO/TORRE (m³/h):',
                  parseFloat(VazaoAguaIrrigacaoCS).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'MASSA ÁGUA IRRIGAÇÃO/TORRE (kg/h):',
                  parseFloat(MassaAguaIrrigacaoCS).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'DENSIDADE DE CHUVA(IRRIGAÇÃO) (m³/(m².h)):',
                  parseFloat(DensidadeDeChuvaCS).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'TEMPERATURA DA ÁGUA NA BACIA (ºC):',
                  parseFloat(TemperaturaDeAguaNaBaciaCS).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'NÚMERO DE REYNOLD:',
                  parseFloat(NumeroDeReynoldCS).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'COEFICIENTE DE PELICULA (ÁGUA IRRIG.) (W/(m².K)):',
                  parseFloat(CoeficienteDePeliculaCS).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'PERDA DE ÁGUA POR EVAPORAÇÃO (kg/h):',
                  parseFloat(PerdaDeAguaPorEvaporacaoCS).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'EVAPORAÇÃO SIMPLIFICADA (kg/h):',
                  parseFloat(evaporacaoSimplificada).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'PERDA DE ÁGUA POR ARRASTE (kg/h):',
                  parseFloat(PerdaDeAguaPorArrasteCS).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
              </dl>
              <div style={{ ...styles.headerContent, marginBottom: '20px', marginTop: '10px' }}>
                <div style={{ marginRight: '150px' }}>CARACTERISTICAS DO FCA</div>
              </div>
              <dl>
                {renderKeyValue(
                  'COMPRIMENTO DOS FEIXES (m):',
                  parseFloat(ComprimentoDosFeixes).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'ÁREAS TRANSVERSAIS (m²):',
                  parseFloat(AreasTransversais).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
                {renderKeyValue(
                  'NÚMERO DE TUBOS NA HORIZONTAL:',
                  parseFloat(NumeroDeTubosNaHorizontal).toLocaleString('pt-BR', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }),
                )}
              </dl>
            </>
          )}
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <button className="btn" onClick={handleClick} style={{ backgroundColor: '#00ff1e' }}>
              Imprimir
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

const renderKeyValue = (key, value) => (
  <div className="key-value" style={styles.keyValue}>
    <dt>{key}</dt>
    <dd>{value}</dd>
  </div>
)

const styles = {
  header: {
    width: '80%',
    maxWidth: '800px',
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '12pt',
    lineHeight: '0',
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    width: '100%',
    maxWidth: '800px',
    marginTop: '10px',
    fontWeight: 'bold',
    fontSize: '12pt',
    lineHeight: '0.6',
  },
  main: {
    width: '80%',
    maxWidth: '800px',
  },
  dl: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: '800px',
    margin: 'auto',
    padding: 0,
    fontSize: '10pt',
    lineHeight: '0',
  },
  keyValue: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '10px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '5px',
    fontSize: '10pt',
    lineHeight: '0',
  },
  printButton: {
    marginTop: '20px',
    marginBottom: '20px',
    padding: '10px 20px',
    fontSize: '1em',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
}

export default ResfriadorEvaporativoOleo

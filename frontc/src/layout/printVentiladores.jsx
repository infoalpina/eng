import React, { useState, useEffect } from 'react'
import generatePDF, { Margin } from 'react-to-pdf'
import { useLocation } from 'react-router-dom'
import { useUser } from 'src/userContext'

const Ventilador = () => {
  const { ventiladores, QuestionPrint, setQuestionPrint, valuesVentiladores } = useUser()
  const recuperarConteudoParaPDF = () => document.getElementById('Conteudo')
  const handleClick = () => {
    generatePDF(recuperarConteudoParaPDF, personalizacao)
  }
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  // Obtendo os parâmetros da URL
  const initialObservacoes = queryParams.get('Observacoes') || ''
  const initialeveryDatas = queryParams.get('everyDatas')
  const initialfluido = queryParams.get('fluido')

  console.log('valuesVentiladores', valuesVentiladores)

  const [observacoes, setObservacoes] = useState(initialObservacoes)
  const [ModeloDoVentilador, setModeloDoVentilador] = useState()
  const [VazaoDeAr, setVazaoDeAr] = useState()
  const [PressaoEstatica, setPressaoEstatica] = useState()
  const [PressaoEstaticaEmPascal, setPressaoEstaticaEmPascal] = useState()
  const [DensidadeDoAr, setDensidadeDoAr] = useState()
  const [DiametroDoVentilador, setDiametroDoVentilador] = useState()
  const [PaDoVentiladorDe, setPaDoVentiladorDe] = useState()
  const [ComprimentoDasPas, setComprimentoDasPas] = useState()
  const [DiametroDoCubo, setDiametroDoCubo] = useState()
  const [AreaDePassagemDoAr, setAreaDePassagemDoAr] = useState()
  const [VelocidadeDePassagemDoAr, setVelocidadeDePassagemDoAr] = useState()
  const [RealcaoDCDV, setRealcaoDCDV] = useState()
  const [RotacaoDoVentilador, setRotacaoDoVentilador] = useState()
  const [VelocidadePeriferica, setVelocidadePeriferica] = useState()
  const [AdimissionalDoSistema, setAdimissionalDoSistema] = useState()
  const [AdimissionalDaVazao, setAdimissionalDaVazao] = useState()
  const [AdimissionalDaPressao, setAdimissionalDaPressao] = useState()
  const [NumeroDePas, setNumeroDePas] = useState()
  const [AnguloDasPas, setAnguloDasPas] = useState()
  const [RendimentoEstaticoDoVentilador, setRendimentoEstaticoDoVentilador] = useState()
  const [AcrecimoDoRendimentoPorDCDV, setAcrecimoDoRendimentoPorDCDV] = useState()
  const [AlturaDoDifusor, setAlturaDoDifusor] = useState()
  const [AcrescimenoDeRendimentoDoDifusor, setAcrescimenoDeRendimentoDoDifusor] = useState()
  const [RendimentoComDCDVEComDifusor, setRendimentoComDCDVEComDifusor] = useState()
  const [RendimentoDoRedultor, setRendimentoDoRedultor] = useState()
  const [PotenciaConsumidaKW, setPotenciaConsumidaKW] = useState()
  const [PotenciaConsumidaCV, setPotenciaConsumidaCV] = useState()
  const [SPLDoVentiladorA1m, setSPLDoVentiladorA1m] = useState()
  const [SPLDoVentiladorA2m, setSPLDoVentiladorA2m] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('valuesVentiladores', valuesVentiladores)
    setModeloDoVentilador(valuesVentiladores['database']['outros_dados'][1]['modelo'])
    setVazaoDeAr(valuesVentiladores['vazao_volumetrica_por_torre'])
    setPressaoEstatica(valuesVentiladores['perda_pressao_estatica_do_ar'])
    setPressaoEstaticaEmPascal(valuesVentiladores['perda_pressao_estatica_do_ar_em_pascal'])
    setDensidadeDoAr(valuesVentiladores['densidade'])
    setDiametroDoVentilador(valuesVentiladores['diametro_do_ventilador'])
    console.log('valuesVentiladores[modelo_das_pas]', valuesVentiladores['modelo_das_pas'])
    setPaDoVentiladorDe(valuesVentiladores['modelo_das_pas'])
    setComprimentoDasPas(valuesVentiladores['comprimento_das_pas'])
    setDiametroDoCubo(valuesVentiladores['diametro_do_cubo'])
    setAreaDePassagemDoAr(valuesVentiladores['area_de_passagem_do_ar'])
    setVelocidadeDePassagemDoAr(valuesVentiladores['velocidade_de_passagem_do_ar'])
    setRealcaoDCDV(valuesVentiladores['relacao_DC_DV'])
    setRotacaoDoVentilador(valuesVentiladores['rotacao'])
    setVelocidadePeriferica(valuesVentiladores['velocidade_periferica'])
    setAdimissionalDoSistema(valuesVentiladores['adimensional_do_sistema'])
    setAdimissionalDaVazao(valuesVentiladores['adimensional_de_vazao'])
    setAdimissionalDaPressao(valuesVentiladores['adimensional_de_pressao'])
    setNumeroDePas(valuesVentiladores['numero_de_pas'])
    setAnguloDasPas(valuesVentiladores['angulo_das_pas'])
    setRendimentoEstaticoDoVentilador(valuesVentiladores['rendimento_estatico_do_ventilador'])
    setAcrecimoDoRendimentoPorDCDV(valuesVentiladores['acrescimo_por_dc_dv'])
    setAlturaDoDifusor(valuesVentiladores['AlturaDoDifusor'])
    setAcrescimenoDeRendimentoDoDifusor(valuesVentiladores['acrescimo_rendimento_no_difusor'])
    setRendimentoComDCDVEComDifusor(valuesVentiladores['rendimento_dc_dv_difusor'])
    setRendimentoDoRedultor(valuesVentiladores['rendimento_do_redultor'])
    setPotenciaConsumidaKW(valuesVentiladores['potencia_consumida'])
    setPotenciaConsumidaCV(valuesVentiladores['potencia_consumida_2'])
    setSPLDoVentiladorA1m(valuesVentiladores['spl_do_ventilador'])
    setSPLDoVentiladorA2m(parseFloat(valuesVentiladores['spl_do_ventilador']) - 3)
    setLoading(true)
  }, [ventiladores])

  useEffect(() => {
    let parsedEveryDatas = null
    try {
      parsedEveryDatas = initialeveryDatas ? JSON.parse(initialeveryDatas) : null
      console.log('everyDatas', parsedEveryDatas)
    } catch (error) {
      console.error('Erro ao analisar JSON', error)
    }

    if (parsedEveryDatas) {
      Object.keys(parsedEveryDatas).forEach((key) => {
        console.log(`${key}:`, parsedEveryDatas[key])
      })
    }
  }, [observacoes, initialeveryDatas])

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

  const handlePrint = () => {
    window.print()
  }

  if (!loading) {
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
          <div>Loading...</div>
        </main>
      </div>
    )
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
          <div style={{ fontWeight: 'bold', fontSize: '1.5em', marginBottom: '1rem' }}>
            Dados do ventilador - SÉRIE FCA
          </div>
          <div>
            <dl style={styles.dl}>
              {renderKeyValue('MODELO DO VENTILADOR:', ModeloDoVentilador)}
              {renderKeyValue(
                'VAZÃO DE AR (m³/s):',
                parseFloat(VazaoDeAr).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }),
              )}
              {renderKeyValue(
                'PRESSÃO ESTÁTICA (mmCA):',
                parseFloat(PressaoEstatica).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }),
              )}
              {renderKeyValue(
                'PRESSÃO ETÁTICA EM PASCAL (Pa):',
                parseFloat(PressaoEstaticaEmPascal).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }),
              )}
              {renderKeyValue(
                'DENSIDADE DO AR (kg/m³):',
                parseFloat(DensidadeDoAr).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }),
              )}
              {renderKeyValue(
                'DIÂMETRO DO VENTILADOR (m):',
                parseFloat(DiametroDoVentilador).toLocaleString('pt-BR'),
              )}
              {renderKeyValue(
                'PÁ DO VENTILADOR DE (m):',
                parseFloat(PaDoVentiladorDe).toLocaleString('pt-BR'),
              )}
              {renderKeyValue(
                'COMPRIMENTO DAS PÁS (mm):',
                parseFloat(ComprimentoDasPas).toLocaleString('pt-BR'),
              )}
              {renderKeyValue(
                'DIÂMETRO DO CUBO (m):',
                parseFloat(DiametroDoCubo).toLocaleString('pt-BR', {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3,
                }),
              )}
              {renderKeyValue(
                'ÁREA DE PASAGEM DO AR (m²):',
                parseFloat(AreaDePassagemDoAr).toLocaleString('pt-BR', {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3,
                }),
              )}
              {renderKeyValue(
                'VELOCIDADE DE PASSAGEM DO AR (m/s):',
                parseFloat(VelocidadeDePassagemDoAr).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }),
              )}
              {renderKeyValue('RELAÇÃO DC/DV:', parseFloat(RealcaoDCDV).toLocaleString('pt-BR'))}
              {renderKeyValue(
                'ROTAÇÃO DO VENTILADOR (rpm):',
                parseFloat(RotacaoDoVentilador).toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                }),
              )}
              {renderKeyValue(
                'VELOCIDADE PERIFÉRICA (m/s):',
                parseFloat(VelocidadePeriferica).toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                }),
              )}
              {renderKeyValue(
                'ADIMISSIONAL DO SISTEMA (σ):',
                parseFloat(AdimissionalDoSistema).toLocaleString('pt-BR', {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3,
                }),
              )}
              {renderKeyValue(
                'ADIMISSIONAL DA VAZÃO (ϕ):',
                parseFloat(AdimissionalDaVazao).toLocaleString('pt-BR', {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3,
                }),
              )}
              {renderKeyValue(
                'ADIMISSIONAL DA PRESSÃO (ψ):',
                parseFloat(AdimissionalDaPressao).toLocaleString('pt-BR', {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3,
                }),
              )}
              {renderKeyValue(
                'NÚMERO DE PÁS (u):',
                parseFloat(NumeroDePas).toLocaleString('pt-BR'),
              )}
              {renderKeyValue(
                'ÂNGULO DAS PÁS (°):',
                parseFloat(AnguloDasPas).toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                }),
              )}
              {renderKeyValue(
                'RENDIMENTO ESTÁTICO DO VENTILADOR (%):',
                parseFloat(RendimentoEstaticoDoVentilador).toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                }),
              )}
              {renderKeyValue(
                'ACRÉSCIMO DE RENDIMENTO POR DC/DV:',
                parseFloat(AcrecimoDoRendimentoPorDCDV).toLocaleString('pt-BR', {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3,
                }),
              )}
              {renderKeyValue(
                'ALTURA DO DIFUSOR (m):',
                parseFloat(AlturaDoDifusor).toLocaleString('pt-BR'),
              )}
              {renderKeyValue(
                'ACRÉSCIMO DE RENDIMENTO DO DIFUSOR:',
                parseFloat(AcrescimenoDeRendimentoDoDifusor).toLocaleString('pt-BR'),
              )}
              {renderKeyValue(
                'RENDIMENTO (COM DC/DV E COM DIFUSOR) (%):',
                parseFloat(RendimentoComDCDVEComDifusor).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }),
              )}
              {renderKeyValue(
                'RENDIMENTO DO REDUTOR (%):',
                parseFloat(RendimentoDoRedultor).toLocaleString('pt-BR'),
              )}
              {renderKeyValue(
                'POTÊNCIA CONSUMIDA (KW):',
                parseFloat(PotenciaConsumidaKW).toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                }),
              )}
              {renderKeyValue(
                'POTÊNCIA CONSUMIDA (cv):',
                parseFloat(PotenciaConsumidaCV).toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                }),
              )}
              {renderKeyValue(
                'SPL DO VENTILADOR A 1 M (dB(A)):',
                parseFloat(SPLDoVentiladorA1m).toLocaleString('pt-BR', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }),
              )}
              {renderKeyValue(
                'SPL DO VENTILADOR A 2 M (dB(A)):',
                parseFloat(SPLDoVentiladorA2m).toLocaleString('pt-BR', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }),
              )}
            </dl>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col text-center">
            <buttom className="btn" onClick={handleClick} style={{ backgroundColor: '#00ff1e' }}>
              Imprimir
            </buttom>
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

export default Ventilador

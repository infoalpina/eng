import React, { useState, useEffect } from 'react'
import { Dropdown, Input, Radio } from '../index'
import { CCol, CRow } from '@coreui/react'
import PropTypes from 'prop-types'
import { useUser } from 'src/userContext'

const DadosPrincipaisSelecao = ({ dis, dados }) => {
  const {
    COD,
    setCOD,
    Serires,
    setSerires,
    TamanhoDaTorre,
    setTamanhoDaTorre,
    VariavelDeControle,
    setVariavelDeControle,
    TipoDeEstrutra,
    setTipoDeEstrutra,
    FrequenciaDaRedeEletrica,
    setFrequenciaDaRedeEletrica,
    ComprimentoDasPas,
    setComprimentoDasPas,
    DiametroDoVentilador,
    setDiametroDoVentilador,
    AreaDaSecaoTransversal,
    setAreaDaSecaoTransversal,
    TiposDeTorres,
    setTiposDeTorres,
    TorresASP2,
    setTorresASP2,
    TorresASP3,
    setTorresASP3,
    TorresASP4,
    setTorresASP4,
    NumeroDeVentiladores,
    setNumeroDeVentiladores,
    classesDeTorres,
    setclassesDeTorres,
    TipoDeAlturaDeEntradaDeAgua,
    setTipoDeAlturaDeEntradaDeAgua,
    NumeroDePasDosVentiladores1,
    setNumeroDePasDosVentiladores1,
    RotacaoDoVentilador1,
    setRotacaoDoVentilador1,
    PotenciaDoMotor1,
    setPotenciaDoMotor1,
    RotacaoDoMotor1,
    setRotacaoDoMotor1,
    DiametroDoVentiladorPorpadrao1,
    setDiametroDoVentiladorPorpadrao1,
    NumeroDePasDosVentiladores2,
    setNumeroDePasDosVentiladores2,
    RotacaoDoVentilador2,
    setRotacaoDoVentilador2,
    PotenciaDoMotor2,
    setPotenciaDoMotor2,
    RotacaoDoMotor2,
    setRotacaoDoMotor2,
    DiametroDoVentiladorPorpadrao2,
    setDiametroDoVentiladorPorpadrao2,
    dominio,
    //Parte um dos pilaretes
    setTipoDeAlturaDePilarete,
    setA19C4W202Lados,
    setA19C4W203Lados,
    setA19C4W204Lados,
    setA19C5W202Lados,
    setA19C5W203Lados,
    setA19C5W204Lados,
    setTipoDeTorres,
    //Parte dois dos pilaretes
    setA19NMax,
    setA19NMin,
    setSGW20NMax,
    setSGW20NMin,
    setRTNMax,
    setRTNMin,
    setSGCNMax,
    setSGCNMin,

    //variaveis do cadastro Seleção 3 parte um
    setPressaoMaximaDeEntrada,
    setTipoDeCuboDeVentilador,
    setLarguraDaCelula,
    setComprimentoDaCelula,
    setTipoDeEstrutura,
    setRevestimentoLateral,
    setTipoDeDistribuicao,

    //variaveis do cadastro Seleção 3 parte dois
    setparaTorresComAr,
    setparaTorresComAr2SG2l,
    setparaTorresComAr3SG2l,
    setparaTorresComAr4SG2l,
    setparaTorresComAr2SG3l,
    setparaTorresComAr3SG3l,
    setparaTorresComAr4SG3l,
    setparaTorresComAr2SG4l,
    setparaTorresComAr3SG4l,
    setparaTorresComAr4SG4l,

    //variaveis do cadastro Seleção 3 parte três
    setClasses,
    setTipoDeVentiladorc1,
    setDescricaoDoMotorEletricoc1,
    setTipoDePasDoVentladorc1,
    setTipoDeTransmissaoc1,
    setRendimentoDeTransmissaoc1,
    setTipoDeVentiladorc2,
    setDescricaoDoMotorEletricoc2,
    setTipoDePasDoVentladorc2,
    setTipoDeTransmissaoc2,
    setRendimentoDeTransmissaoc2,
    PressaoMaximaDeEntrada,
    Status,
    setStatus,
  } = useUser()

  console.log('TorresASP2', TorresASP2)
  console.log('TorresASP3', TorresASP3)
  console.log('TorresASP4', TorresASP4)
  const [dadosRec, setDadosRec] = useState('')

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Erro HTTP! status: ${response.status}`)
        }
        const data = await response.json()
        return data
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    if (dados) {
      const rota = `${dominio}backengenharia/Selecao/ReadAll/?rec=${dados}` // Certifique-se de que a URL está completa
      fetchData(rota).then((data) => {
        if (data) {
          const dadosPrincipais = data.data[0][0]['DadosPrincipais']
          console.log('dadosPrincipais', dadosPrincipais)
          const CamadasDeEnchimento = data.data[0][0]['CamadasDeEnchimento']
          const Pilaretes = data.data[0][0]['Pilaretes']
          const CharsTorre = data.data[0][0]['CharsTorre']
          const Enchimento = data.data[0][0]['Enchimento']
          const MotorEVentilador = data.data[0][0]['MotorEVentilador']

          setStatus(dadosPrincipais['status'] ? dadosPrincipais['status'] : '')
          setCOD(dadosPrincipais['id'] ? dadosPrincipais['id'] : '')
          setSerires(dadosPrincipais['Serie'] ? String(dadosPrincipais['Serie']) : '')
          setTamanhoDaTorre(dadosPrincipais['Tamanho'] ? dadosPrincipais['Tamanho'] : '')
          setVariavelDeControle(dadosPrincipais['VarCont'] ? dadosPrincipais['VarCont'] : '')
          setTipoDeEstrutra(dadosPrincipais['Estrutura'] ? dadosPrincipais['Estrutura'] : '')
          setFrequenciaDaRedeEletrica(
            dadosPrincipais['FreqRedeElet'] ? dadosPrincipais['FreqRedeElet'] : '',
          )
          setComprimentoDasPas(dadosPrincipais['CompDasPas'] ? dadosPrincipais['CompDasPas'] : '')
          setDiametroDoVentilador(dadosPrincipais['DiamVent'] ? dadosPrincipais['DiamVent'] : '')
          setAreaDaSecaoTransversal(
            dadosPrincipais['AreaSecTrans'] ? dadosPrincipais['AreaSecTrans'] : '',
          )
          setTorresASP2(dadosPrincipais['ASP2Lados'] ? ['', dadosPrincipais['ASP2Lados']] : '')
          setTorresASP3(dadosPrincipais['ASP3Lados'] ? ['', dadosPrincipais['ASP3Lados']] : '')
          setTorresASP4(
            dadosPrincipais['INSASP4Lados'] ? ['', dadosPrincipais['INSASP4Lados']] : '',
          )
          setNumeroDeVentiladores(dadosPrincipais['NVent'] ? dadosPrincipais['NVent'] : '')
          setTipoDeAlturaDeEntradaDeAgua(
            dadosPrincipais['AltEntAgua'] ? dadosPrincipais['AltEntAgua'] : '',
          )
          setNumeroDePasDosVentiladores1(
            dadosPrincipais['NumPasVentClasse1'] ? ['', dadosPrincipais['NumPasVentClasse1']] : '',
          )
          setRotacaoDoVentilador1(
            dadosPrincipais['RotVentC1'] ? ['', dadosPrincipais['RotVentC1']] : '',
          )
          setPotenciaDoMotor1(
            dadosPrincipais['PotMotEletC1'] ? ['', dadosPrincipais['PotMotEletC1']] : '',
          )
          setRotacaoDoMotor1(
            dadosPrincipais['RotMotEletC1'] ? ['', dadosPrincipais['RotMotEletC1']] : '',
          )
          setDiametroDoVentiladorPorpadrao1(
            dadosPrincipais['DiamVentPadraoC1'] ? ['', dadosPrincipais['DiamVentPadraoC1']] : '',
          )
          setNumeroDePasDosVentiladores2(
            dadosPrincipais['NPasVentC2'] ? ['', dadosPrincipais['NPasVentC2']] : '',
          )
          setRotacaoDoVentilador2(
            dadosPrincipais['RotDoVentC2'] ? ['', dadosPrincipais['RotDoVentC2']] : '',
          )
          setPotenciaDoMotor2(
            dadosPrincipais['PotMotEletC2'] ? ['', dadosPrincipais['PotMotEletC2']] : '',
          )
          setRotacaoDoMotor2(
            dadosPrincipais['RotMotEletC2'] ? ['', dadosPrincipais['RotMotEletC2']] : '',
          )
          setDiametroDoVentiladorPorpadrao2(
            dadosPrincipais['DiamVentPadraoC2'] ? ['', dadosPrincipais['DiamVentPadraoC2']] : '',
          )
          //Parte um dos pilaretes
          setA19C4W202Lados(
            Pilaretes['AltPilAdcmPTorreCA19CAte4W20e4SGArPor2l']
              ? ['', Pilaretes['AltPilAdcmPTorreCA19CAte4W20e4SGArPor2l']]
              : '',
          )
          setA19C4W203Lados(
            Pilaretes['AltPilAdcmPTorreCA19CAte4W20e4SGAPor3l']
              ? ['', Pilaretes['AltPilAdcmPTorreCA19CAte4W20e4SGAPor3l']]
              : '',
          )
          setA19C4W204Lados(
            Pilaretes['AltPilAdcmPTorreCA19CAte4W20e4SGAPor4l']
              ? ['', Pilaretes['AltPilAdcmPTorreCA19CAte4W20e4SGAPor4l']]
              : '',
          )
          setA19C5W202Lados(
            Pilaretes['AltPilAdcmCom5W20e5SGAPor2l']
              ? ['', Pilaretes['AltPilAdcmCom5W20e5SGAPor2l']]
              : '',
          )
          setA19C5W203Lados(
            Pilaretes['AltPilAdcmCom5W20e5SGArPor3l']
              ? ['', Pilaretes['AltPilAdcmCom5W20e5SGArPor3l']]
              : '',
          )
          setA19C5W204Lados(
            Pilaretes['AltPilAdcmCom5W20e5SGArPor4l']
              ? ['', Pilaretes['AltPilAdcmCom5W20e5SGArPor4l']]
              : '',
          )
          //Parte dois dos pilaretes
          setA19NMax(
            CamadasDeEnchimento['TorresComA19Nmax']
              ? ['', CamadasDeEnchimento['TorresComA19Nmax']]
              : '',
          )
          setA19NMin(
            CamadasDeEnchimento['TorresComA19Nmin']
              ? ['', CamadasDeEnchimento['TorresComA19Nmin']]
              : '',
          )
          setSGW20NMax(
            CamadasDeEnchimento['TorresComSGCNmax']
              ? ['', CamadasDeEnchimento['TorresComSGCNmax']]
              : '',
          )
          setSGW20NMin(
            CamadasDeEnchimento['TorresComSGCNmin']
              ? ['', CamadasDeEnchimento['TorresComSGCNmin']]
              : '',
          )
          setRTNMax(
            CamadasDeEnchimento['TorresComRTNmax']
              ? ['', CamadasDeEnchimento['TorresComRTNmax']]
              : '',
          )
          setRTNMin(
            CamadasDeEnchimento['TorresComRTNmin']
              ? ['', CamadasDeEnchimento['TorresComRTNmin']]
              : '',
          )
          setSGCNMax(
            CamadasDeEnchimento['TorresComSGeW20Nmax']
              ? ['', CamadasDeEnchimento['TorresComSGeW20Nmax']]
              : '',
          )
          setSGCNMin(
            CamadasDeEnchimento['TorresComSGeW20Nmin']
              ? ['', CamadasDeEnchimento['TorresComSGeW20Nmin']]
              : '',
          )

          // Variáveis do cadastro Seleção 3 parte um
          setPressaoMaximaDeEntrada(
            CharsTorre['PressMaxEnt'] ? parseInt(CharsTorre['PressMaxEnt']) : '',
          )
          setTipoDeCuboDeVentilador(
            CharsTorre['TipCuboVentil'] ? String(CharsTorre['TipCuboVentil']) : '',
          )
          setLarguraDaCelula(CharsTorre['LargCell'] ? parseInt(CharsTorre['LargCell']) : '')
          setComprimentoDaCelula(CharsTorre['CompCell'] ? parseInt(CharsTorre['CompCell']) : '')
          setTipoDeEstrutura(CharsTorre['TipEstrtut'] ? String(CharsTorre['TipEstrtut']) : '')
          setRevestimentoLateral(CharsTorre['RevestLat'] ? String(CharsTorre['RevestLat']) : '')
          setTipoDeDistribuicao(CharsTorre['TipDistrib'] ? String(CharsTorre['TipDistrib']) : '')

          //variaveis do cadastro Seleção 3 parte dois
          setparaTorresComAr2SG2l(
            Enchimento['doisSGW202ou3A192l'] ? ['', Enchimento['doisSGW202ou3A192l']] : '',
          )
          setparaTorresComAr3SG2l(
            Enchimento['tresSGW204A192l'] ? ['', Enchimento['tresSGW204A192l']] : '',
          )
          setparaTorresComAr4SG2l(
            Enchimento['quatroou5SGW20ou5A192l'] ? ['', Enchimento['quatroou5SGW20ou5A192l']] : '',
          )
          setparaTorresComAr2SG3l(
            Enchimento['doisSGW202ou3A193l'] ? ['', Enchimento['doisSGW202ou3A193l']] : '',
          )
          setparaTorresComAr3SG3l(
            Enchimento['tresSGW204A193l'] ? ['', Enchimento['tresSGW204A193l']] : '',
          )
          setparaTorresComAr4SG3l(
            Enchimento['quatroou5SGW20ou5A193l'] ? ['', Enchimento['quatroou5SGW20ou5A193l']] : '',
          )
          setparaTorresComAr2SG4l(
            Enchimento['doisSGW202ou3A194l'] ? ['', Enchimento['doisSGW202ou3A194l']] : '',
          )
          setparaTorresComAr3SG4l(
            Enchimento['tresSGW204A194l'] ? ['', Enchimento['tresSGW204A194l']] : '',
          )
          setparaTorresComAr4SG4l(
            Enchimento['quatroou5SGW20ou5A194l'] ? ['', Enchimento['quatroou5SGW20ou5A194l']] : '',
          )

          //variaveis do cadastro Seleção 3 parte três
          setTipoDeVentiladorc1(
            MotorEVentilador['TipoDeVentiladorC1']
              ? ['', MotorEVentilador['TipoDeVentiladorC1']]
              : '',
          )
          setDescricaoDoMotorEletricoc1(
            MotorEVentilador['DescricaoDoMotorEletricoC1']
              ? ['', MotorEVentilador['DescricaoDoMotorEletricoC1']]
              : '',
          )
          setTipoDePasDoVentladorc1(
            MotorEVentilador['tiposDePasDoVentiladorC1']
              ? ['', MotorEVentilador['tiposDePasDoVentiladorC1']]
              : '',
          )
          setTipoDeTransmissaoc1(
            MotorEVentilador['tipoDeTransmissaoC1']
              ? ['', MotorEVentilador['tipoDeTransmissaoC1']]
              : '',
          )
          setRendimentoDeTransmissaoc1(
            MotorEVentilador['rendimentoDeTransmissaoC1']
              ? ['', MotorEVentilador['rendimentoDeTransmissaoC1']]
              : '',
          )
          setTipoDeVentiladorc2(
            MotorEVentilador['TipoDeVentiladorC2']
              ? ['', MotorEVentilador['TipoDeVentiladorC2']]
              : '',
          )
          setDescricaoDoMotorEletricoc2(
            MotorEVentilador['DescricaoDoMotorEletricoC2']
              ? ['', MotorEVentilador['DescricaoDoMotorEletricoC2']]
              : '',
          )
          setTipoDePasDoVentladorc2(
            MotorEVentilador['tiposDePasDoVentiladorC2']
              ? ['', MotorEVentilador['tiposDePasDoVentiladorC2']]
              : '',
          )
          setTipoDeTransmissaoc2(
            MotorEVentilador['tipoDeTransmissaoC2']
              ? ['', MotorEVentilador['tipoDeTransmissaoC2']]
              : '',
          )
          setRendimentoDeTransmissaoc2(
            MotorEVentilador['rendimentoDeTransmissaoC2']
              ? ['', MotorEVentilador['rendimentoDeTransmissaoC2']]
              : '',
          )
        }
      })
    } else {
      const rota = `${dominio}backengenharia/Selecao/ReadNindice/` // Certifique-se de que a URL está completa
      fetchData(rota).then((data) => {
        if (data) {
          setCOD(parseInt(data.data) + 1)
        }
      })
    }
  }, [dados, dominio])

  return (
    <div>
      <form
        className="border rounded m-3 p-3 w-100"
        style={{ border: '1px solid black', borderRadius: '10px' }}
      >
        <CRow>
          <CCol md={'9'}>
            <CRow
              className="border rounded m-3 p-3"
              style={{ border: '1px solid black', borderRadius: '10px' }}
            >
              <CCol>
                <Input input={COD} setinput={setCOD} etiqueta={'Código'} desativado={true} />
              </CCol>
              <CCol>
                <Input input={Serires} setinput={setSerires} etiqueta={'Séries'} desativado={dis} />
              </CCol>
              <CCol>
                <Input
                  input={TamanhoDaTorre}
                  setinput={setTamanhoDaTorre}
                  etiqueta={'Tamanho da torre'}
                  desativado={dis}
                  tipo={'number'}
                />
              </CCol>
            </CRow>
            <CRow
              md={''}
              className="border rounded m-3 p-3"
              style={{ border: '1px solid black', borderRadius: '10px' }}
            >
              <CRow>
                <p>Variavel De Controle</p>
              </CRow>
              <CCol>
                <Radio
                  etiqueta={'insuflamento'}
                  nome={'insuflamento'}
                  ativo={VariavelDeControle === 'insuflamento'}
                  desativado={dis}
                  onChange={() => setVariavelDeControle('insuflamento')}
                />
              </CCol>
              <CCol>
                <Radio
                  etiqueta={'aspiração'}
                  nome={'aspiracao'}
                  ativo={VariavelDeControle === 'aspiracao'}
                  desativado={dis}
                  onChange={() => setVariavelDeControle('aspiracao')}
                />
              </CCol>
            </CRow>
          </CCol>
          <CCol
            className="border rounded m-3 p-3"
            style={{ border: '1px solid black', borderRadius: '10px' }}
          >
            <CRow>
              <p>Tipo de estrtura</p>
            </CRow>
            <CRow>
              <Radio
                etiqueta={'PRF autoportante'}
                nome={'variavelDeControle'}
                ativo={TipoDeEstrutra === 'autoportante'}
                desativado={dis}
                onChange={() => setTipoDeEstrutra('autoportante')}
              />
            </CRow>
            <CRow>
              <Radio
                etiqueta={'metalica'}
                nome={'variavelDeControle'}
                ativo={TipoDeEstrutra === 'metalica'}
                desativado={dis}
                onChange={() => setTipoDeEstrutra('metalica')}
              />
            </CRow>
          </CCol>
          <div
            className="border rounded m-3 p-3 w-90"
            style={{ border: '1px solid black', borderRadius: '10px', width: '97%' }}
          >
            <CRow>
              <Input
                etiqueta={'Frequência de rede elétrica'}
                desativado={dis}
                input={FrequenciaDaRedeEletrica}
                setinput={setFrequenciaDaRedeEletrica}
                tipo={'number'}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Comprimento das pás'}
                desativado={dis}
                input={ComprimentoDasPas}
                setinput={setComprimentoDasPas}
                tipo={'number'}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Diâmetro do ventilador'}
                desativado={dis}
                input={DiametroDoVentilador}
                setinput={setDiametroDoVentilador}
                tipo={'number'}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={'Área da seção transversal'}
                desativado={dis}
                input={AreaDaSecaoTransversal}
                setinput={setAreaDaSecaoTransversal}
                tipo={'number'}
              />
            </CRow>
          </div>
          <div
            className="border rounded m-3 p-3  "
            style={{ border: '1px solid black', borderRadius: '10px', width: '97%' }}
          >
            <CRow style="mt-5">
              <p>Área de entrada de ar</p>
            </CRow>
            <CRow>
              <Dropdown
                titulo={'tipos de torres'}
                etiqueta={TiposDeTorres}
                desativado={false}
                valores={[
                  'torres ASP - 2 lados',
                  'torres ASP - 3 lados',
                  'torres INS e ASP - 4 lados',
                ]}
                setValor={setTiposDeTorres}
                onChange={(primeiroValor) => {
                  if (primeiroValor === 'torres ASP - 2 lados') {
                    setTorresASP2(['torres ASP - 2 lados', ...TorresASP2.slice(1)])
                  } else if (primeiroValor === 'torres ASP - 3 lados') {
                    setTorresASP3(['torres ASP - 3 lados', ...TorresASP3.slice(1)])
                  } else if (primeiroValor === 'torres INS e ASP - 4 lados') {
                    setTorresASP4(['torres INS e ASP - 4 lados', ...TorresASP4.slice(1)])
                  }
                }}
              />
            </CRow>
            <CRow>
              <Input
                etiqueta={''}
                desativado={dis}
                tipo={'number'}
                input={
                  TiposDeTorres === 'torres ASP - 2 lados'
                    ? TorresASP2[1]
                    : TiposDeTorres === 'torres ASP - 3 lados'
                    ? TorresASP3[1]
                    : TiposDeTorres === 'torres INS e ASP - 4 lados'
                    ? TorresASP4[1]
                    : null
                }
                onChange={(valor) => {
                  if (TiposDeTorres === 'torres ASP - 2 lados') {
                    setTorresASP2(['torres ASP - 2 lados', valor])
                  } else if (TiposDeTorres === 'torres ASP - 3 lados') {
                    setTorresASP3(['torres ASP - 3 lados', valor])
                  } else if (TiposDeTorres === 'torres INS e ASP - 4 lados') {
                    setTorresASP4(['torres INS e ASP - 4 lados', valor])
                  }
                }}
              />
            </CRow>
          </div>
          <div
            className="border rounded m-3 p-3 "
            style={{ border: '1px solid black', borderRadius: '10px', width: '97%' }}
          >
            <CRow>
              <Input
                input={NumeroDeVentiladores}
                setinput={setNumeroDeVentiladores}
                etiqueta={'Número de ventiladores'}
                desativado={dis}
                tipo={'number'}
              />
            </CRow>
          </div>
          <div
            className="border rounded m-3 p-3"
            style={{ border: '1px solid black', borderRadius: '10px', width: '97%' }}
          >
            <CRow>
              <p>Tipo de altura de entrada de água</p>
            </CRow>
            <CRow>
              <Radio
                etiqueta={'Depende do modelo da torre'}
                nome={'DependeDoModeloDaTorre'}
                ativo={TipoDeAlturaDeEntradaDeAgua === 'DependeDoModeloDaTorre'}
                desativado={dis}
                onChange={() => setTipoDeAlturaDeEntradaDeAgua('DependeDoModeloDaTorre')}
              />
            </CRow>
            <CRow>
              <Radio
                etiqueta={'Depende do modelo da torre e lados livres de entrada de ar'}
                nome={'DependeDoModeloDaTorreeLadosLivresDeEntradaDeAr'}
                ativo={
                  TipoDeAlturaDeEntradaDeAgua === 'DependeDoModeloDaTorreeLadosLivresDeEntradaDeAr'
                }
                desativado={dis}
                onChange={() =>
                  setTipoDeAlturaDeEntradaDeAgua('DependeDoModeloDaTorreeLadosLivresDeEntradaDeAr')
                }
              />
            </CRow>
            <CRow>
              <Radio
                etiqueta={
                  'Depende do modelo da torre, lados livres de entrada de ar e Camadas de enchimento'
                }
                nome={'DependeDoModeloDaTorreeLadosLivresDeEntradaDeAreCamadasDeEnchimento'}
                ativo={
                  TipoDeAlturaDeEntradaDeAgua ===
                  'DependeDoModeloDaTorreeLadosLivresDeEntradaDeAreCamadasDeEnchimento'
                }
                onChange={() =>
                  setTipoDeAlturaDeEntradaDeAgua(
                    'DependeDoModeloDaTorreeLadosLivresDeEntradaDeAreCamadasDeEnchimento',
                  )
                }
                desativado={dis}
              />
            </CRow>
          </div>
          <div
            className="border rounded m-3 p-3"
            style={{ border: '1px solid black', borderRadius: '10px', width: '97%' }}
          >
            <CRow>
              <Dropdown
                titulo={'tipos de torres'}
                etiqueta={classesDeTorres}
                desativado={false}
                valores={['Classe 1', 'Classe 2']}
                setValor={setclassesDeTorres}
                onChange={(primeirovalor) => {
                  if (primeirovalor === 'Classe 1') {
                    setNumeroDePasDosVentiladores1([
                      'Classe 1',
                      ...NumeroDePasDosVentiladores1.slice(1),
                    ])
                    setRotacaoDoVentilador1(['Classe 1', ...RotacaoDoVentilador1.slice(1)])
                    setPotenciaDoMotor1(['Classe 1', ...PotenciaDoMotor1.slice(1)])
                    setRotacaoDoMotor1(['Classe 1', ...RotacaoDoMotor1.slice(1)])
                    setDiametroDoVentiladorPorpadrao1([
                      'Classe 1',
                      ...DiametroDoVentiladorPorpadrao1.slice(1),
                    ])
                  }
                  if (primeirovalor === 'Classe 2') {
                    setNumeroDePasDosVentiladores2([
                      'Classe 2',
                      ...NumeroDePasDosVentiladores2.slice(1),
                    ])
                    setRotacaoDoVentilador2(['Classe 2', ...RotacaoDoVentilador2.slice(1)])
                    setPotenciaDoMotor2(['Classe 2', ...PotenciaDoMotor2.slice(1)])
                    setRotacaoDoMotor2(['Classe 2', ...RotacaoDoMotor2.slice(1)])
                    setDiametroDoVentiladorPorpadrao2([
                      'Classe 2',
                      ...DiametroDoVentiladorPorpadrao2.slice(1),
                    ])
                  }
                }}
              />
            </CRow>
            <CRow>
              <Input
                tipo={'number'}
                input={
                  classesDeTorres === 'Classe 1'
                    ? NumeroDePasDosVentiladores1[1]
                    : classesDeTorres === 'Classe 2'
                    ? NumeroDePasDosVentiladores2[1]
                    : null
                }
                etiqueta={'Número de pás dos ventiladores'}
                desativado={dis}
                onChange={(valor) => {
                  if (classesDeTorres === 'Classe 1') {
                    setNumeroDePasDosVentiladores1(['Classe 1', valor])
                  } else if (classesDeTorres === 'Classe 2') {
                    setNumeroDePasDosVentiladores2(['Classe 2', valor])
                  }
                }}
              />
            </CRow>
            <CRow>
              <Input
                tipo={'number'}
                input={
                  classesDeTorres === 'Classe 1'
                    ? RotacaoDoVentilador1[1]
                    : classesDeTorres === 'Classe 2'
                    ? RotacaoDoVentilador2[1]
                    : null
                }
                etiqueta={'Rotação do ventilador'}
                desativado={dis}
                onChange={(valor) => {
                  if (classesDeTorres === 'Classe 1') {
                    setRotacaoDoVentilador1(['Classe 1', valor])
                  } else if (classesDeTorres === 'Classe 2') {
                    setRotacaoDoVentilador2(['Classe 2', valor])
                  }
                }}
              />
            </CRow>
            <CRow>
              <Input
                tipo={'number'}
                input={
                  classesDeTorres === 'Classe 1'
                    ? PotenciaDoMotor1[1]
                    : classesDeTorres === 'Classe 2'
                    ? PotenciaDoMotor2[1]
                    : null
                }
                etiqueta={'Potência do motor elétrico'}
                desativado={dis}
                onChange={(valor) => {
                  if (classesDeTorres === 'Classe 1') {
                    setPotenciaDoMotor1(['Classe 1', valor])
                  } else if (classesDeTorres === 'Classe 2') {
                    setPotenciaDoMotor2(['Classe 2', valor])
                  }
                }}
              />
            </CRow>
            <CRow>
              <Input
                tipo={'number'}
                input={
                  classesDeTorres === 'Classe 1'
                    ? RotacaoDoMotor1[1]
                    : classesDeTorres === 'Classe 2'
                    ? RotacaoDoMotor2[1]
                    : null
                }
                etiqueta={'Rotação do motor elétrico'}
                desativado={dis}
                onChange={(valor) => {
                  if (classesDeTorres === 'Classe 1') {
                    setRotacaoDoMotor1(['Classe 1', valor])
                  } else if (classesDeTorres === 'Classe 2') {
                    setRotacaoDoMotor2(['Classe 2', valor])
                  }
                }}
              />
            </CRow>
            <CRow>
              <Input
                tipo={'number'}
                input={
                  classesDeTorres === 'Classe 1'
                    ? DiametroDoVentiladorPorpadrao1[1]
                    : classesDeTorres === 'Classe 2'
                    ? DiametroDoVentiladorPorpadrao2[1]
                    : null
                }
                etiqueta={'Diâmetro do ventilador padrão'}
                desativado={dis}
                onChange={(valor) => {
                  if (classesDeTorres === 'Classe 1') {
                    setDiametroDoVentiladorPorpadrao1(['Classe 1', valor])
                  } else if (classesDeTorres === 'Classe 2') {
                    setDiametroDoVentiladorPorpadrao2(['Classe 2', valor])
                  }
                }}
              />
            </CRow>
          </div>
        </CRow>
      </form>
    </div>
  )
}

DadosPrincipaisSelecao.propTypes = {
  dis: PropTypes.bool.isRequired,
  dados: PropTypes.number.isRequired,
}

export default DadosPrincipaisSelecao

import React, { useState, useEffect } from 'react'
import DefaultLayout from '../../../layout/DefaultLayout'
import { Componentesdosmodelos, Steppers3passos, Modal } from 'src/components'
import { useUser } from 'src/userContext'
import useEncaminhar from '../../../hooks/functions/useEncaminhar'
import UseEnviarRoutes from '../../../hooks/UseEnviarRoutes'
import { useCookies } from 'react-cookie'
import { useParams } from 'react-router-dom'
import ValidateSelectionTowerCreation from '../../../hooks/functions/ValidateSelectionTowerCreation'
import enviarDadosParaBackend from '../../../hooks/functions/submitbackend'

const Edicaodetorres3 = () => {
  const [msg, setmsg] = useState([])
  const { checkUserExpiration } = UseEnviarRoutes()
  const { torreData } = useParams()
  const [cookies] = useCookies(['name', 'user', 'timeOut'])
  const name = cookies.name
  const user = cookies.user
  const timeOut = cookies.timeOut
  const encaminhar = useEncaminhar()
  const {
    dominio,
    //tela um
    COD,
    Serires,
    TamanhoDaTorre,
    VariavelDeControle,
    //Parte dois dos dados principais
    TipoDeEstrutra,
    FrequenciaDaRedeEletrica,
    ComprimentoDasPas,
    DiametroDoVentilador,
    AreaDaSecaoTransversal,
    TiposDeTorres,
    TorresASP2,
    TorresASP3,
    TorresASP4,
    NumeroDeVentiladores,
    classesDeTorres,
    TipoDeAlturaDeEntradaDeAgua,
    NumeroDePasDosVentiladores1,
    RotacaoDoVentilador1,
    PotenciaDoMotor1,
    RotacaoDoMotor1,
    DiametroDoVentiladorPorpadrao1,
    NumeroDePasDosVentiladores2,
    RotacaoDoVentilador2,
    PotenciaDoMotor2,
    RotacaoDoMotor2,
    DiametroDoVentiladorPorpadrao2,

    //tela 2
    TipoDeAlturaDePilarete,
    A19C4W202Lados,
    A19C4W203Lados,
    A19C4W204Lados,
    A19C5W202Lados,
    A19C5W203Lados,
    A19C5W204Lados,
    TipoDeTorres,
    A19NMax,
    A19NMin,
    SGW20NMax,
    SGW20NMin,
    RTNMax,
    RTNMin,
    SGCNMax,
    SGCNMin,

    //tela 3
    PressaoMaximaDeEntrada,
    TipoDeCuboDeVentilador,
    LarguraDaCelula,
    ComprimentoDaCelula,
    TipoDeEstrutura,
    RevestimentoLateral,
    TipoDeDistribuicao,

    paraTorresComAr,
    paraTorresComAr2SG2l,
    paraTorresComAr3SG2l,
    paraTorresComAr4SG2l,
    paraTorresComAr2SG3l,
    paraTorresComAr3SG3l,
    paraTorresComAr4SG3l,
    paraTorresComAr2SG4l,
    paraTorresComAr3SG4l,
    paraTorresComAr4SG4l,

    Classes,
    TipoDeVentiladorc1,
    DescricaoDoMotorEletricoc1,
    TipoDePasDoVentladorc1,
    TipoDeTransmissaoc1,
    RendimentoDeTransmissaoc1,
    TipoDeVentiladorc2,
    DescricaoDoMotorEletricoc2,
    TipoDePasDoVentladorc2,
    TipoDeTransmissaoc2,
    RendimentoDeTransmissaoc2,
    Status,
  } = useUser()
  console.log('TorresASP2', TorresASP2)
  console.log('TorresASP3', TorresASP3)
  console.log('TorresASP4', TorresASP4)

  const handleProcessarClick = (event) => {
    const dados = {
      //tela um
      COD: COD,
      Serires: Serires,
      TamanhoDaTorre: TamanhoDaTorre,
      VariavelDeControle: VariavelDeControle,
      //Parte dois dos dados principais
      TipoDeEstrutra: TipoDeEstrutra,
      FrequenciaDaRedeEletrica: FrequenciaDaRedeEletrica,
      ComprimentoDasPas: ComprimentoDasPas,
      DiametroDoVentilador: DiametroDoVentilador,
      AreaDaSecaoTransversal: AreaDaSecaoTransversal,
      TiposDeTorres: TiposDeTorres,
      TorresASP2: TorresASP2,
      TorresASP3: TorresASP3,
      TorresASP4: TorresASP4,
      NumeroDeVentiladores: NumeroDeVentiladores,
      classesDeTorres: classesDeTorres,
      TipoDeAlturaDeEntradaDeAgua: TipoDeAlturaDeEntradaDeAgua,
      NumeroDePasDosVentiladores1: NumeroDePasDosVentiladores1,
      RotacaoDoVentilador1: RotacaoDoVentilador1,
      PotenciaDoMotor1: PotenciaDoMotor1,
      RotacaoDoMotor1: RotacaoDoMotor1,
      DiametroDoVentiladorPorpadrao1: DiametroDoVentiladorPorpadrao1,
      NumeroDePasDosVentiladores2: NumeroDePasDosVentiladores2,
      RotacaoDoVentilador2: RotacaoDoVentilador2,
      PotenciaDoMotor2: PotenciaDoMotor2,
      RotacaoDoMotor2: RotacaoDoMotor2,
      DiametroDoVentiladorPorpadrao2: DiametroDoVentiladorPorpadrao2,

      //tela 2
      TipoDeAlturaDePilarete: TipoDeAlturaDePilarete,
      A19C4W202Lados: A19C4W202Lados,
      A19C4W203Lados: A19C4W203Lados,
      A19C4W204Lados: A19C4W204Lados,
      A19C5W202Lados: A19C5W202Lados,
      A19C5W203Lados: A19C5W203Lados,
      A19C5W204Lados: A19C5W204Lados,
      TipoDeTorres: TipoDeTorres,
      A19NMax: A19NMax,
      A19NMin: A19NMin,
      SGW20NMax: SGW20NMax,
      SGW20NMin: SGW20NMin,
      RTNMax: RTNMax,
      RTNMin: RTNMin,
      SGCNMax: SGCNMax,
      SGCNMin: SGCNMin,

      //tela 3
      PressaoMaximaDeEntrada: PressaoMaximaDeEntrada,
      TipoDeCuboDeVentilador: TipoDeCuboDeVentilador,
      LarguraDaCelula: LarguraDaCelula,
      ComprimentoDaCelula: ComprimentoDaCelula,
      TipoDeEstrutura: TipoDeEstrutura,
      RevestimentoLateral: RevestimentoLateral,
      TipoDeDistribuicao: TipoDeDistribuicao,

      paraTorresComAr: paraTorresComAr,
      paraTorresComAr2SG2l: paraTorresComAr2SG2l,
      paraTorresComAr3SG2l: paraTorresComAr3SG2l,
      paraTorresComAr4SG2l: paraTorresComAr4SG2l,
      paraTorresComAr2SG3l: paraTorresComAr2SG3l,
      paraTorresComAr3SG3l: paraTorresComAr3SG3l,
      paraTorresComAr4SG3l: paraTorresComAr4SG3l,
      paraTorresComAr2SG4l: paraTorresComAr2SG4l,
      paraTorresComAr3SG4l: paraTorresComAr3SG4l,
      paraTorresComAr4SG4l: paraTorresComAr4SG4l,

      Classes: Classes,
      TipoDeVentiladorc1: TipoDeVentiladorc1,
      DescricaoDoMotorEletricoc1: DescricaoDoMotorEletricoc1,
      TipoDePasDoVentladorc1: TipoDePasDoVentladorc1,
      TipoDeTransmissaoc1: TipoDeTransmissaoc1,
      RendimentoDeTransmissaoc1: RendimentoDeTransmissaoc1,
      TipoDeVentiladorc2: TipoDeVentiladorc2,
      DescricaoDoMotorEletricoc2: DescricaoDoMotorEletricoc2,
      TipoDePasDoVentladorc2: TipoDePasDoVentladorc2,
      TipoDeTransmissaoc2: TipoDeTransmissaoc2,
      RendimentoDeTransmissaoc2: RendimentoDeTransmissaoc2,
    }

    const mensagensErro = ValidateSelectionTowerCreation(
      //tela um
      Serires,
      TamanhoDaTorre,
      FrequenciaDaRedeEletrica,
      ComprimentoDasPas,
      DiametroDoVentilador,
      AreaDaSecaoTransversal,
      TorresASP2[1],
      TorresASP3[1],
      TorresASP4[1],
      NumeroDeVentiladores,
      NumeroDePasDosVentiladores1[1],
      RotacaoDoVentilador1[1],
      PotenciaDoMotor1[1],
      RotacaoDoMotor1[1],
      DiametroDoVentiladorPorpadrao1[1],
      NumeroDePasDosVentiladores2[1],
      RotacaoDoVentilador2[1],
      PotenciaDoMotor2[1],
      RotacaoDoMotor2[1],
      DiametroDoVentiladorPorpadrao2[1],

      //tela 2
      A19C4W202Lados[1],
      A19C4W203Lados[1],
      A19C4W204Lados[1],
      A19C5W202Lados[1],
      A19C5W203Lados[1],
      A19C5W204Lados[1],
      A19NMax[1],
      A19NMin[1],
      SGW20NMax[1],
      SGW20NMin[1],
      RTNMax[1],
      RTNMin[1],
      SGCNMax[1],
      SGCNMin[1],

      //tela 3
      PressaoMaximaDeEntrada,
      TipoDeCuboDeVentilador,
      LarguraDaCelula,
      ComprimentoDaCelula,
      TipoDeEstrutura,
      RevestimentoLateral,
      TipoDeDistribuicao,
      paraTorresComAr2SG2l[1],
      paraTorresComAr3SG2l[1],
      paraTorresComAr4SG2l[1],
      paraTorresComAr2SG3l[1],
      paraTorresComAr3SG3l[1],
      paraTorresComAr4SG3l[1],
      paraTorresComAr2SG4l[1],
      paraTorresComAr3SG4l[1],
      paraTorresComAr4SG4l[1],
      TipoDeVentiladorc1[1],
      DescricaoDoMotorEletricoc1[1],
      TipoDePasDoVentladorc1[1],
      TipoDeTransmissaoc1[1],
      RendimentoDeTransmissaoc1[1],
      TipoDeVentiladorc2[1],
      DescricaoDoMotorEletricoc2[1],
      TipoDePasDoVentladorc2[1],
      TipoDeTransmissaoc2[1],
      RendimentoDeTransmissaoc2[1],
    )
    setmsg(mensagensErro)
    if (mensagensErro.length <= 0) {
      const rota = `${dominio}backengenharia/Selecao/Update/`
      enviarDadosParaBackend(rota, dados)
        .then((mensagem) => {
          console.log(mensagem)
          const receivedData = mensagem['data']['received_data']
          window.location.href = `http://localhost:3000/#/TorreAtualizadaComSucesso/${!receivedData}`
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  const handleDisabledClick = (event) => {
    const dados = {
      COD: COD,
      Status: !Status,
    }
    const rota = `${dominio}backengenharia/Selecao/Delete/`
    enviarDadosParaBackend(rota, dados)
      .then((mensagem) => {
        console.log(mensagem)
        const receivedData = Status
        window.location.href = `http://localhost:3000/#/TorreDeletadaComSucesso/${!receivedData}`
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    checkUserExpiration()
    if (!user || !name || !timeOut) {
      encaminhar('/')
    }
  }, [user, name, timeOut])
  if (!torreData) {
    // Lidar com a situação em que dados é nulo
    return <p>Dados da torre não disponíveis</p>
  }
  return (
    <div>
      <>
        <DefaultLayout
          titulo={'Editar torres'}
          cabecalhoSecundario={
            <Steppers3passos
              rota1={`/editartorres1/${encodeURIComponent(JSON.stringify(parseInt(torreData)))}`}
              rota2={`/editartorres2/${encodeURIComponent(JSON.stringify(parseInt(torreData)))}`}
              rota3={`/editartorres3/${encodeURIComponent(JSON.stringify(parseInt(torreData)))}`}
              ativo1={false}
              ativo2={false}
              ativo3={true}
              userType={user}
            />
          }
          conteudoPrimario={
            <Componentesdosmodelos
              botao1={
                <Modal
                  descricao={'Atualizar'}
                  texto={'Deseja realmente salvar as modificações?'}
                  color={'success'}
                  enviarRequisicao={handleProcessarClick}
                />
              }
              botao2={
                Status ? (
                  <Modal
                    descricao={'Desativar'}
                    texto={'Deseja realmente deletar essa torre?'}
                    color={'danger'}
                    enviarRequisicao={handleDisabledClick}
                  />
                ) : (
                  <Modal
                    descricao={'Reativar'}
                    texto={'Deseja realmente reativar essa torre?'}
                    color={'danger'}
                    enviarRequisicao={handleDisabledClick}
                  />
                )
              }
              desativado={!Status}
            />
          }
        />
      </>
    </div>
  )
}

export default Edicaodetorres3

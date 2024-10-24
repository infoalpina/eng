import React, { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useCookies } from 'react-cookie'
import axios from 'axios'
const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [Observacoes, setObsevacoes] = useState('')
  const [valuesVentiladores, setValuesVentiladores] = useState('')
  const [valuesFCAs, setValuesFCAs] = useState('')
  const [cookies, setCookie, removeCookie] = useCookies(['name', 'user', 'timeOut'])
  const [name, setname] = useState('engenharia')
  const [QuestionPrint, setQuestionPrint] = useState('engenharia')
  const [user, setUser] = useState('engenharia')
  const [respostaFCA, setRespostaFCA] = useState('')
  const [ventiladores, setVentiladores] = useState('')
  const [experiation, setExperiation] = useState('')
  //const [dominio, setDominio] = useState('http://localhost:8000/')
  const [dominio, setDominio] = useState('http://10.0.0.183:8001/')

  const [Status, setStatus] = useState('')
  const [nomedoprojeto, setnomedoprojeto] = useState('')
  const [cliente, setcliente] = useState('')
  const [dataatual, setdataatual] = useState('')
  const [diametrodotubo, setdiametrodotubo] = useState('Diâmetro do tubo')
  const [tipodefluido, settipodefluido] = useState('Tipo de fluido')
  const [temperaturaquente, settemperaturaquente] = useState('')
  const [temperaturafria, settemperaturafria] = useState('')
  const [temperaturadebulboumido, settemperaturadebulboumido] = useState('')
  const [temperaturadebulboseco, settemperaturadebulboseco] = useState('')
  const [vazaodeagua, setvazaodeagua] = useState('')
  const [perdaDePressaoEstaticaAdicional, setperdaDePressaoEstaticaAdicional] = useState('')
  const [pressaoDeArDoAmbiente, setpressaoDeArDoAmbiente] = useState('1013')
  const [velocidadeMediaDoAr, setvelocidadeMediaDoAr] = useState('2.0')
  const [densidadeDeAguaDeIrrigacao, setdensidadeDeAguaDeIrrigacao] = useState('10.0')
  const [fatorDeIncrustracao, setfatorDeIncrustracao] = useState('0')
  const [torrerSelect, settorreSelect] = useState('')
  const [useractive, setuseractive] = useState([])
  const [idTorre, setidTorre] = useState([])
  const [data, setData] = useState([])
  const [tipo, settipo] = useState('')
  const [bfluido, setbfluido] = useState(false)
  const [btubo, setbtubo] = useState(false)
  const [calorespecificodofluido, setcalorespecificodofluido] = useState(4.1868)
  const [densidadedofluido, setdensidadedofluido] = useState('')
  const [condutibilidadetermicadofluido, setcondutibilidadetermicadofluido] = useState()
  const [viscosidadedinamica, setviscosidadedinamica] = useState()
  const [erromsg, seterromsg] = useState([])
  const [itsVersionament, setItsVersionament] = useState()
  const [HeightWidght, setHeightWidght] = useState('Desktop')
  const [modalBomba, setModalBomba] = useState(false)
  const [modalVentil, setModalVentil] = useState(false)
  const [modalAcio, setModalAcio] = useState(false)
  const [modalTubos, setModalTubos] = useState(false)
  const [modalCalorEspecifico, setModalCalorEspecifico] = useState(false)
  const [modelosTubo, setModelosTubo] = useState([])
  const [modelosDaTorre, setModelosDaTorre] = useState([])
  const [modelosBomba, setModelosBomba] = useState([])
  const [modelosVentil, setModelosVentil] = useState([])
  const [modelosAcio, setModelosAcio] = useState([])
  const [valorSelect, setvalorSelect] = useState('Modelo da torre')
  const [valorSelectBomba, setvalorSelectBomba] = useState('Modelo da bomba')
  const [valorSelectVentil, setvalorSelectVentil] = useState('Modelo do ventilador')
  const [valorSelectAcio, setvalorSelectAcio] = useState('Modelo do acionamento')
  const [valorSelectTubos, setvalorSelectTubos] = useState('  tubos')
  const [CalorEspecificoDoFluido, setCalorEspecificoDoFluido] = useState(
    'Calor especifico do fluido',
  )
  const [selectedCompactado, setSelectedCompactado] = useState('Não Compactado')
  const [tipoDeCalorEspecifico, setTipoDeCalorEspecifico] = useState()
  const [valorSelectCalorEspecifico, setValorSelectCalorEspecifico] = useState()

  const [DensidadeDoFlluido, setDensidadeDoFlluido] = useState('Densidade do flluido')
  const [CondutibilidadeTermicaDoFluido, setCondutibilidadeTermicaDoFluido] = useState(
    'Condutibilidade térmica do fluido',
  )
  const [ViscosidadeDinamicaDoFluido, setViscosidadeDinamicaDoFluido] = useState(
    'Viscosidade dinamica do fluido',
  )
  const [COD, setCOD] = useState()
  const [numberBombas, setNumberBombas] = useState()
  const [Serires, setSerires] = useState()
  const [TamanhoDaTorre, setTamanhoDaTorre] = useState()
  const [VariavelDeControle, setVariavelDeControle] = useState('insuflamento')
  const [TipoDeEstrutra, setTipoDeEstrutra] = useState('autoportante')
  const [FrequenciaDaRedeEletrica, setFrequenciaDaRedeEletrica] = useState('')
  const [ComprimentoDasPas, setComprimentoDasPas] = useState('')
  const [DiametroDoVentilador, setDiametroDoVentilador] = useState('')
  const [AreaDaSecaoTransversal, setAreaDaSecaoTransversal] = useState('')
  const [TiposDeTorres, setTiposDeTorres] = useState('tipos de torres')
  const [TorresASP2, setTorresASP2] = useState(['', ''])
  const [TorresASP3, setTorresASP3] = useState(['', ''])
  const [TorresASP4, setTorresASP4] = useState(['', ''])
  const [NumeroDeVentiladores, setNumeroDeVentiladores] = useState()
  const [classesDeTorres, setclassesDeTorres] = useState('classe de torres')
  const [TipoDeAlturaDeEntradaDeAgua, setTipoDeAlturaDeEntradaDeAgua] =
    useState('DependeDoModeloDaTorre')
  const [NumeroDePasDosVentiladores1, setNumeroDePasDosVentiladores1] = useState(['', ''])
  const [RotacaoDoVentilador1, setRotacaoDoVentilador1] = useState(['', ''])
  const [PotenciaDoMotor1, setPotenciaDoMotor1] = useState(['', ''])
  const [RotacaoDoMotor1, setRotacaoDoMotor1] = useState(['', ''])
  const [DiametroDoVentiladorPorpadrao1, setDiametroDoVentiladorPorpadrao1] = useState(['', ''])

  const [NumeroDePasDosVentiladores2, setNumeroDePasDosVentiladores2] = useState(['', ''])
  const [RotacaoDoVentilador2, setRotacaoDoVentilador2] = useState(['', ''])
  const [PotenciaDoMotor2, setPotenciaDoMotor2] = useState(['', ''])
  const [RotacaoDoMotor2, setRotacaoDoMotor2] = useState(['', ''])
  const [DiametroDoVentiladorPorpadrao2, setDiametroDoVentiladorPorpadrao2] = useState(['', ''])
  //variaveis do cadastro Seleção 2
  const [TipoDeAlturaDePilarete, setTipoDeAlturaDePilarete] = useState('Tipo de altura de pilarete')
  const [A19C4W202Lados, setA19C4W202Lados] = useState(['', ''])
  const [A19C4W203Lados, setA19C4W203Lados] = useState(['', ''])
  const [A19C4W204Lados, setA19C4W204Lados] = useState(['', ''])
  const [A19C5W202Lados, setA19C5W202Lados] = useState(['', ''])
  const [A19C5W203Lados, setA19C5W203Lados] = useState(['', ''])
  const [A19C5W204Lados, setA19C5W204Lados] = useState(['', ''])

  const [TipoDeTorres, setTipoDeTorres] = useState('Tipo de torres')
  const [A19NMax, setA19NMax] = useState(['', ''])
  const [A19NMin, setA19NMin] = useState(['', ''])
  const [SGW20NMax, setSGW20NMax] = useState(['', ''])
  const [SGW20NMin, setSGW20NMin] = useState(['', ''])
  const [RTNMax, setRTNMax] = useState(['', ''])
  const [RTNMin, setRTNMin] = useState(['', ''])
  const [SGCNMax, setSGCNMax] = useState(['', ''])
  const [SGCNMin, setSGCNMin] = useState(['', ''])

  //variaveis do cadastro Seleção 3
  const [PressaoMaximaDeEntrada, setPressaoMaximaDeEntrada] = useState()
  const [TipoDeCuboDeVentilador, setTipoDeCuboDeVentilador] = useState()
  const [LarguraDaCelula, setLarguraDaCelula] = useState()
  const [ComprimentoDaCelula, setComprimentoDaCelula] = useState()
  const [TipoDeEstrutura, setTipoDeEstrutura] = useState()
  const [RevestimentoLateral, setRevestimentoLateral] = useState()
  const [TipoDeDistribuicao, setTipoDeDistribuicao] = useState()

  const [paraTorresComAr, setparaTorresComAr] = useState('Para torres com ar')
  const [paraTorresComAr2SG2l, setparaTorresComAr2SG2l] = useState(['', ''])
  const [paraTorresComAr3SG2l, setparaTorresComAr3SG2l] = useState(['', ''])
  const [paraTorresComAr4SG2l, setparaTorresComAr4SG2l] = useState(['', ''])
  const [paraTorresComAr2SG3l, setparaTorresComAr2SG3l] = useState(['', ''])
  const [paraTorresComAr3SG3l, setparaTorresComAr3SG3l] = useState(['', ''])
  const [paraTorresComAr4SG3l, setparaTorresComAr4SG3l] = useState(['', ''])
  const [paraTorresComAr2SG4l, setparaTorresComAr2SG4l] = useState(['', ''])
  const [paraTorresComAr3SG4l, setparaTorresComAr3SG4l] = useState(['', ''])
  const [paraTorresComAr4SG4l, setparaTorresComAr4SG4l] = useState(['', ''])

  const [Classes, setClasses] = useState('Classes')
  const [TipoDeVentiladorc1, setTipoDeVentiladorc1] = useState(['', ''])
  const [DescricaoDoMotorEletricoc1, setDescricaoDoMotorEletricoc1] = useState(['', ''])
  const [TipoDePasDoVentladorc1, setTipoDePasDoVentladorc1] = useState(['', ''])
  const [TipoDeTransmissaoc1, setTipoDeTransmissaoc1] = useState(['', ''])
  const [RendimentoDeTransmissaoc1, setRendimentoDeTransmissaoc1] = useState(['', ''])
  const [TipoDeVentiladorc2, setTipoDeVentiladorc2] = useState(['', ''])
  const [DescricaoDoMotorEletricoc2, setDescricaoDoMotorEletricoc2] = useState(['', ''])
  const [TipoDePasDoVentladorc2, setTipoDePasDoVentladorc2] = useState(['', ''])
  const [TipoDeTransmissaoc2, setTipoDeTransmissaoc2] = useState(['', ''])
  const [RendimentoDeTransmissaoc2, setRendimentoDeTransmissaoc2] = useState(['', ''])
  const [optionsCompactado, setoptionsCompactado] = useState(['Compactado', 'Não Compactado'])

  return (
    <UserContext.Provider
      value={{
        QuestionPrint,
        setQuestionPrint,
        tipoDeCalorEspecifico,
        setTipoDeCalorEspecifico,

        valorSelectCalorEspecifico,
        setValorSelectCalorEspecifico,
        modalCalorEspecifico,
        setModalCalorEspecifico,
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
        modelosDaTorre,
        setModelosDaTorre,
        modelosBomba,
        setModelosBomba,
        modelosVentil,
        modelosAcio,
        setModelosAcio,
        setModelosVentil,
        valorSelect,
        setvalorSelect,
        valorSelectBomba,
        setvalorSelectBomba,
        valorSelectVentil,
        setvalorSelectVentil,
        CalorEspecificoDoFluido,
        setCalorEspecificoDoFluido,
        DensidadeDoFlluido,
        setDensidadeDoFlluido,
        CondutibilidadeTermicaDoFluido,
        setCondutibilidadeTermicaDoFluido,
        ViscosidadeDinamicaDoFluido,
        setViscosidadeDinamicaDoFluido,
        cookies,
        setCookie,
        removeCookie,
        name,
        setname,
        dominio,
        user,
        setUser,
        respostaFCA,
        setRespostaFCA,
        ventiladores,
        setVentiladores,
        experiation,
        setExperiation,
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
        densidadeDeAguaDeIrrigacao,
        setdensidadeDeAguaDeIrrigacao,
        fatorDeIncrustracao,
        setfatorDeIncrustracao,
        torrerSelect,
        settorreSelect,
        numberBombas,
        setNumberBombas,
        //Parte um dos dados principais
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
        TipoDeAlturaDeEntradaDeAgua,
        setTipoDeAlturaDeEntradaDeAgua,
        //Parte dois dos dados principais
        classesDeTorres,
        setclassesDeTorres,
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
        //Parte um dos pilaretes
        TipoDeAlturaDePilarete,
        setTipoDeAlturaDePilarete,
        A19C4W202Lados,
        setA19C4W202Lados,
        A19C4W203Lados,
        setA19C4W203Lados,
        A19C4W204Lados,
        setA19C4W204Lados,
        A19C5W202Lados,
        setA19C5W202Lados,
        A19C5W203Lados,
        setA19C5W203Lados,
        A19C5W204Lados,
        setA19C5W204Lados,
        TipoDeTorres,
        setTipoDeTorres,
        //Parte dois dos pilaretes
        A19NMax,
        setA19NMax,
        A19NMin,
        setA19NMin,
        SGW20NMax,
        setSGW20NMax,
        SGW20NMin,
        setSGW20NMin,
        RTNMax,
        setRTNMax,
        RTNMin,
        setRTNMin,
        SGCNMax,
        setSGCNMax,
        SGCNMin,
        setSGCNMin,

        //variaveis do cadastro Seleção 3 parte um
        PressaoMaximaDeEntrada,
        setPressaoMaximaDeEntrada,
        TipoDeCuboDeVentilador,
        setTipoDeCuboDeVentilador,
        LarguraDaCelula,
        setLarguraDaCelula,
        ComprimentoDaCelula,
        setComprimentoDaCelula,
        TipoDeEstrutura,
        setTipoDeEstrutura,
        RevestimentoLateral,
        setRevestimentoLateral,
        TipoDeDistribuicao,
        setTipoDeDistribuicao,

        //variaveis do cadastro Seleção 3 parte dois
        paraTorresComAr,
        setparaTorresComAr,
        paraTorresComAr2SG2l,
        setparaTorresComAr2SG2l,
        paraTorresComAr3SG2l,
        setparaTorresComAr3SG2l,
        paraTorresComAr4SG2l,
        setparaTorresComAr4SG2l,
        paraTorresComAr2SG3l,
        setparaTorresComAr2SG3l,
        paraTorresComAr3SG3l,
        setparaTorresComAr3SG3l,
        paraTorresComAr4SG3l,
        setparaTorresComAr4SG3l,
        paraTorresComAr2SG4l,
        setparaTorresComAr2SG4l,
        paraTorresComAr3SG4l,
        setparaTorresComAr3SG4l,
        paraTorresComAr4SG4l,
        setparaTorresComAr4SG4l,

        //variaveis do cadastro Seleção 3 parte três
        Classes,
        setClasses,
        TipoDeVentiladorc1,
        setTipoDeVentiladorc1,
        DescricaoDoMotorEletricoc1,
        setDescricaoDoMotorEletricoc1,
        TipoDePasDoVentladorc1,
        setTipoDePasDoVentladorc1,
        TipoDeTransmissaoc1,
        setTipoDeTransmissaoc1,
        RendimentoDeTransmissaoc1,
        setRendimentoDeTransmissaoc1,
        TipoDeVentiladorc2,
        setTipoDeVentiladorc2,
        DescricaoDoMotorEletricoc2,
        setDescricaoDoMotorEletricoc2,
        TipoDePasDoVentladorc2,
        setTipoDePasDoVentladorc2,
        TipoDeTransmissaoc2,
        setTipoDeTransmissaoc2,
        RendimentoDeTransmissaoc2,
        setRendimentoDeTransmissaoc2,
        Status,
        setStatus,
        modalAcio,
        setModalAcio,
        valorSelectAcio,
        setvalorSelectAcio,
        modalTubos,
        setModalTubos,
        modelosTubo,
        setModelosTubo,
        valorSelectTubos,
        setvalorSelectTubos,
        tipoDeCalorEspecifico,
        setTipoDeCalorEspecifico,
        valorSelectCalorEspecifico,
        modalCalorEspecifico,
        setModalCalorEspecifico,
        selectedCompactado,
        setSelectedCompactado,
        Observacoes,
        setObsevacoes,
        optionsCompactado,
        setoptionsCompactado,
        valuesVentiladores,
        setValuesVentiladores,
        valuesFCAs,
        setValuesFCAs,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

// Crie um hook para acessar o contexto em componentes
export const useUser = () => useContext(UserContext)

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

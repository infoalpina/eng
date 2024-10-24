const ValidateSelectionTowerCreation = (
  //tela 1
  Serires,
  TamanhoDaTorre,
  FrequenciaDaRedeEletrica,
  ComprimentoDasPas,
  DiametroDoVentilador,
  AreaDaSecaoTransversal,
  TorresASP2,
  TorresASP3,
  TorresASP4,
  NumeroDeVentiladores,
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
  A19C4W202Lados,
  A19C4W203Lados,
  A19C4W204Lados,
  A19C5W202Lados,
  A19C5W203Lados,
  A19C5W204Lados,
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
  paraTorresComAr2SG2l,
  paraTorresComAr3SG2l,
  paraTorresComAr4SG2l,
  paraTorresComAr2SG3l,
  paraTorresComAr3SG3l,
  paraTorresComAr4SG3l,
  paraTorresComAr2SG4l,
  paraTorresComAr3SG4l,
  paraTorresComAr4SG4l,
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
) => {
  console.log('teste')
  function isString(value) {
    return typeof value === 'string'
  }
  function isInteger(value) {
    return !isNaN(parseInt(value))
  }
  function isFloat(value) {
    return !isNaN(parseFloat(value))
  }
  const mensagens = {
    SeriresType: 'Na tela um o campo "series" precisa ser uma string',
    TamanhoDaTorreType: 'Na tela um o campo "Tamanho da torre" precisa ser um número inteiro',
    FrequenciaDaRedeEletricaType:
      'Na tela um o campo "Frequencia de rede elétrica" precisa ser um número inteiro',
    ComprimentoDasPasType: 'Na tela um o campo "Comprimento das pas" precisa ser um número decimal',
    DiametroDoVentiladorType:
      'Na tela um o campo "Diâmetro do ventilador" precisa ser um número decimal',
    AreaDaSecaoTransversalType:
      'Na tela um o campo "Área da seção transversal" precisa ser um número decimal',
    TorresASP2Type:
      'Na tela um o campo "Área da entrada de ar (torres ASP - 2 lados) " precisa ser um número decimal',
    TorresASP3Type:
      'Na tela um o campo "Área da entrada de ar (torres ASP - 3 lados) " precisa ser um número decimal',
    TorresASP4Type:
      'Na tela um o campo "Área da entrada de ar (torres INS e ASP - 4 lados) " precisa ser um número decimal',
    NumeroDeVentiladoresType:
      'Na tela um o campo "Número de ventiladores" precisa ser um número inteiro',
    NumeroDePasDosVentiladores1Type:
      'Na tela um o campo "Número de pás dos ventiladores (Classe 1)" precisa ser um número inteiro',
    RotacaoDoVentilador1Type:
      'Na tela um o campo "Rotação do ventilador (Classe 1)" precisa ser um número decimal',
    PotenciaDoMotor1Type:
      'Na tela um o campo "Potência do motor (Classe 1)" precisa ser um número decimal',
    RotacaoDoMotor1Type:
      'Na tela um o campo "Rotação do motor (Classe 1)" precisa ser um número decimal',
    DiametroDoVentiladorPorpadrao1Type:
      'Na tela um o campo "Diametro do ventilador por padrão (Classe 1)" precisa ser um número decimal',
    NumeroDePasDosVentiladores2Type:
      'Na tela um o campo "Número de pás dos ventiladores (Classe 2)" precisa ser um número decimal',
    RotacaoDoVentilador2Type:
      'Na tela um o campo "Rotação do ventilador (Classe 2)" precisa ser um número decimal',
    PotenciaDoMotor2Type:
      'Na tela um o campo "Potência do motor (Classe 2)" precisa ser um número decimal',
    RotacaoDoMotor2Type:
      'Na tela um o campo "Rotação do motor (Classe 2)" precisa ser um número decimal',
    DiametroDoVentiladorPorpadrao2Type:
      'Na tela um o campo "Diametro do ventilador por padrão (Classe 2)" precisa ser um número decimal',

    A19C4W202LadosType:
      'Na tela dois o campo "Altura do pilarete adicional (m) para torre com A19, com até /4-W20 e /4-SG (Ar por 2 lados)" precisa ser um número decimal',
    A19C4W203LadosType:
      'Na tela dois o campo "Altura do pilarete adicional (m) para torre com A19, com até /4-W20 e /4-SG (Ar por 3 lados)" precisa ser um número decimal',
    A19C4W204LadosType:
      'Na tela dois o campo "Altura do pilarete adicional (m) para torre com A19, com até /4-W20 e /4-SG (Ar por 4 lados)" precisa ser um número decimal',
    A19C5W202LadosType:
      'Na tela dois o campo "Altura do pilarete Adicional (m) com /5-W20 e /5-SG (Ar por 2 lados)" precisa ser um número decimal',
    A19C5W203LadosType:
      'Na tela dois o campo "Altura do pilarete Adicional (m) com /5-W20 e /5-SG (Ar por 3 lados)" precisa ser um número decimal',
    A19C5W204LadosType:
      'Na tela dois o campo "Altura do pilarete Adicional (m) com /5-W20 e /5-SG (Ar por 4 lados)" precisa ser um número decimal',
    A19NMaxType: 'Na tela dois o campo "N max Torres com A19" precisa ser um número inteiro',
    A19NMinType: 'Na tela dois o campo "N min Torres com A19" precisa ser um número inteiro',
    SGW20NMaxType: 'Na tela dois o campo "N max Torres com SG e W20" precisa ser um número inteiro',
    SGW20NMinType: 'Na tela dois o campo "N min Torres com SG e W20" precisa ser um número inteiro',
    RTNMaxType: 'Na tela dois o campo "N max Torres com RT" precisa ser um número inteiro',
    RTNMinType: 'Na tela dois o campo "N min Torres com RT" precisa ser um número inteiro',
    SGCNMaxType: 'Na tela dois o campo "N max Torres com SGC" precisa ser um número inteiro',
    SGCNMinType: 'Na tela dois o campo "N min Torres com SGC" precisa ser um número inteiro',

    PressaoMaximaDeEntradaType:
      'Na tela três o campo "Pressão máxima de entrada" precisa ser um número inteiro',
    TipoDeCuboDeVentiladorType:
      'Na tela três o campo "Tipo de cubo de ventilador" precisa ser uma string',
    LarguraDaCelulaType:
      'Na tela três o campo "Largura da célula (mm)" precisa ser um número inteiro',
    ComprimentoDaCelulaType:
      'Na tela três o campo "Comprimento da célula (mm)" precisa ser um número inteiro',
    TipoDeEstruturaType: 'Na tela três o campo "Tipo de estrtura" precisa ser uma string',
    RevestimentoLateralType: 'Na tela três o campo "Revestimento lateral" precisa ser uma string',
    TipoDeDistribuicaoType: 'Na tela três o campo "Tipo de distribuição" precisa ser uma string',
    paraTorresComAr2SG2lType:
      'Na tela três o campo "Para torres com ar por 2 lados(2-SG(W20), /2 ou /3-A19)" precisa ser um número inteiro',
    paraTorresComAr3SG2lType:
      'Na tela três o campo "Para torres com ar por 2 lados(3-SG(W20), /4-A19)" precisa ser um número inteiro',
    paraTorresComAr4SG2lType:
      'Na tela três o campo "Para torres com ar por 2 lados(/4 ou /5 SG(W20) ou /5-A19)" precisa ser um número inteiro',
    paraTorresComAr2SG3lType:
      'Na tela três o campo "Para torres com ar por 3 lados(2-SG(W20), /2 ou /3-A19)" precisa ser um número inteiro',
    paraTorresComAr3SG3lType:
      'Na tela três o campo "Para torres com ar por 3 lados(3-SG(W20), /4-A19)" precisa ser um número inteiro',
    paraTorresComAr4SG3lType:
      'Na tela três o campo "Para torres com ar por 3 lados(/4 ou /5 SG(W20) ou /5-A19)" precisa ser um número inteiro',
    paraTorresComAr2SG4lType:
      'Na tela três o campo "Para torres com ar por 4 lados(2-SG(W20), /2 ou /3-A19)" precisa ser um número inteiro',
    paraTorresComAr3SG4lType:
      'Na tela três o campo "Para torres com ar por 4 lados(3-SG(W20), /4-A19)" precisa ser um número inteiro',
    paraTorresComAr4SG4lType:
      'Na tela três o campo "Para torres com ar por 4 lados(/4 ou /5 SG(W20) ou /5-A19)" precisa ser um número inteiro',
    TipoDeVentiladorc1Type:
      'Na tela três o campo "Tipo de ventilador (Classe 1)" precisa ser uma string',
    DescricaoDoMotorEletricoc1Type:
      'Na tela três o campo "Descrição do motor elétrico (Classe 1)" precisa ser uma string',
    TipoDePasDoVentladorc1Type:
      'Na tela três o campo "Tipo de pás do ventilador (Classe 1)" precisa ser uma string',
    TipoDeTransmissaoc1Type:
      'Na tela três o campo "Tipo de transmissão (Classe 1)" precisa ser uma string',
    RendimentoDeTransmissaoc1Type:
      'Na tela três o campo "Rendimento de transmissão (Classe 1)" precisa ser um número inteiro',
    TipoDeVentiladorc2Type:
      'Na tela três o campo "Tipo de ventilador (Classe 2)" precisa ser uma string',
    DescricaoDoMotorEletricoc2Type:
      'Na tela três o campo "Descrição do motor elétrico (Classe 2)" precisa ser uma string',
    TipoDePasDoVentladorc2Type:
      'Na tela três o campo "Tipo de pás do ventilador (Classe 2)" precisa ser uma string',
    TipoDeTransmissaoc2Type:
      'Na tela três o campo "Tipo de transmissão (Classe 2)" precisa ser uma string',
    RendimentoDeTransmissaoc2Type:
      'Na tela três o campo "Rendimento de transmissão (Classe 2)" precisa ser um número inteiro',
  }

  const errors = []

  //tela 1
  if (!isString(Serires)) {
    errors.push(mensagens.SeriresType)
  }
  if (!isInteger(TamanhoDaTorre)) {
    errors.push(mensagens.TamanhoDaTorreType)
  }
  if (!isInteger(FrequenciaDaRedeEletrica)) {
    errors.push(mensagens.FrequenciaDaRedeEletricaType)
  }
  if (!isFloat(ComprimentoDasPas)) {
    errors.push(mensagens.ComprimentoDasPasType)
  }
  if (!isFloat(DiametroDoVentilador)) {
    errors.push(mensagens.DiametroDoVentiladorType)
  }
  if (!isFloat(AreaDaSecaoTransversal)) {
    errors.push(mensagens.AreaDaSecaoTransversalType)
  }
  if (!isFloat(TorresASP2)) {
    errors.push(mensagens.TorresASP2Type)
  }
  if (!isFloat(TorresASP3)) {
    errors.push(mensagens.TorresASP3Type)
  }
  if (!isFloat(TorresASP4)) {
    errors.push(mensagens.TorresASP4Type)
  }
  if (!isInteger(NumeroDeVentiladores)) {
    errors.push(mensagens.NumeroDeVentiladoresType)
  }
  if (!isInteger(NumeroDePasDosVentiladores1)) {
    errors.push(mensagens.NumeroDePasDosVentiladores1Type)
  }
  if (!isFloat(RotacaoDoVentilador1)) {
    errors.push(mensagens.RotacaoDoVentilador1Type)
  }
  if (!isFloat(PotenciaDoMotor1)) {
    errors.push(mensagens.PotenciaDoMotor1Type)
  }
  if (!isFloat(RotacaoDoMotor1)) {
    errors.push(mensagens.RotacaoDoMotor1Type)
  }
  if (!isFloat(DiametroDoVentiladorPorpadrao1)) {
    errors.push(mensagens.DiametroDoVentiladorPorpadrao1Type)
  }
  if (!isFloat(NumeroDePasDosVentiladores2)) {
    errors.push(mensagens.NumeroDePasDosVentiladores2Type)
  }
  if (!isFloat(RotacaoDoVentilador2)) {
    errors.push(mensagens.RotacaoDoVentilador2Type)
  }
  if (!isFloat(PotenciaDoMotor2)) {
    errors.push(mensagens.PotenciaDoMotor2Type)
  }
  if (!isFloat(RotacaoDoMotor2)) {
    errors.push(mensagens.RotacaoDoMotor2Type)
  }
  if (!isFloat(DiametroDoVentiladorPorpadrao2)) {
    errors.push(mensagens.DiametroDoVentiladorPorpadrao2Type)
  }
  //tela 2
  if (!isFloat(A19C4W202Lados)) {
    errors.push(mensagens.A19C4W202LadosType)
  }
  if (!isFloat(A19C4W203Lados)) {
    errors.push(mensagens.A19C4W203LadosType)
  }
  if (!isFloat(A19C4W204Lados)) {
    errors.push(mensagens.A19C4W204LadosType)
  }
  if (!isFloat(A19C5W202Lados)) {
    errors.push(mensagens.A19C5W202LadosType)
  }
  if (!isFloat(A19C5W203Lados)) {
    errors.push(mensagens.A19C5W203LadosType)
  }
  if (!isFloat(A19C5W204Lados)) {
    errors.push(mensagens.A19C5W204LadosType)
  }
  if (!isInteger(A19NMax)) {
    errors.push(mensagens.A19NMaxType)
  }
  if (!isInteger(A19NMin)) {
    errors.push(mensagens.A19NMinType)
  }
  if (!isInteger(SGW20NMax)) {
    errors.push(mensagens.SGW20NMaxType)
  }
  if (!isInteger(SGW20NMin)) {
    errors.push(mensagens.SGW20NMinType)
  }
  if (!isInteger(RTNMax)) {
    errors.push(mensagens.RTNMaxType)
  }
  if (!isInteger(RTNMin)) {
    errors.push(mensagens.RTNMinType)
  }
  if (!isInteger(SGCNMax)) {
    errors.push(mensagens.SGCNMaxType)
  }
  if (!isInteger(SGCNMin)) {
    errors.push(mensagens.SGCNMinType)
  }
  //tela 3
  if (!isInteger(PressaoMaximaDeEntrada)) {
    errors.push(mensagens.PressaoMaximaDeEntradaType)
  }
  if (!isString(TipoDeCuboDeVentilador)) {
    errors.push(mensagens.TipoDeCuboDeVentiladorType)
  }
  if (!isInteger(LarguraDaCelula)) {
    errors.push(mensagens.LarguraDaCelulaType)
  }
  if (!isInteger(ComprimentoDaCelula)) {
    errors.push(mensagens.ComprimentoDaCelulaType)
  }
  if (!isString(TipoDeEstrutura)) {
    errors.push(mensagens.TipoDeEstruturaType)
  }
  if (!isString(RevestimentoLateral)) {
    errors.push(mensagens.RevestimentoLateralType)
  }
  if (!isString(TipoDeDistribuicao)) {
    errors.push(mensagens.TipoDeDistribuicaoType)
  }
  if (!isInteger(paraTorresComAr2SG2l)) {
    errors.push(mensagens.paraTorresComAr2SG2lType)
  }
  if (!isInteger(paraTorresComAr3SG2l)) {
    errors.push(mensagens.paraTorresComAr3SG2lType)
  }
  if (!isInteger(paraTorresComAr4SG2l)) {
    errors.push(mensagens.paraTorresComAr4SG2lType)
  }
  if (!isInteger(paraTorresComAr2SG3l)) {
    errors.push(mensagens.paraTorresComAr2SG3lType)
  }
  if (!isInteger(paraTorresComAr3SG3l)) {
    errors.push(mensagens.paraTorresComAr3SG3lType)
  }
  if (!isInteger(paraTorresComAr4SG3l)) {
    errors.push(mensagens.paraTorresComAr4SG3lType)
  }
  if (!isInteger(paraTorresComAr2SG4l)) {
    errors.push(mensagens.paraTorresComAr2SG4lType)
  }
  if (!isInteger(paraTorresComAr3SG4l)) {
    errors.push(mensagens.paraTorresComAr3SG4lType)
  }
  if (!isInteger(paraTorresComAr4SG4l)) {
    errors.push(mensagens.paraTorresComAr4SG4lType)
  }
  if (!isString(TipoDeVentiladorc1)) {
    errors.push(mensagens.TipoDeVentiladorc1Type)
  }
  if (!isString(DescricaoDoMotorEletricoc1)) {
    errors.push(mensagens.DescricaoDoMotorEletricoc1Type)
  }
  if (!isString(TipoDePasDoVentladorc1)) {
    errors.push(mensagens.TipoDePasDoVentladorc1Type)
  }
  if (!isString(TipoDeTransmissaoc1)) {
    errors.push(mensagens.TipoDeTransmissaoc1Type)
  }
  if (!isInteger(RendimentoDeTransmissaoc1)) {
    errors.push(mensagens.RendimentoDeTransmissaoc1Type)
  }
  if (!isString(TipoDeVentiladorc2)) {
    errors.push(mensagens.TipoDeVentiladorc2Type)
  }
  if (!isString(DescricaoDoMotorEletricoc2)) {
    errors.push(mensagens.DescricaoDoMotorEletricoc2Type)
  }
  if (!isString(TipoDePasDoVentladorc2)) {
    errors.push(mensagens.TipoDePasDoVentladorc2Type)
  }
  if (!isString(TipoDeTransmissaoc2)) {
    errors.push(mensagens.TipoDeTransmissaoc2Type)
  }
  if (!isInteger(RendimentoDeTransmissaoc2)) {
    errors.push(mensagens.RendimentoDeTransmissaoc2Type)
  }

  return errors
}

export default ValidateSelectionTowerCreation

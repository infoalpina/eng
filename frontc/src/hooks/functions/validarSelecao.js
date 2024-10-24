const validarSelecao = (dados) => {
  // Variáveis de controle
  var VazaoDaAguab = true
  var TemperaturaDaAguaQuenteb = true
  var TemperaturaDaAguaFriab = true
  var TemperaturaDoBulboUmidob = true
  var PerdaDePressaoEstaticaAdicionalb = true
  var AltitudeLocalb = true
  var NumeroDeCelulasMinimob = true
  var NumeroDeCelulasMaximob = true
  var Baciab = true
  var Motorizacaob = true
  var checkedItemsMateriaisb = true
  var pilaretesNomeb = true
  var checkedItemsb = true
  var NumeroDeLadosLivresEntradaDeArb = true

  // Variáveis de dados convertidos para números ou vazio
  var VazaoDaAgua = dados['VazaoDaAgua'] !== undefined ? parseFloat(dados['VazaoDaAgua']) : ''
  var TemperaturaDaAguaQuente =
    dados['TemperaturaDaAguaQuente'] !== undefined
      ? parseFloat(dados['TemperaturaDaAguaQuente'])
      : ''
  var TemperaturaDaAguaFria =
    dados['TemperaturaDaAguaFria'] !== undefined ? parseFloat(dados['TemperaturaDaAguaFria']) : ''
  var TemperaturaDoBulboUmido =
    dados['TemperaturaDoBulboUmido'] !== undefined
      ? parseFloat(dados['TemperaturaDoBulboUmido'])
      : ''
  var PerdaDePressaoEstaticaAdicional =
    dados['PerdaDePressaoEstaticaAdicional'] !== undefined
      ? parseFloat(dados['PerdaDePressaoEstaticaAdicional'])
      : ''
  var AltitudeLocal = dados['AltitudeLocal'] !== undefined ? parseFloat(dados['AltitudeLocal']) : ''
  var NumeroDeCelulasMinimo =
    dados['NumeroDeCelulasMinimo'] !== undefined ? parseFloat(dados['NumeroDeCelulasMinimo']) : ''
  var NumeroDeCelulasMaximo =
    dados['NumeroDeCelulasMaximo'] !== undefined ? parseFloat(dados['NumeroDeCelulasMaximo']) : ''
  var Bacia = dados['Bacia'] || ''
  var Motorizacao = dados['Motorizacao'] || ''
  var NumeroDeLadosLivresEntradaDeAr =
    dados['NumeroDeLadosLivresEntradaDeAr'] !== undefined
      ? parseFloat(dados['NumeroDeLadosLivresEntradaDeAr'])
      : ''
  var checkedItems = dados['checkedItems']
  var checkedItemsMateriais = dados['checkedItemsMateriais']

  // Mensagens a serem listadas de acordo com cada erro do usuário
  const msgLista = {
    1: 'vazão de água não pode estar vazio',
    2: 'vazão de água precisa ser um número',
    3: 'temperatura de água quente não pode estar vazio',
    4: 'temperatura de água quente precisa ser um número',
    5: 'temperatura de água fria não pode estar vazio',
    6: 'temperatura de água fria precisa ser um número',
    7: 'temperatura de bulbo úmido não pode estar vazio',
    8: 'temperatura de bulbo úmido precisa ser um número',
    9: 'perda de pressão estática adicional não pode estar vazio',
    10: 'perda de pressão estática adicional precisa ser um número',
    11: 'altitude local não pode estar vazio',
    12: 'altitude local precisa ser um número',
    13: 'número de células mínima não pode estar vazio',
    14: 'número de células mínima precisa ser um número',
    15: 'número de células máxima não pode estar vazio',
    16: 'número de células máxima precisa ser um número',
    17: 'bacia não pode estar vazio',
    18: 'motorização não pode estar vazio',
    19: 'materiais AE precisa de pelo menos um ativo',
    20: 'enchimento precisa de pelo menos um ativo',
    21: 'número de lados livres de entrada de ar precisa ser um número',
  }

  const SubmitMsg = []

  // Verificações de validação
  if (VazaoDaAguab && (isNaN(VazaoDaAgua) || VazaoDaAgua === '')) {
    SubmitMsg.push(msgLista[1])
  }

  if (VazaoDaAguab && isNaN(VazaoDaAgua)) {
    SubmitMsg.push(msgLista[2])
  }

  if (
    TemperaturaDaAguaQuenteb &&
    (isNaN(TemperaturaDaAguaQuente) || TemperaturaDaAguaQuente === '')
  ) {
    SubmitMsg.push(msgLista[3])
  }

  if (TemperaturaDaAguaQuenteb && isNaN(TemperaturaDaAguaQuente)) {
    SubmitMsg.push(msgLista[4])
  }

  if (TemperaturaDaAguaFriab && (isNaN(TemperaturaDaAguaFria) || TemperaturaDaAguaFria === '')) {
    SubmitMsg.push(msgLista[5])
  }

  if (TemperaturaDaAguaFriab && isNaN(TemperaturaDaAguaFria)) {
    SubmitMsg.push(msgLista[6])
  }

  if (
    TemperaturaDoBulboUmidob &&
    (isNaN(TemperaturaDoBulboUmido) || TemperaturaDoBulboUmido === '')
  ) {
    SubmitMsg.push(msgLista[7])
  }

  if (TemperaturaDoBulboUmidob && isNaN(TemperaturaDoBulboUmido)) {
    SubmitMsg.push(msgLista[8])
  }

  if (
    PerdaDePressaoEstaticaAdicionalb &&
    (isNaN(PerdaDePressaoEstaticaAdicional) || PerdaDePressaoEstaticaAdicional === '')
  ) {
    SubmitMsg.push(msgLista[9])
  }

  if (PerdaDePressaoEstaticaAdicionalb && isNaN(PerdaDePressaoEstaticaAdicional)) {
    SubmitMsg.push(msgLista[10])
  }

  if (NumeroDeLadosLivresEntradaDeArb && isNaN(NumeroDeLadosLivresEntradaDeAr)) {
    SubmitMsg.push(msgLista[21])
  }

  if (AltitudeLocalb && (isNaN(AltitudeLocal) || AltitudeLocal === '')) {
    SubmitMsg.push(msgLista[11])
  }

  if (AltitudeLocalb && isNaN(AltitudeLocal)) {
    SubmitMsg.push(msgLista[12])
  }

  if (NumeroDeCelulasMinimob && (isNaN(NumeroDeCelulasMinimo) || NumeroDeCelulasMinimo === '')) {
    SubmitMsg.push(msgLista[13])
  }

  if (NumeroDeCelulasMinimob && isNaN(NumeroDeCelulasMinimo)) {
    SubmitMsg.push(msgLista[14])
  }

  if (NumeroDeCelulasMaximob && (isNaN(NumeroDeCelulasMaximo) || NumeroDeCelulasMaximo === '')) {
    SubmitMsg.push(msgLista[15])
  }

  if (NumeroDeCelulasMaximob && isNaN(NumeroDeCelulasMaximo)) {
    SubmitMsg.push(msgLista[16])
  }

  if (Baciab && Bacia === '') {
    SubmitMsg.push(msgLista[17])
  }

  if (Motorizacaob && (typeof Motorizacao !== 'string' || Motorizacao === '')) {
    SubmitMsg.push(msgLista[18])
  }

  // Verifica se pelo menos um item em checkedItems é true
  const temItemMarcado = Object.values(checkedItems).some((value) => value === true)
  // Verifica se pelo menos um item em checkedItemsMateriais é true
  const temItemMarcadoMateriais = Object.values(checkedItemsMateriais).some(
    (value) => value === true,
  )

  if (!temItemMarcado) {
    SubmitMsg.push(msgLista[20])
  }
  if (!temItemMarcadoMateriais) {
    SubmitMsg.push(msgLista[19])
  }

  // Retorno das mensagens de erro ou null se não houver erros
  return SubmitMsg
}

export default validarSelecao

const validarFCA = (
  nome_do_projeto,
  cliente,
  diametro_de_tubo,
  tipo_de_fluido,
  modelosDasTorres,
  valorSelectBomba,
  valorSelectVentil,
  valorSelectAcio,
  valorSelectTubos,
  valorSelectCalorEspecifico,
  temperatura_quente,
  temperatura_fria,
  temperatura_do_bulbo_umido,
  temperatura_do_bulbo_seco,
  vazao_de_agua,
  perda_de_pressao_estatica_adicional,
  pressaoDeArDoAmbiente,
  velocidadeMediaDoAr,
  fatorDeIncrustracao,
  CalorEspecificoDoFluido,
  densidadedofluido,
  condutibilidadetermicadofluido,
  viscosidadedinamica,
  numero_de_celulas,
  AlturaDoDifusor,
  numberBombas,
) => {
  console.log('numberBombas', numberBombas)
  const parseNumber = (value) => parseFloat(value) || NaN
  const msgLista = {
    1: 'Nome do projeto não pode estar vazio',
    2: 'Cliente não pode estar vazio',
    3: 'Diâmetro do tubo não pode estar vazio',
    4: 'Tipo de fluido não pode estar vazio',
    5: 'Modelos das torres não podem estar vazios',
    6: 'O valor da bomba não pode estar vazio',
    7: 'O valor do ventilador não pode estar vazio',
    8: 'O valor do acionamento não pode estar vazio',
    9: 'O valor dos tubos não pode estar vazio',
    10: 'O valor do calor específico não pode estar vazio',
    11: 'Temperatura quente não pode estar vazia e precisa ser maior que 0',
    12: 'Temperatura fria não pode estar vazia e precisa ser maior que 0',
    13: 'Temperatura quente precisa ser maior que a temperatura fria',
    14: 'Temperatura de bulbo úmido não pode estar vazia e precisa ser maior que 0',
    15: 'Temperatura de bulbo seco não pode estar vazia e precisa ser maior que 0',
    16: 'Temperatura de bulbo seco precisa ser maior que a temperatura de bulbo úmido',
    17: 'Vazão de água não pode estar vazia e precisa ser maior que 0',
    18: 'Perda de pressão estática adicional não pode estar vazia e precisa ser maior ou igual a 0',
    19: 'Pressão do ambiente não pode estar vazia e precisa ser maior que 0',
    20: 'Velocidade média do ar não pode estar vazia e precisa ser maior que 0',
    21: 'Densidade de água de irrigação não pode estar vazia e precisa ser maior que 0',
    22: 'Fator de incrustação não pode estar vazio',
    23: 'Calor específico do fluido não pode estar vazio e precisa ser maior que 0',
    24: 'Densidade do fluido não pode estar vazia e precisa ser maior que 0',
    25: 'Condutibilidade térmica do fluido não pode estar vazia e precisa ser maior que 0',
    26: 'Viscosidade do fluido não pode estar vazia e precisa ser maior que 0',
    27: 'Número de células não pode estar vazio e precisa ser maior que 0',
    28: 'Altura do difusor não pode estar vazia e precisa ser maior ou igual a 0',
    29: 'Número de bombas não pode estar vazio e precisa ser maior que 0', // Nova mensagem de erro
  }

  const SubmitMsg = []
  if (!nome_do_projeto) SubmitMsg.push(msgLista[1])
  if (!cliente) SubmitMsg.push(msgLista[2])
  if (diametro_de_tubo === 'Diâmetro do tubo') SubmitMsg.push(msgLista[3])
  if (!tipo_de_fluido) SubmitMsg.push(msgLista[4])
  if (!modelosDasTorres) SubmitMsg.push(msgLista[5])
  if (valorSelectBomba === '') SubmitMsg.push(msgLista[6])
  if (valorSelectVentil === '') SubmitMsg.push(msgLista[7])
  if (valorSelectAcio === '') SubmitMsg.push(msgLista[8])
  if (valorSelectTubos === '') SubmitMsg.push(msgLista[9])
  const vtemperatura_quente = parseNumber(temperatura_quente)
  const vtemperatura_fria = parseNumber(temperatura_fria)
  const vtemperatura_do_bulbo_umido = parseNumber(temperatura_do_bulbo_umido)
  const vtemperatura_do_bulbo_seco = parseNumber(temperatura_do_bulbo_seco)
  const vvazao_de_agua = parseNumber(vazao_de_agua)
  const vperda_de_pressao_estatica_adicional = parseNumber(perda_de_pressao_estatica_adicional)
  const vpressaoDeArDoAmbiente = parseNumber(pressaoDeArDoAmbiente)
  const vvelocidadeMediaDoAr = parseNumber(velocidadeMediaDoAr)
  const vfatorDeIncrustracao = parseNumber(fatorDeIncrustracao)
  const vCalorEspecificoDoFluido = parseNumber(CalorEspecificoDoFluido)
  const vdensidadedofluido = parseNumber(densidadedofluido)
  const vcondutibilidadetermicadofluido = parseNumber(condutibilidadetermicadofluido)
  const vviscosidadedinamica = parseNumber(viscosidadedinamica)
  const vnumero_de_celulas = parseNumber(numero_de_celulas)
  const vAlturaDoDifusor = parseNumber(AlturaDoDifusor)
  const vnumberBombas = parseNumber(numberBombas)

  if (isNaN(vtemperatura_quente) || vtemperatura_quente <= 0) SubmitMsg.push(msgLista[11])
  if (isNaN(vtemperatura_fria) || vtemperatura_fria <= 0) SubmitMsg.push(msgLista[12])
  if (vtemperatura_quente <= vtemperatura_fria) SubmitMsg.push(msgLista[13])
  if (isNaN(vtemperatura_do_bulbo_umido) || vtemperatura_do_bulbo_umido <= 0)
    SubmitMsg.push(msgLista[14])
  if (isNaN(vtemperatura_do_bulbo_seco) || vtemperatura_do_bulbo_seco <= 0)
    SubmitMsg.push(msgLista[15])
  if (vtemperatura_do_bulbo_umido >= vtemperatura_do_bulbo_seco) SubmitMsg.push(msgLista[16])
  if (isNaN(vvazao_de_agua) || vvazao_de_agua <= 0) SubmitMsg.push(msgLista[17])
  if (perda_de_pressao_estatica_adicional != 0) {
    if (isNaN(vperda_de_pressao_estatica_adicional) || vperda_de_pressao_estatica_adicional < 0)
      SubmitMsg.push(msgLista[18])
  }
  if (isNaN(vpressaoDeArDoAmbiente) || vpressaoDeArDoAmbiente <= 0) SubmitMsg.push(msgLista[19])
  if (isNaN(vvelocidadeMediaDoAr) || vvelocidadeMediaDoAr <= 0) SubmitMsg.push(msgLista[20])
  if (fatorDeIncrustracao != 0) {
    if (isNaN(vfatorDeIncrustracao)) SubmitMsg.push(msgLista[22])
  }
  if (tipo_de_fluido === 'óleo') {
    if (isNaN(vCalorEspecificoDoFluido) || vCalorEspecificoDoFluido <= 0)
      SubmitMsg.push(msgLista[23])
    if (isNaN(vdensidadedofluido) || vdensidadedofluido <= 0) SubmitMsg.push(msgLista[24])
    if (isNaN(vcondutibilidadetermicadofluido) || vcondutibilidadetermicadofluido <= 0)
      SubmitMsg.push(msgLista[25])
    if (isNaN(vviscosidadedinamica) || vviscosidadedinamica <= 0) SubmitMsg.push(msgLista[26])
  }
  if (isNaN(vnumero_de_celulas) || vnumero_de_celulas <= 0) SubmitMsg.push(msgLista[27])
  if (AlturaDoDifusor != 0) {
    if (isNaN(vAlturaDoDifusor) || vAlturaDoDifusor <= 0) SubmitMsg.push(msgLista[28])
  }
  if (isNaN(vnumberBombas) || vnumberBombas <= 0) SubmitMsg.push(msgLista[29]) // Validação para numberBombas

  return SubmitMsg.length > 0 ? SubmitMsg : null
}

export default validarFCA

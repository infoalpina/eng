const validarCreateFCA = (
  nome,
  areasTransversais,
  larguraDaTorre,
  comprimentoDasTorre,
  alturaDaTorre,
  dadosFormulariosFeixes,
  dadosFormulariosBombas,
  dadosFormulariosVentiladores,
  dadosFormulariosAcionamentos,
) => {
  var snome = nome.toString()
  var nareasTransversais = parseFloat(areasTransversais)
  var nlarguraDaTorre = parseFloat(larguraDaTorre)
  var ncomprimentoDasTorre = parseFloat(comprimentoDasTorre)
  var nalturaDaTorre = parseFloat(alturaDaTorre)

  const msgLista = {
    1: 'Nome não pode estar vazio',
    2: 'Codigo não pode estar vazio',
    3: 'COD não pode estar vazio e precisa ser positivo',
    4: 'Áreas transversais não pode estar vazio e precisa ser positivo',
    5: 'Largura da torre não pode estar vazio e precisa ser positivo',
    6: 'Comprimento da torre não pode estar vazio e precisa ser positivo',
    7: 'Altura da torre não pode estar vazio e precisa ser positivo',
    8: 'O diametro externo dos tubos não pode ser vazio e precisa ser um número positivo',
    9: 'O diametro interno dos tubos não pode ser vazio e precisa ser um número positivo',
    10: 'Expessura da parede não pode estar vazio',
    11: 'Número de tubos horizontais compactados não pode estar vazio e precisa ser positivo',
    12: 'Número de tubos horizontais não compactados não pode estar vazio e precisa ser positivo',
    16: 'Distância entre tubos precisa ser um número positivo',
    17: 'Comprimento dos feixes precisa ser um número positivo',

    19: 'Fabricante e modelo das bombas não pode estar',
    20: 'Vazão das bombas não pode estar vazio e precisa ser um número positivo',
    21: 'Potência das bombas não pode estar vazio e precisa ser um número positivo',
    21: 'Pressão das bombas não pode estar vazio e precisa ser um número positivo',
    22: 'Rotação das bombas não pode estar vazio e precisa ser um número positivo',

    23: 'Modelo do ventilador não pode estar vazio',
    24: 'Série do ventilador não podee estar vazio e precisa ser um número positivo',
    25: 'Diâmetro do ventilador não pode estar vazio e precisa ser um número positivo',
    26: 'Pá do vntilador não pode estar vazio e precisa ser um número positivo',
    27: 'Comprimento das pás do ventilador não pode estar vazio e precisa ser um número positivo',
    28: 'Material das pás do ventilador não pode estar vazio',
    29: 'Material dos cubos do ventilador não pode estar vazio',
    31: 'Número de pás do ventilador não pode estar vazio e precisa ser um número positivo',
    32: 'Rendimento não pode estar vazio e precisa ser um número positivo',

    34: 'Tipo de acionamento de transmissão não pode estar vazio',
    35: 'Modelo do acionamento não pode estar vazio',
    36: 'Taxa de redução do acionamento precisa ser um número positivo',
    37: 'Potência do motor do acionamento precisa ser um número positivo',
    38: 'Rotação do motor do acionamento precisa ser um número positivo',
    39: 'Rotação do ventilador do acionamento precisa ser um número positivo',
    40: 'Motor eletrico tipo do acionamento precisa ser um número positivo',
    41: 'Número de ventiladores por célula não pode estar vazio',
  }

  console.log('dadosFormulariosFeixes', dadosFormulariosFeixes)

  const SubmitMsg = []
  if (snome === '') {
    SubmitMsg.push(msgLista[1])
  }
  if (nareasTransversais === '' || isNaN(nareasTransversais) || nareasTransversais <= 0) {
    SubmitMsg.push(msgLista[4])
  }
  if (nlarguraDaTorre === '' || isNaN(nlarguraDaTorre) || nlarguraDaTorre <= 0) {
    SubmitMsg.push(msgLista[5])
  }
  if (nalturaDaTorre === '' || nalturaDaTorre <= 0) {
    SubmitMsg.push(msgLista[7])
  }

  dadosFormulariosFeixes.forEach((object, id) => {
    if (
      object.diam_extern_ent_tub === '' ||
      isNaN(parseFloat(object.diam_extern_ent_tub)) ||
      parseFloat(object.diam_extern_ent_tub) <= 0
    ) {
      SubmitMsg.push(msgLista[8])
    }
    if (
      object.diam_intern_ent_tub === '' ||
      isNaN(parseFloat(object.diam_intern_ent_tub)) ||
      parseFloat(object.diam_intern_ent_tub) <= 0
    ) {
      SubmitMsg.push(msgLista[9])
    }
    if (object.exp_parede === '' || isNaN(parseFloat(object.exp_parede))) {
      SubmitMsg.push(msgLista[10])
    }
    if (object.modelo === 'Não compactado') {
      if (object.N_tub_hor === '' || parseFloat(object.N_tub_hor)) {
        SubmitMsg.push(msgLista[12])
      }
    } else {
      if (object.N_de_tub_hor_compact === '' || isNaN(parseFloat(object.N_de_tub_hor_compact))) {
        SubmitMsg.push(msgLista[11])
      }
    }
    if (
      object.dist_ent_tub === '' ||
      isNaN(parseFloat(object.dist_ent_tub)) ||
      parseFloat(object.dist_ent_tub) <= 0
    ) {
      SubmitMsg.push(msgLista[16])
    }
    if (
      object.comprimento_dos_feixes === '' ||
      isNaN(parseFloat(object.comprimento_dos_feixes)) ||
      parseFloat(object.comprimento_dos_feixes) <= 0
    ) {
      SubmitMsg.push(msgLista[17])
    }
  })

  dadosFormulariosBombas.forEach((object, id) => {
    if (object.modelo === '') {
      SubmitMsg.push(msgLista[19])
    }
    if (object.vazao === '' || isNaN(parseFloat(object.vazao)) || parseFloat(object.vazao) <= 0) {
    }
    if (
      object.potencia === '' ||
      isNaN(parseFloat(object.potencia)) ||
      parseFloat(object.potencia) <= 0
    ) {
      SubmitMsg.push(msgLista[20])
    }
    if (
      object.pressao === '' ||
      isNaN(parseFloat(object.pressao)) ||
      parseFloat(object.pressao) <= 0
    ) {
      SubmitMsg.push(msgLista[21])
    }
    if (
      object.rotacao === '' ||
      isNaN(parseFloat(object.rotacao)) ||
      parseFloat(object.rotacao) <= 0
    ) {
      SubmitMsg.push(msgLista[22])
    }
  })

  dadosFormulariosVentiladores.forEach((object, id) => {
    if (object.modelo === '') {
      SubmitMsg.push(msgLista[23])
    }
    if (object.serie === '' || parseFloat(object.serie) <= 0) {
      SubmitMsg.push(msgLista[24])
    }
    if (
      object.diametro_do_ventilador === '' ||
      isNaN(parseFloat(object.diametro_do_ventilador)) ||
      parseFloat(object.diametro_do_ventilador) <= 0
    ) {
      SubmitMsg.push(msgLista[25])
    }
    if (
      object.modelo_das_pas === '' ||
      isNaN(parseFloat(object.modelo_das_pas)) ||
      parseFloat(object.modelo_das_pas) <= 0
    ) {
      SubmitMsg.push(msgLista[26])
    }
    if (
      object.comprimento_das_pas === '' ||
      isNaN(parseFloat(object.comprimento_das_pas)) ||
      parseFloat(object.comprimento_das_pas) <= 0
    ) {
      SubmitMsg.push(msgLista[27])
    }
    if (object.material_das_pas === '') {
      SubmitMsg.push(msgLista[28])
    }
    if (object.material_dos_cubos === '') {
      SubmitMsg.push(msgLista[29])
    }
    if (object.numero_de_pas === '' || isNaN(parseFloat(object.numero_de_pas))) {
      SubmitMsg.push(msgLista[31])
    }
  })

  dadosFormulariosAcionamentos.forEach((object, id) => {
    if (object.Tipo_de_assionamento_de_transmissao == '') {
      SubmitMsg.push(msgLista[34])
    }
    if (object.Tipo_de_assionamento_de_transmissao == 'Redutor engrenado') {
      if (object.modelo === '') {
        SubmitMsg.push(msgLista[35])
      }
      if (object.taxa_de_reducao === '') {
        SubmitMsg.push(msgLista[36])
      }
    }
    if (object.potencia_do_motor === '' || isNaN(parseFloat(object.potencia_do_motor))) {
      SubmitMsg.push(msgLista[37])
    }
    if (object.rotacao_do_motor === '' || isNaN(parseFloat(object.rotacao_do_motor))) {
      SubmitMsg.push(msgLista[38])
    }
    if (object.rotacao_do_ventilador === '' || isNaN(parseFloat(object.rotacao_do_ventilador))) {
      SubmitMsg.push(msgLista[39])
    }
    if (object.motor_eletrico_tipo === '') {
      SubmitMsg.push(msgLista[40])
    }
    if (object.rendimento_do_redultor === '' || isNaN(parseFloat(object.rendimento_do_redultor))) {
      SubmitMsg.push(msgLista[32])
    }
  })
  return SubmitMsg
}

export default validarCreateFCA

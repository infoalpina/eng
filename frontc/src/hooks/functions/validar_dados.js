function validar_dados(data) {
  const usuario = data['usuario']
  const senha = data['senha']
  let msg = []

  const msgLista = {
    1: 'Usuário não pode estar vazio.',
    2: 'Senha não pode estar vazia.',
    3: 'O usuário não pode conter caracteres especiais ou letras maiúsculas.',
  }

  function validarCampoNaoVazio(campo, codigo) {
    if (campo.trim() === '') {
      msg.push(msgLista[codigo])
    }
  }

  function validarCaracteresEspeciaisEMaiusculas(campo, codigo) {
    const regex = /[^a-z0-9]/
    if (regex.test(campo)) {
      msg.push(msgLista[codigo])
    }
  }

  validarCampoNaoVazio(usuario, 1)
  validarCampoNaoVazio(senha, 2)
  validarCaracteresEspeciaisEMaiusculas(usuario, 3)
  return msg
}

export default validar_dados

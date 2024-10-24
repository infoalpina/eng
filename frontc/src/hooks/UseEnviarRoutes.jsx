import useEncaminhar from './functions/useEncaminhar'
import enviarDadosParaBackend from './functions/submitbackend'
import validar_dados from './functions/validar_dados'
import { useUser } from 'src/userContext'
import { useCookies } from 'react-cookie'

function useLogin() {
  const { setCookie, removeCookie, setUser, setExperiation, setname, user, name } = useUser()
  const encaminhar = useEncaminhar()

  let userState = null // Armazenar o estado do usuário
  let lastUpdateTime = null // Armazenar o tempo da última atualização

  async function validation(rota, buscarDados, dados) {
    const mensagens = validar_dados(dados)
    if (mensagens.length === 0) {
      try {
        const resultado = await enviarDadosParaBackend(buscarDados, dados)

        if (resultado.acesso) {
          console.log('resultado', resultado)

          setCookie('name', resultado.usuario, { path: '/' })
          setCookie('user', resultado.chave, { path: '/' })
          setCookie('timeOut', new Date(), { path: '/' })

          console.log('teste')
          encaminhar(rota)
        } else {
          const mensagemErro = ['Senha ou usuário inválidos']
          return mensagemErro
        }
      } catch (erro) {
        console.error(erro) // Lidar com erros, se houver
      }
    } else {
      return mensagens
    }
  }

  // Função para verificar se o estado do usuário expirou
  function checkUserExpiration(lastUpdateTime) {
    if (lastUpdateTime) {
      const currentTime = new Date()
      const elapsedTime = currentTime - new Date(lastUpdateTime)

      // Se o tempo decorrido for maior que 60 minutos (3600000 milissegundos), limpar o estado do usuário
      if (elapsedTime > 60 * 60 * 1000) {
        // Limpar o estado do usuário
        removeCookie('name', { path: '/' })
        removeCookie('user', { path: '/' })
        removeCookie('timeOut', { path: '/' })
        encaminhar('/')
      } else {
        // Atualizar o timestamp para o tempo atual
        setCookie('timeOut', new Date().toString(), { path: '/' })
      }
    }
    // Se não houver lastUpdateTime, significa que é a primeira vez que o usuário está acessando, então não há necessidade de fazer nada
    return false
  }

  return {
    validation,
    checkUserExpiration,
  }
}

export default useLogin

// useCustomNavigate.js
import useEncaminhar from './functions/useEncaminhar'
import validarFCA from './functions/validarFCA'
import validarSelecao from './functions/validarSelecao'
import enviarDadosParaBackend from './functions/submitbackend'

const useCustomNavigate = () => {
  const encaminharPara = useEncaminhar()

  return { validarSelecao, validarFCA, encaminharPara, enviarDadosParaBackend }
}

export default useCustomNavigate

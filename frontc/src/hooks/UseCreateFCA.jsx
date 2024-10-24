import validarCreateFCA from './functions/validarCreateFCA'
import useEncaminhar from './functions/useEncaminhar'
import enviarDadosParaBackend from './functions/submitbackend'

const useCreateFCA = () => {
  const encaminharPara = useEncaminhar()

  return { validarCreateFCA, encaminharPara, enviarDadosParaBackend }
}

export default useCreateFCA

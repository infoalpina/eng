import useEncaminhar from './functions/useEncaminhar'
import { useUser } from 'src/userContext'

const useDeslogin = () => {
  const encaminharPara = useEncaminhar()
  const { setUser } = useUser()
  function desabled(rota) {
    setUser('')
    encaminharPara(rota)
  }
  return { desabled }
}

export default useDeslogin

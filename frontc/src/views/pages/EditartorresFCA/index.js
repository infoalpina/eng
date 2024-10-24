import React, { useEffect } from 'react'
import DefaultLayout from '../../../layout/DefaultLayout'
import { DadosPrincipaisFCA } from 'src/components'
import { useUser } from 'src/userContext'
import { useParams } from 'react-router-dom'
import useEncaminhar from '../../../hooks/functions/useEncaminhar'
import UseEnviarRoutes from '../../../hooks/UseEnviarRoutes'
import { useCookies } from 'react-cookie'

const Gerenciamentodetorres1 = () => {
  const { torreData } = useParams()
  const { checkUserExpiration } = UseEnviarRoutes()
  const encaminhar = useEncaminhar()
  const [cookies] = useCookies(['name', 'user', 'timeOut'])
  const name = cookies.name
  const user = cookies.user
  const timeOut = cookies.timeOut

  useEffect(() => {
    checkUserExpiration()
    if (!user || !name || !timeOut) {
      encaminhar('/')
    }
  }, [user, name, timeOut])

  // Certifique-se de que dados não seja nulo antes de acessar suas propriedades
  if (!torreData) {
    // Lidar com a situação em que dados é nulo
    return <p>Dados da torre não disponíveis</p>
  }
  return (
    <div>
      <>
        <DefaultLayout
          titulo={'Editar torres'}
          conteudoPrimario={
            <DadosPrincipaisFCA dis={false} dados={torreData} titulo={'Editar torres'} />
          }
        />
      </>
    </div>
  )
}

export default Gerenciamentodetorres1

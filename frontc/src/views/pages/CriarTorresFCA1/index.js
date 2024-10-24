import React, { useEffect } from 'react'
import DefaultLayout from '../../../layout/DefaultLayout'
import { DadosPrincipaisFCA } from 'src/components'
import { useUser } from 'src/userContext'
import useEncaminhar from '../../../hooks/functions/useEncaminhar'
import UseEnviarRoutes from '../../../hooks/UseEnviarRoutes'
import { useCookies } from 'react-cookie'

const Gerenciamentodetorres1 = () => {
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

  return (
    <div>
      <DefaultLayout
        titulo={'Cadastro de Torres FCA'}
        conteudoPrimario={<DadosPrincipaisFCA dis={false} titulo={'Cadastro de Torres FCA'} />}
      />
    </div>
  )
}

export default Gerenciamentodetorres1

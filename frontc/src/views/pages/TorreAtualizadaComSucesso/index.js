import React, { useEffect } from 'react'
import DefaultLayout from '../../../layout/DefaultLayout'
import { AtualizarTorres } from 'src/components'
import { useUser } from 'src/userContext'
import { useParams } from 'react-router-dom'
import useEncaminhar from '../../../hooks/functions/useEncaminhar'
import UseEnviarRoutes from '../../../hooks/UseEnviarRoutes'
import { useCookies } from 'react-cookie'

const Gerenciamentodetorres1 = () => {
  const { checkUserExpiration } = UseEnviarRoutes()
  const { torreData } = useParams()
  const encaminhar = useEncaminhar()
  let descricao = ''
  let texto = ''

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

  if (torreData === 'true') {
    descricao = 'Falha ao Atualizar a torre'
    texto = 'Sua torre não foi atualizada pois ja existe uma torre com esses dados'
  } else {
    descricao = 'Torre Atualizada com sucesso'
    texto =
      'Sua torre foi atualizada com sucesso agora você podera as novas modificações realizadas'
  }
  return (
    <div>
      <>
        <DefaultLayout
          titulo={'Criar torres'}
          conteudoPrimario={<AtualizarTorres descricao={descricao} texto={texto} />}
        />
      </>
    </div>
  )
}

export default Gerenciamentodetorres1

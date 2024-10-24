import React, { useEffect } from 'react'
import DefaultLayout from '../../../layout/DefaultLayout'
import { AtualizarTorres } from 'src/components'
import { useUser } from 'src/userContext'
import { useParams } from 'react-router-dom'
import useEncaminhar from '../../../hooks/functions/useEncaminhar'
import UseEnviarRoutes from '../../../hooks/UseEnviarRoutes'
import { useCookies } from 'react-cookie'

const Gerenciamentodetorres1 = () => {
  const { torreData } = useParams()
  let descricao = ''
  let texto = ''

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

  if (torreData === 'true') {
    descricao = 'Falha ao cadastrar a torre'
    texto = 'Sua torre não foi cadastrada pois a mesma ja existe'
  } else {
    descricao = 'Torre Cadastrada com sucesso'
    texto =
      'Sua torre foi cadastrada com sucesso agora você podera a ver na tabela e usar os dados da mesma para fins de calculos'
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

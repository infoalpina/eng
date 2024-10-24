import DefaultLayout from '../../../layout/DefaultLayout'
import { AtualizarTorres } from 'src/components'
import { useUser } from 'src/userContext'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import useEncaminhar from '../../../hooks/functions/useEncaminhar'
import UseEnviarRoutes from '../../../hooks/UseEnviarRoutes'
import { useCookies } from 'react-cookie'

const Gerenciamentodetorres1 = () => {
  const { torreData } = useParams()
  const { checkUserExpiration } = UseEnviarRoutes()

  const encaminhar = useEncaminhar()
  const booleano = torreData
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
        titulo={'Criar torres'}
        conteudoPrimario={
          booleano === 'true' ? (
            <AtualizarTorres
              descricao={'Torre Desativada com sucesso'}
              texto={'A torre foi desativada com êxito'}
              texto1={
                'Importante ressaltar que, a partir deste momento, não será possível utilizar os dados provenientes da mesma'
              }
            />
          ) : (
            <AtualizarTorres
              descricao={'Torre Reativada com sucesso'}
              texto={
                'Sua torre foi reativada com sucesso com isso os dados voltarão a aparecer para fins de cálculos'
              }
            />
          )
        }
      />
    </div>
  )
}

export default Gerenciamentodetorres1

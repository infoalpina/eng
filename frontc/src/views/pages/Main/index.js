import React, { useEffect } from 'react'
import { Main } from 'src/components/index'
import DefaultLayout from 'src/layout/DefaultLayout'
import { useUser } from 'src/userContext'
import useEncaminhar from '../../../hooks/functions/useEncaminhar'
import UseEnviarRoutes from '../../../hooks/UseEnviarRoutes'
import { useCookies } from 'react-cookie'

const VerTodosOsUsuários = () => {
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
    <DefaultLayout titulo="Engenharia" conteudoPrimario={<Main />} userType={user} open={true} />
  )
}

export default VerTodosOsUsuários

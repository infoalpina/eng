import React from 'react'
import { useUser } from '../userContext'
import EngenhariaRoutes from './routesEngenharia'
import GeralRoutes from './routesGeral'
import LoginPage from './LoginPage'

const UserSpecificRoutes = () => {
  const { user } = useUser()

  if (user === 'engenharia') {
    return <EngenhariaRoutes />
  }

  if (user === 'comum') {
    return <GeralRoutes />
  }

  return <LoginPage />
}

export default UserSpecificRoutes

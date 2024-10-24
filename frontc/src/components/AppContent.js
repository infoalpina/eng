import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import UserSpecificRoutes from '../routes/UserSpecifcRoutes'

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          <UserSpecificRoutes />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)

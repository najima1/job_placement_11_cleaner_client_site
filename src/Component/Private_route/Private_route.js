import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useProvider } from '../Context/Context_provider'

const Private_route = ({ children }) => {
    const { currentUser,loading } = useProvider()
    const location = useLocation()

    if(loading) return

    if (!currentUser) {
        return <Navigate to='/signin' state={{ from: location }} replace />
    }

    return children

}

export default Private_route

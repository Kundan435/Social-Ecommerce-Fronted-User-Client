import axios from 'axios'
import React, { useEffect } from 'react'
import withAuth from '../hocs/withAuth'
import { useAuth } from '../providers/Auth'

export const doLogout = async (setAuthenticated: any) => {
  const response = await axios.delete('/logout', { withCredentials: true })
  if (response.status === 200) {
    setAuthenticated(false)
  } else {
    console.error('Failed to logout', response)
  }
}

const Logout = () => {
  const { setAuthenticated } = useAuth()

  useEffect(() => {
    doLogout(setAuthenticated)
  }, [setAuthenticated])

  return <p>Logging out...</p>
}

export default withAuth(Logout, '/')

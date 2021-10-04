/* eslint-disable no-console */
import axios from 'axios'
import React, { ReactNode, ReactElement } from 'react'

type AuthContext = {
  isAuthenticated: boolean
  isLoading: boolean
  user: { id: string; role: string }
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = React.createContext<AuthContext>({
  isAuthenticated: false,
  isLoading: true,
  user: { id: '', role: '' },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAuthenticated: () => {}
})

export const AuthProvider = ({
  children
}: {
  children: ReactNode
}): ReactElement => {
  const [isAuthenticated, setAuthenticated] = React.useState<boolean>(false)
  const [isLoading, setLoading] = React.useState<boolean>(true)
  // Update This Props Interface----------------------------------

  const [user, setUser] = React.useState<any>({})
  React.useEffect(() => {
    const initializeAuth = async (): Promise<void> => {
      await axios
        .get('/check', { withCredentials: true })
        .then((res) => {
          if (res.status === 200) {
            setAuthenticated(true)
            setUser(res.data)
          }
          setLoading(false)
        })
        .catch((error) => {
          setLoading(false)
          setAuthenticated(false)
          setUser(null)
          console.log('Failed Auth err', error)
        })
    }
    initializeAuth()
  }, [])
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        setAuthenticated,
        user
      }}
    >
      {console.log({ isAuthenticated, isLoading })}
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContext {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function useIsAuthenticated(): boolean {
  const context = useAuth()
  return context.isAuthenticated
}

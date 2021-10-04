import React from 'react'

const viewportContext = React.createContext({})
// Update This Props Interface----------------------------------

const ViewportProvider = ({ children }: any) => {
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  React.useEffect(() => {
    if (width === 0 && height === 0) {
      handleWindowResize()
    } else {
      window.addEventListener('resize', handleWindowResize)
      return () => window.removeEventListener('resize', handleWindowResize)
    }
  }, [width, height])

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  )
}

const useViewport = () => {
  // Update This Props Interface----------------------------------

  const { width, height }: any = React.useContext(viewportContext)

  return { width, height }
}

export { ViewportProvider, useViewport }

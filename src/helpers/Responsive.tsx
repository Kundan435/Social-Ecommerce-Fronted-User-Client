import { useViewport } from '../providers/ViewPort'
// Update This Props Interface----------------------------------
const Mobile = ({ children }: any) => {
  const { width } = useViewport()

  if (width > '480') return null

  return children
}
// Update This Props Interface----------------------------------
const Tablet = ({ children }: any) => {
  const { width } = useViewport()

  if (width > '768') return null

  return children
}
// Update This Props Interface----------------------------------
const Desktop = ({ children }: any) => {
  const { width } = useViewport()

  if (width < '1200') return null

  return children
}

export { Mobile, Tablet, Desktop }

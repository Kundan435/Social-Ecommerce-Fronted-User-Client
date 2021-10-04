import axios from 'axios'
import React, { useEffect, useState } from 'react'

const baseInfoContext = React.createContext({})
// Update This Props Interface----------------------------------

const BasicInfoProvider = ({ children }: any) => {
  const [data, setData] = useState(false)
  const [cartItems, setCartItems] = useState({
    items: [],
    count: 0
  })
  const [wishlistItems, setWishlistItems] = useState({ items: [], count: 0 })

  const basicInfo = async () => {
    await axios
      .get('/basicinfo')
      .then(({ data }) => {
        const { cart, wishlist } = data

        const cartCount = cart.items.reduce(
          // Update This Props Interface----------------------------------

          (acc: any, { quantity }: any) => acc + quantity,
          0
        )
        setCartItems({ items: cart.items, count: cartCount })
        setWishlistItems({
          items: wishlist.items,
          count: wishlist.items.length
        })
        setData(true)
      })
      .catch((error) => {
        return error
      })
  }

  useEffect(() => {
    if (data) return
    const source = axios.CancelToken.source()
    basicInfo()

    return () => {
      source.cancel()
    }
  }, [data])

  useEffect(() => {
    const cartCount = cartItems.items.reduce(
      (acc, { quantity }) => acc + quantity,
      0
    )
    setCartItems({ ...cartItems, count: cartCount })
    // Update This Props Interface----------------------------------

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems.items.length])

  useEffect(() => {
    setWishlistItems({
      ...wishlistItems,
      count: wishlistItems.items.length
    })
    // Update This Props Interface----------------------------------

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wishlistItems.items.length])

  return (
    <baseInfoContext.Provider
      value={{ cartItems, setCartItems, wishlistItems, setWishlistItems }}
    >
      {children}
    </baseInfoContext.Provider>
  )
}

const useBasicInfo = () => {
  // Update This Props Interface----------------------------------

  const { cartItems, setCartItems, wishlistItems, setWishlistItems }: any =
    React.useContext(baseInfoContext)

  return { cartItems, setCartItems, wishlistItems, setWishlistItems }
}

export { BasicInfoProvider, useBasicInfo }

/* eslint-disable no-console */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useBasicInfo } from '../../providers/BasicInfo'
// Update This Props Interface----------------------------------

const Wishlist = ({ id }: any) => {
  const [add, setAdd] = useState(false)
  const { wishlistItems, setWishlistItems } = useBasicInfo()
  // Update This Props Interface----------------------------------

  const addWishlist = (id: any) => {
    axios
      .patch('/wishlist', { id })
      .then(({ data }) => {
        setWishlistItems({ ...wishlistItems, items: data.items })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    if (!wishlistItems.items) return
    const index = wishlistItems.items.indexOf(id)
    if (index < 0) return
    return setAdd(true)
    // Update This Props Interface----------------------------------

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wishlistItems.items.length])

  return (
    <Fragment>
      <div className='wishlist trans-tf'>
        {add ? (
          <IoHeart size='1.2em' color='#d9534f' />
        ) : (
          <a className='lh-1' onClick={() => addWishlist(id)}>
            <IoHeartOutline size='1.2em' />
          </a>
        )}
      </div>
    </Fragment>
  )
}

export default Wishlist

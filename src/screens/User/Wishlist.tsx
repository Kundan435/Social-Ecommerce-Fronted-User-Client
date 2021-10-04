/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-console */
import React from 'react'
import { Fragment } from 'react'
import Image from 'next/image'
import useSWR, { mutate } from 'swr'
import { IoTrashOutline } from 'react-icons/io5'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useBasicInfo } from '../../providers/BasicInfo'
import UserAccountLayout from '../../components/Layout/UserAccountLayout'
import withAuth from '../../hocs/withAuth'

const UserWishlist = () => {
  const { data, error } = useSWR('/wishlist')

  const { wishlistItems, setWishlistItems } = useBasicInfo()
  const router = useRouter()
  // Update This Props Interface----------------------------------

  const removeWishlist = (id: any) => {
    axios
      .delete(`/wishlist/${id}`)
      .then(() => {
        mutate(
          '/wishlist',
          () => {
            // Update This Props Interface----------------------------------

            const update = data.items.filter((i: any) => i._id !== id)
            return { ...data, items: update }
          },
          false
        )
        const updatedWishlist = wishlistItems.items.filter((i: any) => i !== id)
        setWishlistItems({ ...wishlistItems, items: updatedWishlist })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  if (!data) return 'loading'

  if (error) return error

  return (
    <Fragment>
      <UserAccountLayout>
        <div className='bg-white rounded-3 box-shadow-2 p-4 h-100'>
          {data.items.length > 0 ? (
            <Fragment>
              <h3 className='mb-4'>My Wishlist</h3>
              {/* // Update This Props Interface---------------------------------- */}

              {data.items.map((el: any, i: number) => (
                <div key={i} className='row rounded-3 border p-2 mb-2'>
                  <div className='col-2 px-1'>
                    <div className='overflow-hidden rounded-3 bg-l-gray d-flex mw-fit'>
                      <Image
                        src={process.env.STATIC_URL + el.images.filename}
                        alt='Picture of the author'
                        width='100px'
                        height='100px'
                        objectFit='cover'
                      />
                    </div>
                  </div>
                  <div className='col-7 p-0 align-self-center'>
                    <p className='text-truncate fw-bold mb-1'>{el.title}</p>
                    <p className='fs-6 m-0'>Seller:&nbsp;Kundan Bhosale</p>
                    <p className='fw-bold fs-4'>${el.price}</p>
                  </div>
                  <div className='col-2 text-center pt-3'>
                    {el.stockQty > 0 ? (
                      <span className='badge rounded-pill bg-success text-success'>
                        In Stock
                      </span>
                    ) : (
                      <span className='badge rounded-pill bg-damger text-danger'>
                        Out Of Stock
                      </span>
                    )}
                  </div>
                  <div className='col-1 text-end pt-2'>
                    <button
                      className='p-2 border border-primary rounded-circle d-flex'
                      onClick={() => removeWishlist(el._id)}
                    >
                      <IoTrashOutline
                        size='1.5em'
                        color='#4e4e4e'
                        className='hover-danger'
                      />
                    </button>
                  </div>
                </div>
              ))}
            </Fragment>
          ) : (
            <div className='text-center'>
              <h2 className='my-5'> Your cart is empty! </h2>
              <button className='btn btn-info' onClick={() => router.push('/')}>
                Browse Artworks
              </button>
            </div>
          )}
        </div>
      </UserAccountLayout>
    </Fragment>
  )
}

export default withAuth(UserWishlist)

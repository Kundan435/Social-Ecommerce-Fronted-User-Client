/* eslint-disable no-console */
import axios from 'axios'
import { Field, Formik } from 'formik'
import React, { Fragment } from 'react'
import useSWR, { mutate } from 'swr'
import Image from 'next/image'
import { useBasicInfo } from '../../../providers/BasicInfo'

const CartItems = () => {
  const { data, error } = useSWR('/cart')

  const { cartItems, setCartItems } = useBasicInfo()

  // const count = data.items.reduce((acc, { quantity }) => acc + quantity, 0)

  // const subTotal = data.items.reduce(
  //   (acc, { product }) => acc + product.price,
  //   0
  // )

  // const deliveryCharge = data.items.reduce(
  //   (acc, { product }) => acc + product.deliveryCharge,
  //   0
  // )

  // Update This Props Interface----------------------------------

  const removeItem = async (id: any) => {
    await axios
      .delete(`/cart/${id}`)
      .then(() => {
        mutate(
          '/cart',
          () => {
            // Update This Props Interface----------------------------------

            const update = data.items.filter((i: any) => i.product._id !== id)
            return { ...data, items: update }
          },
          false
        )
        // Update This Props Interface----------------------------------

        const updatecart = cartItems.items.filter((i: any) => i.product !== id)
        setCartItems({ ...cartItems, items: updatecart })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <Fragment>
      {!data ? (
        'Loading '
      ) : error ? (
        error.message
      ) : (
        <div>
          {/* // Update This Props Interface---------------------------------- */}

          {data.items.map((item: any, i: any) => (
            <div
              key={i}
              className={`row row-cols-4 ${
                i !== data.items.length - 1 ? 'border-bottom py-3' : 'pt-3'
              } mx-0`}
            >
              <div className='col-1 p-0'>
                <div className='d-inline-flex rounded-3 overflow-hidden'>
                  <Image
                    src={process.env.STATIC_URL + item.product.images.filename}
                    alt='Picture of the author'
                    width='75px'
                    height='75px'
                    objectFit='cover'
                    loading='eager'
                  />
                </div>
              </div>
              <div className='col-6 ps-3 pe-0 fs-6'>
                <p className='text-truncate-1 '>{item.product.title}</p>

                <p className=' fw-bold '>${item.product.price}</p>

                <a
                  className='btn-link text-info '
                  onClick={() => removeItem(item.product._id)}
                  role='button'
                >
                  <span className='btn-span'>Remove</span>
                </a>
              </div>
              <div className='col-2'>
                <Formik
                  initialValues={{
                    quantity: item.quantity
                  }}
                  onSubmit={async (values, actions) => {
                    await new Promise((r) => setTimeout(r, 500))
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                  }}
                >
                  {(props) => (
                    <form onSubmit={props.handleSubmit}>
                      <Field
                        type='number'
                        name='quantity'
                        min={1}
                        max={item.product.stockQty}
                        className='form-control my-1'
                      />
                    </form>
                  )}
                </Formik>
              </div>
              <div className='col-3 fs-6'>
                <p className='mb-2'>
                  {item.product.deliveryCharge === 0
                    ? 'Free Delivery'
                    : `Delivery Charge $${item.product.deliveryCharge}`}
                </p>
                <p className='my-1'>
                  {item.product.returns
                    ? '10 days Return policy'
                    : 'Non Returnable'}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  )
}

export default CartItems

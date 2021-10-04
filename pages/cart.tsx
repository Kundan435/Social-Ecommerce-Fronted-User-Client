/* eslint-disable no-console */
import React, { Fragment } from 'react'
import Image from 'next/image'
import useSWR, { mutate } from 'swr'
import axios from 'axios'
import { Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navigation from '../src/components/Layout/Navigation'
import FormControl from '../src/components/UI/FormControl'
import { useBasicInfo } from '../src/providers/BasicInfo'

const Cart = () => {
  const { data, error } = useSWR('/cart')

  const router = useRouter()

  const { cartItems, setCartItems } = useBasicInfo()

  if (!data) return 'loading'
  if (error) return 'failed'
  // Update This Props Interface----------------------------------

  const count = data.items.reduce(
    (acc: any, { quantity }: any) => acc + quantity,
    0
  )

  const subTotal = data.items.reduce(
    // Update This Props Interface----------------------------------

    (acc: any, { product }: any) => acc + product.price,
    0
  )

  const deliveryCharge = data.items.reduce(
    // Update This Props Interface----------------------------------

    (acc: any, { product }: any) => acc + product.deliveryCharge,
    0
  )
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
      <Navigation />
      <section id='my_cart'>
        <div className='container mw-1400  my-4'>
          {data.items.length > 0 ? (
            <Fragment>
              <h3>My Cart ({count})</h3>
              <div className='row row-cols-2'>
                <div className='col-8'>
                  {/* // Update This Props Interface---------------------------------- */}

                  {data.items.map((item: any, i: number) => (
                    <div key={i} className='row row-cols-4 border-bottom py-3'>
                      <div className='col-2'>
                        <Link href={`/${item.product.slug}`} passHref>
                          <a>
                            <div className='d-flex rounded-3 overflow-hidden'>
                              <Image
                                src={
                                  process.env.STATIC_URL +
                                  item.product.images.filename
                                }
                                alt='Picture of the author'
                                width='150px'
                                height='150px'
                                objectFit='cover'
                                loading='eager'
                              />
                            </div>
                          </a>
                        </Link>
                      </div>
                      <div className='col-5'>
                        <Link href={`/${item.product.slug}`} passHref>
                          <a>
                            <p className='text-truncate-2 my-1'>
                              {item.product.title}
                            </p>
                          </a>
                        </Link>
                        <p className='fs-4 fw-bold my-1'>
                          ${item.product.price}
                        </p>

                        <a className='btn-link' href='#' role='button'>
                          <span className='btn-span'>Save for later</span>
                        </a>

                        <a
                          className='btn-link'
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
                              <FormControl
                                control='input'
                                type='number'
                                name='quantity'
                              />
                            </form>
                          )}
                        </Formik>
                      </div>
                      <div className='col-3 fs-6'>
                        <p className='my-1'>
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
                <div className='col-4'>
                  <div className='box-shadow p-4 rounded-5 mx-4'>
                    <table className='table table-borderless'>
                      <thead>
                        <tr className='border-bottom pb-4'>
                          <th scope='col' className='text-uppercase fw-bolder'>
                            Price Details
                          </th>
                          <th scope='col'></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Item(s)</th>
                          <td>{count}</td>
                        </tr>
                        <tr className='border-bottom'>
                          <th>Discount</th>
                          <td>$0.00</td>
                        </tr>
                        <tr>
                          <td>Subtotal</td>
                          <td>${subTotal}</td>
                        </tr>
                        <tr className='border-bottom'>
                          <td>Delivery Charges</td>
                          <td>${deliveryCharge}</td>
                        </tr>
                        <tr>
                          <th className='fs-5'>Total Amount</th>
                          <th className='fs-5'>${subTotal + deliveryCharge}</th>
                        </tr>
                      </tbody>
                    </table>
                    <div className='d-grid text-center'>
                      <button
                        className='btn btn-dark rounded-3'
                        onClick={() => router.push('/checkout')}
                      >
                        Proceed To Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
      </section>
    </Fragment>
  )
}

export default Cart

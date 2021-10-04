/* eslint-disable no-console */
import React from 'react'
import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import UserAccountLayout from '../../../components/Layout/UserAccountLayout'

const OrderList = () => {
  const { error, data } = useSWR('/order')

  console.log(data)
  return (
    <Fragment>
      <UserAccountLayout>
        <div className='bg-white rounded-3 box-shadow-2 p-4 h-100'>
          {error ? (
            error.message
          ) : !data ? (
            'Loading'
          ) : (
            <Fragment>
              <h3 className='mb-4'>My Orders</h3>
              {data.map((el: any, i: number) => (
                <Fragment key={i}>
                  <Link
                    href={{
                      pathname: `/orders/[id]`,
                      query: {
                        id: encodeURIComponent(el._id),
                        item: encodeURIComponent(el.products.productId)
                      }
                    }}
                    passHref
                  >
                    <a>
                      <div className='row rounded-3 border p-2 mb-2'>
                        <div className='col-2 px-1 align-self-center'>
                          <div className='overflow-hidden rounded-3 bg-l-gray d-flex mw-fit'>
                            <Image
                              src={
                                process.env.STATIC_URL + el.products.thumbnail
                              }
                              alt='Picture of the author'
                              width='100px'
                              height='100px'
                              objectFit='cover'
                            />
                          </div>
                        </div>
                        <div className='col-6 p-0 align-self-center'>
                          <p className='fs-6 text-truncate-2 fw-bold mb-1'>
                            {el.products.title}
                          </p>
                          <p className='fs-6 m-0'>
                            Seller:&nbsp;{el.products.seller.name}
                          </p>
                        </div>
                        <div className='col-2 text-center align-self-center'>
                          <p className='fw-bold fs-5'>${el.products.price}</p>
                        </div>
                        <div className='col-2 text-center align-self-center'>
                          <span className='badge rounded-pill bg-info text-info text-capitalize'>
                            {el.products.orderStatus[0].type}
                          </span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </Fragment>
              ))}
            </Fragment>
          )}
        </div>
      </UserAccountLayout>
    </Fragment>
  )
}

export default OrderList

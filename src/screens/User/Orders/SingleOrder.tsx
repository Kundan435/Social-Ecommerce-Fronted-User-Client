/* eslint-disable no-console */
import React from 'react'
import { Fragment } from 'react'
import Image from 'next/image'
import { IoCheckmarkCircle } from 'react-icons/io5'
import styled from 'styled-components'
import useSWR from 'swr'
// Update This Props Interface----------------------------------

const SingleOrderDetails = ({ router }: any) => {
  const { error, data } = useSWR(
    router.query && `/order/${router.query.id}/${router.query.item}`
  )

  console.log(data)

  return (
    <Fragment>
      {error ? (
        error.message
      ) : !data ? (
        'Loading'
      ) : (
        <div className='border rounded-5 mb-4'>
          <div className='border-bottom fs-7 px-3 py-2'>
            <p className='fw-bold me-2'>OrderId: {data._id}</p>
            <p>Order Date :&nbsp;{data.createdAt}</p>
          </div>

          <div className='d-flex p-3'>
            <div style={{ width: '100px' }}>
              <div className='overflow-hidden rounded-3 bg-l-gray d-flex mw-fit'>
                <Image
                  src={process.env.STATIC_URL + data.product.thumbnail}
                  alt='Picture of the author'
                  width='100px'
                  height='100px'
                  objectFit='cover'
                />
              </div>
            </div>
            <div className='ms-3 fs-6'>
              <p className='text-wrap'>{data.product.title} </p>
              <div>
                <p>
                  <span>Quantity :&nbsp;</span> {data.product.quantity}
                </p>
                <p>
                  <span>Seller :&nbsp;</span> {data.product.seller.name}
                </p>
                <p className='fw-bold fs-5'>{data.product.price}</p>
              </div>
            </div>
          </div>
          <div className='border-top pt-3 fs-6'>
            <h4 className='px-3'>Order Status</h4>

            <div className='d-flex align-items-center p-3'>
              <div style={{ width: '50px' }}>
                <TrackingDefaultProgress completed>
                  <IoCheckmarkCircle />
                </TrackingDefaultProgress>
              </div>
              <div>
                <p className='fw-bold'>Order Placed</p>
                <p>We have recieved your order on 20 Dec 2021</p>
              </div>
            </div>
            <div className='d-flex align-items-center p-3'>
              <div style={{ width: '50px' }}>
                <TrackingDefaultProgress completed>
                  <IoCheckmarkCircle />
                </TrackingDefaultProgress>
              </div>
              <div>
                <p className='fw-bold'>Order Confirmed</p>
                <p>We have recieved your order on 20 Dec 2021</p>
              </div>
            </div>
            <div className='d-flex align-items-center p-3'>
              <div style={{ width: '50px' }}>
                <TrackingDefaultProgress completed>
                  <IoCheckmarkCircle />
                </TrackingDefaultProgress>
              </div>
              <div>
                <p className='fw-bold'>Order Processed</p>
                <p>We have recieved your order on 20 Dec 2021</p>
              </div>
            </div>
            <div className='d-flex align-items-center p-3'>
              <div style={{ width: '50px' }}>
                <TrackingDefaultProgress>
                  <IoCheckmarkCircle />
                </TrackingDefaultProgress>
              </div>
              <div>
                <p className='fw-bold'>Ready To Ship</p>
                <p>We have recieved your order on 20 Dec 2021</p>
              </div>
            </div>
            <div className='d-flex align-items-center p-3'>
              <div style={{ width: '50px' }}>
                <TrackingDefaultProgress>
                  <IoCheckmarkCircle />
                </TrackingDefaultProgress>
              </div>
              <div>
                <p className='fw-bold'>Shipped</p>
                <p>We have recieved your order on 20 Dec 2021</p>
              </div>
            </div>
            <div className='d-flex align-items-center p-3'>
              <div style={{ width: '50px' }}>
                <TrackingDefaultProgress>
                  <IoCheckmarkCircle />
                </TrackingDefaultProgress>
              </div>
              <div>
                <p className='fw-bold'>Out for Delivery</p>
                <p>We have recieved your order on 20 Dec 2021</p>
              </div>
            </div>
            <div className='d-flex align-items-center p-3'>
              <div style={{ width: '50px' }}>
                <TrackingDefaultProgress last>
                  <IoCheckmarkCircle />
                </TrackingDefaultProgress>
              </div>
              <div>
                <p className='fw-bold'>Delivered</p>
                <p>We have recieved your order on 20 Dec 2021</p>
              </div>
            </div>
          </div>
          <div className='d-flex border-top fs-7 px-3 py-2'>
            <div className='me-4'>
              <button
                className='btn btn-light py-1 rounded-3'
                onClick={() =>
                  router.push({
                    pathname: '/orders/[id]',
                    query: { id: data._id }
                  })
                }
              >
                View Order Details
              </button>
            </div>
            <div>
              <button className='btn btn-light py-1 rounded-3'>
                Download Invoice
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

const TrackingDefaultProgress = styled.div<{
  last?: boolean
  completed?: boolean
}>`
  width: 25px;
  height: 25px;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  svg {
    display: ${(el) => (el.completed ? 'block' : 'none')};
    color: #4bbf73;
    height: 23px;
    width: 23px;
    position: absolute;
    z-index: 2;
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid ${(el) => (el.completed ? '#4bbf73' : '#ccc')};
    border-radius: 50%;
    background: #fff;
    z-index: 1;
  }
  &:after {
    content: '';
    display: ${(el) => (el.last ? 'none' : 'block')};
    position: absolute;
    background: ${(el) => (el.completed ? '#4bbf73' : '#ccc')};
    bottom: -6vh;
    left: 48%;
    width: 2px;
    height: 7vh;
  }
`

export default SingleOrderDetails

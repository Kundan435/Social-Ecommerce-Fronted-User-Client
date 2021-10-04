/* eslint-disable no-console */
import React, { Fragment } from 'react'
import Image from 'next/image'
import useSWR from 'swr'
// Update This Props Interface----------------------------------

const OrderDetails = ({ router }: any) => {
  const { error, data } = useSWR(router.query && `/order/${router.query.id}`)
  console.log(data)
  return (
    <Fragment>
      {error ? (
        error.message
      ) : !data ? (
        'Loading'
      ) : (
        <Fragment>
          <div className='d-flex px-2 justify-content-between align-items-center mb-2'>
            <div>
              <h5>Order Details</h5>
            </div>
            <div>
              <button className='btn py-1 btn-info rounded-3'>
                Download Invoice
              </button>
            </div>
          </div>
          <div className='border rounded-5 p-3 mb-4'>
            <table
              className='table table-sm table-borderless'
              style={{ maxWidth: '375px' }}
            >
              <tbody>
                <tr>
                  <td>Order Id</td>
                  <td>{data._id}</td>
                </tr>
                <tr>
                  <td>Order Date</td>
                  <td>{data.createdAt}</td>
                </tr>
                <tr>
                  <td>Item(s)</td>
                  <td>{data.totalItemscount}</td>
                </tr>
                <tr>
                  <td>Items Total</td>
                  <td>&nbsp;${data.totalItemsAmt}</td>
                </tr>
                <tr>
                  <td>Delivery Charges</td>
                  <td>&nbsp;${data.totalItemsAmt}</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>&nbsp;${data.totalTax}</td>
                </tr>
                <tr>
                  <td>Discount</td>
                  <td>-${data.totalDiscount}</td>
                </tr>
                <tr>
                  <th className='fs-5'>Order Total</th>
                  <th className='fs-5'>&nbsp;${data.orderTotal}</th>
                </tr>
              </tbody>
            </table>
          </div>
          <h5 className='px-2'>Shipping Address</h5>
          <div className='border rounded-5 p-3 mb-4'>
            <table className='table table-sm table-borderless'>
              <tbody>
                <tr>
                  <td>
                    <span className='fw-bold me-2'>Kundan Bhosale</span>
                    9325029116
                  </td>
                </tr>
                <tr>
                  <td>Waykule plot, uplai road</td>
                </tr>
                <tr>
                  <td>Barshi Maharastra</td>
                </tr>
                <tr>
                  <td>India - 413411</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5 className='px-2'>Order Item(s)</h5>
          {[...Array(3)].map((el, i) => (
            <div key={i} className='border rounded-5 mb-4'>
              <div className='d-flex border-bottom fs-7 px-3 py-2 justify-content-between align-items-center'>
                <div>
                  <p className='fw-bold me-2'>Order Accepted</p>
                  <p>
                    <span>Delivery Estimate :&nbsp;</span>
                    <span className='text-success fw-bold'>
                      Wednesday 14th October 2021
                    </span>
                  </p>
                </div>
                <div>
                  <button className='btn py-1 btn-info rounded-3'>Track</button>
                </div>
              </div>
              <div className='d-flex p-3'>
                <div style={{ width: '100px' }}>
                  <div className='overflow-hidden rounded-3 bg-l-gray d-flex mw-fit'>
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='100px'
                      height='100px'
                      objectFit='cover'
                    />
                  </div>
                </div>
                <div className='ms-3 fs-6'>
                  <p className='text-wrap'>
                    Black Luxury Silk Satin Face Masks. Made in UK.
                  </p>
                  <div>
                    <p>
                      <span>Quantity :&nbsp;</span> 1
                    </p>
                    <p>
                      <span>Seller :&nbsp;</span> Kundan Bhosale
                    </p>
                    <p className='fw-bold fs-5'>$100</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Fragment>
      )}
    </Fragment>
  )
}

export default OrderDetails

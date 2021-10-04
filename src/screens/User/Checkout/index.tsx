/* eslint-disable no-console */
import React, { Fragment, useEffect, useState } from 'react'
import CheckoutShipping from './shipping'
import CartItems from './cart'
import { CircleBorder } from '../../../styledCSS'

const CheckoutPage = () => {
  // Update This Props Interface----------------------------------

  const [shipping, setShipping] = useState<any>(null)

  useEffect(() => {
    console.log('shipping', shipping)
  }, [shipping])

  return (
    <Fragment>
      <div className='bg-light min-h-100'>
        <div className='container mw-1400 py-5'>
          <div className='row row-cols-2'>
            <div className='col-8 pe-3'>
              <div className='bg-white p-4 rounded-7 mb-4'>
                <div className='d-flex align-items-center'>
                  <CircleBorder>1</CircleBorder>
                  <h4 className='m-0'>Delivery Address</h4>
                </div>
                {shipping ? (
                  <div className='row mx-0 w-100 '>
                    <div className='col-10 py-2 fs-6'>
                      <div className='d-flex text-capitalize'>
                        <span className='fw-bolder me-2'>{shipping.name}</span>
                        <span className='me-2'>{shipping.mobileNumber}</span>
                        <span className='border border-primary rounded-5 px-2 '>
                          {shipping.addressType}
                        </span>
                      </div>
                      <p>
                        {shipping.addressDetails +
                          ', ' +
                          shipping.city +
                          ', ' +
                          shipping.state +
                          ', ' +
                          shipping.country +
                          ', '}
                        <span className='fw-bold'> {shipping.pincode} </span>
                      </p>
                    </div>
                    <div className='col-2 d-flex justify-content-end align-items-center'>
                      <button
                        type='button'
                        className='btn btn-info'
                        onClick={() => setShipping(null)}
                      >
                        Change
                      </button>
                    </div>
                  </div>
                ) : (
                  <CheckoutShipping setShipping={setShipping} />
                )}
              </div>
              <div className='bg-white p-4 rounded-7 mb-4'>
                <div className='d-flex align-items-center justify-content-between '>
                  <div className='d-flex '>
                    <CircleBorder> 2 </CircleBorder>
                    <h4 className='m-0'>Cart Summary</h4>
                  </div>
                  <div>
                    {!shipping && <p className='fw-bold'>Item(s) 4 </p>}
                  </div>
                </div>
                {shipping && <CartItems />}
              </div>

              <div className='row bg-white p-4 rounded-7 mb-4 align-items-center '>
                <div className='col-8 fs-6'>
                  <p>
                    Order Confirmation Email will be set to
                    <span className='fw-bold'> Kundanbhosale@gmail.com </span>
                  </p>
                </div>
                <div className='col text-end '>
                  <button
                    type='submit'
                    disabled={!shipping}
                    className='btn rounded-5 fs-5 px-5 btn-violet '
                  >
                    Proceed To Pay
                  </button>
                </div>
              </div>
            </div>
            {/* 2 wrapper col - 2 */}

            <div className='col-4 ps-3'>
              <div className='bg-white p-4 rounded-7'>
                <h4 className='text-orange'>Order Summary</h4>
                <div className='border-bottom mb-2'>
                  <table className='table table-borderless'>
                    <tbody>
                      <tr>
                        <th></th>
                        <th className='text-orange text-end '>4 Item(s)</th>
                      </tr>
                      <tr>
                        <th>Item(s) Total</th>
                        <td className='text-end'>$100.00</td>
                      </tr>
                      <tr>
                        <td>Discount</td>
                        <td className='text-end'>$10.00</td>
                      </tr>
                      <tr>
                        <td>Delivery Charge</td>
                        <td className='text-end'>$5.00</td>
                      </tr>
                      <tr>
                        <td>Taxes & Charges</td>
                        <td className='text-end'>$1.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='d-flex justify-content-between px-2 fw-bold text-orange'>
                  <div>
                    <p>Total to pay</p>
                  </div>
                  <div>
                    <p>$96.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CheckoutPage

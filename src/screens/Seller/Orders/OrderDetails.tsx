import React from 'react'
import { Fragment } from 'react'
import Image from 'next/image'
import SellerDashboardLayout from '../../../components/Layout/SellerDashboard'

const SellerOrderDetails = () => {
  return (
    <Fragment>
      <SellerDashboardLayout>
        <div className='border bg-white rounded-6 p-4'>
          <p className='fs-4 mb-2'>Order Details</p>
          <table className='table table-bordered'>
            <tbody>
              <tr>
                <th className='w-15'>Order ID</th>
                <th>4564-654-654-67527</th>
              </tr>
              <tr>
                <th className='w-15'>Order Date</th>
                <td>09-08-2021</td>
              </tr>
              <tr>
                <th className='w-15'>Payment Method</th>
                <td>Credit Card</td>
              </tr>
            </tbody>
          </table>

          <div className='div my-3'>
            <table className='table table-bordered text-center'>
              <thead className='bg-l-gray'>
                <tr>
                  <th className='text-start'>Product Details</th>
                  <th>Quantity</th>
                  <th>Gross Amount</th>
                  <th>Discount</th>
                  <th>Taxes/Fees</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-info'>
                    <div className='d-flex'>
                      <div className='me-2'>
                        <div className='overflow-hidden bg-l-gray d-inline-flex'>
                          <Image
                            src={process.env.STATIC_URL + '1.jpg'}
                            alt='Picture of the author'
                            width='75px'
                            height='75px'
                            objectFit='cover'
                            priority={true}
                          />
                        </div>
                      </div>
                      <div className='flex-fill'>
                        <table className='table table-sm table-borderless text-start'>
                          <tbody>
                            <tr>
                              <th colSpan={2} className='text-info'>
                                Name of the Painitng
                              </th>
                            </tr>
                            <tr>
                              <th>Item ID</th>
                              <td>564-564-45-4-46454</td>
                            </tr>
                            <tr>
                              <th>SKU</th>
                              <td>5S4DF56SD7F4444443</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </td>
                  <td>2</td>
                  <td>$250.00</td>
                  <td>$0.00</td>
                  <td>$2.00</td>
                  <td>$252.00</td>
                </tr>
                <tr>
                  <td className='text-info'>
                    <div className='d-flex'>
                      <div className='me-2'>
                        <div className='overflow-hidden bg-l-gray d-inline-flex'>
                          <Image
                            src={process.env.STATIC_URL + '1.jpg'}
                            alt='Picture of the author'
                            width='75px'
                            height='75px'
                            objectFit='cover'
                            priority={true}
                          />
                        </div>
                      </div>
                      <div className='flex-fill'>
                        <table className='table table-sm table-borderless text-start'>
                          <tbody>
                            <tr>
                              <th colSpan={2} className='text-info'>
                                Name of the Painitng
                              </th>
                            </tr>
                            <tr>
                              <th>Item ID</th>
                              <td>564-564-45-4-46454</td>
                            </tr>
                            <tr>
                              <th>SKU</th>
                              <td>5S4DF56SD7F4444443</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </td>
                  <td>2</td>
                  <td>$250.00</td>
                  <td>$0.00</td>
                  <td>$2.00</td>
                  <td>$252.00</td>
                </tr>
                <tr>
                  <td className='text-info'>
                    <div className='d-flex'>
                      <div className='me-2'>
                        <div className='overflow-hidden bg-l-gray d-inline-flex'>
                          <Image
                            src={process.env.STATIC_URL + '1.jpg'}
                            alt='Picture of the author'
                            width='75px'
                            height='75px'
                            objectFit='cover'
                            priority={true}
                          />
                        </div>
                      </div>
                      <div className='flex-fill'>
                        <table className='table table-sm table-borderless text-start'>
                          <tbody>
                            <tr>
                              <th colSpan={2} className='text-info'>
                                Name of the Painitng
                              </th>
                            </tr>
                            <tr>
                              <th>Item ID</th>
                              <td>564-564-45-4-46454</td>
                            </tr>
                            <tr>
                              <th>SKU</th>
                              <td>5S4DF56SD7F4444443</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </td>
                  <td>2</td>
                  <td>$250.00</td>
                  <td>$0.00</td>
                  <td>$2.00</td>
                  <td>$252.00</td>
                </tr>
                <tr>
                  <th colSpan={6} className='text-start'>
                    Total Quantity : 6
                  </th>
                </tr>
                <tr>
                  <th colSpan={6} className='text-start'>
                    Total Amount : $756
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='fs-4 my-2'>Buyer Details</p>
          <table className='table table-bordered'>
            <tbody>
              <tr>
                <th className='w-15'>Name</th>
                <td>Kundan Bhosale</td>
              </tr>
              <tr>
                <th className='w-15'>Delivery Address</th>
                <td>
                  <p>
                    Waykule Plot, Uplai RoadBarshi, Maharastra 413411 - India
                  </p>
                </td>
              </tr>
              <tr>
                <th className='w-15'>Contact Number</th>
                <td>+91 9325029116</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SellerDashboardLayout>
    </Fragment>
  )
}

export default SellerOrderDetails

import React from 'react'
import { Fragment } from 'react'
import Image from 'next/image'

import Link from 'next/link'
import Router from 'next/router'
import SellerDashboardLayout from '../../../components/Layout/SellerDashboard'
import { Desktop, Mobile } from '../../../helpers/Responsive'

const SellerOrderList = () => {
  const handleRoute = (id: string) => {
    Router.push(`/seller/orders/${id}`)
  }

  return (
    <Fragment>
      <SellerDashboardLayout>
        <Desktop>
          <h3>My Orders</h3>
          <div className='row row-cols-5 bg-white p-4 my-3 rounded-6 m-0'>
            <div className='col border-end ps-4'>
              <p>Pending Orders</p>
              <p className='fs-1 fw-bolder mb-1'>34</p>
            </div>
            <div className='col border-end ps-4'>
              <p>Urgent </p>
              <p className='fs-1 fw-bolder mb-1'>1</p>
            </div>
            <div className='col border-end ps-4'>
              <p>In Transit </p>
              <p className='fs-1 fw-bolder mb-1'>3</p>
            </div>
            <div className='col border-end ps-4'>
              <p>Returned</p>
              <p className='fs-1 fw-bolder mb-1'>23</p>
            </div>
            <div className='col border-end ps-4'>
              <p>Completed</p>
              <p className='fs-1 fw-bolder mb-1'>214</p>
            </div>
          </div>

          <div className=' bg-white rounded-6 fs-4 p-4'>
            <table className='table table-bordered table-hover'>
              <thead className='bg-warning'>
                <tr>
                  <th scope='col' className='w-15'>
                    Order Id
                  </th>
                  <th scope='col'>Product Information</th>
                  <th scope='col' className='w-20'>
                    Buyer Details
                  </th>
                  <th scope='col' className='w-10'>
                    Amount
                  </th>
                  <th scope='col' className='w-10'>
                    Dispatch By
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  onClick={() => handleRoute('id')}
                  className='cursor-pointer'
                >
                  <td>464-45674-787865</td>
                  <td>
                    <div className='d-flex w-100'>
                      <div>
                        <div className='overflow-hidden bg-l-gray d-flex me-2'>
                          <Image
                            src={process.env.STATIC_URL + '1.jpg'}
                            alt='Picture of the author'
                            width='50px'
                            height='50px'
                            objectFit='cover'
                            priority={true}
                          />
                        </div>
                      </div>
                      <div className='fs-6'>
                        <p className='fw-bold'> Name of the Prodct </p>

                        <p>Item Id: 7867646744-464</p>
                        <p>Quantity: 1</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>Kundan Bhosale</p>
                    <p>Pune, Maharastra</p>
                  </td>
                  <td>$1,200</td>
                  <td>
                    <p className='fw-bold text-success'>2 Days</p>
                  </td>
                </tr>
                {/* 2 */}
                <tr
                  onClick={() => handleRoute('id')}
                  className='cursor-pointer'
                >
                  <td>464-45674-787865</td>
                  <td>
                    <div className='d-flex w-100'>
                      <div>
                        <div className='overflow-hidden bg-l-gray d-flex me-2'>
                          <Image
                            src={process.env.STATIC_URL + '1.jpg'}
                            alt='Picture of the author'
                            width='50px'
                            height='50px'
                            objectFit='cover'
                            priority={true}
                          />
                        </div>
                      </div>
                      <div className='fs-6'>
                        <p className='fw-bold'> Name of the Prodct </p>

                        <p>Item Id: 7867646744-464</p>
                        <p>Quantity: 1</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>Kundan Bhosale</p>
                    <p>Pune, Maharastra</p>
                  </td>
                  <td>$1,200</td>
                  <td>
                    <p className='fw-bold text-success'>2 Days</p>
                  </td>
                </tr>
                {/* 3 */}
                <tr
                  onClick={() => handleRoute('id')}
                  className='cursor-pointer'
                >
                  <td>464-45674-787865</td>
                  <td>
                    <div className='d-flex w-100'>
                      <div>
                        <div className='overflow-hidden bg-l-gray d-flex me-2'>
                          <Image
                            src={process.env.STATIC_URL + '1.jpg'}
                            alt='Picture of the author'
                            width='50px'
                            height='50px'
                            objectFit='cover'
                            priority={true}
                          />
                        </div>
                      </div>
                      <div className='fs-6'>
                        <p className='fw-bold'> Name of the Prodct </p>

                        <p>Item Id: 7867646744-464</p>
                        <p>Quantity: 1</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>Kundan Bhosale</p>
                    <p>Pune, Maharastra</p>
                  </td>
                  <td>$1,200</td>
                  <td>
                    <p className='fw-bold text-success'>2 Days</p>
                  </td>
                </tr>
                {/* 4 */}
                <tr
                  onClick={() => handleRoute('id')}
                  className='cursor-pointer'
                >
                  <td>464-45674-787865</td>
                  <td>
                    <div className='d-flex w-100'>
                      <div>
                        <div className='overflow-hidden bg-l-gray d-flex me-2'>
                          <Image
                            src={process.env.STATIC_URL + '1.jpg'}
                            alt='Picture of the author'
                            width='50px'
                            height='50px'
                            objectFit='cover'
                            priority={true}
                          />
                        </div>
                      </div>
                      <div className='fs-6'>
                        <p className='fw-bold'> Name of the Prodct </p>

                        <p>Item Id: 7867646744-464</p>
                        <p>Quantity: 1</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>Kundan Bhosale</p>
                    <p>Pune, Maharastra</p>
                  </td>
                  <td>$1,200</td>
                  <td>
                    <p className='fw-bold text-success'>2 Days</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Desktop>
        <Mobile>
          <h5>My Orders</h5>
          <div className='row row-cols-3 mx-0 my-0 rounded-3 mx-0 mb-3'>
            <div className='col p-1'>
              <div className='p-1 rounded-3 border bg-warning border-warning'>
                <p className='fs-7'>Pending Orders</p>
                <p className='fs-6 fw-bolder'>34</p>
              </div>
            </div>
            <div className='col p-1'>
              <div className='p-1 rounded-3 border'>
                <p className='fs-7'>Urgent </p>
                <p className='fs-6 fw-bolder'>1</p>
              </div>
            </div>
            <div className='col p-1'>
              <div className='p-1 rounded-3 border'>
                <p className='fs-7'>In Transit </p>
                <p className='fs-6 fw-bolder'>3</p>
              </div>
            </div>
            <div className='col p-1'>
              <div className='p-1 rounded-3 border'>
                <p className='fs-7'>Returned</p>
                <p className='fs-6 fw-bolder'>23</p>
              </div>
            </div>
            <div className='col p-1'>
              <div className='p-1 rounded-3 border'>
                <p className='fs-7'>Completed</p>
                <p className='fs-6 fw-bolder'>214</p>
              </div>
            </div>
          </div>
          <div className='fs-7 mb-2'>
            <div className='bg-l-gray p-1 mb-1'>
              <p>
                <span className='fw-bold'>Order Id</span> 44343546-354-351{' '}
              </p>
            </div>
            <div className='row m-0 row-cols-2 border p-1'>
              <div className='col-8 d-flex p-0 border-end'>
                <div>
                  <div className='overflow-hidden bg-l-gray d-inline-flex me-3'>
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='50px'
                      height='50px'
                      objectFit='cover'
                      priority={true}
                    />
                  </div>
                </div>
                <div>
                  <Link href='/' passHref>
                    <a className='text-underline text-info'>
                      Name of the Prodct
                    </a>
                  </Link>
                  <p>Buyer: Kundan Bhosale</p>
                  <p>Dispatch: 2 Days</p>
                </div>
              </div>
              <div className='col-4'>
                <p className='fs-6 fw-bold'>$2000000</p>
                <p>Quantity: 1</p>
              </div>
            </div>
            <div className='row m-0 row-cols-2 border p-1'>
              <div className='col-8 d-flex p-0 border-end'>
                <div>
                  <div className='overflow-hidden bg-l-gray d-inline-flex me-3'>
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='50px'
                      height='50px'
                      objectFit='cover'
                      priority={true}
                    />
                  </div>
                </div>
                <div>
                  <Link href='/' passHref>
                    <a className='text-underline text-info'>
                      Name of the Prodct
                    </a>
                  </Link>
                  <p>Buyer: Kundan Bhosale</p>
                  <p>Dispatch: 2 Days</p>
                </div>
              </div>
              <div className='col-4'>
                <p className='fs-6 fw-bold'>$2000000</p>
                <p>Quantity: 1</p>
              </div>
            </div>
            <div className='row m-0 row-cols-2 border p-1'>
              <div className='col-8 d-flex p-0 border-end'>
                <div>
                  <div className='overflow-hidden bg-l-gray d-inline-flex me-3'>
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='50px'
                      height='50px'
                      objectFit='cover'
                      priority={true}
                    />
                  </div>
                </div>
                <div>
                  <Link href='/' passHref>
                    <a className='text-underline text-info'>
                      Name of the Prodct
                    </a>
                  </Link>
                  <p>Buyer: Kundan Bhosale</p>
                  <p>Dispatch: 2 Days</p>
                </div>
              </div>
              <div className='col-4'>
                <p className='fs-6 fw-bold'>$2000000</p>
                <p>Quantity: 1</p>
              </div>
            </div>
          </div>
          <div className='fs-7 mb-2'>
            <div className='bg-l-gray p-1 mb-1'>
              <p>
                <span className='fw-bold'>Order Id</span> 44343546-354-351{' '}
              </p>
            </div>
            <div className='row m-0 row-cols-2 border p-1'>
              <div className='col-8 d-flex p-0 border-end'>
                <div>
                  <div className='overflow-hidden bg-l-gray d-inline-flex me-3'>
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='50px'
                      height='50px'
                      objectFit='cover'
                      priority={true}
                    />
                  </div>
                </div>
                <div>
                  <Link href='/' passHref>
                    <a className='text-underline text-info'>
                      Name of the Prodct
                    </a>
                  </Link>
                  <p>Buyer: Kundan Bhosale</p>
                  <p>Dispatch: 2 Days</p>
                </div>
              </div>
              <div className='col-4'>
                <p className='fs-6 fw-bold'>$2000000</p>
                <p>Quantity: 1</p>
              </div>
            </div>
          </div>
          <div className='fs-7 mb-2'>
            <div className='bg-l-gray p-1 mb-1'>
              <p>
                <span className='fw-bold'>Order Id</span> 44343546-354-351{' '}
              </p>
            </div>
            <div className='row m-0 row-cols-2 border p-1'>
              <div className='col-8 d-flex p-0 border-end'>
                <div>
                  <div className='overflow-hidden bg-l-gray d-inline-flex me-3'>
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='50px'
                      height='50px'
                      objectFit='cover'
                      priority={true}
                    />
                  </div>
                </div>
                <div>
                  <Link href='/' passHref>
                    <a className='text-underline text-info'>
                      Name of the Prodct
                    </a>
                  </Link>
                  <p>Buyer: Kundan Bhosale</p>
                  <p>Dispatch: 2 Days</p>
                </div>
              </div>
              <div className='col-4'>
                <p className='fs-6 fw-bold'>$2000000</p>
                <p>Quantity: 1</p>
              </div>
            </div>
          </div>
          <div className='fs-7 mb-2'>
            <div className='bg-l-gray p-1 mb-1'>
              <p>
                <span className='fw-bold'>Order Id</span> 44343546-354-351{' '}
              </p>
            </div>
            <div className='row m-0 row-cols-2 border p-1'>
              <div className='col-8 d-flex p-0 border-end'>
                <div>
                  <div className='overflow-hidden bg-l-gray d-inline-flex me-3'>
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='50px'
                      height='50px'
                      objectFit='cover'
                      priority={true}
                    />
                  </div>
                </div>
                <div>
                  <Link href='/' passHref>
                    <a className='text-underline text-info'>
                      Name of the Prodct
                    </a>
                  </Link>
                  <p>Buyer: Kundan Bhosale</p>
                  <p>Dispatch: 2 Days</p>
                </div>
              </div>
              <div className='col-4'>
                <p className='fs-6 fw-bold'>$2000000</p>
                <p>Quantity: 1</p>
              </div>
            </div>
          </div>
          <div className='fs-7 mb-2'>
            <div className='bg-l-gray p-1 mb-1'>
              <p>
                <span className='fw-bold'>Order Id</span> 44343546-354-351{' '}
              </p>
            </div>
            <div className='row m-0 row-cols-2 border p-1'>
              <div className='col-8 d-flex p-0 border-end'>
                <div>
                  <div className='overflow-hidden bg-l-gray d-inline-flex me-3'>
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='50px'
                      height='50px'
                      objectFit='cover'
                      priority={true}
                    />
                  </div>
                </div>
                <div>
                  <Link href='/' passHref>
                    <a className='text-underline text-info'>
                      Name of the Prodct
                    </a>
                  </Link>
                  <p>Buyer: Kundan Bhosale</p>
                  <p>Dispatch: 2 Days</p>
                </div>
              </div>
              <div className='col-4'>
                <p className='fs-6 fw-bold'>$2000000</p>
                <p>Quantity: 1</p>
              </div>
            </div>
          </div>
        </Mobile>
      </SellerDashboardLayout>
    </Fragment>
  )
}

export default SellerOrderList

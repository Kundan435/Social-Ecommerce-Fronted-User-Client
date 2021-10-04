import React from 'react'
import { Fragment } from 'react'
import Image from 'next/image'
import { IoArrowDownOutline, IoArrowUpOutline } from 'react-icons/io5'
import { Desktop } from '../../helpers/Responsive'
import SellerDashboardLayout from '../../components/Layout/SellerDashboard'

const SellerDashboardMain = () => {
  return (
    <Fragment>
      <Desktop>
        <SellerDashboardLayout>
          <h3>Dashboard</h3>
          <div className='row row-cols-4 bg-white p-4 my-3 rounded-6'>
            <div className='col border-end ps-4'>
              <p>Total Impressions</p>
              <p className='fs-1 fw-bolder mb-1'>1,234</p>
              <p>
                <span
                  className='bg-success text-success rounded-circle me-2'
                  style={{ padding: '5px 4px' }}
                >
                  <IoArrowUpOutline size='1.2em' className='icon' />
                </span>
                <span className='text-success fw-bold me-2'>+33.25%</span>
                <span className='fs-6 text-gray'>Last 7 days</span>
              </p>
            </div>
            <div className='col border-end ps-4'>
              <p>Views</p>
              <p className='fs-1 fw-bolder mb-2'>347</p>
              <p>
                <span
                  className='bg-danger text-danger rounded-circle me-2'
                  style={{ padding: '5px 4px' }}
                >
                  <IoArrowDownOutline size='1.2em' className='icon' />
                </span>
                <span className='text-danger fw-bold me-2'>-28.19%</span>
                <span className='fs-6 text-gray'>Last 7 days</span>
              </p>
            </div>
            <div className='col border-end ps-4'>
              <p>Active Orders</p>
              <p className='fs-1 fw-bolder mb-2'>16</p>
              <p>
                <span
                  className='bg-success text-success rounded-circle me-2'
                  style={{ padding: '5px 4px' }}
                >
                  <IoArrowUpOutline size='1.2em' className='icon' />
                </span>
                <span className='text-success fw-bold me-2'>+33.25%</span>
                <span className='fs-6 text-gray'>Last 7 days</span>
              </p>
            </div>
            <div className='col ps-4'>
              <p>Revenue</p>
              <p className='fs-1 fw-bolder mb-2'>$613</p>
              <p>
                <span
                  className='bg-success text-success rounded-circle me-2'
                  style={{ padding: '5px 4px' }}
                >
                  <IoArrowUpOutline size='1.2em' className='icon' />
                </span>
                <span className='text-success fw-bold me-2'>+33.25%</span>
                <span className='fs-6 text-gray'>Last 7 days</span>
              </p>
            </div>
          </div>
          <div className='row row-cols-2 pt-3 mb-4 rounded-6 justify-content-between'>
            <div className='col-9 ps-0 pb-3'>
              {/* Recent Activity */}

              <div className='bg-white p-3 rounded-6'>
                <h4>Recent Activity</h4>
                <div className='d-flex flex-row align-items-center border-bottom py-3'>
                  <div className='rounded-circle overflow-hidden bg-l-gray d-flex mw-fit p-0 me-3'>
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='50px'
                      height='50px'
                      objectFit='cover'
                      priority={true}
                    />
                  </div>
                  <div>
                    <p className='fw-bold fs-6'>
                      Kundan has purchased 2 of your Artworks
                    </p>
                    <p className='fs-6'>2 days ago</p>
                  </div>
                </div>
                <div className='d-flex flex-row align-items-center border-bottom py-3'>
                  <div className='rounded-circle overflow-hidden bg-l-gray d-flex mw-fit p-0 me-3'>
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='50px'
                      height='50px'
                      objectFit='cover'
                      priority={true}
                    />
                  </div>
                  <div>
                    <p className='fw-bold fs-6'>
                      Kundan has purchased 2 of your Artworks
                    </p>
                    <p className='fs-6'>2 days ago</p>
                  </div>
                </div>
                <div className='d-flex flex-row align-items-center border-bottom py-3'>
                  <div className='rounded-circle overflow-hidden bg-l-gray d-flex mw-fit p-0 me-3'>
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='50px'
                      height='50px'
                      objectFit='cover'
                      priority={true}
                    />
                  </div>
                  <div>
                    <p className='fw-bold fs-6'>
                      Kundan has purchased 2 of your Artworks
                    </p>
                    <p className='fs-6'>2 days ago</p>
                  </div>
                </div>
                <div className='d-flex flex-row align-items-center border-bottom py-3'>
                  <div className='rounded-circle overflow-hidden bg-l-gray d-flex mw-fit p-0 me-3'>
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='50px'
                      height='50px'
                      objectFit='cover'
                      priority={true}
                    />
                  </div>
                  <div>
                    <p className='fw-bold fs-6'>
                      Kundan has purchased 2 of your Artworks
                    </p>
                    <p className='fs-6'>2 days ago</p>
                  </div>
                </div>
                <div className='d-flex flex-row align-items-center border-bottom py-3'>
                  <div className='rounded-circle overflow-hidden bg-l-gray d-flex mw-fit p-0 me-3'>
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='50px'
                      height='50px'
                      objectFit='cover'
                      priority={true}
                    />
                  </div>
                  <div>
                    <p className='fw-bold fs-6'>
                      Kundan has purchased 2 of your Artworks
                    </p>
                    <p className='fs-6'>2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3 pe-0 ps-3'>
              {/* Orders */}
              <div className='bg-white p-3 mb-4 rounded-6'>
                <h4>Orders</h4>
                <div className='d-flex flex-row align-items-center border-bottom py-2'>
                  <p className='w-50'>New Orders</p>
                  <p className='w-50 text-end'>18</p>
                </div>
                <div className='d-flex flex-row align-items-center border-bottom py-2'>
                  <p className='w-50'>Urgent Orders</p>
                  <p className='w-50 text-end'>2</p>
                </div>
                <div className='d-flex flex-row align-items-center border-bottom py-2'>
                  <p className='w-50'>Returned</p>
                  <p className='w-50 text-end'>4</p>
                </div>
                <div className='d-flex flex-row align-items-center border-bottom py-2'>
                  <p className='w-50'>Completed</p>
                  <p className='w-50 text-end'>28</p>
                </div>
              </div>

              <div className='bg-white p-3 rounded-6'>
                <h4>Listings</h4>
                <div className='d-flex flex-row align-items-center border-bottom py-2'>
                  <p className='w-50'>Active</p>
                  <p className='w-50 text-end'>56</p>
                </div>
                <div className='d-flex flex-row align-items-center border-bottom py-2'>
                  <p className='w-50'>Pending</p>
                  <p className='w-50 text-end'>3</p>
                </div>
                <div className='d-flex flex-row align-items-center border-bottom py-2'>
                  <p className='w-50'>Expired</p>
                  <p className='w-50 text-end'>14</p>
                </div>
                <div className='d-flex flex-row align-items-center border-bottom py-2'>
                  <p className='w-50'>Sold Out</p>
                  <p className='w-50 text-end'>28</p>
                </div>
              </div>
            </div>
          </div>
        </SellerDashboardLayout>
      </Desktop>
    </Fragment>
  )
}

export default SellerDashboardMain

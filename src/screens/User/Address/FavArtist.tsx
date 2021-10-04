import React from 'react'
import { Fragment } from 'react'
import Image from 'next/image'
import { IoCheckmarkCircleSharp, IoOptionsSharp } from 'react-icons/io5'
import UserAccountLayout from '../../../components/Layout/UserAccountLayout'

const FavArtist = () => {
  return (
    <Fragment>
      <UserAccountLayout>
        <div className='bg-white rounded-3 box-shadow-2 p-4 h-100'>
          <h3 className='mb-4'>Favourite Artist</h3>

          <div className='row m-2 p-0'>
            <div className='col-10 p-0'>
              <button type='button' className='btn btn-sm btn-secondary'>
                Discover Artists
              </button>
            </div>
            <div className='col-2 text-end p-0'>
              <button
                type='button'
                className='btn btn-sm btn-light rounded-pill d-inline-flex align-items-center'
              >
                <IoOptionsSharp size='1.8em' />
              </button>
            </div>
          </div>

          <div className='row row-cols-2 m-0'>
            <div className='col-6 p-0'>
              <div className='row align-items-center py-2 m-2 border'>
                <div className='col-2 d-flex'>
                  <div className='overflow-hidden rounded-circle bg-l-gray d-inline-flex mw-fit'>
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='50px'
                      height='50px'
                      objectFit='cover'
                    />
                  </div>
                </div>
                <div className='col-6 '>
                  <p className='fw-bold lh-sm'>
                    Kundan Bhosale&nbsp;
                    <IoCheckmarkCircleSharp size='1em' color='#0086f9' />
                  </p>
                  <p className='fs-6 lh-sm text-gray '>999 followers</p>
                </div>
                <div className='col-4'>
                  <button
                    type='button'
                    className='btn btn-light rounded-pill text-capitalize py-1'
                  >
                    UnFollow
                  </button>
                </div>
              </div>
            </div>

            <div className='col-6 p-0'>
              <div className='row align-items-center py-2 m-2 border'>
                <div className='col-2 d-flex'>
                  <div className='overflow-hidden rounded-circle bg-l-gray d-inline-flex mw-fit'>
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='50px'
                      height='50px'
                      objectFit='cover'
                    />
                  </div>
                </div>
                <div className='col-6'>
                  <p className='fw-bold lh-sm'>
                    Kundan Bhosale&nbsp;
                    <IoCheckmarkCircleSharp size='1em' color='#0086f9' />
                  </p>
                  <p className='fs-6 lh-sm text-gray '>999 followers</p>
                </div>
                <div className='col-4'>
                  <button
                    type='button'
                    className='btn btn-light rounded-pill text-capitalize py-1'
                  >
                    UnFollow
                  </button>
                </div>
              </div>
            </div>

            <div className='col-6 p-0'>
              <div className='row align-items-center py-2 m-2 border'>
                <div className='col-2 d-flex'>
                  <div className='overflow-hidden rounded-circle bg-l-gray d-inline-flex mw-fit'>
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='50px'
                      height='50px'
                      objectFit='cover'
                    />
                  </div>
                </div>
                <div className='col-6'>
                  <p className='fw-bold lh-sm'>
                    Kundan Bhosale&nbsp;
                    <IoCheckmarkCircleSharp size='1em' color='#0086f9' />
                  </p>
                  <p className='fs-6 lh-sm text-gray '>999 followers</p>
                </div>
                <div className='col-4'>
                  <button
                    type='button'
                    className='btn btn-light rounded-pill text-capitalize py-1'
                  >
                    UnFollow
                  </button>
                </div>
              </div>
            </div>

            <div className='col-6 p-0'>
              <div className='row align-items-center py-2 m-2 border'>
                <div className='col-2 d-flex'>
                  <div className='overflow-hidden rounded-circle bg-l-gray d-inline-flex mw-fit'>
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='50px'
                      height='50px'
                      objectFit='cover'
                    />
                  </div>
                </div>
                <div className='col-6'>
                  <p className='fw-bold lh-sm'>
                    Kundan Bhosale&nbsp;
                    <IoCheckmarkCircleSharp size='1em' color='#0086f9' />
                  </p>
                  <p className='fs-6 lh-sm text-gray '>999 followers</p>
                </div>
                <div className='col-4'>
                  <button
                    type='button'
                    className='btn btn-light rounded-pill text-capitalize py-1'
                  >
                    UnFollow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UserAccountLayout>
    </Fragment>
  )
}

export default FavArtist

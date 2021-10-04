import React, { Fragment, ReactNode } from 'react'
import Image from 'next/image'
import Navigation from './Navigation'
import {
  IoPersonSharp,
  IoWalletSharp,
  IoPowerSharp,
  IoStorefrontSharp,
  IoChevronForwardSharp,
  IoHeartSharp,
  IoColorPaletteSharp,
  IoLocationSharp,
  IoHelpCircleSharp,
  IoCallSharp
} from 'react-icons/io5'
import VerticalNavlink from '../UI/VerticalLink'

const UserAccountLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <div className='container-fluid min-h-100 p-0 bg-l-gray'>
        <Navigation />

        <div className='container mw-1400 p-4'>
          <div className='row row-cols-2'>
            <div
              className='col-3 sticky-top'
              style={{ height: '100%', top: '2em' }}
            >
              <div className='row row-cols-2 align-items-center mb-2 rounded-3 bg-white box-shadow-2 p-2'>
                <div className='col-2 rounded-circle overflow-hidden bg-l-gray d-flex mw-fit p-0'>
                  <Image
                    src={process.env.STATIC_URL + '1.jpg'}
                    alt='Picture of the author'
                    width='50px'
                    height='50px'
                    objectFit='cover'
                    priority={true}
                  />
                </div>
                <div className='col-10 ps-2'>
                  <p className='lh-1 mb-1 fs-6'>Hello,</p>
                  <p className='lh-1 mb-0 fw-normal'>Kundan Bhosale</p>
                </div>
              </div>
              <div className='row rounded-3 box-shadow-2 bg-white'>
                <div className='h-100'>
                  <div className='border-bottom p-3'>
                    <div className='d-inline-flex'>
                      <IoPersonSharp size='1.3em' />
                      <p className='ps-3 m-0 fw-bold text-uppercase'>
                        Account Settings
                      </p>
                    </div>

                    <div className='list-group'>
                      <VerticalNavlink link='/account'>
                        Profile Information
                      </VerticalNavlink>
                      <VerticalNavlink link='/account#preferences'>
                        Preferences
                      </VerticalNavlink>
                      <VerticalNavlink link='/account/privacy'>
                        Privacy
                      </VerticalNavlink>
                      <VerticalNavlink link='/account/security'>
                        Security
                      </VerticalNavlink>
                    </div>
                  </div>
                  <VerticalNavlink link='/orders' type='single'>
                    <div className='w-5 text-center'>
                      <IoStorefrontSharp size='1.3em' />
                    </div>
                    <div className='w-85'>
                      <p className='ps-3 m-0 fw-bold text-uppercase'>
                        My Orders
                      </p>
                    </div>
                    <div className='w-10 text-center'>
                      <IoChevronForwardSharp size='1.3em' />
                    </div>
                  </VerticalNavlink>

                  <VerticalNavlink link='/wishlist' type='single'>
                    <div className='w-5 text-center'>
                      <IoHeartSharp size='1.5em' />
                    </div>
                    <div className='w-85'>
                      <p className='ps-3 m-0 fw-bold text-uppercase'>
                        My Wishlist
                      </p>
                    </div>
                    <div className='w-10 text-center'>
                      <IoChevronForwardSharp size='1.3em' />
                    </div>
                  </VerticalNavlink>

                  <VerticalNavlink link='/favourite-artist' type='single'>
                    <div className='w-5 text-center'>
                      <IoColorPaletteSharp size='1.5em' />
                    </div>
                    <div className='w-85'>
                      <p className='ps-3 m-0 fw-bold text-uppercase'>
                        My Favourite Artists
                      </p>
                    </div>
                    <div className='w-10 text-center'>
                      <IoChevronForwardSharp size='1.3em' />
                    </div>
                  </VerticalNavlink>

                  <VerticalNavlink link='/address' type='single'>
                    <div className='w-5 text-center'>
                      <IoLocationSharp size='1.5em' />
                    </div>
                    <div className='w-85'>
                      <p className='ps-3 m-0 fw-bold text-uppercase'>
                        Manage Addresses
                      </p>
                    </div>
                    <div className='w-10 text-center'>
                      <IoChevronForwardSharp size='1.3em' />
                    </div>
                  </VerticalNavlink>

                  <VerticalNavlink link='/payments' type='single'>
                    <div className='w-5 text-center'>
                      <IoWalletSharp size='1.3em' />
                    </div>
                    <div className='w-85'>
                      <p className='ps-3 m-0 fw-bold text-uppercase'>
                        Payments
                      </p>
                    </div>
                    <div className='w-10 text-center'>
                      <IoChevronForwardSharp size='1.3em' />
                    </div>
                  </VerticalNavlink>

                  <VerticalNavlink link='/customer-care' type='single'>
                    <div className='w-5 text-center'>
                      <IoCallSharp size='1.4em' />
                    </div>
                    <div>
                      <p className='ps-3 m-0 fw-bold text-uppercase'>
                        Customer Care
                      </p>
                    </div>
                  </VerticalNavlink>

                  <VerticalNavlink link='/help-center' type='single'>
                    <div className='w-5 text-center'>
                      <IoHelpCircleSharp size='1.5em' />
                    </div>
                    <div>
                      <p className='ps-3 m-0 fw-bold text-uppercase'>
                        Help Center
                      </p>
                    </div>
                  </VerticalNavlink>

                  <VerticalNavlink link='/logout' type='single'>
                    <div className='w-5 text-center'>
                      <IoPowerSharp size='1.3em' />
                    </div>
                    <div>
                      <p className='ps-3 m-0 fw-bold text-uppercase'>Logout</p>
                    </div>
                  </VerticalNavlink>
                </div>
              </div>
            </div>
            <div className='col-9'>{children}</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default UserAccountLayout

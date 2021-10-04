import React, { Fragment, ReactNode } from 'react'
import Image from 'next/image'
import {
  IoChatboxEllipsesOutline,
  IoHelpCircleOutline,
  IoHomeOutline,
  IoNotificationsOutline,
  IoReaderOutline,
  IoReorderFourOutline,
  IoSettingsOutline,
  IoTriangleOutline,
  IoWalletOutline
} from 'react-icons/io5'
import Navlink from '../UI/Navlink'
import { Desktop, Mobile } from '../../helpers/Responsive'
import NavDropdown from '../UI/NavDropdown'

const AdminDashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <main>
        <Desktop>
          <div
            className='d-flex flex-column flex-shrink-0 bg-light'
            style={{ width: '280px' }}
          >
            <nav className='navbar navbar-expand-lg navbar-light bg-white border-bottom'>
              <div className='container-fluid justify-content-start'>
                <a className='navbar-brand me-3' href='#'>
                  <IoReorderFourOutline size='1.4em' className='icon' />
                </a>
                <a className='navbar-brand' href='#'>
                  ARTSIAN
                </a>
              </div>
            </nav>
            <ul className='nav nav-pills flex-column mb-auto border-end'>
              <li className='nav-item border-bottom m-0'>
                <Navlink link='/admin' className='nav-link hover-orange py-3'>
                  <IoHomeOutline size='1.4em' className='icon me-2' />
                  <span className='side-nav-text'>Dashboard</span>
                </Navlink>
              </li>
              <li className='nav-item border-bottom m-0'>
                <NavDropdown linkName='listings'>
                  <NavDropdown.Main
                    linkName='listings'
                    className='nav-link hover-orange py-3 '
                  >
                    <IoTriangleOutline size='1.4em' className='icon me-2' />
                    <span className='side-nav-text'>Listings</span>
                  </NavDropdown.Main>
                  <NavDropdown.Sub>
                    <Navlink
                      link='/seller/listings/add'
                      className='nav-link hover-orange'
                      style={{ paddingLeft: '2.9rem' }}
                    >
                      <span className='side-nav-text'> Add New</span>
                    </Navlink>
                    <Navlink
                      link='/admin/listings'
                      className='nav-link hover-orange'
                      style={{ paddingLeft: '2.9rem' }}
                    >
                      <span className='side-nav-text'>All Listings</span>
                    </Navlink>
                    <Navlink
                      link='/seller/listings/groups'
                      className='nav-link hover-orange'
                      style={{ paddingLeft: '2.9rem' }}
                    >
                      <span className='side-nav-text'>Groups</span>
                    </Navlink>
                  </NavDropdown.Sub>
                </NavDropdown>
              </li>
              <li className='nav-item border-bottom m-0'>
                <Navlink
                  link='/admin/users'
                  className='nav-link hover-orange py-3'
                  linkName='users'
                >
                  <IoChatboxEllipsesOutline
                    size='1.5em'
                    className='icon me-2 '
                    style={{ verticalAlign: '-0.45em' }}
                  />
                  <span className='side-nav-text'>Users</span>
                </Navlink>
              </li>
              <li className='nav-item border-bottom m-0'>
                <Navlink
                  link='/seller/orders'
                  className='nav-link hover-orange py-3'
                >
                  <IoReaderOutline size='1.5em' className='icon me-2' />
                  <span className='side-nav-text'>Orders</span>
                </Navlink>
              </li>
              <li className='nav-item border-bottom m-0'>
                <Navlink
                  link='/seller/payments'
                  className='nav-link hover-orange py-3'
                >
                  <IoWalletOutline size='1.5em' className='icon me-2' />
                  <span className='side-nav-text'>Payments</span>
                </Navlink>
              </li>
              <li className='nav-item border-bottom m-0'>
                <Navlink link='' className='nav-link hover-orange py-3'>
                  <IoHelpCircleOutline size='1.5em' className='icon me-2' />
                  <span className='side-nav-text'>Help Center</span>
                </Navlink>
              </li>
              <li className='nav-item border-bottom m-0'>
                <Navlink link='' className='nav-link hover-orange py-3'>
                  <IoSettingsOutline size='1.5em' className='icon me-2' />
                  <span className='side-nav-text'>Settings</span>
                </Navlink>
              </li>
            </ul>
          </div>
        </Desktop>
        <div className='flex-grow-1'>
          <nav className='navbar navbar-expand navbar-light bg-white border-bottom'>
            <div className='container-fluid'>
              <ul className='navbar-nav w-100 justify-content-end'>
                <li className='nav-item me-2'>
                  <IoHelpCircleOutline size='1.8em' className='me-3' />
                </li>
                <li className='nav-item me-2'>
                  <IoNotificationsOutline size='1.8em' className='me-3' />
                </li>
              </ul>
              <div className='rounded-circle overflow-hidden bg-l-gray d-flex mw-fit p-0 me-3'>
                <Image
                  src={process.env.STATIC_URL + '1.jpg'}
                  alt='Picture of the author'
                  width='40px'
                  height='40px'
                  objectFit='cover'
                  priority={true}
                />
              </div>
            </div>
          </nav>
          <Desktop>
            <div
              className='container-fluid h-100'
              style={{ overflowY: 'auto', padding: '1.5rem 2rem 5rem' }}
            >
              {children}
            </div>
          </Desktop>
          <Mobile>
            <div
              className='container-fluid h-100 p-2 bg-white'
              style={{ overflowY: 'auto' }}
            >
              {children}
            </div>
          </Mobile>
        </div>
      </main>
    </Fragment>
  )
}

export default AdminDashboardLayout

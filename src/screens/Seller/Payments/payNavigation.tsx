import React from 'react'
import { Fragment } from 'react'
import MenuLink from '../../../components/UI/Navlink'

const PayNavigation = () => {
  return (
    <Fragment>
      <div className='d-inline-flex bg-white rounded-6 p-2 '>
        <div className='me-2'>
          <MenuLink
            link='/seller/payments'
            className='nav-link hover-orange border rounded-6'
          >
            Transactions
          </MenuLink>
        </div>
        <div>
          <MenuLink
            link='/seller/payments-settings'
            className='nav-link hover-orange border rounded-6'
          >
            Payment Settings
          </MenuLink>
        </div>
      </div>
    </Fragment>
  )
}

export default PayNavigation

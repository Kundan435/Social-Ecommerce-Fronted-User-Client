import { useRouter } from 'next/router'
import React from 'react'
import { Fragment } from 'react'
import UserAccountLayout from '../../src/components/Layout/UserAccountLayout'
import OrderDetails from '../../src/screens/User/Orders/OrderDetails'
import SingleOrderDetails from '../../src/screens/User/Orders/SingleOrder'

const OrderId = () => {
  const router = useRouter()

  return (
    <Fragment>
      <UserAccountLayout>
        <div className='bg-white rounded-3 box-shadow-2 p-4 h-100'>
          {router.query.item ? (
            <SingleOrderDetails router={router} />
          ) : router.query.id ? (
            <OrderDetails router={router} />
          ) : (
            'Loading Main'
          )}
        </div>
      </UserAccountLayout>
    </Fragment>
  )
}

export default OrderId

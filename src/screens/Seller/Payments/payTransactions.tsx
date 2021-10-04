import React from 'react'
import { Fragment } from 'react'
import SellerDashboardLayout from '../../../components/Layout/SellerDashboard'
import PayNavigation from './payNavigation'

const PaymentTransactions = () => {
  return (
    <Fragment>
      <SellerDashboardLayout>
        <h3>Payments</h3>
        <PayNavigation />
        <div className='row row-cols-4 bg-white py-3 my-3 mx-0 rounded-6'>
          <div className='col border-end ps-4'>
            <p>Current Balance</p>
            <p className='fs-1 fw-bolder'>$6,446.00</p>
          </div>
          <div className='col ps-4'>
            <p>Total Revenue</p>
            <p className='fs-1 fw-bolder'>$16,446.00</p>
          </div>
        </div>
        <div className=' bg-white rounded-6 fs-4 p-4'>
          <h4>Your Transactions </h4>
          <table className='table table-bordered'>
            <thead className='bg-warning'>
              <tr>
                <th scope='col'>Date</th>
                <th scope='col'>Transaction Id</th>
                <th scope='col'>Amount</th>
                <th scope='col'>Fee & tax</th>
                <th scope='col'>Deposit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>07 Jan 2021</td>
                <td>43543-33-1334-46</td>
                <td>$ 1000</td>
                <td>$20</td>
                <td>$980</td>
              </tr>
              <tr>
                <td>07 Jan 2021</td>
                <td>43543-33-1334-46</td>
                <td>$ 1000</td>
                <td>$20</td>
                <td>$980</td>
              </tr>
              <tr>
                <td>07 Jan 2021</td>
                <td>43543-33-1334-46</td>
                <td>$ 1000</td>
                <td>$20</td>
                <td>$980</td>
              </tr>
              <tr>
                <td>07 Jan 2021</td>
                <td>43543-33-1334-46</td>
                <td>$ 1000</td>
                <td>$20</td>
                <td>$980</td>
              </tr>
              <tr>
                <td>07 Jan 2021</td>
                <td>43543-33-1334-46</td>
                <td>$ 1000</td>
                <td>$20</td>
                <td>$980</td>
              </tr>
              <tr>
                <td>07 Jan 2021</td>
                <td>43543-33-1334-46</td>
                <td>$ 1000</td>
                <td>$20</td>
                <td>$980</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SellerDashboardLayout>
    </Fragment>
  )
}

export default PaymentTransactions

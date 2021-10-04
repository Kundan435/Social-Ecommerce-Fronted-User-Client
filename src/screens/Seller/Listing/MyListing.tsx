import React, { Fragment } from 'react'
import Image from 'next/image'
import { IoEllipsisVerticalSharp, IoImageOutline } from 'react-icons/io5'
import Router from 'next/router'
import SellerDashboardLayout from '../../../components/Layout/SellerDashboard'

const MyListing = () => {
  const handleRoute = (id: string) => {
    Router.push(`/seller/listings/${id}`)
  }

  return (
    <Fragment>
      <SellerDashboardLayout>
        <h3>My Listings</h3>
        <div className='bg-white p-4 min-h-100 rounded-6'>
          <div>
            <table className='table table-bordered table-hover'>
              <thead className='bg-warning'>
                <tr className='text-center'>
                  <th scope='col' className='w-5'>
                    <IoImageOutline size='1.5em' />
                  </th>
                  <th scope='col' className='text-start'>
                    Product Information
                  </th>

                  <th scope='col' className='w-15'>
                    SKU
                  </th>
                  <th scope='col' className='w-10'>
                    Category
                  </th>
                  <th scope='col' className='w-10'>
                    Stock
                  </th>
                  <th scope='col' className='w-10'>
                    Price
                  </th>
                  <th scope='col' className='w-10'>
                    Status
                  </th>
                  <th scope='col' className='w-5'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(20)].map((el, i) => (
                  <tr
                    key={i}
                    className='text-center align-middle cursor-pointer'
                    onClick={() => handleRoute('id')}
                  >
                    <td>
                      <div className='overflow-hidden bg-l-gray d-flex'>
                        <Image
                          src={process.env.STATIC_URL + '1.jpg'}
                          alt='Picture of the author'
                          width='75px'
                          height='75px'
                          objectFit='cover'
                          priority={true}
                        />
                      </div>
                    </td>
                    <td className='text-start'>
                      <p className='fw-bold'>Name of the Prodct</p>
                    </td>
                    <td>DSF465B-SGF4Z3-G4Z4FG3</td>
                    <td>Painting</td>
                    <td>1</td>
                    <td>$109.00</td>
                    <td>
                      <p className='text-success fw-bold'>Published</p>
                      <p className='fs-8'>20/08/21 at 20:08 am</p>
                    </td>
                    <td>
                      <IoEllipsisVerticalSharp size='1.7em' />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SellerDashboardLayout>
    </Fragment>
  )
}

export default MyListing

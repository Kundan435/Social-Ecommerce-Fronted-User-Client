import React, { Fragment } from 'react'
import { IoEllipsisVerticalSharp, IoImageOutline } from 'react-icons/io5'
import AdminDashboardLayout from '../../../components/Layout/AdminDashboard'
import Image from 'next/image'
import useSWR from 'swr'
import Error from 'next/error'
import Link from 'next/link'

const AdminProductList = () => {
  const { data, error } = useSWR('/admin/product/get')

  if (error) return <Error statusCode={error.response.status} />

  if (!data) return <Fragment>Loading</Fragment>

  return (
    <Fragment>
      <AdminDashboardLayout>
        <div className='min-h-100'>
          <div className='d-flex  justify-content-between mb-4'>
            <div className='rounded-pill p-3 bg-white'>
              <Link href='/admin/listings/add' passHref>
                <a className='fw-bold px-3 py-2  rounded-pill'>Add New</a>
              </Link>
            </div>
            <div className='rounded-pill p-3 bg-white'>
              <a className='fw-bold px-3 py-2  rounded-pill'>Sort</a>
            </div>
          </div>
          <div className='bg-white p-4 rounded-6'>
            <h3>My Listings</h3>

            <table className='table table-bordered table-hover'>
              <thead className='bg-warning'>
                <tr className='text-center'>
                  <th scope='col' className='w-5'>
                    <IoImageOutline size='1.5em' />
                  </th>
                  <th scope='col' className='text-start'>
                    Product Information
                  </th>
                  <th scope='col'> Seller</th>
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
                {data.map((el, i) => (
                  <tr
                    key={i}
                    className='text-center align-middle cursor-pointer'
                    // onClick={() => handleRoute('id')}
                  >
                    <td>
                      <div className='overflow-hidden bg-l-gray d-flex'>
                        <Image
                          src={process.env.STATIC_URL + el.images.filename}
                          alt={el.title}
                          width='75px'
                          height='75px'
                          objectFit='cover'
                          priority={true}
                        />
                      </div>
                    </td>
                    <td className='text-start'>
                      <p className='fw-bold'>{el.title}</p>
                    </td>
                    <td>{el.seller.username}</td>
                    <td>{el.sku}</td>
                    <td>{el.category.name}</td>
                    <td>{el.stockQty}</td>
                    <td>{el.price}</td>
                    <td>
                      <p className='text-success fw-bold'>{el.status}</p>
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
      </AdminDashboardLayout>
    </Fragment>
  )
}

export default AdminProductList

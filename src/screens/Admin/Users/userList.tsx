import React, { Fragment } from 'react'
import { IoEllipsisVerticalSharp, IoImageOutline } from 'react-icons/io5'
import Image from 'next/image'
import Error from 'next/error'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import AdminDashboardLayout from '../../../components/Layout/AdminDashboard'
import styled from 'styled-components'

const AdminUserList = () => {
  const { data, error } = useSWR('/admin/users')

  const router = useRouter()

  if (error) return <Error statusCode={error.response.status} />

  const handleRoute = (id: string) => {
    router.push({
      pathname: '/admin/users/[id]',
      query: {
        id: id
      }
    })
  }
  return (
    <Fragment>
      <AdminDashboardLayout>
        <h3>Users</h3>
        {!data ? (
          'Loading'
        ) : (
          <div className='bg-white p-4 rounded-6'>
            {/* {JSON.stringify(data)} */}
            <table className='table table-bordered table-hover'>
              <thead>
                <tr className='text-center'>
                  <th style={{ width: '75px' }}>
                    <IoImageOutline size='1.5em' />
                  </th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th style={{ width: '200px' }}>Joining</th>
                  <th style={{ width: '150px' }}>Status</th>
                  <th style={{ width: '100px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* // Update This Props Interface---------------------------------- */}

                {data.map((el: any, i: number) => (
                  <tr
                    key={i}
                    className='text-center align-middle cursor-pointer'
                    onClick={() => handleRoute(el._id)}
                  >
                    <td>
                      <div className='position-relative'>
                        {data.online && <OnlineBadge />}
                        <div className='overflow-hidden bg-l-gray d-flex rounded-6'>
                          <Image
                            src={process.env.STATIC_URL + el.avatar}
                            alt={el.name}
                            width='75px'
                            height='75px'
                            objectFit='cover'
                            loading='lazy'
                          />
                        </div>
                      </div>
                    </td>

                    <td>{el.name}</td>

                    <td>{el.email}</td>
                    <td>{el.role}</td>
                    <td>{el.createdAt}</td>
                    <td>{el.status}</td>
                    <td>
                      <IoEllipsisVerticalSharp size='1.7em' />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </AdminDashboardLayout>
    </Fragment>
  )
}

const OnlineBadge = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  position: absolute;
  background: #4bbf73;
  top: -3px;
  right: -3px;
  z-index: 1;
`

export default AdminUserList

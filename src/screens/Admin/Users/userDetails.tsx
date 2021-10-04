/* eslint-disable no-console */
import axios from 'axios'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import React, { Fragment, useState } from 'react'
import Error from 'next/error'
import useSWR from 'swr'
import Image from 'next/image'
import AdminDashboardLayout from '../../../components/Layout/AdminDashboard'
import FormControl from '../../../components/UI/FormControl'

const AdminUserDetails = () => {
  const [edit, setEdit] = useState(false)

  const router = useRouter()
  const { data, error } = useSWR(
    router.query ? `/admin/user/${router.query.id}` : null
  )

  if (error) return <Error statusCode={error.status} />
  if (!data) return <Fragment>Loading</Fragment>

  const options = [
    { value: '', key: 'Not Selected' },
    { value: 'male', key: 'Male' },
    { value: 'female', key: 'Female' },
    { value: 'not_disclosed', key: 'Prefer not to say' }
  ]
  const roleOptions = [
    { value: 'user', key: 'User' },
    { value: 'seller', key: 'Seller' },
    { value: 'admin', key: 'Admin' }
  ]
  const accountStatusOptions = [
    { value: '', key: 'Not Selected' },
    { value: 'pending', key: 'Pending' },
    { value: 'active', key: 'Active' },
    { value: 'inactive', key: 'Inactive' },
    { value: 'blocked', key: 'Blocked' }
  ]
  const optionsCountry = [
    { value: '', key: 'Not Selected' },
    { value: 'IN', key: 'India' },
    { value: 'USA', key: 'United States' },
    { value: 'UK', key: 'United Kingdom' }
  ]

  const optionSellerType = [
    { value: '', key: 'Not Selected' },
    { value: 'artist', key: 'Artist' },
    { value: 'dealer', key: 'Dealer' }
  ]

  return (
    <Fragment>
      <AdminDashboardLayout>
        <Fragment>
          {JSON.stringify(data.seller)}
          <Formik
            initialValues={{
              name: data.user.name,
              email: data.user.email,
              contactNumber: data.user.contactNumber || '',
              gender: data.user.gender || '',
              avatar: data.user.avatar,
              country: data.user.country || '',
              role: data.user.role,
              status: data.user.status
            }}
            onSubmit={async (values, actions) => {
              await new Promise((r) => setTimeout(r, 500))
              alert(JSON.stringify(values, null, 2))
              await axios
                .patch(`/admin/user/${data.user._id}`, values, {
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  withCredentials: true
                })
                .then((res) => {
                  if (res.status !== 200) {
                    console.error('Failed to update', res)
                  }
                  console.log(res.data)
                  actions.setSubmitting(false)
                })
                .catch((error) => {
                  actions.setSubmitting(false)
                  console.error(' error', error.message)
                })
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <div className='mb-4  bg-white p-4 rounded-6'>
                  <h3 className='mb-4'>Personal Information</h3>
                  <div className='row row-cols-2 mb-4 mx-0'>
                    <div className='col-2'>
                      <p className='fw-bold'>Image</p>
                    </div>
                    <div className='rounded-3 overflow-hidden bg-l-gray d-flex mw-fit p-0'>
                      <Image
                        src={process.env.STATIC_URL + data.user.avatar}
                        alt={data.user.name}
                        width='150px'
                        height='150px'
                        objectFit='cover'
                        priority={true}
                      />
                    </div>
                  </div>
                  <FormControl
                    control='input'
                    type='text'
                    label='Full Name'
                    placeholder='John Doe'
                    name='name'
                    layout='side'
                    disabled={edit}
                  />

                  <FormControl
                    control='input'
                    type='email'
                    label='Email Address'
                    placeholder='john@example.com'
                    name='email'
                    layout='side'
                    disabled={edit}
                  />

                  <FormControl
                    control='input'
                    type='number'
                    label='Mobile Number'
                    placeholder='+91 0123456789'
                    name='contactNumber'
                    layout='side'
                    disabled={edit}
                  />

                  <FormControl
                    control='radio'
                    label='Gender'
                    name='gender'
                    options={options}
                    layout='side'
                    disabled={edit}
                  />

                  <FormControl
                    control='select'
                    label='Role'
                    name='role'
                    options={roleOptions}
                    layout='side'
                    disabled={edit}
                  />
                  <FormControl
                    control='select'
                    label='Account Satatus'
                    name='status'
                    options={accountStatusOptions}
                    layout='side'
                    disabled={edit}
                  />
                  <div className='text-end'>
                    <button
                      type='submit'
                      className='btn btn-primary w-15em rounded-3 '
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
          {(data.seller || data.user.role === 'seller') && (
            <Formik
              initialValues={{
                sellerType: data.seller ? data.seller.sellerType : '',
                address: data.seller ? data.seller.billingAddress.address : '',
                country: data.seller ? data.seller.billingAddress.country : '',
                state: data.seller ? data.seller.billingAddress.state : '',
                city: data.seller ? data.seller.billingAddress.city : '',
                pincode: data.seller ? data.seller.billingAddress.pincode : ''
              }}
              onSubmit={async (values, actions) => {
                await new Promise((r) => setTimeout(r, 500))
                alert(JSON.stringify(values, null, 2))
                await axios
                  .patch(`/admin/seller/${data.user._id}`, values, {
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    withCredentials: true
                  })
                  .then((res) => {
                    if (res.status !== 200) {
                      console.error('Failed to update', res)
                    }
                    console.log(res.data)
                    actions.setSubmitting(false)
                  })
                  .catch((error) => {
                    actions.setSubmitting(false)
                    console.error(' error', error.message)
                  })
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <div className='mb-4 bg-white p-4 rounded-6'>
                    <h4 className='mb-4'>Seller Information</h4>
                    <div className='row row-cols-2 mb-4'>
                      <div className='col-2 fw-bold fs-6'>
                        <p>Artworks</p>
                      </div>
                      <div>
                        <p>{data.seller ? data.seller.totalArtworks : '-'}</p>
                      </div>
                    </div>
                    <div className='row row-cols-2 mb-4'>
                      <div className='col-2 fw-bold fs-6'>
                        <p> Followers</p>
                      </div>
                      <div>
                        <p>{data.seller ? data.seller.totalFollowers : '-'}</p>
                      </div>
                    </div>

                    <div className='row row-cols-2 mb-4'>
                      <div className='col-2 fw-bold fs-6'>
                        <p>Total Sales</p>
                      </div>
                      <div>
                        <p>{data.seller ? data.seller.totalSales : '-'}</p>
                      </div>
                    </div>
                    <div className='row row-cols-2 mb-4'>
                      <div className='col-2 fw-bold fs-6'>
                        <p> Rating</p>
                      </div>
                      <div>
                        <p>{data.seller ? data.seller.rating : '-'}</p>
                      </div>
                    </div>
                    <FormControl
                      control='select'
                      label='Seller Type'
                      name='sellerType'
                      layout='side'
                      options={optionSellerType}
                      disabled={edit}
                    />
                  </div>
                  <div className='mb-4 bg-white p-4 rounded-6'>
                    <h4 className='mb-4'>Billing Address</h4>

                    <FormControl
                      control='textarea'
                      label='Address'
                      name='address'
                      layout='side'
                      disabled={edit}
                    />

                    <FormControl
                      control='select'
                      label='Country'
                      name='country'
                      layout='side'
                      options={optionsCountry}
                      disabled={edit}
                    />

                    <FormControl
                      control='input'
                      type='text'
                      label='State'
                      name='state'
                      placeholder='State'
                      layout='side'
                      disabled={edit}
                    />

                    <FormControl
                      control='input'
                      type='text'
                      label='City'
                      name='city'
                      placeholder='City'
                      layout='side'
                      disabled={edit}
                    />

                    <FormControl
                      control='input'
                      type='text'
                      label='Pincode'
                      name='pincode'
                      placeholder='Pincode'
                      layout='side'
                      disabled={edit}
                    />

                    <div className='mb-4 text-end'>
                      <button
                        type='submit'
                        className='btn btn-primary w-15em rounded-3'
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          )}
        </Fragment>
      </AdminDashboardLayout>
    </Fragment>
  )
}

export default AdminUserDetails

/* eslint-disable no-console */
import React, { Fragment } from 'react'
import Image from 'next/image'
import useSWR from 'swr'
import { Formik } from 'formik'
import axios from 'axios'
import UserAccountLayout from '../../../components/Layout/UserAccountLayout'
import FormControl from '../../../components/UI/FormControl'
import withAuth from '../../../hocs/withAuth'

const ProfileInfo = () => {
  const options = [
    { value: 'male', key: 'Male' },
    { value: 'female', key: 'Female' },
    { value: 'not_disclosed', key: 'Prefer not to say' }
  ]
  const { data, error } = useSWR('/profile')
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const { response: user } = data

  // console.log(user)

  return (
    <Fragment>
      <UserAccountLayout>
        <div className='bg-white rounded-3 box-shadow-2 p-4 h-100'>
          <Formik
            initialValues={{
              name: user.name,
              email: user.email,
              contactNumber: user.contactNumber || '',
              gender: user.gender || ''
            }}
            onSubmit={async (values, actions) => {
              await new Promise((r) => setTimeout(r, 500))
              alert(JSON.stringify(values, null, 2))
              await axios
                .patch(`/profile/edit`, values, {
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
                <div className='mb-4'>
                  <h3 className='mb-4'>Personal Information</h3>
                  <div className='row'>
                    <div className='col-2'>
                      <label className='fw-bold'>Profile Picture</label>
                    </div>
                    <div className='col-sm-10'>
                      <div className='d-flex mb-4'>
                        <div className='rounded-3 overflow-hidden bg-l-gray d-flex mw-fit p-0'>
                          <Image
                            src={process.env.STATIC_URL + '1.jpg'}
                            alt={data.name}
                            width='150px'
                            height='150px'
                            objectFit='cover'
                            priority={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <FormControl
                    control='input'
                    type='text'
                    label='Full Name'
                    placeholder='John Doe'
                    name='name'
                    layout='side'
                  />

                  <FormControl
                    control='input'
                    type='email'
                    label='Email Address'
                    placeholder='john@example.com'
                    name='email'
                    layout='side'
                  />

                  <FormControl
                    control='input'
                    type='number'
                    label='Mobile Number'
                    placeholder='+91 0123456789'
                    name='contactNumber'
                    layout='side'
                  />

                  <FormControl
                    control='radio'
                    label='Gender'
                    name='gender'
                    options={options}
                    layout='side'
                  />
                  <div className='row my-4 align-items-center'>
                    <div className='col-sm-2 '>
                      <label className='fw-bold'>Passowrd</label>
                    </div>
                    <div className='col-sm-10'>
                      <button
                        type='button'
                        className='btn btn-secondary rounded-3 w-15em'
                      >
                        Change Password
                      </button>
                    </div>
                  </div>
                </div>
                <div className='row justify-content-end'>
                  <div className='col-sm-10'>
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
        </div>
      </UserAccountLayout>
    </Fragment>
  )
}

export default withAuth(ProfileInfo)

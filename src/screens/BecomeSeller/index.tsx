import axios from 'axios'
import { Formik } from 'formik'
import React, { Fragment, useState } from 'react'
import FormControl from '../../components/UI/FormControl'
import { CircleBorder } from '../../styledCSS'

// interface BecomeSeller {
//   firstName: string
//   lastName: string
//   username: string
//   email: string
//   sellerType: string
//   country: string
//   city: string
//   state: string
//   addressDetails: string
//   pincode: string
// }

const BecomeSellerScreen = () => {
  const [error, setError] = useState({})

  // const genderOptions = [
  //   { value: 'male', key: 'Male' },
  //   { value: 'female', key: 'Female' },
  //   { value: 'not_disclosed', key: 'Prefer not to say' }
  // ]

  const sellerOptions = [
    { value: 'artist', key: 'Artist' },
    { value: 'dealer', key: 'Dealer' }
  ]

  // const countryOptions = [
  //   { value: 'IND', key: 'India' },
  //   { value: 'USA', key: 'United States' },
  //   { value: 'UK', key: 'United Kingdom' }
  // ]

  return (
    <Fragment>
      <div className='bg-light min-vh-100 d-flex'>
        <div className='container my-5' style={{ maxWidth: '900px' }}>
          {/* <button type='button' onClick={() => router.back()}>
            Back
          </button> */}
          <div className=' p-4 bg-white mb-4 rounded-7'>
            <div className='d-flex align-items-center mb-3'>
              <CircleBorder>1</CircleBorder>
              <h4 className='m-0'>Profile Information</h4>
            </div>
            <Formik
              initialValues={{
                // firstName: '',
                // lastName: '',
                // username: '',
                // email: '',
                sellerType: '',
                country: '',
                city: '',
                state: '',
                addressDetails: '',
                pincode: ''
              }}
              onSubmit={async (values, actions) => {
                try {
                  await axios.post('/register-seller', values)
                } catch (error: any) {
                  // Update This Props Interface----------------------------------

                  setError(error.response.data.error.message)
                }
                actions.setSubmitting(false)
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  {/* <div className='d-flex'>
                    <div className='col me-2'>
                      <FormControl
                        control='input'
                        type='text'
                        label='First Name'
                        placeholder='John'
                        name='firstName'
                      />
                    </div>
                    <div className='col ms-2'>
                      <FormControl
                        control='input'
                        type='text'
                        label='Last Name'
                        placeholder=' Doe'
                        name='lastName'
                      />
                    </div>
                  </div>
                  <FormControl
                    control='input'
                    type='text'
                    label='Username'
                    placeholder='jhondoe123'
                    name='username'
                  />

                  <FormControl
                    control='input'
                    type='eamil'
                    label='Email'
                    placeholder='jhondoe123@example.com'
                    name='email'
                  />
                  <FormControl
                    control='input'
                    type='text'
                    label='Mobile Number'
                    placeholder='123456789'
                    name='mobileNumber'
                  /> */}

                  <FormControl
                    control='radio'
                    label='Who are you ?'
                    name='sellerType'
                    options={sellerOptions}
                  />

                  <FormControl
                    control='textarea'
                    label='Address'
                    placeholder='Address'
                    name='addressDetails'
                  />
                  <div className='row'>
                    <div className='col'>
                      <FormControl
                        control='input'
                        type='text'
                        label='Country'
                        placeholder='Country'
                        name='country'
                      />
                    </div>
                    <div className='col'>
                      <FormControl
                        control='input'
                        type='text'
                        label='State'
                        placeholder='State'
                        name='state'
                      />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      <FormControl
                        control='input'
                        type='text'
                        label='City'
                        placeholder='City'
                        name='city'
                      />
                    </div>
                    <div className='col'>
                      <FormControl
                        control='input'
                        type='text'
                        label='Pincode'
                        placeholder='Pincode'
                        name='pincode'
                      />
                    </div>
                  </div>
                  <div className='col text-end '>
                    <button
                      type='submit'
                      disabled={props.isSubmitting}
                      className='btn rounded-5 fs-5 px-5 btn-info '
                    >
                      Continue
                    </button>
                  </div>
                  {JSON.stringify(error)}
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default BecomeSellerScreen

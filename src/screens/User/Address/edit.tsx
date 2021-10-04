/* eslint-disable no-console */
import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Fragment } from 'react'
import { mutate } from 'swr'
import FormControl from '../../../components/UI/FormControl'
import Modal from '../../../components/UI/Modal'
// Update This Props Interface----------------------------------

const EditAddress = (props: any) => {
  const { data, address, defaultAddress, control, btnClass } = props
  const addressTypeOptions = [
    { value: 'home', key: 'Home' },
    { value: 'work', key: 'Work' }
  ]

  console.log('defaultAddress', defaultAddress)

  const [show, setShow] = useState(false)
  return (
    <Fragment>
      <Formik
        initialValues={{
          id: address._id,
          name: address.name,
          mobileNumber: address.mobileNumber,
          country: address.country,
          city: address.city,
          state: address.state,
          addressDetails: address.addressDetails,
          pincode: address.pincode,
          addressType: address.addressType,
          isDefault: defaultAddress
        }}
        onSubmit={async (values, actions) => {
          axios
            .patch('/address', values)
            .then((res) => {
              mutate(
                '/address',
                {
                  ...data,
                  address: res.data.address,
                  defaultAddress: res.data.defaultAddress
                },
                false
              )
            })
            .catch((error) => {
              console.log(error)
            })
          actions.setSubmitting(false)
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Modal
              name='Edit Address'
              label='Edit'
              size='md'
              btnClass={btnClass}
              control={control}
              show={show}
              setShow={setShow}
            >
              <Modal.Header>Edit Address</Modal.Header>
              <Modal.Body>
                <div className='row'>
                  <div className='col'>
                    <FormControl
                      control='input'
                      type='text'
                      label='Full Name'
                      placeholder='John Doe'
                      name='name'
                    />
                  </div>
                  <div className='col'>
                    <FormControl
                      control='input'
                      type='text'
                      label='Mobile Number'
                      placeholder='+1 0123456789'
                      name='mobileNumber'
                    />
                  </div>
                </div>
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
                      label='Pincode'
                      placeholder='Pincode'
                      name='pincode'
                    />
                  </div>
                </div>
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
                      label='City'
                      placeholder='City'
                      name='city'
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
                      control='radio'
                      label='Address Type'
                      name='addressType'
                      options={addressTypeOptions}
                    />
                  </div>
                  <div className='col mt-4 text-end'>
                    <FormControl
                      control='toggle'
                      label='Default Address'
                      name='isDefault'
                    />
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer closeBtn>
                <button
                  type='submit'
                  className='btn rounded-3 btn-primary btn-lg btn-block'
                >
                  Save Changes
                </button>
              </Modal.Footer>
            </Modal>
          </form>
        )}
      </Formik>
    </Fragment>
  )
}

export default EditAddress

/* eslint-disable no-console */
import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Fragment } from 'react'
import { IoAddSharp } from 'react-icons/io5'
import { mutate } from 'swr'
import FormControl from '../../../components/UI/FormControl'
import Modal from '../../../components/UI/Modal'
// Update This Props Interface----------------------------------

const AddAddress = ({ data }: any) => {
  const [show, setShow] = useState(false)
  const addressTypeOptions = [
    { value: 'home', key: 'Home' },
    { value: 'work', key: 'Work' }
  ]
  return (
    <Fragment>
      <Formik
        initialValues={{
          name: '',
          mobileNumber: '',
          country: '',
          city: '',
          state: '',
          addressDetails: '',
          pincode: '',
          addressType: '',
          isDefault: false
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
              name='Add New Address'
              label='Add New Address'
              size='md'
              btnClass='btn-secondary btn-lg text-start rounded-3'
              btnIcon={<IoAddSharp size='1.7em' className='me-2' />}
              show={show}
              setShow={setShow}
              control='btn'
            >
              <Modal.Header>Add New Address</Modal.Header>
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

export default AddAddress

/* eslint-disable no-console */
import { Field, Formik } from 'formik'
import React, { Fragment } from 'react'
import useSWR from 'swr'
import AddAddress from '../Address/add'
import EditAddress from '../Address/edit'
// Update This Props Interface----------------------------------

const CheckoutShipping = ({ setShipping }: any) => {
  const { data, error } = useSWR('/address')
  console.log(data)
  return (
    <Fragment>
      {error ? (
        error.message
      ) : !data ? (
        'Loading'
      ) : (
        <Fragment>
          <div className='my-4'>
            <AddAddress data={data} />
          </div>
          <Formik
            initialValues={{
              id: data.defaultAddress
            }}
            onSubmit={async (values, actions) => {
              // Update This Props Interface----------------------------------

              const index = data.address.findIndex(
                (i: any) => i._id == values.id
              )
              const address = data.address[index]
              setShipping(address)
              actions.setSubmitting(false)
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <div role='group' aria-labelledby='my-radio-group'>
                  {/* // Update This Props Interface---------------------------------- */}

                  {data.address.map((el: any, i: number) => (
                    <label
                      key={i}
                      className={`d-flex border rounded-3 mb-4 align-items-center cursor-pointer ${
                        props.values.id === el._id ? 'border-warning' : ''
                      }`}
                    >
                      <Field
                        className='ms-2'
                        type='radio'
                        name='id'
                        value={el._id}
                      />
                      <div className='row mx-0 w-100 '>
                        <div className='col-10 py-2'>
                          <div className='d-flex text-capitalize'>
                            <span className='fw-bolder me-2'>{el.name}</span>
                            <span className='me-2'>{el.mobileNumber}</span>
                            <span className='border border-primary rounded-5 px-2 '>
                              {el.addressType}
                            </span>
                          </div>
                          <p>
                            {el.addressDetails +
                              ', ' +
                              el.city +
                              ', ' +
                              el.state +
                              ', ' +
                              el.country +
                              ', '}
                            <span className='fw-bold'> {el.pincode} </span>
                          </p>
                        </div>
                        <div className='col-2 d-flex justify-content-end align-items-center'>
                          <EditAddress
                            control='btn'
                            btnClass=' px-3 py-1'
                            data={data}
                            address={el}
                            defaultAddress={
                              i ===
                              data.address.findIndex(
                                // Update This Props Interface----------------------------------

                                (i: any) => i._id == data.defaultAddress
                              )
                                ? true
                                : false
                            }
                          />
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                <div className='text-end'>
                  <button type='submit' className='btn rounded-5 btn-info '>
                    Continue
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </Fragment>
      )}
    </Fragment>
  )
}

export default CheckoutShipping

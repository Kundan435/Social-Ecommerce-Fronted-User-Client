import { Formik } from 'formik'
import React from 'react'
import { Fragment } from 'react'
import { IoAddOutline } from 'react-icons/io5'
import SellerDashboardLayout from '../../../../components/Layout/SellerDashboard'
import FormControl from '../../../../components/UI/FormControl'

const AddListing = () => {
  const whoMadeOptions = [
    { key: 'Myself', value: 'myself' },
    { key: 'Someone Else', value: 'someone_else' }
  ]

  return (
    <Fragment>
      <SellerDashboardLayout>
        <div>
          <Formik
            initialValues={{
              images: '',
              title: '',
              who_made_it: '',
              category: '',
              description: '',
              tags: '',
              price: '',
              quantity: '',
              sku: '',
              item_weight: '',
              item_size: ''
            }}
            onSubmit={async (values, actions) => {
              await new Promise((r) => setTimeout(r, 500))
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <div className='border bg-white rounded-6 p-4 mb-4'>
                  <h3 className='mb-3'>Product Details</h3>
                  <FormControl
                    control='input'
                    type='text'
                    label='Title'
                    name='title'
                    info='Enter the name of your product.'
                  />
                  <div className='row row-cols-sm-2'>
                    <div className='col'>
                      <FormControl
                        control='select'
                        label='Who made it'
                        name='who_made_it'
                        options={whoMadeOptions}
                        info='Select who made this product.'
                      />
                    </div>
                    <div className='col'>
                      <FormControl
                        control='select'
                        label='Category'
                        name='category'
                        info='Select category for this product.'
                      />
                    </div>
                  </div>
                  <FormControl
                    control='textarea'
                    label='Description'
                    name='description'
                    info='Add detailed information for this product.'
                  />
                  <FormControl
                    control='input'
                    type='text'
                    label='Tags'
                    name='tags'
                    info='Tags will make easier for your product to appear on relevant search results'
                  />
                </div>
                <div className='border bg-white rounded-6 p-4 mb-4'>
                  <h3 className='mb-3'>Product Images</h3>
                  <div className='row row-cols-md-2 gy-3 row-cols-1'>
                    <div className='col-sm-3'>
                      <label className='imageHolder'>
                        <IoAddOutline size='2em' />
                        <input
                          type='file'
                          className='d-none'
                          accept='image/png, image/jpeg'
                        />
                      </label>
                    </div>
                    <div className='col-sm-9'>
                      <div className='row gy-3 row-cols-5'>
                        {[...Array(10)].map((el, index) => (
                          <div
                            key={index}
                            className='col'
                            style={{ height: '8vw' }}
                          >
                            <label className='imageHolder'>
                              <IoAddOutline size='2em' />
                              <input
                                type='file'
                                className='d-none'
                                accept='image/png, image/jpeg'
                              />
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='border bg-white rounded-6 p-4'>
                  <h3 className='mb-3'>Inventory & Shipping Details</h3>
                  <FormControl
                    control='input'
                    type='number'
                    label='Quantity'
                    name='quantity'
                    info='How many items you have in stock?'
                  />

                  <FormControl
                    control='input'
                    type='text'
                    label='SKU'
                    name='sku'
                    info='Enter Stock Keeping Unit to identify your product easily'
                  />
                  <FormControl
                    control='input'
                    type='number'
                    label='Item weight'
                    name='item_weight'
                    info='Enter weight of the item'
                  />
                  <FormControl
                    control='input'
                    type='number'
                    label='Item size'
                    name='item_size'
                    info='Enter dimension of this items Length, Width, Height in inches'
                  />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </SellerDashboardLayout>
    </Fragment>
  )
}

export default AddListing

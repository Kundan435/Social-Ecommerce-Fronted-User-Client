/* eslint-disable no-console */
import axios from 'axios'
import React, { Fragment } from 'react'
import useSWR, { mutate } from 'swr'
import UserAccountLayout from '../../../components/Layout/UserAccountLayout'
import ButtonSelect from '../../../components/UI/ButtonSelect'
import AddAddress from './add'
import EditAddress from './edit'

const Address = () => {
  const { data, error } = useSWR('/address')

  if (!data) return <>Loafing</>
  if (error) return <>Error</>

  const { address, defaultAddress } = data
  // Update This Props Interface----------------------------------

  const index = address.findIndex((i: any) => i._id == defaultAddress)
  // Update This Props Interface----------------------------------

  address.sort((a: any) => {
    if (a._id === defaultAddress) return -1
    return 0
  })

  // Update This Props Interface----------------------------------

  const deleteAddress = (id: any) => {
    axios
      .delete('/address', { data: { id } })
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
  }

  console.log(data)

  return (
    <Fragment>
      <UserAccountLayout>
        <div className='bg-white rounded-3 box-shadow-2 p-4 h-100'>
          <h3 className='mb-3'>Manage Addresses</h3>
          <AddAddress data={data} />
          {/* // Update This Props Interface---------------------------------- */}

          {address.map((el: any, i: number) => (
            <div
              key={i}
              className='row border rounded-3 border-primary my-3 py-3 mx-0'
            >
              <div className='col-11'>
                {i == index && (
                  <span className='badge rounded-pill bg-light me-2'>
                    Default
                  </span>
                )}
                {el.addressType === 'work' ? (
                  <span className='badge rounded-pill bg-info text-info me-2'>
                    Work
                  </span>
                ) : el.addressType === 'home' ? (
                  <span className='badge rounded-pill bg-success text-success'>
                    Home
                  </span>
                ) : null}
                <p className='py-2'>
                  <span className='fw-bolder me-2'>{el.name}</span>
                  <span className='me-2'>{el.mobileNumber}</span>
                </p>
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
              <div className='col-1 text-end'>
                <ButtonSelect>
                  <EditAddress
                    control='selectLink'
                    data={data}
                    address={el}
                    defaultAddress={i === index ? true : false}
                  />
                  <a
                    className='list-group-item list-group-item-action py-1 border-bottom'
                    role='menuitem'
                    onClick={() => deleteAddress(el._id)}
                  >
                    Delete
                  </a>
                </ButtonSelect>
              </div>
            </div>
          ))}
        </div>
      </UserAccountLayout>
    </Fragment>
  )
}

export default Address

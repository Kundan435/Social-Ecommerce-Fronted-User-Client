import React, { Fragment } from 'react'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import axios from 'axios'
import Navigation from '../../src/components/Layout/Navigation'
import ProductBox from '../../src/components/Layout/ProductBox'

export async function getStaticProps() {
  const { data } = await axios.get('/admin/product/get')

  return {
    props: {
      products: data
    },
    revalidate: 60
  }
}
// Update This Props Interface----------------------------------
const Artist = ({ products }: any) => {
  return (
    <Fragment>
      <div className='bg-light min-h-100'>
        <Navigation />
        <div
          className='overflow-hidden position-relative'
          style={{ height: '40vh' }}
        >
          <Image
            src={process.env.STATIC_URL + '1.jpg'}
            alt='Picture of the author'
            layout='fill'
            objectFit='cover'
            loading='lazy'
            quality={75}
            objectPosition='top'
          />
        </div>
        <div className='container mw-1400 py-4'>
          <div className='row row-cols-2'>
            <div className='col-6 '>
              <div className='bg-white p-4 rounded-7 h-100'>
                <div className='d-flex'>
                  <div
                    className='d-inline-flex rounded-5 overflow-hidden'
                    style={{ width: '150px' }}
                  >
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='150px'
                      height='150px'
                      objectFit='cover'
                      loading='eager'
                    />
                  </div>
                  <div className='col ms-4 w-100'>
                    <h2 className='m-0 align-middle'>
                      <span className='text-orange'>Kundan Bhosale</span>
                    </h2>
                    <p className=' fs-4'>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </p>
                    <div className='d-flex fs-6 mt-2'>
                      <p className='border-end border-primary pe-3'>
                        <span className='fw-bold '> 19,99 </span> Sales
                      </p>
                      <p className='border-end border-primary px-3'>
                        <span className='fw-bold'> 1000 </span> Artworks
                      </p>
                      <p className='ps-3'>
                        <span className='fw-bold'> 200 </span> Followers
                      </p>
                    </div>
                    <p className=''>
                      <span className='me-2 fw-bold'>Painter</span>
                      <span className='fs-6'>Maharastra&#44;&nbsp;India</span>
                    </p>
                    <div className='d-flex mt-3'>
                      <div className='me-3'>
                        <button
                          type='button'
                          className='btn btn-sm btn-light py-1 rounded-3'
                        >
                          Message
                        </button>
                      </div>
                      <div className='me-3'>
                        <button
                          type='button'
                          className='btn btn-sm btn-light py-1 rounded-3'
                        >
                          Follow
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='btn btn-sm btn-light py-1 rounded-3'
                        >
                          Request Custom Art
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='bg-white p-4 fs-6 rounded-7 h-100'>
                <p>
                  This work is part of a series that the artist produced using
                  text by the British poet James Hope. The works were produced
                  to provide digital images for the album Ode words by James
                  Hope, music by David Harrow. Collaborations can be a tricky
                  thing but in this instance the artist felt an affinity with.
                  Collaborations can be a tricky thing but in this instance the
                  artist felt an affinity with. Collaborations can be a tricky
                  thing but in this instance the artist felt an affinity with.
                  can be a tricky thing but in this instance the artist felt an
                  affinity with
                </p>
                <button
                  type='button'
                  className='btn btn-sm py-1 btn-light rounded-pill mt-3'
                >
                  Read More About Kundan Bhosale
                </button>
              </div>
            </div>
          </div>

          {/* Nav Bar */}

          <div className='d-inline-flex p-2 my-4 bg-white rounded-pill '>
            <a className='fw-bold px-3 py-2 hover-orange rounded-pill'>
              Art Works
            </a>
            <a className='fw-bold px-3 py-2  hover-orange rounded-pill'>
              About
            </a>
            <a className='fw-bold px-3 py-2  hover-orange rounded-pill'>
              Reviews
            </a>
            <a className='fw-bold px-3 py-2  hover-orange rounded-pill'>
              Shop Policies
            </a>
          </div>

          {/* Artworks */}

          <div></div>

          <div className='row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 gy-3'>
            {/* // Update This Props Interface----------------------------------
             */}
            {products.map((product: any) => (
              <div className='col p-3' key={product._id}>
                <ProductBox product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Artist

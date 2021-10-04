import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import {
  AiFillStar,
  AiOutlineSafetyCertificate,
  AiOutlineClockCircle
} from 'react-icons/ai'
import { RiTruckLine } from 'react-icons/ri'

import Carousel from '../src/components/UI/Carousel'
import Link from 'next/link'
import { IoHeartOutline } from 'react-icons/io5'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useBasicInfo } from '../src/providers/BasicInfo'
import Navigation from '../src/components/Layout/Navigation'

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Update This Props Interface----------------------------------

  const { params }: any = context
  const { data } = await axios.get(`artwork/${params.slug}`)

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      product: data.product,
      artistProducts: data.artistProducts,
      similarProducts: data.similarProducts
    } // will be passed to the page component as props
  }
}
// Update This Props Interface----------------------------------

const ProductDetails = ({ product, artistProducts, similarProducts }: any) => {
  const [btn, setBtn] = useState({
    add: false,
    addLoading: false
  })

  const { cartItems, setCartItems } = useBasicInfo()

  const router = useRouter()

  const alt = product.title.replace(/\s+/g, '-').toLowerCase()

  const images = product.images.map(
    (img: { _id: string; filename: string }, i: number) => {
      return { src: img.filename, alt: alt + '-' + i }
    }
  )

  const addToCart = (id: string) => {
    setBtn({ ...btn, addLoading: true })
    axios
      .patch('/cart', { id })
      .then(({ data }) => {
        setCartItems({ ...cartItems, items: data.items })
        router.push('cart')
      })
      .catch((error) => {
        setBtn({ ...btn, addLoading: false })
        // Update This Props Interface----------------------------------

        // eslint-disable-next-line no-console
        console.log(error)
      })
  }

  useEffect(() => {
    if (!cartItems.items || !product || btn.addLoading) return

    // Update This Props Interface----------------------------------

    const index = cartItems.items.findIndex(
      (i: any) => i.product == product._id
    )

    if (index !== -1) return setBtn({ ...btn, add: true })

    return setBtn({ ...btn, add: false })
    // Update This Props Interface----------------------------------

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product, cartItems.items])

  return (
    <Fragment>
      <Navigation />
      <div className='container-fluid mw-1400'>
        <div className='row row-cols-2 p-4'>
          <div className='col-8 '>
            <div className='mb-4' style={{ height: '550px' }}>
              <Carousel thumbnail='side' slides={images} slideCount={1} />
            </div>
            {product.description && (
              <div className='mb-3 pb-3 border-bottom'>
                <h2 className='mb-3'>Description</h2>
                <p className='fs-6'>{product.description}</p>
              </div>
            )}
            <div>
              <h2 className='mb-3'>Reviews on Artist Shop</h2>
              <div className='pb-2 mb-2 border-bottom'>
                <div className='d-flex'>
                  <div className='d-flex justify-content-center bg-l-gray rounded-circle overflow-hidden mw-fit me-2'>
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='40px'
                      height='40px'
                      objectFit='cover'
                      loading='eager'
                    />
                  </div>
                  <div>
                    <p className='fs-6  '>Kundan Bhosale </p>
                    <p className='fs-6'>
                      18 June 2021
                      <span className='lh-1 fs-5 ms-2'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </span>
                    </p>
                  </div>
                </div>
                <div className='d-flex pb-2 mt-3'>
                  <div className='me-4'>
                    <div
                      className='d-inline-flex rounded-5 overflow-hidden bg-l-gray'
                      style={{ width: '100px' }}
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
                  </div>
                  <div>
                    <p className='fs-6'>
                      This coin is beautiful! Its a unique design and looks even
                      better than the picture. Ive bought several coins from
                      Michigan Design Shop and will continue to do so. The
                      quality, speed and especially customer service continue to
                      exceed my expectations. I would definitely recommend this
                      seller! This coin is beautiful! Its a unique design and
                      looks even better than the picture. Ive bought several
                      coins from Michigan Design Shop and will continue to do
                      so. The quality, speed and especially customer service
                      continue to exceed my expectations. I would definitely
                      recommend this seller!
                    </p>
                  </div>
                </div>
              </div>

              <div className='pb-2 mb-2 border-bottom'>
                <div className='d-flex'>
                  <div className='d-flex justify-content-center bg-l-gray rounded-circle overflow-hidden mw-fit me-2'>
                    <Image
                      src={process.env.STATIC_URL + '1.jpg'}
                      alt='Picture of the author'
                      width='40px'
                      height='40px'
                      objectFit='cover'
                      loading='eager'
                    />
                  </div>
                  <div>
                    <p className='fs-6  '>Kundan Bhosale </p>
                    <p className='fs-6'>
                      18 June 2021
                      <span className='lh-1 fs-5 ms-2'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </span>
                    </p>
                  </div>
                </div>
                <div className='d-flex pb-2 mt-3'>
                  <div className='me-4'>
                    <div
                      className='d-inline-flex rounded-5 overflow-hidden bg-l-gray'
                      style={{ width: '100px' }}
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
                  </div>
                  <div>
                    <p className='fs-6'>
                      This coin is beautiful! Its a unique design and looks even
                      better than the picture. Ive bought several coins from
                      Michigan Design Shop and will continue to do so. The
                      quality, speed and especially customer service continue to
                      exceed my expectations. I would definitely recommend this
                      seller! This coin is beautiful! Its a unique design and
                      looks even better than the picture. Ive bought several
                      coins from Michigan Design Shop and will continue to do
                      so. The quality, speed and especially customer service
                      continue to exceed my expectations. I would definitely
                      recommend this seller!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='row row-cols-3 align-items-center g-0 mb-2 pb-2 border-bottom'>
              <div className='col-2 rounded-circle overflow-hidden bg-l-gray d-flex mw-fit p-0'>
                <Image
                  src={process.env.STATIC_URL + '1.jpg'}
                  alt='Picture of the author'
                  width='50px'
                  height='50px'
                  objectFit='cover'
                  loading='eager'
                />
              </div>
              <div className='col-7 ps-2'>
                <p className='lh-1 mb-1'>Kundan Bhosale</p>
                <p className='lh-1 mb-0 fs-6'>
                  19,990 Sales | <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </div>
              <div className='col-3'>
                <button
                  type='button'
                  className='btn px-4 fs-6 py-1 btn-info rounded-pill'
                >
                  Follow
                </button>
              </div>
            </div>
            <h3 className='text-break fw-normal '>{product.title}</h3>
            <h1 className='mb-1'>
              ${product.price}
              <span className='fs-4 fw-normal'>USD</span>
            </h1>
            <div className='row grid-cols-2 mb-2 py-3 border-bottom'>
              <div className='col'>
                <button
                  className='btn text-uppercase btn-lg d-grid btn-dark rounded-3'
                  type='button'
                >
                  Buy Now
                </button>
              </div>
              <div className='col'>
                {!btn.add ? (
                  <button
                    className='btn text-uppercase btn-lg d-grid btn-dark rounded-3'
                    type='button'
                    onClick={() => addToCart(product._id)}
                    disabled={btn.addLoading}
                  >
                    {!btn.addLoading ? (
                      'Add To Cart'
                    ) : (
                      <div className='d-flex justify-content-center'>
                        <span className='spinner-border ' role='status'></span>
                      </div>
                    )}
                  </button>
                ) : (
                  <button
                    className='btn text-uppercase btn-lg d-grid btn-dark rounded-3'
                    type='button'
                    onClick={() => router.push('cart')}
                  >
                    View Cart
                  </button>
                )}
              </div>
            </div>
            <div className='border-bottom'>
              <table className='table table-borderless'>
                <tbody>
                  {!product.mywork && (
                    <tr>
                      <th style={{ width: '10vw' }}>Artist</th>
                      <td>{product.artist}</td>
                    </tr>
                  )}
                  {/* // Update This Props Interface---------------------------------- */}

                  {product.highlights.map((val: any, i: number) => (
                    <tr key={i}>
                      <th style={{ width: '10vw' }}>{val.title}</th>
                      <td>{val.value}</td>
                    </tr>
                  ))}
                  {product.dimensions && (
                    <tr>
                      <th style={{ width: '10vw' }}>Dimensions</th>
                      <td>
                        {product.dimensions.l +
                          ' x ' +
                          product.dimensions.w +
                          ' x ' +
                          product.dimensions.h +
                          ' ' +
                          product.dimensions.unit}
                      </td>
                    </tr>
                  )}
                  {product.weight && (
                    <tr>
                      <th style={{ width: '10vw' }}>Weight</th>
                      <td>
                        {product.weight.value + ' ' + product.weight.unit}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className='row row-cols-4 mx-0 mb-3 py-2 border-bottom '>
              <div className='col p-0 text-center'>
                <a>
                  <div className='d-inline-flex p-1 bg-l-gray rounded-circle  '>
                    <AiOutlineSafetyCertificate size='1.7em' color='#d5a770' />
                  </div>
                  <p className='fs-8 text-break m-0'>
                    Original work with certificate
                  </p>
                </a>
              </div>
              {product.returns && (
                <div className='col p-0 text-center'>
                  <a>
                    <div className='d-inline-flex p-1 bg-l-gray rounded-circle  '>
                      <AiOutlineClockCircle size='1.7em' color='#d5a770' />
                    </div>

                    <p className='fs-8 text-break m-0'>10 Days Returnable </p>
                  </a>
                </div>
              )}

              <div className='col p-0 text-center'>
                <a>
                  <div className='d-inline-flex p-1 bg-l-gray rounded-circle  '>
                    <RiTruckLine size='2.5em' color='#d5a770' />
                  </div>

                  <p className='fs-8 text-break m-0'>
                    {product.deliveryCharge === -1
                      ? 'Dynamic'
                      : product.deliveryCharge === 0
                      ? 'Free Delivery'
                      : 'Flat Rate'}
                  </p>
                </a>
              </div>
            </div>

            <div className='text-center'>
              <button
                type='button'
                className='btn btn-lg text-capitalize border-2 border-dark btn-light rounded-pill mb-2'
              >
                Message Kundan
              </button>
              <p className='fs-6 text-dark '>
                Kundan usually responds in 2 days
              </p>
            </div>
          </div>
        </div>
      </div>
      {artistProducts.length > 0 && (
        <section id='this_shop' className='bg-l-gray py-4'>
          <div className='container mw-1400 my-4'>
            <h2>More from this shop</h2>

            <div className='row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 gy-3 mb-4'>
              {/* // Update This Props Interface---------------------------------- */}

              {artistProducts.map((product: any, i: number) => (
                <div key={i} className='col p-3'>
                  <div className='product_card box-shadow-3 bg-white rounded-5 overflow-hidden position-relative'>
                    <div className='wishlist trans-tf'>
                      <IoHeartOutline size='1.2em' />
                    </div>
                    <Link
                      href={{
                        pathname: `/${product.slug}`
                        // query: { slug: product.slug }
                      }}
                      passHref
                    >
                      <a target='_blank'>
                        <div className='d-flex bg-l-gray overflow-hidden'>
                          <Image
                            src={
                              process.env.STATIC_URL + product.images.filename
                            }
                            alt='Picture of the author'
                            width='340px'
                            height='270px'
                            objectFit='cover'
                            loading='lazy'
                            quality='75'
                          />
                        </div>
                        <div className='my-1 px-2'>
                          <h3 className='fw-normal fs-6 m-0 text-truncate'>
                            {product.title}
                          </h3>
                          <p className='fs-6  text-dark m-0'>
                            {product.artist}
                          </p>
                          <p className='fs-6 fw-bold m-0'>${product.price}</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {similarProducts.length > 0 && (
        <section id='related_products' className=' py-4'>
          <div className='container mw-1400  my-4'>
            <h2>You might Like</h2>

            <div className='row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 gy-3 mb-4'>
              {/* // Update This Props Interface---------------------------------- */}
              {similarProducts.map((product: any, i: number) => (
                <div key={i} className='col p-3'>
                  <div className='product_card box-shadow-3 bg-white rounded-5 overflow-hidden position-relative'>
                    <div className='wishlist trans-tf'>
                      <IoHeartOutline size='1.2em' />
                    </div>
                    <Link
                      href={{
                        pathname: `/${product.slug}`
                        // query: { slug: product.slug }
                      }}
                      passHref
                    >
                      <a>
                        <div className='d-flex bg-l-gray overflow-hidden'>
                          <Image
                            src={
                              process.env.STATIC_URL + product.images.filename
                            }
                            alt='Picture of the author'
                            width='340px'
                            height='270px'
                            objectFit='cover'
                            loading='lazy'
                            quality='75'
                          />
                        </div>
                        <div className='my-1 px-2'>
                          <h3 className='fw-normal fs-6 m-0 text-truncate'>
                            {product.title}
                          </h3>
                          <p className='fs-6  text-dark m-0'>
                            {product.artist}
                          </p>
                          <p className='fs-6 fw-bold m-0'>${product.price}</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Fragment>
  )
}

export default ProductDetails

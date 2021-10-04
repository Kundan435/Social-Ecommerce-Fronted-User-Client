import React, { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Wishlist from '../utils/wishlist'

// Update This Props Interface----------------------------------

const Product = ({ product }: any) => {
  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <Fragment>
      <div className='product_card box-shadow-3 bg-white rounded-5 overflow-hidden position-relative'>
        <Wishlist id={product._id} />
        <Link
          href={{
            pathname: `/${product.slug}`,
            query: { slug: product.slug }
          }}
          passHref
        >
          <a>
            <div className='d-flex bg-l-gray overflow-hidden'>
              {/* {url} */}
              <Image
                src={process.env.STATIC_URL + product.images.filename}
                alt='Picture of the author'
                width='340px'
                height='270px'
                objectFit='cover'
                loading='lazy'
                loader={myLoader}
              />
            </div>
            <div className='my-1 px-2'>
              <h3 className='fw-normal fs-6 m-0 text-truncate'>
                {product.title}
              </h3>
              <p className='fs-6  text-dark m-0'>{product.artist}</p>
              <p className='fs-6 fw-bold m-0'>${product.price}</p>
            </div>
          </a>
        </Link>
      </div>
    </Fragment>
    // <Card className='my-3 p-3 rounded'>
    //   {/* <Link href={`http://localhost:3000/product/${product._id}`}> */}
    //   <Card.Img
    //     src={`http://localhost:4000/uploads/${product.thumbnail.filename}`}
    //     variant='top'
    //   />
    //   {/* </Link> */}
    //   <Card.Body>
    //     {/* <Link href={`http://localhost:3000/product/${product._id}`}> */}
    //     <Card.Title as='div'>
    //       <strong>{product.name}</strong>
    //     </Card.Title>
    //     {/* </Link> */}
    //     <Card.Text as='p'>By {product.artist}</Card.Text>
    //     <Card.Text as='strong'>
    //       ${product.price} <HiBadgeCheck color='blue' size='20px' />
    //     </Card.Text>
    //   </Card.Body>
    // </Card>
  )
}

export default Product

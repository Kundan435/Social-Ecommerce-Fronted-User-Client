import React from 'react'
import Navigation from '../src/components/Layout/Navigation'
// import Login from '../src/components/Modal/Login'
import Carousel from '../src/components/UI/Carousel'

const Products = () => {
  const images = [
    { src: '1.jpg', alt: '1' },
    { src: '2.jpg', alt: '2' },
    { src: '3.jpg', alt: '3' },
    { src: '4.jpg', alt: '4' },
    { src: '5.jpg', alt: '5' },
    { src: '6.jpg', alt: '6' },
    { src: '4.jpg', alt: '7' },
    { src: '1.jpg', alt: '8' },
    { src: '6.jpg', alt: '8' }
  ]
  return (
    <div>
      <Navigation />
      Products
      {/* <Login /> */}
      Login Disabled
      <div style={{ width: '100%', height: '20em' }}>
        <Carousel slides={images} slideCount={6} />
      </div>
      {/* <Slider /> */}
      {/* <Register /> */}
    </div>
  )
}

export default Products

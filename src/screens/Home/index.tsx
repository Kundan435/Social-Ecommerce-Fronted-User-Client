/* eslint-disable no-console */
import React from 'react'
import ProductBox from '../../components/Layout/ProductBox'

const HomeScreen = ({ data }: any) => {
  console.log(data)
  return (
    <div className='pb-4' style={{ background: 'rgb(240 173 78 / 10%)' }}>
      <div
        className='mb-4 justify-content-center text-center d-flex align-items-center'
        style={{
          height: '60vh',
          background: 'url(	http://localhost:4000/uploads/bg-img-1.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            background: 'rgb(0 0 0 / 15%)',
            width: '100%',
            height: '100%'
          }}
        ></div>
        <div
          className='text-white '
          style={{ fontFamily: 'Poppins', position: 'relative', zIndex: 1 }}
        >
          <h1
            className='fw-bolder text-white text-capitalize'
            style={{ fontSize: '3.5em', textShadow: '5px 5px 0px #000000' }}
          >
            We support Artists & Art Collectors
          </h1>
          <h3
            className='text-white mb-5'
            style={{ fontSize: '2.5em', textShadow: '5px 5px 0px #000000' }}
          >
            Creating unique marketplace to buy and sell artworks
          </h3>

          <button
            type='button'
            className='btn btn-primary border-2 fw-normal fs-3 text-capitalize border-white'
            style={{ padding: '1rem 4rem' }}
          >
            Discover Art
          </button>
        </div>
      </div>
      <div className='container mw-1400'>
        <h1
          className='fw-bold text-center mb-4'
          style={{ fontSize: '2.5em', textShadow: '3px 3px 0px #ccc' }}
        >
          Recently Added
        </h1>
        <div className='row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 gy-3 mb-4'>
          {data.slice(5, 10).map((product: any, i: number) => (
            <div className='col p-3' key={i}>
              <ProductBox product={product} />
            </div>
          ))}
        </div>
        <h1
          className='fw-bold text-center mb-4'
          style={{ fontSize: '2.5em', textShadow: '3px 3px 0px #ccc' }}
        >
          Buy Orignal Artworks
        </h1>
        <div className='row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 gy-3'>
          {/* // Update This Props Interface---------------------------------- */}

          {data.map((product: any) => (
            <div className='col p-3' key={product._id}>
              <ProductBox product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeScreen

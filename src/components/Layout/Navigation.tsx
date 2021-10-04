import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { IoHeartOutline, IoPersonOutline } from 'react-icons/io5'
import { RiShoppingBag2Line } from 'react-icons/ri'
import { useAuth } from '../../providers/Auth'
import { useBasicInfo } from '../../providers/BasicInfo'
import Login from '../Modal/Login'

const Navigation = () => {
  const [show, setShow] = useState(false)

  const [route, setRoute] = useState('')

  const { cartItems, wishlistItems } = useBasicInfo()

  const { isAuthenticated } = useAuth()

  const router = useRouter()

  const checkAuth = (route: string) => {
    if (isAuthenticated) return router.push(route)

    setShow(true)
    setRoute(route)
  }

  useEffect(() => {
    if (!isAuthenticated || route === '') return
    setShow(false)
    router.push(route)
    // Update This Props Interface----------------------------------

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, route])

  return (
    <>
      <Login show={show} setShow={setShow} />
      {/* <Navbar bg='primary' variant='dark'>
        <Container fluid>
          <Link href={`http://localhost:3000/`} passHref>
            <Navbar.Brand>Arteiz</Navbar.Brand>
          </Link>
          <Nav className='me-auto'>
            <Link href={`http://localhost:3000/`} passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href={`http://localhost:3000/products`} passHref>
              <Nav.Link>Products</Nav.Link>
            </Link>
            <Link href={`http://localhost:3000/cart`} passHref>
              <Nav.Link>Cart</Nav.Link>
            </Link>
            <Link href={`http://localhost:3000/account`} passHref>
              <Nav.Link>Account</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar> */}
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container-fluid'>
          <Link href={`http://localhost:3000/`} passHref>
            <a className='navbar-brand'>ARTEIZ</a>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link href={`http://localhost:3000/`} passHref>
                  <a className='nav-link' aria-current='page'>
                    Home
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='http://localhost:3000/products' passHref>
                  <a className='nav-link'>Products</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='http://localhost:3000/artists' passHref>
                  <a className='nav-link'>Artists</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='http://localhost:3000/checkout' passHref>
                  <a className='nav-link'>Checkout</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='http://localhost:3000/become-seller' passHref>
                  <a className='nav-link'>Become Seller</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='http://localhost:3000/seller' passHref>
                  <a className='nav-link'>Seller Dashboard</a>
                </Link>
              </li>
            </ul>
          </div>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a
                className='nav-link position-relative'
                aria-current='page'
                onClick={() => checkAuth('/wishlist')}
              >
                <IoHeartOutline size='1.7em' />
                <span className='fw-normal position-absolute bottom-0 right-0'>
                  {wishlistItems.count}
                </span>
              </a>
            </li>

            <li className='nav-item'>
              <a
                className='nav-link position-relative'
                aria-current='page'
                onClick={() => checkAuth('/cart')}
              >
                <RiShoppingBag2Line size='1.7em' />
                <span className='fw-normal position-absolute bottom-0 right-0'>
                  {cartItems.count}
                </span>
              </a>
            </li>

            <li className='nav-item'>
              <a
                className='nav-link '
                aria-current='page'
                onClick={() => checkAuth('/account')}
              >
                <IoPersonOutline size='1.7em' />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navigation

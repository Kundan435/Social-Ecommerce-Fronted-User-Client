import React, { Fragment } from 'react'
// import Login from '../src/components/Modal/Login'
import withoutAuth from '../src/hocs/withoutAuth'

const login = () => {
  return (
    <Fragment>
      {/* <Login /> Login */}
      Login Disabled
    </Fragment>
  )
}

export default withoutAuth(login)

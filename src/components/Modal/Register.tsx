import { Formik } from 'formik'
import React from 'react'
import { Fragment } from 'react'
import { loginSchema } from '../../validations/auth'
import Modal from '../UI/Modal'

const Register = () => {
  return (
    <Fragment>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Modal name='Product' size='sm'>
              <Modal.Header className='text-capitalize'>
                Sign in to continue
              </Modal.Header>
              <Modal.Body>
                {/* <Input type='text' name='name' label='Full Name' />
                <Input
                  type='text'
                  name='email_or_number'
                  label='Email or Mobile Number'
                />
                <Input type='password' name='password' label='Password' />
                <Input type='password' name='password' label='Password' /> */}
                Input Disabled
                <p className='fs-6'>
                  By continuing, you agree to Arteiz&apos;s Terms of Use and
                  Privacy Policy.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <button
                  type='submit'
                  className='btn btn-primary btn-lg btn-block'
                >
                  Sign up
                </button>
                <p className='fs-6 w-100 text-center'>
                  Have an account? &nbsp;
                  <span className='fw-bold'>Sign up</span>
                </p>
              </Modal.Footer>
            </Modal>
          </form>
        )}
      </Formik>
    </Fragment>
  )
}

export default Register

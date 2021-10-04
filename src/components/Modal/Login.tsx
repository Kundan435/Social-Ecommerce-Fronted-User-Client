import axios from 'axios'
import { Formik } from 'formik'
import React, { Fragment } from 'react'
import { useAuth } from '../../providers/Auth'
import { loginSchema } from '../../validations/auth'
import FormControl from '../UI/FormControl'
import Modal from '../UI/Modal'

interface ILogin {
  show: boolean
  setShow: (val: boolean) => void
  control?: 'btn' | 'selectLink'
}

const Login: React.FC<ILogin> = ({ show, setShow, control }) => {
  const { setAuthenticated } = useAuth()

  return (
    <Fragment>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={async (values, actions) => {
          await axios
            .post(`/login`, values, {
              headers: {
                'Content-Type': 'application/json'
              },
              withCredentials: true
            })
            .then((res) => {
              if (res.status !== 200) {
                console.error('Login error', res)
              }
              setAuthenticated(true)
            })
            .catch((error) => {
              actions.setSubmitting(false)
              console.error(' error', error.message)
            })
          actions.setSubmitting(false)
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Modal
              name='Login'
              size='sm'
              label='Login'
              show={show}
              setShow={setShow}
              control={control}
            >
              <Modal.Header className='text-capitalize'>
                Sign in to continue
              </Modal.Header>
              <Modal.Body>
                <FormControl
                  control='input'
                  type='email'
                  label='Email Address'
                  placeholder='Email Address'
                  name='email'
                />
                <FormControl
                  control='input'
                  type='password'
                  label='Password'
                  placeholder='Password'
                  name='password'
                />
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
                  Login
                </button>
                <p className='fs-6 w-100 text-center'>
                  New on Arteiz? &nbsp;
                  <span className='fw-bold'>Create an account</span>
                </p>
              </Modal.Footer>
            </Modal>
          </form>
        )}
      </Formik>
    </Fragment>
  )
}

export default Login

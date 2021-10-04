/* eslint-disable no-console */
import React, { useEffect } from 'react'
import { Fragment } from 'react'
// Update This Props Interface----------------------------------

const Modal = ({ children, ...props }: any) => {
  const { name, label, size, control, btnClass, type, btnIcon, show, setShow } =
    props

  const showModal = (state: boolean) => {
    setShow(state)
  }

  useEffect(() => {
    document.body.classList.toggle('modal-open', show)
    console.log(show)
  }, [show])

  let controller

  switch (control) {
    case 'selectLink':
      controller = (
        <a
          className='list-group-item list-group-item-action py-1 border-bottom'
          role='menuitem'
          onClick={() => showModal(true)}
        >
          {label}
        </a>
      )
      break

    case 'btn':
      controller = (
        <button
          type='button'
          className={`btn ${btnClass ? btnClass : 'btn-info'}`}
          data-bs-toggle='modal'
          data-bs-target={`#id_${name}`}
          onClick={() => showModal(true)}
        >
          {btnIcon ? btnIcon : null}
          {label}
        </button>
      )
      break
    default:
      controller = null
  }

  return (
    <Fragment>
      {controller}
      {show ? (
        <div
          className={`modal fade ${show ? 'show' : ''}`}
          id={`id_${name}`}
          tabIndex={-1}
          aria-labelledby={`heading_${name}`}
          aria-hidden='true'
          aria-modal='true'
          style={show ? { display: 'block' } : undefined}
          role='dialog'
        >
          <div
            className={`modal-dialog modal-dialog-centered ${
              size === 'sm'
                ? 'modal-sm'
                : size === 'md'
                ? 'modal-md'
                : size === 'lg'
                ? 'modal-lg'
                : ''
            }`}
          >
            <div className='modal-content border bg-white rounded-5 box-shadow-2 '>
              {type === 'genric' ? null : (
                <div className='modal-close'>
                  <button
                    type='button'
                    className='btn-close shadow-none'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                    onClick={() => showModal(false)}
                  ></button>
                </div>
              )}
              {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                  name,
                  type,
                  showModal,
                  show
                })
              })}
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  )
}
// Update This Props Interface----------------------------------

const Header = ({ children, ...props }: any) => {
  return (
    <div className={`modal-header`}>
      <h4
        className={`modal-title w-100 fw-bold ${props.className}`}
        id={`heading_${props.name}`}
      >
        {children}
      </h4>
    </div>
  )
}
// Update This Props Interface----------------------------------

const Body = (props: any) => {
  return (
    <div className='modal-body'>
      {props.type === 'genric' ? (
        <Fragment>
          <div className='text-center'>
            <div className='mb-3 mt-2'>{props.genricIcon}</div>
            <h4>{props.genricHeading}</h4>
            <p className='mb-3'>{props.genricText}</p>
          </div>
          <div className='row gx-4 mb-3 mt-4'>
            <div className='col text-end'>
              <button
                type='button'
                className={`btn rounded-3 ${
                  props.genricBtnClass ? props.genricBtnClass : 'btn-danger'
                } btn-sm w-80 btn-block`}
                onClick={props.genricBtnOnClick}
              >
                {props.genricBtnlabel}
              </button>
            </div>
            <div className='col text-start'>
              <button
                type='button'
                className='btn rounded-3 btn-light btn-sm w-80 btn-block'
                onClick={() => props.showModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Fragment>
      ) : (
        props.children
      )}
    </div>
  )
}
// Update This Props Interface----------------------------------

const Footer = ({ children, ...props }: any) => {
  return (
    <div className={`modal-footer`}>
      {props.closeBtn ? (
        <div className='d-flex justify-content-between'>
          <div className='me-3'>
            <button
              type='button'
              className='btn btn-danger rounded-3 btn-lg btn-block'
              onClick={() => props.showModal(false)}
            >
              Cancel
            </button>
          </div>
          <div>{children}</div>
        </div>
      ) : (
        children
      )}
    </div>
  )
}

Modal.Header = Header

Modal.Body = Body

Modal.Footer = Footer

export default Modal

import React from 'react'
import { Field, ErrorMessage, useField } from 'formik'
import { Fragment } from 'react'

interface FormProps {
  control?: 'input' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'toggle'
  name: string
  placeholder?: string
  label?: string
  info?: string
  layout?: 'side' | 'float'
  disabled?: boolean
  type?: string
  options?: Array<{ key: string; value: string }>
}

const Input = (props: FormProps) => {
  const { label, info, layout, disabled, ...rest } = props
  const [field, meta] = useField(props)

  return (
    <>
      {layout === 'side' ? (
        <div className='row align-items-center mb-4'>
          <label htmlFor={field.name} className='col-lg-2 fw-bold'>
            {label}
            {info ? (
              <div className='fw-normal text-gray fs-7'>{info}</div>
            ) : null}
          </label>

          <div className='col-sm-10'>
            <input
              className={`form-control ${
                meta.touched && meta.error ? 'is-invalid' : ''
              }`}
              disabled={disabled}
              {...field}
              {...rest}
            />
            <ErrorMessage
              component='div'
              className='invalid-feedback ms-2'
              name={field.name}
            />
          </div>
        </div>
      ) : layout === 'float' ? (
        <div className='form-floating mb-4'>
          <input
            className={`form-control ${
              meta.touched && meta.error ? 'is-invalid' : ''
            }`}
            disabled={disabled}
            {...field}
            {...rest}
          />
          <label htmlFor={field.name}> {label}</label>
          <ErrorMessage
            component='div'
            className='invalid-feedback ms-2'
            name={field.name}
          />
        </div>
      ) : (
        <div className='mb-4'>
          <label htmlFor={field.name}>{label}</label>
          {info ? <span className='ms-2 fs-7'>({info})</span> : null}
          <input
            className={`form-control ${
              meta.touched && meta.error ? 'is-invalid' : ''
            }`}
            disabled={disabled}
            {...field}
            {...rest}
          />
          <ErrorMessage
            component='div'
            className='invalid-feedback ms-2'
            name={field.name}
          />
        </div>
      )}
    </>
  )
}

const Textarea = (props: FormProps) => {
  const { info, layout, disabled, label, ...rest } = props
  const [field, meta] = useField(props)

  return (
    <>
      {layout === 'side' ? (
        <div className='row align-items-center mb-4'>
          <label htmlFor={field.name} className='col-lg-2 fw-bold'>
            {label}
            {info ? (
              <div className='fw-normal text-gray fs-7'>{info}</div>
            ) : null}
          </label>

          <div className='col-sm-10'>
            <textarea
              className={`form-control ${
                meta.touched && meta.error ? 'is-invalid' : ''
              }`}
              disabled={disabled}
              {...field}
              {...rest}
            />
            <ErrorMessage
              component='div'
              className='invalid-feedback ms-2'
              name={field.name}
            />
          </div>
        </div>
      ) : layout === 'float' ? (
        <div className='form-floating mb-4'>
          <textarea
            className={`form-control ${
              meta.touched && meta.error ? 'is-invalid' : ''
            }`}
            disabled={disabled}
            {...field}
            {...rest}
          />
          <label htmlFor={field.name}>
            {label}
            {info ? <span className='ms-2 fs-7'>({info})</span> : null}
          </label>
          <ErrorMessage
            component='div'
            className='invalid-feedback ms-2'
            name={field.name}
          />
        </div>
      ) : (
        <div className='mb-4'>
          <label htmlFor={field.name}>{label}</label>
          {info ? <span className='ms-2 fs-7'>({info})</span> : null}
          <textarea
            className={`form-control ${
              meta.touched && meta.error ? 'is-invalid' : ''
            }`}
            disabled={disabled}
            {...field}
            {...rest}
          />
          <ErrorMessage
            component='div'
            className='invalid-feedback ms-2'
            name={field.name}
          />
        </div>
      )}
    </>
  )
}

const Select = (props: FormProps) => {
  const { info, label, disabled, name, options, layout, ...rest } = props
  return (
    <Fragment>
      {layout === 'side' ? (
        <div className='row align-items-center mb-4'>
          <label htmlFor={name} className='col-lg-2 fw-bold'>
            {label}
            {info ? (
              <div className='fw-normal text-gray fs-7'>{info}</div>
            ) : null}
          </label>

          <div className='col-sm-10'>
            <Field
              as='select'
              className='form-select'
              id={name}
              name={name}
              disabled={disabled}
              {...rest}
            >
              {options?.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.key}
                  </option>
                )
              })}
            </Field>
            <ErrorMessage
              component='div'
              className='invalid-feedback ms-2'
              name={name}
            />
          </div>
        </div>
      ) : (
        <div className='mb-4'>
          <label htmlFor={name}>
            {label}
            {info ? (
              <span className='ms-2 fw-normal fs-7'>({info})</span>
            ) : null}
          </label>
          <Field
            as='select'
            className='form-select'
            id={name}
            name={name}
            disabled={disabled}
            {...rest}
          >
            {options?.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.key}
                </option>
              )
            })}
          </Field>
          <ErrorMessage
            component='div'
            className='invalid-feedback ms-2'
            name={name}
          />
        </div>
      )}
    </Fragment>
  )
}

const Radio = (props: FormProps) => {
  const { label, name, disabled, options, layout, ...rest } = props
  const [field] = useField(props)
  return (
    <div className={`mb-3 row`}>
      <label
        className={`d-block mb-1 ${
          layout === 'side' ? 'col-sm-2 col-form-label fw-bold' : ''
        }`}
      >
        {label}
      </label>
      <div
        className={`${
          layout === 'side' ? 'col-sm-10 d-flex align-items-center' : ''
        }`}
      >
        {options?.map((option) => {
          return (
            <div className='form-check form-check-inline' key={option.key}>
              <input
                type='radio'
                id={option.value}
                disabled={disabled}
                {...field}
                {...rest}
                value={option.value}
                checked={field.value === option.value}
                className='form-check-input'
              />
              <label className='form-check-label' htmlFor={option.value}>
                {option.key}
              </label>
            </div>
          )
        })}
      </div>

      <ErrorMessage name={name} />
    </div>
  )
}
const Toggle = (props: FormProps) => {
  const { label, name, disabled, ...rest } = props
  return (
    <div>
      <label className='me-3'>{label}</label>

      <label className='switch'>
        <Field type='checkbox' name={name} {...rest} disabled={disabled} />
        <span className='slider round'></span>
      </label>
    </div>
  )
}
const Checkboxes = (props: FormProps) => {
  const { label, name, options, disabled, ...rest } = props
  return (
    <div>
      <label>{label}</label>
      <Field name={name}>
        {/* // Update This Props Interface---------------------------------- */}
        {(formik: any) => {
          const { field } = formik
          // Update This Props Interface----------------------------------
          return options?.map((option: any) => {
            return (
              <div key={option.key}>
                <Fragment>
                  <input
                    type='checkbox'
                    id={option.value}
                    disabled={disabled}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label>{option.key}</label>
                </Fragment>
              </div>
            )
          })
        }}
      </Field>
      <ErrorMessage name={name} />
    </div>
  )
}

const FormControl = (props: FormProps) => {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'radio':
      return <Radio {...rest} />
    case 'checkbox':
      return <Checkboxes {...rest} />
    case 'toggle':
      return <Toggle {...rest} />
    default:
      return null
  }
}

export default FormControl

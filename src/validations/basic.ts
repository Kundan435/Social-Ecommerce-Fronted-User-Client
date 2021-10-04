import * as Yup from 'yup'

export const firstName = Yup.string()
  .min(2, 'Must be at least 2 characters.')
  .max(15, 'Must be 15 characters or less')
  .required('Required')

export const lastName = Yup.string()
  .min(2, 'Must be at least 2 characters.')
  .max(20, 'Must be 15 characters or less')
  .required('Required')

export const password = Yup.string()
  .required('Please Enter your password')
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
  )

export const mobileNumber = Yup.string().matches(
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  'Mobile number is not valid'
)

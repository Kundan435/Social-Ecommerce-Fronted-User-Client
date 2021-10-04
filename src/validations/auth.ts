import * as Yup from 'yup'

const email = Yup.string().email('Invalid email').required('Required')

const password = Yup.string()
  .min(2, 'Too Short!')
  .max(70, 'Too Long!')
  .required('Required')

export const loginSchema = Yup.object().shape({
  email,
  password
})
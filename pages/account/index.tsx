import React, { Fragment } from 'react'
import useSWR from 'swr'
import withAuth from '../../src/hocs/withAuth'
import ProfileInfo from '../../src/screens/User/Account/ProfileInfo'

const Profile = () => {
  const { data, error } = useSWR('/profile')
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Fragment>
      <ProfileInfo />
    </Fragment>
  )
}

export default withAuth(Profile)

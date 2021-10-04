import React from 'react'
import { NextPage } from 'next'
import Router from 'next/router'

interface ErrorProps {
  statusCode: number
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const currentStatusCode = res?.statusCode || 500
  const throwedStatusCode = err?.statusCode

  const statusCode = throwedStatusCode || currentStatusCode

  if (res) {
    // Here is where the magic happens
    res.statusCode = statusCode
  }

  return { statusCode }
}

export default Error

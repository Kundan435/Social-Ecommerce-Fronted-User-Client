import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { Fragment } from 'react'
// Update This Props Interface----------------------------------

const VerticalNavlink = ({ children, link, ...props }: any) => {
  const router = useRouter()

  //   let child = null

  //   switch (props.type) {
  //     case 'multiple':
  //       child = (
  //         <a
  //           className={`list-group-item list-group-item-action d-flex border-bottom p-3 ${
  //             router.pathname === link ? 'active' : null
  //           }`}
  //         >
  //           {children}
  //         </a>
  //       )
  //       break

  //     case 'single':
  //       child = (
  //         <a
  //           className={`list-group-item list-group-item-action d-flex border-bottom p-3 ${
  //             router.pathname === link ? 'active' : null
  //           }`}
  //         >
  //           {children}
  //         </a>
  //       )
  //   }
  return (
    <Fragment>
      <Link href={link} passHref>
        <a
          className={`list-group-item list-group-item-action ${
            props.type === 'single' ? 'd-flex border-bottom p-3' : 'ps-5'
          } ${router.asPath === link ? 'active' : null}`}
        >
          {children}
        </a>
      </Link>
    </Fragment>
  )
}

export default VerticalNavlink

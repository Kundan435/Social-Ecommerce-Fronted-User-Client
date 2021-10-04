import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { CSSProperties } from 'react'
import { Fragment } from 'react'

interface Props {
  children: React.ReactNode
  link: string
  style?: CSSProperties
  className?: string
  linkName?: string
}

const Navlink: React.FC<Props> = ({
  children,
  link,
  linkName,
  style,
  className
}) => {
  const router = useRouter()
  return (
    <Fragment>
      <Link href={link} passHref>
        <a
          className={`${className} ${
            router.pathname === link ||
            (linkName && router.pathname.indexOf(linkName) > -1)
              ? 'active'
              : null
          } user-select-none`}
          style={style}
        >
          {children}
        </a>
      </Link>
    </Fragment>
  )
}

export default Navlink

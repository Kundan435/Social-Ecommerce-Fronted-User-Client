import React, { Fragment, ReactElement, ReactNode, useState } from 'react'

import { NextRouter, useRouter } from 'next/router'
import { IoChevronForwardOutline } from 'react-icons/io5'
import styled from 'styled-components'

interface MainProps {
  children: ReactNode
  className: string
  setShow?: (value: boolean) => void
  show?: boolean
  router?: NextRouter
  linkName: string
}

const ExpandIcon = styled.div<{ show: boolean | undefined }>`
  transform: rotateZ(${(p) => (p.show ? '90deg' : '0deg')});
  transition: transform 200ms ease-in-out;
`

const DropdownWrap = styled.div<{ show: boolean | undefined }>`
  height: ${(p) => (p.show ? '100%' : 0)};
  visibility: ${(p) => (p.show ? 'visible' : 'hidden')};
  transition: transform 300ms ease-in-out;
`

const NavDropdown = ({
  children,
  linkName
}: {
  children: ReactNode
  linkName: string
}) => {
  const router = useRouter()

  const [show, setShow] = useState(
    router.pathname.indexOf(linkName) > -1 ? true : false
  )

  return (
    <Fragment>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as ReactElement<any>, {
          setShow,
          show,
          linkName,
          router
        })
      })}
    </Fragment>
  )
}

const Main: React.FC<MainProps> = (props) => {
  const { setShow, show, children, className, router, linkName } = props
  return setShow ? (
    <a
      onClick={() => setShow(!show)}
      className={`${className} ${
        router && router.pathname.indexOf(linkName) > -1 && !show
          ? 'active'
          : ''
      } cursor-pointer user-select-none d-flex justify-content-between `}
    >
      <div>{children}</div>
      <ExpandIcon show={show}>
        <IoChevronForwardOutline size='1.2em' />
      </ExpandIcon>
    </a>
  ) : null
}
const Sub = ({ children, show }: { children: ReactNode; show?: boolean }) => {
  return show ? (
    <div className='border-top' style={{ background: '#fcfcfc' }}>
      {children}
    </div>
  ) : null
}

NavDropdown.Main = Main
NavDropdown.Sub = Sub

export default NavDropdown

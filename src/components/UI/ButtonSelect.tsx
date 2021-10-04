import React, { Fragment, useEffect, useRef, useState } from 'react'
import { IoEllipsisVerticalSharp } from 'react-icons/io5'
// Update This Props Interface----------------------------------

const ButtonSelect = ({ children }: any) => {
  const [showSelect, setShowSelect] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    setShowSelect(!showSelect)
  }

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShowSelect(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return (
    <Fragment>
      <div ref={ref} className='position-relative'>
        <div>
          <button
            type='button'
            onClick={() => handleClick()}
            className='btn btn-light p-2 rounded-circle d-flex'
          >
            <IoEllipsisVerticalSharp size='1.2em' />
          </button>
        </div>
        {showSelect ? (
          <div className='btn-dropdown text-start rounded-3'>
            <div
              className='list-group'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu'
            >
              {children}
            </div>
          </div>
        ) : null}
      </div>
    </Fragment>
  )
}
// Update This Props Interface----------------------------------

const Option = ({ name, onClick }: any) => {
  return (
    <a
      href='#'
      className='list-group-item list-group-item-action py-1 border-bottom'
      role='menuitem'
      onClick={onClick}
    >
      {name}
    </a>
  )
}

ButtonSelect.Option = Option

export default ButtonSelect

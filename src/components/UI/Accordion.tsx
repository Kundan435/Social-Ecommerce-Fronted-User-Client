import React, { Fragment, useState } from 'react'

let parent_id = ''
// Update This Props Interface----------------------------------

const Accordion = ({ children, id }: any) => {
  if (id) {
    parent_id = id
  }
  const subComponentList = Object.keys(Accordion)
  const subComponents = subComponentList.map((key) => {
    return React.Children.map(children, (child) =>
      child.type.name === key ? child : null
    )
  })

  return (
    <Fragment>
      <div className='accordion' id={parent_id}>
        {subComponents.map((component) => component)}
      </div>
    </Fragment>
  )
}
// Update This Props Interface----------------------------------

const Item = ({ label, id, children, ...props }: any) => {
  const [show, setShow] = useState(props.open || false)
  const handleClick = () => {
    setShow(!show)
  }
  return (
    <div className='accordion-item'>
      <h2 className='accordion-header' id={`label_${id}`}>
        <button
          className={`accordion-button rounded-3  ${show ? null : 'collapsed'}`}
          type='button'
          onClick={() => handleClick()}
          data-bs-toggle='collapse'
          data-bs-target={`control_${id}`}
          aria-expanded={show}
          aria-controls='collapseOne'
        >
          {label}
        </button>
      </h2>
      <div
        id={`control_${id}`}
        className={`accordion-collapse collapse text-wrap text-break ${
          show ? 'show' : null
        }`}
        aria-labelledby={`label_${id}`}
        data-bs-parent={parent_id}
      >
        <div className='accordion-body'>{children}</div>
      </div>
    </div>
  )
}

Accordion.Item = Item

export default Accordion

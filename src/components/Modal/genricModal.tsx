import React, { useState } from 'react'
import Modal from '../UI/Modal'
import { ImBin } from 'react-icons/im'
// Update This Props Interface----------------------------------

const GenricModal = (props: any) => {
  const [show, setShow] = useState(false)

  const { type, text, control, btnIcon, label, btnClass } = props

  const clickHandler = (state: boolean) => {
    setShow(state)
  }

  switch (type) {
    case 'delete':
      return (
        <>
          <Modal
            name='deleteModal'
            size='sm'
            label={label}
            control={control}
            type='genric'
            show={show}
            setShow={setShow}
            btnIcon={btnIcon}
            btnClass={btnClass}
          >
            <Modal.Body
              genricIcon={<ImBin size='3em' />}
              genricHeading={`Remove ${text}`}
              genricText={`Are you sure you want to delete ${text} ?`}
              genricBtnlabel={`Delete`}
              genricBtnOnClick={() => clickHandler(false)}
            />
          </Modal>
        </>
      )

    default:
      return null
  }
}

export default GenricModal

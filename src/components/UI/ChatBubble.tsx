import React, { Fragment } from 'react'
import styled from 'styled-components'

const ChatBubble = ({ me, data }: { me?: boolean; data: string }) => {
  return (
    <Fragment>
      <ChatText me={me}>
        <div className='d-flex'>
          <p className='lh-2 me-3 d-inline-flex fs-6 align-items-center'>
            {data}
          </p>
          <p
            className='d-inline-flex align-items-end'
            style={{ fontSize: '0.65rem' }}
          >
            10:40 am
          </p>
        </div>
      </ChatText>
    </Fragment>
  )
}

const ChatText = styled.div<{ me?: boolean }>`
  display: flex;
  align-items: ${(i) => (i.me ? 'flex-start' : 'flex-end')};
  flex-flow: column;
  div {
    max-width: 768px;
    width: fit-content;
    background: ${(i) => (i.me ? '#fff' : '#d2ebf6')};
    border-radius: 0.5rem;
    height: 40px;
    padding: 0.3rem 1rem;
    margin: 1.5rem 1rem 0;
    box-shadow: 0 2px 5px 0 #e6e6e6;
    position: relative;
  }
  div:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 25px solid ${(i) => (i.me ? '#fff' : '#d2ebf6')};
    transform: rotateZ(${(i) => (i.me ? '60deg' : '55deg')});
    ${(i) => (i.me ? 'top: -6px; left: -5px;' : 'top: -7px; right: -11px')}
  }
`

export default ChatBubble

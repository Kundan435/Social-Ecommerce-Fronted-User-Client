import React, { Fragment } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'
import { IoAttachSharp, IoHappyOutline, IoSend } from 'react-icons/io5'
import ChatBubble from '../src/components/UI/ChatBubble'

const Chat = () => {
  return (
    <Fragment>
      <div className='container-fluid vh-100  py-5'>
        <div
          className='d-flex overflow-hidden mw-1400 m-auto h-100 box-shadow-3 border border-primary rounded-5 bg-light'
          //   style={{ background: '#eee' }}
        >
          <div className='d-flex flex-column flex-shrink-0 '>
            <p
              className='fw-bolder fs-4 ps-4 bg-secondary d-flex align-items-center border-end border-secondary'
              style={{ height: '100px' }}
            >
              Messaging
            </p>
            <div
              className='scrollbar overflow-auto border-end '
              style={{ width: '375px' }}
            >
              {/* <div className='d-flex ps-3 py-2 mb-2 border-bottom'>
              <Link href='/' passHref>
                <a className='bg-light border rounded-5 p-2 me-2'>Back</a>
              </Link>
              <p className='fw-bolder fs-4 text-center'>Messaging</p>
            </div> */}

              {[...Array(20)].map((el, i) => (
                <div
                  key={i}
                  className={`d-flex px-3 py-2 border-bottom fs-6 align-items-center ${
                    i === 2 ? 'bg-info' : ''
                  }`}
                >
                  <div
                    className='d-flex align-items-center'
                    style={{ maxWidth: '50px' }}
                  >
                    <div className='d-inline-flex rounded-circle overflow-hidden'>
                      <Image
                        src={process.env.STATIC_URL + '1.jpg'}
                        alt='Picture of the author'
                        width='50px'
                        height='50px'
                        objectFit='cover'
                        loading='eager'
                      />
                    </div>
                  </div>

                  <div className='col mx-2'>
                    <p className='fw-bold'>Kundan Bhosale {i}</p>
                    <p className='text-truncate-1'>
                      This is message sent by kundan bhosale Did you recieve
                    </p>
                  </div>
                  <div
                    className='col text-end'
                    style={{ maxWidth: '75px', fontSize: '0.7rem' }}
                  >
                    <p>12/10/2021</p>
                    <Circle>2</Circle>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Chat Section */}
          <div className='flex-grow-1 '>
            <div
              className='d-flex border-bottom bg-white align-items-center px-3'
              style={{ height: '58px' }}
            >
              <div
                className='d-flex align-items-center me-3'
                style={{ maxWidth: '40px' }}
              >
                <div className='d-inline-flex rounded-circle overflow-hidden'>
                  <Image
                    src={process.env.STATIC_URL + '1.jpg'}
                    alt='Picture of the author'
                    width='40px'
                    height='40px'
                    objectFit='cover'
                    loading='eager'
                  />
                </div>
              </div>
              <div className='col fw-bold'>
                <p>Kundan Bhosale</p>
              </div>
            </div>
            {/* Chat Bubble */}
            <ChatBox>
              <div
                className='px-5 scrollbar h-100'
                style={{ overflowY: 'scroll' }}
              >
                <ChatBubble me data='Hello How are you ?' />
                <ChatBubble data='I am fine! how about you ?' />
                <ChatBubble
                  me
                  data={`I am eating... ${String.fromCodePoint(0x1f354)}`}
                />
              </div>
              <div className='border-top bg-white  d-flex align-items-center p-2'>
                <div>
                  <button className='btn btn-link mx-2'>
                    <IoHappyOutline size='1.7rem' />
                  </button>
                </div>
                <div>
                  <button className='btn btn-link mx-2'>
                    <IoAttachSharp size='1.8rem' />
                  </button>
                </div>
                <div className='col'>
                  <TextareaAutosize
                    className='form-control form-control-sm rounded-7 hide-scrollbar'
                    style={{ resize: 'none' }}
                    minRows={1}
                    maxRows={3}
                    placeholder='Type something here...'
                  />
                </div>
                <div>
                  <button className='btn btn-link ms-3 me-2'>
                    <IoSend size='1.5rem' />
                  </button>
                </div>
              </div>
            </ChatBox>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

const ChatBox = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  height: calc(100% - 58px);
`

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background: #fe9366;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-weight: 600;
  font-size: 0.7rem;
`

export default Chat

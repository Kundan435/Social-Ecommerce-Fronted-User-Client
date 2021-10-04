/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Fragment } from 'react'
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline
} from 'react-icons/io5'
import styled from 'styled-components'

type Caurosel = {
  thumbnail?: 'side' | 'bottom'
  slideCount: number
  slides: Array<{ src: string; alt: string }>
}

const MainWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

const SliderWrapper = styled.div<{
  slideWidth: number
  slideIndex: number
}>`
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  height: 100%;
  ul {
    display: flex;
    position: relative;
    margin: 0px;
    padding: 0px;
    list-style: none;
    height: 100%;
    li {
      min-width: ${(p) => p.slideWidth}%;
      max-width: ${(p) => p.slideWidth}%;
      padding: 0 15px;
      height: 100%;
    }
  }
`

const StyledPicture = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 10px;

  div {
    width: 100%;
    height: 100%;
    position: relative;
    user-select: none;
    border-radius: 5px;
    overflow: hidden;
  }
`

const StyledTrack = styled.div<{ slideWidth: number; slideIndex: number }>`
  transition: transform 300ms ease-in-out;
  transform: translateX(${(p) => -(p.slideWidth * p.slideIndex)}%);
  height: 100%;
`

const StyledDivControl = styled.div<{ direction: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  opacity: 1;
  user-select: none;
  div {
    position: relative;
    div {
      pointer-events: auto;
      user-select: none;
      padding: 5px;
      background-color: #fff;
      cursor: pointer;
      opacity: 1;
      border-radius: 50%;
      box-shadow: 0 0 10px 1px #0000003e;
      transition: transform 300ms ease-in-out;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`

const ThumbnailWrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding: 10px 0;

  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    list-style: none;
    height: 100%;
    width: auto;
    padding: 0 15px;
    margin: 0;
    transition: transform 300ms ease-in-out;

    li {
      width: 100%;
      height: ${100 / 9}%;
      padding: 0 0 10px;
      margin: 0;
      cursor: pointer;
    }
    div {
      border-radius: 5px;
      width: 100%;
      height: 100%;
      overflow: hidden;
      user-select: none;
      opacity: 0.9;
      transition: transform 200ms ease-in-out;

      &:hover {
        opacity: 1;
        box-shadow: 0 0 10px 1px #0000005e;
        transform: scale(1.1);
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`

const SlideImage = ({
  slide,
  objFit
}: {
  slide: { src: any; alt: any }
  objFit: any
}) => {
  return (
    <StyledPicture>
      <Image
        src={process.env.STATIC_URL + slide.src}
        alt={slide.alt}
        width={500}
        height={500}
        objectFit={objFit}
        loading='lazy'
        quality={75}
        placeholder='blur'
        blurDataURL={process.env.STATIC_URL + slide.src}
      />
      {/* <img src={process.env.STATIC_URL + slide.src} alt={slide.alt} /> */}
    </StyledPicture>
  )
}
// Update This Props Interface----------------------------------

const Track = (props: any) => {
  return <StyledTrack {...props}>{props.children}</StyledTrack>
}
// Update This Props Interface----------------------------------

const Controls = (props: any) => {
  return (
    <StyledDivControl {...props}>
      <div style={{ marginLeft: '3vw' }}>
        {props.hide.left ? null : (
          <div onClick={props.prev}>
            <IoChevronBackCircleOutline size='2em' />
          </div>
        )}
      </div>
      <div style={{ marginRight: '3vw' }}>
        {props.hide.right ? null : (
          <div onClick={props.next}>
            <IoChevronForwardCircleOutline size='2em' />
          </div>
        )}
      </div>
    </StyledDivControl>
  )
}

const Carousel = ({ slides, slideCount, thumbnail }: Caurosel) => {
  const [slideIndex, setSlideIndex] = useState(0)

  const [hide, setHide] = useState({ left: true, right: false })

  const [thumbIndex, setThumbIndex] = useState(0)

  const slideWidth = 100 / slideCount

  useEffect(() => {
    if (slideIndex <= 0) {
      setHide((prevHide) => {
        return { ...prevHide, left: true }
      })
    } else {
      setHide((prevHide) => {
        return { ...prevHide, left: false }
      })
    }

    if (slideIndex >= slides.length - slideCount) {
      setHide((prevHide) => {
        return { ...prevHide, right: true }
      })
    } else {
      setHide((prevHide) => {
        return { ...prevHide, right: false }
      })
    }
    return
    // Update This Props Interface----------------------------------

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideIndex])

  const onPrev = () => {
    if (slideIndex > 0) {
      setSlideIndex((prevIndex) => prevIndex - 1)

      if (thumbnail !== 'side') return

      if (slideIndex >= 9) {
        setThumbIndex((prevIndex) => prevIndex - 1)
      } else {
        setThumbIndex(0)
      }
    }
    return
  }

  const onNext = () => {
    if (slideIndex < slides.length - slideCount) {
      setSlideIndex((prevIndex) => prevIndex + 1)

      if (thumbnail !== 'side') return

      if (slideIndex > 7) {
        setThumbIndex((prevIndex) => prevIndex + 1)
      }
    }
    return
  }

  const thumbClick = (i: number) => {
    setSlideIndex(i)
  }

  return (
    <Fragment>
      <MainWrapper>
        {thumbnail === 'side' ? (
          <ThumbnailWrapper>
            <ul
              style={{
                transform: `translateY(${-(thumbIndex * 100) / 9}%)`
              }}
            >
              {slides.map((slide, i) => (
                <li key={i} onClick={() => thumbClick(i)}>
                  <div
                    style={{
                      boxShadow: `${
                        i === slideIndex ? '0 0 10px 2px #0000005e ' : ''
                      }`,
                      transform: `${i === slideIndex ? 'scale(1.1)' : ''}`,
                      opacity: `${i === slideIndex ? '1' : ''}`
                    }}
                  >
                    <img
                      src={process.env.STATIC_URL + slide.src}
                      alt={slide.alt}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </ThumbnailWrapper>
        ) : null}
        <SliderWrapper slideIndex={slideIndex} slideWidth={slideWidth}>
          <Track {...{ slideIndex }} slideWidth={slideWidth}>
            <ul>
              {slides.map((slide, i) => (
                <li key={i}>
                  <SlideImage
                    slide={slide}
                    objFit={thumbnail === 'side' ? 'contain' : 'cover'}
                  />
                </li>
              ))}
            </ul>
          </Track>
          <Controls slideWidth={20} prev={onPrev} next={onNext} hide={hide} />
        </SliderWrapper>
      </MainWrapper>
    </Fragment>
  )
}

export default Carousel

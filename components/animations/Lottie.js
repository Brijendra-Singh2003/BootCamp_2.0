import React from 'react'

export default function Lottie({className, src, id}) {
  return (
    <>
        <lottie-player
            id={id}
            className={className}
            src={src}
            background="transparent"
            speed="1"
            loop
            autoplay
        ></lottie-player>
    </>
  )
}

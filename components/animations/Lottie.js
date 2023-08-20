import React from 'react'

export default function Lottie({className, src, id}) {
  return (
    <>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
            id={id}
            className={className}
            src={src}
            background="transparent"
            speed="1"
            style={{ width: "300px", height: "300px" }}
            loop
            autoplay
        ></lottie-player>
    </>
  )
}

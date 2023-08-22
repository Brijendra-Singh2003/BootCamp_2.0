import React from 'react'
import "./page.css"

function About() {
  return (
    <>
    <lottie-player
      className='middle-card'
      src="https://lottie.host/b53a03ab-7407-4a8c-81bc-bd26d8355484/oKFOwD0sSA.json"
      background="transparent"
      speed="1"
      loop
      autoplay
    />

    <div>
      <p className='text'>
        ABOUT US
      </p>
    </div>
    </>
  )
}

export default About;

export const metadata = {
  title: "About - CSE Bootcamp 2.0",
  description: "People who worked hard to create this website",
};
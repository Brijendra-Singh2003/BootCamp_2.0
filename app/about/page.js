import React from 'react'
import "./page.css"
import Lottie from '@/components/animations/Lottie';

function About() {
  return (
    <>
    <div>
      <p className='text'>
        ABOUT US
      </p>
    </div>
    <Lottie
    className='middle-card'
    src="https://lottie.host/b53a03ab-7407-4a8c-81bc-bd26d8355484/oKFOwD0sSA.json"/>
    </>
  )
}

export default About;

export const metadata = {
  title: "About - CSE Bootcamp 2.0",
  description: "People who worked hard to create this website",
};
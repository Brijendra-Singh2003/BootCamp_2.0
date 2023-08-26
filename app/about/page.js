import React from 'react'
import { Lilita_One } from 'next/font/google'
import "./page.css"

const lilitaOne = Lilita_One({ subsets: ['latin'], weight: "400" });

export default async function About() {
  return (
    <>
    <lottie-player
      className='middle-card'
      src="/animations/about.json"
      background="transparent"
      speed="1"
      loop
      autoplay
    />

    <div>
      <p className={'text '+lilitaOne.className}>
        ABOUT US
      </p>
    </div>
    </>
  )
}

export const metadata = {
  title: "About - CSE Bootcamp 2.0",
  description: "People who worked hard to create this website",
};
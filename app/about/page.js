import React from 'react'
import "./page.css"
import { Lilita_One } from 'next/font/google'
import Link from 'next/link';

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

    <div className={lilitaOne.className}>
      <p className='text'>
        ABOUT US
      </p>
        <p className="desc">
          This bootcamp is made with lots of love and hard work by our entire team working behind this website and it would not have been possible without the support of the entire 2022 - 26 CSE batch.
        </p>
    </div>
    <div className={"teams " + lilitaOne.className}>
                <div className="about-card small">
                    <p>OUR TEAM</p>
                    <ul>
                      <li>Ashutosh Kataruka - Frontend</li>
                      <li>Brijendra Singh - Frontend and backend</li>
                      <li>Anirudh Pradhan - Content and design</li>
                      <li>Abhik Sundar Sahu - Research and Content </li>
                      <li>Amit Behera - Content</li>
                      <li>Aditya Narayan - Graphics design</li>
                    </ul>
                </div>
            </div>
            <Link target='_blank' href={"https://github.com/Brijendra-Singh2003/BootCamp_2.0"}> <button id='signn' className={lilitaOne.className}> View GitHub Repository </button> </Link>
    </>
  )
}

export const metadata = {
  title: "About - CSE Bootcamp 2.0",
  description: "People who worked hard to create this website",
};
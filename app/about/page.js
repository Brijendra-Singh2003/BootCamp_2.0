import React from 'react'
import "./page.css"
import { Lilita_One } from 'next/font/google'
import Link from 'next/link';
import Image from 'next/image';

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
          <div className="Acont flex gap-4 flex-wrap items-center justify-center">
            <div className="Acard border border-blue-100 rounded-2xl p-4">
              <h1 className='scale-[1.2]'>Brijendra Singh</h1>
              <h1>B122041</h1>
              <h1>Frontend, Backend</h1>
            </div>
            <div className="Acard border border-blue-100 rounded-2xl p-4">
              <h1>Asutosh Kataruka</h1>
              <h1>B122029</h1>
              <h1>Frontend, Design</h1>
            </div>
            <div className="Acard border border-blue-100 rounded-2xl p-4">
              <h1>Abhik Sundar Sahu</h1>
              <h1>B122001</h1>
              <h1>Research, Content</h1>
            </div>
            <div className="Acard border border-blue-100 rounded-2xl p-4">
              <h1>Anirudh Praadhan</h1>
              <h1>B122018</h1>
              <h1>Content, Design</h1>
            </div>
            <div className="Acard border border-blue-100 rounded-2xl p-4">
              <h1>Amit Behera</h1>
              <h1>B122015</h1>
              <h1>Content</h1>
            </div>
            <div className="Acard border border-blue-100 rounded-2xl p-4">
              <h1>Aditya Narayan</h1>
              <h1>B122008</h1>
              <h1>Graphic Designer</h1>
            </div>
          </div>
      </div>
    </div>
    <div className="stack flex items-center justify-center gap-3 w-full flex-wrap mb-8">
      <div className="part flex items-center justify-center gap-3 h-16">
        <Image src="/stack/html.png" height={40} width={40} />
        <Image src="/stack/css-3.png" height={40} width={40} />
        <Image src="/stack/js.png" height={40} width={40} />
        <Image src="/stack/node.png" height={40} width={40} />
        <Image src="/stack/react2.png" height={40} width={40} />
      </div>
      <div className="part flex items-center justify-center gap-3 h-16">
        <Image className='scale-[1.7]' src="/stack/Next.js.png" height={40} width={40} />
        <Image src="/stack/git.png" height={40} width={40} />
        <Image src="/stack/github.png" height={40} width={40} />
        <Image src="/stack/mongo.png" height={40} width={40} />
        <Image src="/stack/azure.png" height={40} width={40} />
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
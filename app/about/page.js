import React from 'react'
import "./page.css"
import { Luckiest_Guy } from 'next/font/google'
import Link from 'next/link';
import Image from 'next/image';
import anime from "@/public/animations/about.json";
import Lottie from '@/components/animations/Lottie';

const lilitaOne = Luckiest_Guy({ subsets: ['latin'], weight: "400" });

export default async function About() {
  return (
    <>
    <h1 className={lilitaOne.className+" society-text"}>ABOUT US</h1>
    <Lottie options={anime} className="about-middle-card" />

    <div className={"no-select "+lilitaOne.className}>
      <p className="desc">
        This bootcamp is made with lots of love and hard work by our entire team working behind this website and it would not have been possible without the support of the entire 2022 - 26 CSE batch.
      </p>
    </div>
    <div className={"teams no-hlt " + lilitaOne.className}>
      <div className="about-card small no-select">
          <p>OUR TEAM</p>
          <div className="Acont flex gap-4 flex-wrap items-center justify-center">
            <div className="Acard border border-blue-100 rounded-2xl p-4">
              <h1 className='scale-[1.2]'>Brijendra Singh</h1>
              <h1>B122041</h1>
              <h1>Frontend, Backend</h1>
            </div>
            <div className="Acard border border-blue-100 rounded-2xl p-4">
              <h1 className='scale-[1.2]'>Asutosh Kataruka</h1>
              <h1>B122029</h1>
              <h1>Frontend, Design</h1>
            </div>
            <div className="Acard border border-blue-100 rounded-2xl p-4">
              <h1 className='scale-[1.2]'>Abhik Sundar Sahu</h1>
              <h1>B122001</h1>
              <h1>Research, Content</h1>
            </div>
            <div className="Acard border border-blue-100 rounded-2xl p-4">
              <h1 className='scale-[1.2]'>Anirudh Praadhan</h1>
              <h1>B122018</h1>
              <h1>Content, Design</h1>
            </div>
            <div className="Acard border border-blue-100 rounded-2xl p-4">
              <h1 className='scale-[1.2]'>Amit Behera</h1>
              <h1>B122015</h1>
              <h1>Content</h1>
            </div>
            <div className="Acard border border-blue-100 rounded-2xl p-4">
              <h1 className='scale-[1.2]'>Abinas Ojha</h1>
              <h1>B122004</h1>
              <h1>content</h1>
            </div>
            <div className="Acard border border-blue-100 rounded-2xl p-4">
              <h1 className='scale-[1.2]'>Arya Singh Bais</h1>
              <h1>B122025</h1>
              <h1>Design</h1>
            </div>
            <div className="Acard border border-blue-100 rounded-2xl p-4">
              <h1 className='scale-[1.2]'>Aditya Narayan</h1>
              <h1>B122008</h1>
              <h1>Graphic Designer</h1>
            </div>
          </div>
      </div>
    </div>
    <p className={'stack no-select '+lilitaOne.className}>Tech Stack Used</p>
    <div className="no-select flex items-center justify-center gap-3 w-full flex-wrap mb-8">
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
    <Link target='_blank' href={"https://github.com/Brijendra-Singh2003/BootCamp_2.0"}> <button id='signn' className={"no-select "+lilitaOne.className}> View GitHub Repository </button> </Link>
    </>
  )
}

export const metadata = {
  title: "About - CSE Bootcamp 2.0",
  description: "People who worked hard to create this website",
};
import "./page_vdo.css";
import { Lilita_One } from 'next/font/google'

const lilitaOne = Lilita_One({ subsets: ['latin'], weight: "400" });

export default async function Home() {

  return (
    <>
      <section>

        <lottie-player
          className='lottie'
          src="/animations/helloworld.json"
          background="transparent"
          speed="1"
          loop
          autoplay />

        <div className="flex items-center justify-center">
          <p className={'home-text flex flex-col ' + lilitaOne.className}>
            <span>WELCOME TO</span> <span className="cse">CSE</span> <span>BOOTCAMP</span>
          </p>
        </div>
      </section>
      <div className={"angledLineWrap"}>
        <div className={"angledLine"}></div>
      </div>

      <iframe className="youtube" width="560" height="315" src="https://www.youtube.com/embed/iHMfYBnRpkg?mute=1&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
  )
}

export const metadata = {
  title: "CSE Bootcamp 2.0 - Home",
  description: "A bootcamp for all CSE students of IIIT Bhubaneshwar",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
};

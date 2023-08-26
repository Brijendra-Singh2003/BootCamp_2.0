import "./page_vdo.css";
import { Lilita_One } from 'next/font/google'

const lilitaOne = Lilita_One({ subsets: ['latin'], weight: "400" });

export default async function Home() {

  return (
    <section>

      <lottie-player
        className='lottie'
        src="/animations/helloworld.json"
        background="transparent"
        speed="1"
        loop
        autoplay />

      <div>
        <p className={'home-text '+lilitaOne.className}>
          WELCOME TO CSE BOOTCAMP
        </p>
      </div>

      {/* <iframe
        className="youtube"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&start=1"
        title="YouTube video player"
        allowFullScreen
      ></iframe> */}

      {/* <div className="video_animation">

        <video
          className="vid"
          id="vid"
          preload="false"
          muted
          playsInline
          loop
          autoPlay
          src="/assets/animation.webm" />

      </div> */}
    </section>
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

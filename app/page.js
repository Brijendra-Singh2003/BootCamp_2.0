import "./page_vdo.css";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Lottie from "@/components/animations/Lottie";

export default async function Home() {
  const session = await getServerSession(options);
  const user = session?.user || null;

  return (
    <main>


      <Lottie
        className='h-[80%] mt-40 w-[80%] m-auto lottie'
        src="/animations/helloworld.json"
      />

      <div className="video_animation">

        <video
          className="vid"
          id="vid"
          preload="false"
          muted
          playsInline
          loop
          autoPlay
          src="/assets/animation.webm"
        ></video>
      </div>
    </main>
  );
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

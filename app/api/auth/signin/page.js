import React from 'react';
import "./index.css";
import SignInButton from '@/components/button/SignInButton';
import { getServerSession } from 'next-auth';
import { options } from '../[...nextauth]/options';
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default async function page() {

  const session = await getServerSession(options);
  const user = session?.user || null;
  if (user) {
    redirect('/');
  }

  return (
    <>
    <div className="container">
        <div className="left">
            <img id="cseimg" src="/assets/csef.png" alt="ERROR 404"/>
            <img id="cseimg2" src="/assets/bootbg.png" alt="ERROR 404"/>
            <div id="para">WELCOME FRESHERS 2K23 </div>
            <SignInButton />
        </div>
        <div className="animation">
            <Image id="img1" className="animation_img" src="/assets/img1.png" alt="ERROR 404" height={400} width={400}/>
            <Image id="img2" className="animation_img" src="/assets/img2.png" alt="ERROR 404" height={400} width={400}/>
            <Image id="img3" className="animation_img" src="/assets/img3.png" alt="ERROR 404" height={400} width={400}/>
            <Image id="img4" className="animation_img" src="/assets/img4.png" alt="ERROR 404" height={400} width={400}/>
            <Image id="img5" className="animation_img" src="/assets/img5.png" alt="ERROR 404" height={400} width={400}/>
            <Image id="img6" className="animation_img" src="/assets/img6.png" alt="ERROR 404" height={400} width={400}/>
            <Image id="img7" className="animation_img" src="/assets/img7.png" alt="ERROR 404" height={400} width={400}/>
        </div>
    </div>
    </>
  )
}

export const metadata = {
  title: "Sign In - CSE Bootcamp 2.0",
  description: "sign in to cse bootcamp 2.0",
};
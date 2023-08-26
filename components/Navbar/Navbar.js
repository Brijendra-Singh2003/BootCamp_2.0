"use client";
import React, { useEffect } from "react";
import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";
import { signOut, SessionProvider, useSession } from 'next-auth/react';
import { revalidatePath, revalidateTag } from "next/cache";

export default function Navbar() {
  return (
    <SessionProvider>
      <Nav/>
    </SessionProvider>
  )
}

function Nav() {

  const { data: session, status} = useSession();
  const user = session?.user;

  const [showMenu, setShowMenu] = React.useState(false);
  const email = user?.email;
  const id = email?.split('@')[0];

  function toggle() {
    setShowMenu(prevShowMenu => !prevShowMenu);
  }

  useEffect(()=>{
    if (window.innerWidth > 1100) {
      const spotlight = document.getElementById('spotlight');
      const w = spotlight.offsetWidth / 2;
      const h = spotlight.offsetHeight / 2;
      function foo(e) {
        const x = e.clientX;
        const y = e.clientY;
        spotlight.style.left = (x-w)+'px';
        spotlight.style.top = (y-h)+'px';
      }
      document.addEventListener('mousemove', foo);

      return () => document.removeEventListener('mousemove', foo);
    }
  },[])

  return (
    <nav>

      { showMenu ? <div className="backdrop" onClick={toggle}></div> : null }

      <Link target="_blank" draggable={false} href="https://www.iiit-bh.ac.in/">
        <Image src="/assets/logo.png" height={120} width={120} alt="IIIT BBSR logo"/>
      </Link>

      <div className="mobile-links" onClick={toggle}>
        
        <svg className="menu-icon" aria-hidden="true" fill="none" viewBox="0 0 17 14" ><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" /></svg>

        <div className={ "dropDown " + (showMenu ? "show" : "hide") }>

          <Link href="/">Home</Link>
          {user ? (
            <>
              <Link href="/students/2023">2023</Link>
              <Link href="/students/2022">2022</Link>
              <Link href="/about">About</Link>
              <Link href="/societies">Societies</Link>
              {(email[3] === '2' || email[3] === '3') && <Link href={"/profile"}>Profile</Link>}
              <a className="cursor-pointer" onClick={()=>{signOut()}}>Signout</a>
            </>
          ) : (
            <>
              <Link href="/students/2023">2023</Link>
              <Link href="/students/2022">2022</Link>
              <Link href={"/about"}>About</Link>
              <Link href="/societies">Societies</Link>
              <Link href={"/api/auth/signin"}>Login</Link>
            </>
          )}

        </div>
      </div>

      <div className="desktop-links">
        <Link href="/">Home</Link>
        {user ? (
          <>
            <Link href="/students/2023">2023</Link>
            <Link href="/students/2022">2022</Link>
            <Link href="/about">About</Link>
            <Link href="/societies">Societies</Link>
            {(email[3] === '2' || email[3] === '3') && <Link href={"/profile"}>Profile</Link>}
            <button className="signout" onClick={()=>{signOut()}}>Signout</button>
          </>
        ) : (
          <>
          <Link href="/students/2023">2023</Link>
              <Link href="/students/2022">2022</Link>
            <Link href="/societies">Societies</Link>
            <Link href="/about">About</Link>
            <Link href="/api/auth/signin">Login</Link>
          </>
        )}
      </div>

    </nav>
  );
}
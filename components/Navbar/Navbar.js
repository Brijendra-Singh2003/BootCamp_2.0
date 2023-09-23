"use client";
import React, { useEffect } from "react";
import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";
import { signOut, SessionProvider, useSession } from 'next-auth/react';
import { usePathname } from "next/navigation"
import fetchData from "@/functions/FetchData";

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
  const pathname = usePathname();

  const [showMenu, setShowMenu] = React.useState(false);
  const email = user?.email;
  const id = email?.split('@')[0];

  function toggle() {
    setShowMenu(prevShowMenu => !prevShowMenu);
  }

  useEffect(()=>{
    fetchData();
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
  },[]);

  return (
    <nav>

      { showMenu ? <div className="backdrop" onClick={toggle}></div> : null }

      <Link draggable={false} href="/">
        <Image src="/assets/csef.png" height={120} width={120} alt="CSE logo"/>
      </Link>

      <div className="mobile-links" onClick={toggle}>
        
        <svg className="menu-icon" aria-hidden="true" fill="none" viewBox="0 0 17 14" ><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" /></svg>

        <div className={ "dropDown " + (showMenu ? "show" : "hide") }>

          <Link className={(pathname === "/") && "active"} href="/">Home</Link>
          {user ? (
            <>
              <Link className={(pathname === "/students/2023") && "active"} href="/students/2023">2023</Link>
              <Link className={(pathname === "/students/2022") && "active"}  href="/students/2022">2022</Link>
              <Link className={(pathname === "/societies") && "active"}  href="/societies">Societies</Link>
              {(email[3] === '2' || email[3] === '3') && <Link className={(pathname === "/profile") && "active"}  href={"/profile"}>Profile</Link>}
              <Link className={(pathname === "/about") && "active"} href="/about">About</Link>
              <a onClick={()=>{signOut()}}>Signout</a>
            </>
          ) : (
            <>
              <Link className={(pathname === "/societies") && "active"} href="/societies">Societies</Link>
              <Link className={(pathname === "/about") && "active"} href="/about">About</Link>
            <Link className={(pathname === "/api/auth/signin") && "active"} href="/api/auth/signin">Login</Link>
            </>
          )}

        </div>
      </div>

      <div className="desktop-links">

        <Link className={(pathname === "/") && "active"} href="/">Home</Link>
        {user ? (
          <>
            <Link className={(pathname === "/students/2023") && "active"} href="/students/2023">2023</Link>
            <Link className={(pathname === "/students/2022") && "active"}  href="/students/2022">2022</Link>
            <Link className={(pathname === "/about") && "active"} href="/about">About</Link>
            <Link className={(pathname === "/societies") && "active"}  href="/societies">Societies</Link>
            {(email[3] === '2' || email[3] === '3') && <Link className={(pathname === "/profile") && "active"}  href={"/profile"}>Profile</Link>}
            <button className="signout" onClick={()=>{signOut()}}>Signout</button>
          </>
        ) : (
          <>
            <Link className={(pathname === "/societies") && "active"} href="/societies">Societies</Link>
            <Link className={(pathname === "/about") && "active"} href="/about">About</Link>
          <Link className={(pathname === "/api/auth/signin") && "active"} href="/api/auth/signin">Login</Link>
          </>
        )}

      </div>

    </nav>
  );
}
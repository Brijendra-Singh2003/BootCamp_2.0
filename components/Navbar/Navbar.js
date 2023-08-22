"use client";
import React from "react";
import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";
import { signOut } from 'next-auth/react';

export default function Navbar({ user }) {

  const [showMenu, setShowMenu] = React.useState(false);

  function toggle() {
    setShowMenu(prevShowMenu => !prevShowMenu);
  }

  return (
    <nav>

      { showMenu ? <div className="backdrop" onClick={toggle}></div> : null }

      <Link href="https://www.iiit-bh.ac.in/">
        <Image src="/assets/logo.png" height={120} width={120} alt="IIIT BBSR logo"/>
      </Link>

      <div className="mobile-links" onClick={toggle}>
        
        <svg className="menu-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" ><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" /></svg>

        <div className={ "dropDown " + (showMenu ? "show" : "hide") }>

          <Link href="/">Home</Link>
          {user ? (
            <>
              <Link href="/students/2023">2023</Link>
              <Link href="/students/2022">2022</Link>
              <Link href="/about">About</Link>
              <Link href="/societies">Societies</Link>
              <Link href={{ pathname: "/profile", query: user }}>Profile</Link>
              <a className="cursor-pointer" onClick={()=>{signOut()}}>Signout</a>
            </>
          ) : (
            <>
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
            <Link href={{ pathname: "/profile", query: user }}>Profile</Link>
            <button className="signout" onClick={()=>{signOut()}}>Signout</button>
          </>
        ) : (
          <>
            <Link href="/societies">Societies</Link>
            <Link href="/about">About</Link>
            <Link href="/api/auth/signin">Login</Link>
          </>
        )}
      </div>

    </nav>
  );
}
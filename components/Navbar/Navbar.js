"use client";
import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { signOut } from 'next-auth/react';
import LoadingBar from 'react-top-loading-bar';

export default function Navbar({ user }) {

  const [showMenu, setShowMenu] = React.useState(false);

  function toggle() {
    setShowMenu(prevShowMenu => !prevShowMenu);
  }

  return (
    <header
      className={`${styles.header} w-full top-0`}
    >
      <Link className="sm:ml-[4%]" href={"https://www.iiit-bh.ac.in/"}>
        <Image src={"/assets/logo.png"} height={140} width={140} alt="IIIT BBSR logo"/>
      </Link>
      {showMenu && <div className={styles.backdrop} onClick={toggle}></div>}
      <div className={styles.mobileLink} onClick={toggle}>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white m-3 scale-125"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
        <div
          className={`${styles.links} ${showMenu ? styles.show : styles.hide}`}
        >
          <Link href={"/"}>Home</Link>
          {user ? (
            <>
              <Link href={"/students/2023"}>2023</Link>
              <Link href={"/students/2022"}>2022</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/societies"}>Societies</Link>
              <Link href={{ pathname: "/profile", query: user }}>Profile</Link>
              <a className=" cursor-pointer" onClick={()=>{signOut()}}>Signout</a>
            </>
          ) : (
            <>
              <Link href={"/about"}>About</Link>
              <Link href={"/api/auth/signin"}>Login</Link>
            </>
          )}
        </div>
      </div>
      <div className={styles.navLink}>
        <Link href={"/"}>Home</Link>
        {user ? (
          <>
            <Link href={"/students/2023"}>2023</Link>
            <Link href={"/students/2022"}>2022</Link>
            <Link href={"/societies"}>Societies</Link>
            <Link href={"/about"}>About</Link>
            <Link href={{ pathname: "/profile", query: user }}>Profile</Link>
            <button className={styles.signout} onClick={()=>{signOut()}}>Signout</button>
          </>
        ) : (
          <>
            <Link href={"/societies"}>Societies</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/api/auth/signin"}>Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

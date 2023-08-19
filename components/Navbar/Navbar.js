"use client";
import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { signOut } from 'next-auth/react'

export default function Navbar({ user }) {

  const [showMenu, setShowMenu] = React.useState(false);

  function toggle() {
    setShowMenu(prevShowMenu => !prevShowMenu);
  }

  return (
    <header
      className={`${styles.header} w-full top-0`}
    >
      <div className="fixed h-[20em] w-[20em] top-0 right-0 overflow-hidden z-[-10]"><div id={styles.spotlight}></div></div>
      <Link className="sm:ml-[4%]" href={"/"}>
        <Image src={"/assets/logo.png"} height={140} width={140} />
      </Link>
      <div className="sm:hidden" onClick={toggle}>
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
          {showMenu && <div className={styles.backdrop}></div>}
          <Link href={"/about"}>About</Link>
          {user ? (
            <>
              <Link href={"/students/2022"}>2022</Link>
              <Link href={"/students/2021"}>2021</Link>
              <Link href={{ pathname: "/profile", query: user }}>Profile</Link>
              <a className=" cursor-pointer" onClick={()=>{signOut()}}>Signout</a>
            </>
          ) : (
            <Link href={"/api/auth/signin"}>Login</Link>
          )}
        </div>
      </div>
      <div className={"hidden sm:flex gap-4 mr-[8%] "+styles.navLink}>
        <Link href={"/about"}>About</Link>
        {user ? (
          <>
            <Link href={"/students/2023"}>2023</Link>
            <Link href={"/students/2022"}>2022</Link>
            <Link href={"/students/2021"}>2021</Link>
            <Link href={{ pathname: "/profile", query: user }}>Profile</Link>
            <Link href={"/societies"}>Societies</Link>
            <button className={styles.signout} onClick={()=>{signOut()}}>Signout</button>
          </>
        ) : (
          <>
            <Link href={"/societies"}>Societies</Link>
            <Link href={"/api/auth/signin"}>Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

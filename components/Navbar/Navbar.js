"use client";
import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ user, className }) {
  const [showMenu, setShowMenu] = React.useState(false);

  function toggle() {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  }

  return (
    <header
      style={{ "--height": user ? "250px" : "100px" }}
      className={`${styles.header} w-full top-0`}
    >
      <div id={styles.spotlight}></div>
      <Link className="sm:ml-[8%]" href={"/"}>
        <Image src={"/assets/logo.png"} height={100} width={100} />
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
              <Link href={"/api/auth/signout"}>Signout</Link>
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
            <Link href={"/students/2022"}>2022</Link>
            <Link href={"/students/2021"}>2021</Link>
            <Link href={{ pathname: "/profile", query: user }}>Profile</Link>
            <button className={styles.signout}><Link href={"/api/auth/signout"}>Signout</Link></button>
          </>
        ) : (
          <Link href={"/api/auth/signin"}>Login</Link>
        )}
      </div>
    </header>
  );
}

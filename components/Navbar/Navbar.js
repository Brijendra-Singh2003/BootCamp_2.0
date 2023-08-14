"use client"
import React, { useState } from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'

export default function Navbar({user, className}) {

    const [showMenu, setShowMenu] = useState(false);

    function toggle() {
        setShowMenu(prevShowMenu => !prevShowMenu);
    }

    return (
        <header style={{"--height": (user ? "250px" : "100px")}} className={styles.header + ' ' + className}>
            <Link className='sm:ml-[8%]' href={'/'} >CSE Bootcamp 2.0</Link>
            <div className='sm:hidden' onClick={toggle}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
                <div className={`${styles.links} ${showMenu ? styles.show : styles.hide}`}>
                    {showMenu && <div className={styles.backdrop}></div>}
                    <Link href={'/about'} >About</Link>
                    {user ?
                    <>
                        <Link href={'/students/2022'} >2022</Link>
                        <Link href={'/students/2021'} >2021</Link>
                        <Link href={'/api/auth/signout'} >Signout</Link>
                        <Link href={{pathname :'/profile', query : user}} >Profile</Link>
                    </> :
                    <Link href={'/api/auth/signin/google'} >Login</Link>
                    }
                </div>
            </div>
            <div className='hidden sm:flex gap-4 mr-[8%]'>
                <Link href={'/about'} >About</Link>
                {user ?
                <>
                    <Link href={'/students/2022'} >2022</Link>
                    <Link href={'/students/2021'} >2021</Link>
                    <Link href={'/api/auth/signout'} >Signout</Link>
                    <Link href={{pathname :'/profile', query : user}} >Profile</Link>
                </> :
                <Link href={'/api/auth/signin/google'} >Login</Link>
                }
            </div>
        </header>
    )
}
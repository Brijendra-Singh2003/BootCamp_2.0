"use client";

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import "./society_card.css"

export function Society_card({heading,src,instagram,para}) {
    const [active, setActive] = useState(true);
    function foo(e) {
        setActive(prevState => !prevState);
    }
    return (
        <>
            <div onClick={foo} className='card-placeholder'>
                <div className='card'>
                    <div className={"front "+(active ? "" : "snap")}>
                        <Image
                            className='no-select img '
                            priority
                            src={src}
                            height={300}
                            width={400}
                            alt='' />
                        <h1 className='text-black no-select'>{heading}</h1>
                    </div>
                    <div className={"back "+(active ? "" : "blip")}>
                        <Link className='btn no-select' target='_blank'
                            href={instagram} ><h1>VIEW PAGE</h1></Link>
                        <p className='para no-select absolute top-[16%] text-black text-justify'>{para}</p>
                    </div>
                </div>
            </div>
        </>

    )
}


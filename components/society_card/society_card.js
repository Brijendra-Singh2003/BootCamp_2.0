import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import "./society_card.css"

export function Society_card({heading,src,instagram,para}) {
    return (
        <>
            <div className='card-placeholder'>
                <div className='card'>
                    <div className="front">
                        <h1 className='text-black no-select'>{heading}</h1>
                        <Image
                            className='no-select img '
                            priority
                            src={src}
                            height={300}
                            width={400} />
                    </div>
                    <div className="back ">
                        <Link className='btn no-select' target='_blank'
                            href={instagram} ><h1>VIEW PAGE</h1></Link>
                        <p className='para no-select absolute top-[16%] text-black text-justify rounded-2xl'>{para}</p>
                    </div>
                </div>
            </div>
        </>

    )
}


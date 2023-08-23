"use client";

import { Drawer } from "vaul";
import "./drawer.css"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Drower({userlist}) {

    const [active, setActive] = useState({});
    const {image, id, name, city, state, about, instagram, linkedin, github} = active;
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
        function resize() {
        }
        window.addEventListener("resize", resize)
        return () => {
                    window.removeEventListener("resize", resize)
                }
    }, [])

    return (
        (width > 1100) ? (
            <div className="d-container">
                {userlist.map(({image, id, name, city, state, about, instagram, linkedin, github})=>{
                    return(
                        <div className="drower-card">
                        <div className="mx-auto">
                            <Image className="drower-image" src={image || `https://csebootcamp2k22.tech/images/${id}.webp`} height={200} width={400} />
                            <span className="drower-id">ID: #{id?.substring(4, 7)}</span>
                            <h1 className="drower-name">{name?.toUpperCase()}</h1>
                            <p className="drower-city">{(city+', '+state).toUpperCase()}</p>
                            <div className="drower-about">{about?.toUpperCase()}</div>
                            <div className="drower-logo-container">
                                {instagram && <Link target="_blank" href={instagram} ><Image src={'/logo/instagram-logo.png'} height={80} width={80} alt="instagram link"/></Link>}
                                {linkedin && <Link target="_blank" href={linkedin} ><Image className=" bg-transparent" src={'/logo/linkedin-logo.png'} height={80} width={80} alt="linked link"/></Link>}
                                {github && <Link target="_blank" href={github} ><Image src={'/logo/github-logo.png'} height={80} width={80} alt="github link"/></Link>}
                                {id && <Link target="_blank" href={`https://mail.google.com/mail/?view=cm&to=${id}@iiit-bh.ac.in`}><Image src={'/logo/mail-logo.png'} height={80} width={80} alt="gmail link"/></Link>}
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        ) : (
            <Drawer.Root>

                <Drawer.Trigger className="trigger">
                    {userlist.map((curr)=>{
                        return(
                            <div className="student-card" onClick={()=>setActive(curr)} key={curr.id}>
                                <Image src={curr.image || `https://csebootcamp2k22.tech/images/${curr.id}.webp`} height={70} width={70} alt={curr.id + " profile image"} />
                                <div>
                                    <h1>{curr.name}</h1>
                                    <p>{curr.city+', '+curr.state}</p>
                                </div>
                                <span>ID #{curr.id.substring(4, 7)}</span>
                            </div>
                        )
                    })}
                </Drawer.Trigger>

                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content className="drower-container">
                    {/* <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-1" /> */}
                    <div className="flex-1 drower-card">
                        <div className="mx-auto">
                            <Image className="drower-image" src={image || `https://csebootcamp2k22.tech/images/${id}.webp`} height={200} width={400} />
                            <span className="drower-id">ID: #{id?.substring(4, 7)}</span>
                            <h1 className="drower-name">{name?.toUpperCase()}</h1>
                            <p className="drower-city">{(city+', '+state).toUpperCase()}</p>
                            <div className="drower-about">{about?.toUpperCase()}</div>
                            <div className="drower-logo-container">
                                {instagram && <Link target="_blank" href={instagram} ><Image src={'/logo/instagram-logo.png'} height={80} width={80} alt="instagram link"/></Link>}
                                {linkedin && <Link target="_blank" href={linkedin} ><Image className=" bg-transparent" src={'/logo/linkedin-logo.png'} height={80} width={80} alt="linked link"/></Link>}
                                {github && <Link target="_blank" href={github} ><Image src={'/logo/github-logo.png'} height={80} width={80} alt="github link"/></Link>}
                                {id && <Link target="_blank" href={`https://mail.google.com/mail/?view=cm&to=${id}@iiit-bh.ac.in`}><Image src={'/logo/mail-logo.png'} height={80} width={80} alt="gmail link"/></Link>}
                            </div>
                        </div>
                    </div>
                </Drawer.Content>

            </Drawer.Root>
        )
    );
}
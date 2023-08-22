"use client";

import { Drawer } from "vaul";
import "./drawer.css"
import Image from "next/image";
import Link from "next/link";

export function DrowerTrigger({children}) {
    return (
        <Drawer.Trigger>
            {children}
        </Drawer.Trigger>
    )
}

export function DrowerRoot({children}) {
    return (
        <Drawer.Root>
            {children}
        </Drawer.Root>
    )
}

export function Drower({image, id, name, city, state, about, instagram, linkedin, github}) {

    return (
        <>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="drower-container">
            <div className="flex-1 drower-card">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-3" />
                <div className="max-w-md mx-auto">
                    <Image className="drower-image" src={image} height={200} width={400} />
                    <span className="drower-id">ID: #{id?.substring(4, 7)}</span>
                    <h1 className="drower-name">{name?.toUpperCase()}</h1>
                    <p className="drower-city">{(city+', '+state).toUpperCase()}</p>
                    <div className="drower-about">{about}</div>
                    <div className="drower-logo-container">
                        {instagram && <Link href={instagram} ><Image src={'/logo/instagram-logo.png'} height={30} width={30}/></Link>}
                        {linkedin && <Link href={linkedin} ><Image className=" bg-transparent" src={'/logo/linkedin-logo.png'} height={30} width={30}/></Link>}
                        {github && <Link href={github} ><Image src={'/logo/github-logo.png'} height={30} width={30}/></Link>}
                    </div>
                </div>
            </div>
        </Drawer.Content>
        </>
    );
}
import React from "react";
import { Drawer } from "vaul";
import "./drawer.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Compress from "compress.js";
import MbList from "./MbList";

export default function MbView({userlist}) {
    const [active, setActive] = useState({});
    let { Img, id, name, city, state, about, instagram, linkedin, github } = active;
    const [List, setList] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(async (entry) => {
                if (entry.isIntersecting && !entry.target.src) {
                    const res = await fetch(`${location.origin}/api/db/image?id=${entry.target.name}`);
                    const data = await res.json();
                    if (data && data?.ext){
                        entry.target.src = URL.createObjectURL(Compress.convertBase64ToFile(data.image, data.ext));
                    }
                    else{
                        entry.target.src="/assets/default-avatar.png";
                    }
                }
            });
        });

        setList(
            userlist.map(curr => <MbList key={curr.id} curr={curr} observer={observer} setActive={setActive} />)
        );
    }, []);

    return (
        <Drawer.Root className="no-hlt">
            <Drawer.Trigger className="trigger">{List}</Drawer.Trigger>

            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="drower-container">
                <div className="flex-1 drower-card">
                    <div className="mx-auto w-16 h-1 flex-shrink-0 rounded-full bg-zinc-300 mb-1.5" />
                    <div className="mx-auto">
                        <img className="newImage" src={Img} name={id} alt="" />
                        <span className="drower-id no-select">
                            ID: #{id?.substring(4, 7)}
                        </span>
                        <h1 className="drower-name no-select">
                            {name?.toUpperCase()}
                        </h1>
                        <p className="drower-city no-select">
                            {(city + ", " + state).toUpperCase()}
                        </p>
                        <div className="drower-about no-select">
                            {about?.toUpperCase()}
                        </div>
                        <div className="drower-logo-container">
                            {instagram && (
                                <Link target="_blank" href={instagram}>
                                    <Image
                                        src={"/logo/instagram-logo.png"}
                                        height={80}
                                        width={80}
                                        alt="instagram link"
                                    />
                                </Link>
                            )}
                            {linkedin && (
                                <Link target="_blank" href={linkedin}>
                                    <Image
                                        className=" bg-transparent"
                                        src={"/logo/linkedin-logo.png"}
                                        height={80}
                                        width={80}
                                        alt="linked link"
                                    />
                                </Link>
                            )}
                            {github && (
                                <Link target="_blank" href={github}>
                                    <Image
                                        src={"/logo/github-logo.png"}
                                        height={80}
                                        width={80}
                                        alt="github link"
                                    />
                                </Link>
                            )}
                            {id && (
                                <Link
                                    target="_blank"
                                    href={`https://mail.google.com/mail/?view=cm&to=${id}@iiit-bh.ac.in`}
                                >
                                    <Image
                                        src={"/logo/mail-logo.png"}
                                        height={80}
                                        width={80}
                                        alt="gmail link"
                                    />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </Drawer.Content>
        </Drawer.Root>
    );
}

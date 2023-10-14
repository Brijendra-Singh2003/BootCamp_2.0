import { useEffect, useState } from 'react'
import NewImage from './NewImage';
import Link from 'next/link';
import Image from 'next/image';
import Compress from 'compress.js';

export default function PcView({userlist}) {
    const [list, setlist] = useState(); 
    useEffect(()=>{
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

        setlist(userlist.map(
            ({
                id,
                name,
                city,
                state,
                about,
                instagram,
                linkedin,
                github,
            }) => {
                return (
                    <div className="drower-card" key={id}>
                        <div className="mx-auto">
                            <NewImage curr={{id: id}} observer={observer} />
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
                                            height={60}
                                            width={60}
                                            alt="instagram link"
                                        />
                                    </Link>
                                )}
                                {linkedin && (
                                    <Link target="_blank" href={linkedin}>
                                        <Image
                                            className=" bg-transparent"
                                            src={"/logo/linkedin-logo.png"}
                                            height={60}
                                            width={60}
                                            alt="linked link"
                                        />
                                    </Link>
                                )}
                                {github && (
                                    <Link target="_blank" href={github}>
                                        <Image
                                            src={"/logo/github-logo.png"}
                                            height={60}
                                            width={60}
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
                                            height={60}
                                            width={60}
                                            alt="gmail link"
                                        />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                );
            }
        ))
    },[])

    return (
        <div className="d-container">
            {list}
        </div>
    )
}

"use client";

import "./drawer.css";
import { useEffect, useState } from "react";
import PcView from "./PcView";
import MbView from "./MbView";

export function Drower({ userlist }) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
        function resize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", resize);

        return () => window.removeEventListener("resize", resize);
    }, []);

    return width > 620 ? <PcView userlist={userlist} /> : <MbView userlist={userlist} />;
}

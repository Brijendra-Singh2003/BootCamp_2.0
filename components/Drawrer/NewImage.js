import { useEffect, useRef } from "react";

export default function NewImage({ curr, observer }) {
    const ref = useRef();

    useEffect(() => {
        observer?.observe(ref.current);
    }, [ref]);

    return (
        <img
            className="newImage"
            ref={ref}
            name={curr.id}
            src={""}
            alt=""
        />
    );
}
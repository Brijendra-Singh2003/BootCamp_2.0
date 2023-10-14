import { useRef } from "react";
import NewImage from "./NewImage";

export default function MbList({curr, setActive, observer}) {
    const ref = useRef();
    let { id, name, city, state } = curr;

    return (
        <div
            ref={ref}
            className="student-card"
            onClick={(e) => setActive({ ...curr, Img: ref.current.firstElementChild.src })}
        >
            <NewImage curr={curr} observer={observer} />

            <div>
                <h1 className="student-card-name">
                    {name?.toUpperCase()}
                </h1>
                <p>{city + ", " + state}</p>
            </div>
            <span>ID #{id?.substring(4, 7)}</span>
        </div>
    );
}
import "./page_vdo.css";
import hello from "@/public/animations/helloworld.json";
import Lottie from "@/components/animations/Lottie";

export default async function Home() {
    return (
        <>
            <section>
                <h1 className={"serious home-text"}>CSE BOOTCAMP 2K23</h1>
                <div className="lottie-holder">
                    <Lottie options={hello} className="lottie" />
                </div>
            </section>
            <div className={"angledLineWrap"}>
                <div className={"angledLine"}></div>
            </div>

            <iframe
              className="youtube no-select"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/wIJdvHgFfQI?loop=1&autoplay=1&mute=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
            {/* <iframe
              className="youtube no-select"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/iHMfYBnRpkg?controls=1&loo=1&autoplay=1&mute=1"
                title="YouTube video player"
                frameborder="0"
                allow="autoplay; picture-in-picture; web-share"
                allowfullscreen
            ></iframe> */}
        </>
    );
}

export const metadata = {
    title: "CSE Bootcamp 2.0 - Home",
    description: "A bootcamp for all CSE students of IIIT Bhubaneshwar",
    icons: [
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon/favicon-32x32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicon/favicon-16x16.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/favicon/apple-touch-icon.png",
        },
    ],
};

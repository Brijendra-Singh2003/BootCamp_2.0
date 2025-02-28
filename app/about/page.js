import React from "react";
import "./page.css";
import { Roboto, Lato } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import DevCard from "@/components/devCard/DevCard";
// import DotLottie from '@/components/animations/DotLottie';

const lilitaOne = Roboto({ subsets: ["latin"], weight: "700" });
const lato = Lato({ subsets: ["latin"], weight: "700" });

export default async function About() {
  return (
    <>
      <h1 className={lilitaOne.className + " no-select title m-0"}>ABOUT US</h1>
      <Image
        src="/assets/team.png"
        height={400}
        width={600}
        className="about-middle-card"
        alt=""
      />

      <div className={"no-select " + lato.className}>
        <p className="desc">
          This bootcamp is made with lots of love and hard work by our entire
          team working behind this website and it would not have been possible
          without the support of the entire 2022 - 26 CSE batch.
        </p>
      </div>
      <div className={"teams no-hlt  " + lilitaOne.className}>
        <h1 className={"scale-[0.6] title underline"}>OUR TEAM</h1>
        <div className="flex flex-wrap gap-6 small no-select w-full justify-center items-center">
          <DevCard
            src="/assets/brijendra.jpeg"
            name="Brijendra Singh"
            id="B122041"
          >
            <ul>
              <li>- Backend Developer</li>
              <li>- Frontend Developer</li>
            </ul>
          </DevCard>
          <DevCard
            src="/assets/asutosh.jpg"
            name="Asutosh Kataruka"
            id="B122029"
          >
            <ul>
              <li>- Frontend Developer</li>
              <li>- UI/UX Designer</li>
            </ul>
          </DevCard>
          <DevCard
            src="/assets/abhik.jpeg"
            name="Abhik Sundar Sahu"
            id="B122001"
          >
            <ul>
              <li>- Frontend Developer</li>
              <li>- Content Writer </li>
            </ul>
          </DevCard>
          <DevCard
            src="/assets/anirudh.jpeg"
            name="Anirudh Pradhan"
            id="B122018"
          >
            <ul>
              <li>- UI/UX Designer</li>
              <li>- Content Writer</li>
            </ul>
          </DevCard>

          <DevCard src="/assets/aditya.jpeg" name="Aditya Narayan" id="B122008">
            <ul>
              <li>- Graphics Designer</li>
              <li>- Video Editor</li>
            </ul>
          </DevCard>
          <DevCard src="/assets/abhi.jpeg" name="Abinas Ojha" id="B122004">
            <ul>
              <li>- Video Editor</li>
            </ul>
          </DevCard>
          <DevCard
            src="/assets/pranaya.jpeg"
            name="Pranaya Mallik"
            id="B122083"
          >
            <ul>
              <li>- Video Editor</li>
            </ul>
          </DevCard>
          <DevCard src="/assets/amit.jpeg" name="Amit Behera" id="B122015">
            <ul>
              <li>- Content Writer</li>
            </ul>
          </DevCard>
          <DevCard src="/assets/arya.jpeg" name="Arya Singh Bais" id="B122025">
            <ul>
              <li>- UI/UX Designer</li>
            </ul>
          </DevCard>
        </div>
      </div>
      <p className={"stack no-select " + lilitaOne.className}>
        Tech Stack Used
      </p>
      <div className="tech-box">
        <div className="grid grid-cols-5 md:grid-cols-10 gap-4 max-w-4xl">
          <div className="img no-select">
            <Image
              height={400}
              width={400}
              src="/stack/html.png"
              alt="ERROR 404"
            />
          </div>
          <div className="img no-select">
            <Image
              height={400}
              width={400}
              src="/stack/css-3.png"
              alt="ERROR 404"
            />
          </div>
          <div className="img no-select">
            <Image
              height={400}
              width={400}
              src="/stack/js.png"
              alt="ERROR 404"
            />
          </div>
          <div className="img no-select">
            <Image
              height={400}
              width={400}
              src="/stack/node.png"
              alt="ERROR 404"
            />
          </div>
          <div className="img no-select">
            <Image
              height={400}
              width={400}
              src="/stack/react2.png"
              alt="ERROR 404"
            />
          </div>
          <div className="img no-select">
            <Image
              className="scale-[1.3]"
              height={400}
              width={400}
              src="/stack/Next.js.png"
              alt="ERROR 404"
            />
          </div>
          <div className="img no-select">
            <Image
              height={400}
              width={400}
              src="/stack/git.png"
              alt="ERROR 404"
            />
          </div>
          <div className="img no-select">
            <Image
              height={400}
              width={400}
              src="/stack/github.png"
              alt="ERROR 404"
            />
          </div>
          <div className="img no-select">
            <Image
              height={400}
              width={400}
              src="/stack/mongo.png"
              alt="ERROR 404"
            />
          </div>
          <div className="img no-select">
            <Image
              height={400}
              width={400}
              src="/stack/azure.png"
              alt="ERROR 404"
            />
          </div>
        </div>
      </div>
      <Link
        target="_blank"
        href={"https://github.com/Brijendra-Singh2003/BootCamp_2.0"}
      >
        {" "}
        <button id="signn" className={"no-select " + lilitaOne.className}>
          {" "}
          View GitHub Repository{" "}
        </button>{" "}
      </Link>
    </>
  );
}

export const metadata = {
  title: "About - CSE Bootcamp 2.0",
  description: "People who worked hard to create this website",
};

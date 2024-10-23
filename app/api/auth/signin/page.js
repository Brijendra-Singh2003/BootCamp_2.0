import React from "react";
import "./index.css";
import SignInButton from "@/components/button/SignInButton";
import { getServerSession } from "next-auth";
import { options } from "../[...nextauth]/options";
import { redirect } from "next/navigation";
import { Sora } from "next/font/google";

const lilitaOne = Sora({ subsets: ["latin"], weight: "800" });

export default async function page() {
  const session = await getServerSession(options);
  const user = session?.user || null;
  if (user) {
    redirect("/");
  }

  return (
    <>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 place-content-center">
        <div className="text-white order-2 sm:order-1 mx-auto p-10 max-w-sm sm:my-0 h-[700px]">
          <img
            className="-mb-10 object-contain"
            id="cseimg"
            src="/assets/csef.png"
            alt="ERROR 404"
          />
          <img
            className="-mb-16 object-contain -mt-24"
            id="cseimg2"
            src="/assets/bootbg.png"
            alt="ERROR 404"
          />
          <div id="para" className={lilitaOne.className + " mb-4"}>
            WELCOME FRESHERS 2K23{" "}
          </div>
          <SignInButton />
        </div>
        <div className="mt-20 h-[50vw] sm:h-auto max-h-96 sm:order-2 relative">
          <div className="aspect-square w-1/2 sm:w-full mx-auto sm:p-[25%] sm:my-[-20%] sm:max-w-2xl">
            <img
              id="img1"
              className="animation_img"
              src="/assets/img1.png"
              alt="ERROR 404"
            />
            <img
              id="img2"
              className="animation_img"
              src="/assets/img2.png"
              alt="ERROR 404"
            />
            <img
              id="img3"
              className="animation_img"
              src="/assets/img3.png"
              alt="ERROR 404"
            />
            <img
              id="img4"
              className="animation_img"
              src="/assets/img4.png"
              alt="ERROR 404"
            />
            <img
              id="img5"
              className="animation_img"
              src="/assets/img5.png"
              alt="ERROR 404"
            />
            <img
              id="img6"
              className="animation_img"
              src="/assets/img6.png"
              alt="ERROR 404"
            />
            <img
              id="img7"
              className="animation_img"
              src="/assets/img7.png"
              alt="ERROR 404"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata = {
  title: "Sign In - CSE Bootcamp 2.0",
  description: "sign in to cse bootcamp 2.0",
};

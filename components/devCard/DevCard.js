import Image from "next/image";
import React from "react";

export default async function DevCard({ src, name, id, children }) {
  return (
    <div className="w-full mx-3 md:w-64 justify-center items-center bg-[#9b65ff33] border border-gray-600 bg-opacity-30 shadow-lg rounded-lg flex flex-col">
      <Image
        src={src}
        height={400}
        width={400}
        alt="img"
        title="img"
        className="w-full max-w-xs aspect-square h-auto object-cover rounded-t-lg"
      />
      <div className="w-full px-4 py-2 justify-start flex flex-col">
        <h4 className="font-semibold text-white text-lg">
          {name} - {id}
        </h4>
        <p className="my-4 text-gray-300">{children}</p>
      </div>
    </div>
  );
}

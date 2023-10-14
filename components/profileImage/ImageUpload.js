"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./uploadImage.module.css";
import { toast } from "react-toastify";
import handleRevalidate from "@/functions/revalidate";
import Compress from "compress.js";
const compress = new Compress();

export default function ImageUpload({ name }) {
  const [image, setImage] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [prevURL, setPrevURL] = useState("");
  const [imgStr, setStr] = useState({});
  
  useEffect(async ()=>{
    const res = await fetch(`${location.origin}/api/db/image?id=${name}`);
    if(res.ok) {
      const data = await res.json();
      if(data && data?.ext) {
        setPrevURL(URL.createObjectURL(Compress.convertBase64ToFile(data.image, data.ext)));
      }
    }
  },[]);

  const handleImageChange = async (e) => {
    const files = [...e.target.files]
    compress.compress(files, {
      size: 0.25, // the max size in MB, defaults to 2MB
      quality: .6, // the quality of the image, max is 1,
      resize: true,
      rotate: false,
    }).then((data) => {

      const base64str = data[0].data
      const imgExt = data[0].ext
      const file = Compress.convertBase64ToFile(base64str, imgExt)

      setImage(file);
      setStr({image: base64str, ext: imgExt})
    })
  };

  const handleDef = e => e.preventDefault();

  function handleDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const fileType = file.type.split("/")[0];
    if (fileType === "image") {
      setImage(e.dataTransfer.files[0]);
    }
  }

  function handleImageUpload() {
    if (image) {
      setIsDisabled(true);

      fetch(`${location.origin}/api/db/image`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(imgStr),
      })
      .then(async (res)=>{
        setIsDisabled(false);
        handleRevalidate();
        toast.success('👍 Uploaded Successfully');
        const data = await res.json();
        if(data && data?.ext) {
          setPrevURL(URL.createObjectURL(Compress.convertBase64ToFile(data.image, data.ext)));
        }
        setImage(null);
      });
    } else {
      toast.error('no image selected');
    }
  };

  const currImg = image ? URL.createObjectURL(image) : prevURL;

  return (
    <>
      <label
        className={styles.imageLable}
        htmlFor="image-input"
        onDragOver={handleDef}
        onDragLeave={handleDef}
        onDrop={handleDrop}
      >
        <div className={styles.dndtext}>Drag And Drop Here</div>
        {currImg && <Image
          className={styles.userimage}
          src={currImg}
          alt="user image"
          height={400}
          width={400} />}

      </label>

      <div className="image-input">
        {image && <button onClick={() => setImage(null)}>CANCEL</button>}

        <input
          id="image-input"
          hidden
          type="file"
          onChange={handleImageChange}
          accept="image/png, image/jpeg, image/jpg"
          title="select image" />

        <label className="input" hidden={image} htmlFor="image-input">browse image</label>

        <button
          className={"submitButton"}
          disabled={isDisabled}
          onClick={handleImageUpload}
        >
          {isDisabled ? "Saving..." : "Save Image"}
        </button>
      </div>
    </>
  );
};
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
// import { storage } from "@/Firebase";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import styles from "./uploadImage.module.css";
import { toast } from "react-toastify";
import handleRevalidate from "@/functions/revalidate";
import Compress from "compress.js";
const compress = new Compress();

export default function ImageUpload({ name, host, src, ext }) {
  const [image, setImage] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [prevURL, setPrevURL] = useState(src);
  const [imgStr, setStr] = useState({});
  
  useEffect(()=>{
    if(ext) {
      setPrevURL(URL.createObjectURL(Compress.convertBase64ToFile(src, ext)));
    }
  },[]);

  const handleImageChange = async (e) => {
    const files = [...e.target.files]
    compress.compress(files, {
      size: 0.5, // the max size in MB, defaults to 2MB
      quality: .75, // the quality of the image, max is 1,
      // maxWidth: 400, // the max width of the output image, defaults to 1920px
      // maxHeight: 400, // the max height of the output image, defaults to 1920px
      resize: true, // defaults to true, set false if you do not want to resize the image width and height
      rotate: false, // See the rotation section below
    }).then((data) => {

      const base64str = data[0].data
      const imgExt = data[0].ext
      const file = Compress.convertBase64ToFile(base64str, imgExt)

      setImage(file);
      setStr({image: base64str, ext: imgExt})
      console.log(data);
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

  // function updateDatabase() {
  //   const urlref = ref(storage, `images/${name}`) || null;
  //   if (urlref) {
  //     getDownloadURL(urlref).then((value) => {
  //       setPrevURL(value);
  //       fetch(`${host}/api/db`, {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ id: name, image: value }),
  //       })
  //       .then(() => {
  //         handleRevalidate();
  //       });
  //     });
  //   }
  //   setImage(null);
  //   toast.success('👍 Uploaded Successfully');
  //   setIsDisabled(false);
  // }

  function handleImageUpload() {
    if (image) {
      setIsDisabled(true);
      console.log(imgStr);
      fetch(`${host}/api/db`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(imgStr),
      }).then(()=>{
        setIsDisabled(false);
        handleRevalidate();
        setImage(null);
        toast.success('👍 Uploaded Successfully');
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
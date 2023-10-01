"use client";

import React, { useState } from "react";
import Image from "next/image";
import { storage } from "@/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import styles from "./uploadImage.module.css";
import { toast } from "react-toastify";
import handleRevalidate from "@/functions/revalidate";

export default function ImageUpload({ name, host, src }) {
  const [image, setImage] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [prevURL, setPrevURL] = useState(src);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    console.log(selectedImage);
  };

  function handleDef(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const fileType = file.type.split("/")[0];
    console.log(fileType, file);
    if (fileType === "image") {
      setImage(e.dataTransfer.files[0]);
    }
  }

  function updateDatabase() {
    const urlref = ref(storage, `images/${name}`) || null;
    if (urlref) {
      getDownloadURL(urlref).then((value) => {
        setPrevURL(value);
        fetch(`${host}/api/db`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: name, image: value }),
        })
        .then(() => {
          handleRevalidate();
        });
      });
    }
    setImage(null);
    setIsDisabled(false);
    toast.success('👍 Uploaded Successfully');
  }

  function handleImageUpload() {
    if (image) {
      setIsDisabled(true);
      const imageRef = ref(storage, `images/${name}`);
      uploadBytes(imageRef, image)
      .then(updateDatabase);
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
          accept="image/*"
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
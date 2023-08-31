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
    toast("image uploaded");
  }

  function handleImageUpload() {
    if (image) {
      setIsDisabled(true);
      const imageRef = ref(storage, `images/${name}`);
      uploadBytes(imageRef, image)
      .then(updateDatabase);
    }
  };

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
        <Image
          className={styles.userimage}
          src={image ? URL.createObjectURL(image) : prevURL}
          alt="user image"
          height={400}
          width={400} />

      </label>

      <div className="image-input">
        {image && <button onClick={() => setImage(null)}>CANCEL</button>}

        <input
          id="image-input"
          hidden={image}
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          title="select image" />

        <button
          className={"submitButton"}
          disabled={isDisabled}
          onClick={handleImageUpload}
        >
          {isDisabled ? "Uploading..." : "Upload Image"}
        </button>
      </div>
    </>
  );
};
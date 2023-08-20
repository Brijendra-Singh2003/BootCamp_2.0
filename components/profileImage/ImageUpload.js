"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { storage } from '@/Firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import styles from "./uploadImage.module.css"

const ImageUpload = ({name, host, src}) => {

  const [image, setImage] = useState(null);
  const [disabled, setdisabled] = useState(false);
  const [uurl, setuurl] = useState(src);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    console.log(selectedImage);
  };

  function onOver(e) {
    e.preventDefault();
  }

  function onDND(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const fileType = file.type.split('/')[0];
    console.log(fileType, file);
    if(fileType === 'image') {
      setImage(e.dataTransfer.files[0]);
    }
  }

  const handleImageUpload = () => {
    if (image) {
      setdisabled(true);
      const imageRef = ref(storage,`images/${name}`);
      uploadBytes(imageRef, image)
      .then(()=>{
        const urlref = ref(storage, `images/${name}`) || null;
        if ( urlref ) {
          getDownloadURL(urlref)
          .then((value)=>{
            setuurl(value);
            fetch (`${host}/api/db`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({id: name, image: value}),
              }
            )
          })
        }
        setdisabled(false);
        alert('image uploaded');
      })
    }
  };

  return (
    <div>
        <label className={styles.imageLable} htmlFor='image-input' onDragOver={onOver} onDragLeave={onOver} onDrop={onDND}>
          <div className={styles.dndtext}>Drag And Drop Here</div>
          <Image
            className={styles.userimage}
            // src={uurl.length ? uurl : '/assets/default-avatar.png'}
            src={image ? URL.createObjectURL(image) : uurl}
            alt="user image"
            height={250}
            width={250} />

        </label>

        <div className='image-input'>

          {image ? <button onClick={()=> setImage(null)}>CANCEL</button> : <input id='image-input' type="file" onChange={handleImageChange} accept='image/*' title='select image'/>}
          <button
            className='submitButton'
            disabled={disabled}
            onClick={handleImageUpload}
          > Upload Image </button>

        </div>
    </div>
  );
};

export default ImageUpload;

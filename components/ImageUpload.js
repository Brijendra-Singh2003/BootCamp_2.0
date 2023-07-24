"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { storage } from '@/Firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const ImageUpload = ({name}) => {

  const [image, setImage] = useState(null);
  const [uurl, setuurl] = useState(null);
  // const [prog, setProg] = useState(0);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleImageUpload = () => {
    if (image) {
      const imageRef = ref(storage,`images/${name}`);
      uploadBytes(imageRef, image)
      .then(()=>{
        alert('image uploaded');
      })
    }
  };

  const urlref = ref(storage, `images/${name}`);
  const foo = getDownloadURL(urlref)
  .then((value)=>{
    setuurl(value);
  })

  return (
    <div>
        {/* <p>{prog}</p> */}
        {uurl && <Image className="mx-auto my-4"  src={uurl} alt="image" height={150} width={150} />}
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleImageUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;

"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { storage } from '@/Firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const ImageUpload = ({name}) => {

  const [image, setImage] = useState(null);
  const [uurl, setuurl] = useState(null);

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

  const urlref = ref(storage, `images/${name}`) || null;
  if ( urlref ) {
    const foo = getDownloadURL(urlref)
    .then((value)=>{
      setuurl(value);
    })
  }

  return (
    <div className=''>
        {uurl && <Image className="my-4 mx-auto h-64 w-64 object-cover" src={uurl} alt="image" height={250} width={250}/>}
        <div>
          <input type="file" onChange={handleImageChange} />
          <button onClick={handleImageUpload}>Upload Image</button>
        </div>
    </div>
  );
};

export default ImageUpload;

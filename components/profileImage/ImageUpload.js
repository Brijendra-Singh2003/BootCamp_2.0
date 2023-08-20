"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { storage } from '@/Firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const ImageUpload = ({name, host}) => {

  const [image, setImage] = useState(null);
  const [disabled, setdisabled] = useState(false);
  const [uurl, setuurl] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

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

  useEffect(()=>{
    const urlref = ref(storage, `images/${name}`) || null;
    if ( urlref ) {
      getDownloadURL(urlref)
      .then((value)=>{
        setuurl(value);
      })
    }
  },[]);

  return (
    <div>
        {uurl && <div className=''><Image className="my-4 mx-auto h-64 w-64 object-cover rounded-xl" src={uurl} alt="image" height={250} width={250}/></div>}
        <div className='image-input'>
          <input type="file" onChange={handleImageChange} />
          <button className='submitButton' disabled={disabled} onClick={handleImageUpload}>Upload Image</button>
        </div>
    </div>
  );
};

export default ImageUpload;

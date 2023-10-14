"use client";

import { useEffect, useState } from "react";
import classes from "./form.module.css";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import handleRevalidate from "@/functions/revalidate";

export default function Form({user}) {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const [data, setData] = useState({
    name: "",
    about: "",
    state: "",
    city: "",
    instagram: "",
    github: "",
    linkedin: "",
  });

  useEffect(async ()=>{
    const res = await fetch(`${location.origin}/api/db/user?id=${user}`);
    if(res.ok) {
      const data = await res.json();
      if(data) {
        setData(data);
      }
    }
  },[]);

  function handleChange({ target: { value, name } }) {
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  function updateData() {
    fetch (`${host}/api/db`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
    .then((response) => {
      setDisabled(false);
      if (response.ok) {
        toast.success('👍 Updated Successfully');
        console.log("updated successfully");
        handleRevalidate();
      } else {
        toast.error('Something Went Wrong');
      }
    });
  }

  function checkData(e) {
    setDisabled(true);
    e.preventDefault();
    if (prevData) {
      for (const key in data) {
        if (data[key] !== prevData[key]) {
          updateData();
          return;
        }
      }
      toast.success('👍 Updated Successfully');
      setDisabled(false);
    }
    else {
      updateData();
    }
  }

  return (
    <>
    <h1><span className="text-red-500">*</span> marked fields are required</h1>
    <form className={classes.form} onSubmit={checkData}>

      <label htmlFor="name"><span><span className="text-red-500">*</span>Name: </span></label>

      <input
        required={true}
        id="name"
        type="text"
        onChange={handleChange}
        placeholder="Name..."
        name="name"
        value={data.name} />

      <label htmlFor="state"><span><span className="text-red-500">*</span>State: </span></label>

      <input
        required={true}
        id="state"
        type="text"
        onChange={handleChange}
        placeholder="State..."
        name="state"
        value={data.state} />

      <label htmlFor="city"><span className="text-red-500">*</span><span>City: </span></label>

      <input
        id="city"
        type="text"
        onChange={handleChange}
        placeholder="City..."
        name="city"
        value={data.city} />

      <label htmlFor="insta"><span>Instagram: </span></label>

      <input
        id="insta"
        type="text"
        onChange={handleChange}
        placeholder="https://www.instagram.com/"
        name="instagram"
        value={data.instagram} />

      <label htmlFor="linkedin"><span>Linkedin: </span></label>

      <input
        id="linkedin"
        type="text"
        onChange={handleChange}
        placeholder="https://www.linkedin.com/"
        name="linkedin"
        value={data.linkedin} />

      <label htmlFor="github"><span>Github: </span></label>

      <input
        id="github"
        type="text"
        onChange={handleChange}
        placeholder="https://github.com/"
        name="github"
        value={data.github} />

      <label htmlFor="about"><span className="text-red-500">*</span><span>About: </span></label>

      <textarea
      required
        className={classes.input+' input'}
        id="about"
        name="about"
        type="text"
        rows={10}
        onChange={handleChange}
        maxLength="400"
        placeholder="max 400 chars"
        defaultValue={data.about} />

      <button
        disabled={disabled}
        className={"mt-3 col-start-1 text-lg submitButton"}
        value='submit'
        > submit </button>

      <button
        type="button"
        className="mt-3 col-start-3 text-lg cancel"
        onClick={() => router.back()}
        > Cancel </button>

    </form>
    </>
  );
}

"use client";

import { useState } from "react";
import classes from "./form.module.css";
import { useRouter } from "next/navigation";

export default function Form({ prevData, host }) {

  const router = useRouter();
  const [data, setData] = useState(prevData);
  const [disabled, setDisabled] = useState(false);

  function handleChange({ target: { value, name } }) {
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
    console.log(data);
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
        alert("updated successfully");
      } else {
        alert(response.status);
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
      alert("updated successfully");
      setDisabled(false);
    }
    else {
      updateData();
    }
  }

  return (
    <form className={classes.form} onSubmit={checkData}>

      <label htmlFor="name"><span>Name: </span></label>

      <input
        required={true}
        id="name"
        type="text"
        onChange={handleChange}
        placeholder="Name..."
        name="name"
        value={data.name} />

      <label htmlFor="state"><span>State: </span></label>

      <input
        required={true}
        id="state"
        type="text"
        onChange={handleChange}
        placeholder="State..."
        name="state"
        value={data.state} />

      <label htmlFor="city"><span>City: </span></label>

      <input
        required={true}
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

      <label htmlFor="about"><span>About: </span></label>

      <textarea
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
  );
}

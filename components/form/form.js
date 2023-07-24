"use client"

import { useState } from "react"
import classes from "./form.module.css"

export default function Form({prevData, user}) {

    const [data, setData] = useState(
        prevData ? prevData :
        {
            name: "",
            instagram: "",
            linkdin: "",
            github: "",
            about: "",
            id: user
        }
    );

    function fetchData() {
        fetch(`https://cse-bootcamp-auth-default-rtdb.asia-southeast1.firebasedatabase.app/20${user.substring(2, 4)}/${user}.json`, {
            method: 'PUT',
            headers: { 'Contenet-Type': 'application/json' },
            body: JSON.stringify(data)
        })
    }

    function handleChange({target:{value, name}}) {
        setData(prevData => {
            return {...prevData, [name]: value};
        })
    }

    function updateData(e) {
        e.preventDefault();
        // setEdit(true);
        fetchData();
    }

    return (
        <form className={classes.form} onSubmit={updateData}>
            <label htmlFor="name"><span>Name: </span></label>
            <input id="name" type="text" onChange={handleChange} placeholder="name..." name="name" value={data.name}/> <br />
            <label htmlFor="insta"><span>Instagram: </span></label>
            <input id="insta" type="text" onChange={handleChange} placeholder="instagram..." name="instagram" value={data.instagram}/> <br />
            <label htmlFor="linkedin"><span>Linkedin: </span></label>
            <input id="linkedin" type="text" onChange={handleChange} placeholder="linkdin..." name="linkdin" value={data.linkdin}/> <br />
            <label htmlFor="github"><span>Github: </span></label>
            <input id="github" type="text" onChange={handleChange} placeholder="github..." name="github" value={data.github}/> <br />
            <label htmlFor="about"><span>About: </span></label>
            <input id="about" type="text" onChange={handleChange} placeholder="about..." name="about" value={data.about}/> <br />
            <button className="mt-3 col-start-1 text-lg border mx-auto rounded-2xl" onClick={updateData}>submit</button>
            <button className="mt-3 col-start-3 text-lg border mx-auto rounded-2xl" type="button">cancel</button>
            {/* <input type="file" placeholder="image..." ref={image}/> <br /> */}
        </form>
    )
}
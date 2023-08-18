"use client"

import { useState } from "react"
import classes from "./form.module.css"
import { useRouter } from "next/navigation";

export default function Form({prevData, host}) {

    const router = useRouter();
    const [data, setData] = useState(prevData);

    function handleChange({target:{value, name}}) {
        setData(prevData => {
            return {...prevData, [name]: value};
        })
    }

    function updateData() {
        fetch(`https://csebootcamp2.vercel.app/api/db/update`,{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then((response)=>{
            if(response.ok) {
                alert('updated successfully');
            } else {
                alert(response.status);
            }
        })
    }

    function checkData(e) {
        e.preventDefault();
        if(prevData)
            for(const key in data) {
                if(data[key] !== prevData[key]) {
                    updateData();
                    break;
                }
            }
        else {
            updateData();
        }
        router.back();
    }

    return (
        <form className={classes.form} onSubmit={checkData}>
            <label htmlFor="name"><span>Name: </span></label>
            <input required={true} id="name" type="text" onChange={handleChange} placeholder="name..." name="name" value={data.name}/> <br />
            <label htmlFor="insta"><span>Instagram: </span></label>
            <input required={true} id="insta" type="text" onChange={handleChange} placeholder="instagram..." name="instagram" value={data.instagram}/> <br />
            <label htmlFor="linkedin"><span>Linkedin: </span></label>
            <input required={true} id="linkedin" type="text" onChange={handleChange} placeholder="linkdin..." name="linkedin" value={data.linkedin}/> <br />
            <label htmlFor="github"><span>Github: </span></label>
            <input required={true} id="github" type="text" onChange={handleChange} placeholder="github..." name="github" value={data.github}/> <br />
            <label htmlFor="about"><span>About: </span></label>
            <input required={true} id="about" type="text" onChange={handleChange} placeholder="about..." name="about" value={data.about}/> <br />
            <button className="mt-3 col-start-1 text-lg">submit</button>
            <button type="button" className="mt-3 col-start-3 text-lg cancel" onClick={()=>{router.back()}}>Cancel</button>
        </form>
    )
}
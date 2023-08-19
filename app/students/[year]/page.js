import Image from 'next/image';
import { storage } from '@/Firebase';
import { ref, getDownloadURL } from 'firebase/storage'
import classes from "./students.module.css"

export default async function StudentPage() {

    let studentsList = [];
    let err = false;

    try {
        const response = await fetch(`${process.env.HOST}/api/db/getall`,{ method: 'GET' })
        studentsList = await response.json();
    } catch (error) {
        err = error.message;
    }

    // for(let i=0; i<studentsList.length; i++) {
    //     const imgref = ref(storage, `images/${studentsList[i].id}`);
    //     let imgURL = false;
    //     try {imgURL = await getDownloadURL(imgref);}
    //     catch (err) {}
    //     studentsList[i] = {...studentsList[i], image: imgURL};
    // }

    return (
        <div className=''>
            {err || studentsList.map( student => {
                return <ul key={student.id}>
                    <li>{student.name}</li>
                    <li>{student.location}</li>
                    <li>{student.about}</li>
                    <br />
                </ul>
            })}
        </div>
    )

}

export const metadata = {
    title: "Students - CSE Bootcamp 2.0",
    description: "About your peers",
};
// {"about":"my about is empty","github":"birju ka github","id":"041","instagram":"birju ka insta","linkdin":"birju ka linkdin","name":"birju"}
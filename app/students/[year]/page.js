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

    return (
        <div className=''>
            {err || studentsList.map( student => {
                return <ul key={student.id}>
                    <Image src={student.image} height={300} width={300} className=' m-auto' />
                    <li>name: {student.name}</li>
                    <li>id: {student.id}</li>
                    <li>State: {student.state}</li>
                    <li>City: {student.city}</li>
                    <li>About: {student.about}</li>
                    <li>year: {student.year}</li>
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
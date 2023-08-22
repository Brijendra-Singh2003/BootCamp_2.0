import Image from 'next/image';
import Retry from '@/components/Retry';
import "./students.css"
import {Drower2} from '@/components/Drawrer/Drower';

// run "npm i" in terminal to install vaul before running

export const metadata = {
    title: "Students - CSE Bootcamp 2.0",
    description: "About your peers",
};

export default async function StudentPage({params:{year}}) {

    let studentsList = [];
    let err = false;

    // try {
    //     const response = await fetch(`${process.env.HOST}/api/db/getall?year=${year[3]}`,{ cache: 'no-store' });
    //     studentsList = await response.json();
    // } catch (error) {
    //     return <div className=" mt-52"><h1>Something went wrong</h1><Retry>Retry</Retry></div>
    // }

    return (
        <>
        <div className='student-container'>
            {err || studentsList.map( student => {
                return (
                    <ul key={student.id} className='student-card'>
                        <Image src={student.image} height={300} width={300} className=' m-auto' alt={student.id}/>
                        <li>name: {student.name}</li>
                        <li>id: {student.id}</li>
                        <li>State: {student.state}</li>
                        <li>City: {student.city}</li>
                        <li>About: {student.about}</li>
                        <li>year: {student.year}</li>
                        <br />
                    </ul>
                )
            })}
        </div>

        <Drower2 />
        </>
    )
}
